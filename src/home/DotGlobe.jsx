import { useEffect, useRef } from 'react'

// A sphere of small graphite dots for the hero, in the spirit of the
// portfolio's orb but built from points instead of a surface: it breathes and
// turns slowly, leans toward the pointer, and the dots under the cursor part
// around it, then settle back. Canvas 2D, so it runs without WebGL.
//
// The same globe, small and quiet, is the nav logo and the O in the footer's
// "Oldmark Studio": fewer, larger dots so it reads at that size, its own
// colour and opacity where needed, and no pointer interaction (interactive
// false), only the slow turn.

const TAU = Math.PI * 2

// Even spread of points over a unit sphere (a Fibonacci lattice).
function lattice(n) {
  const golden = Math.PI * (3 - Math.sqrt(5))
  return Array.from({ length: n }, (_, i) => {
    const y = 1 - (i / (n - 1)) * 2
    const r = Math.sqrt(1 - y * y)
    return [Math.cos(i * golden) * r, y, Math.sin(i * golden) * r]
  })
}

// Breathing: slow waves move each dot in and out along its radius.
function breathe([x, y, z], t) {
  const wave = 1 + 0.045 * Math.sin(x * 2.3 + t * 0.9) * Math.sin(y * 2.6 + t * 0.7) + 0.02 * Math.sin(z * 3.1 - t * 1.1)
  return [x * wave, y * wave, z * wave]
}

export default function DotGlobe({
  count = 1700,
  // Radius as a share of the canvas's shorter side.
  fit = 0.38,
  // Dot radius in CSS pixels, from the far side to the near side; by default
  // it scales with the globe.
  dots = null,
  // Dot colour as "r, g, b", and opacity from the far side to the near side.
  color = '29, 29, 27',
  alpha = [0.08, 0.9],
  interactive = true,
  className = 'st-form',
}) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!ctx) return

    const seeds = lattice(count)
    // Each dot's current push away from the cursor, eased toward its target.
    const push = new Float32Array(count * 2)
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const pointer = { x: 0, y: 0, tx: 0, ty: 0, inside: false, energy: 0 }
    let w = 0
    let h = 0
    let dpr = 1
    let raf = 0
    let visible = true
    let last = performance.now()
    let time = 0
    let spin = 0

    const radius = () => Math.min(w, h) * fit

    const resize = () => {
      const r = canvas.getBoundingClientRect()
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = r.width
      h = r.height
      canvas.width = Math.max(1, Math.round(w * dpr))
      canvas.height = Math.max(1, Math.round(h * dpr))
    }

    const draw = (dt) => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, w, h)
      const cx = w / 2
      const cy = h / 2
      const R = radius()
      const focal = R * 3.2

      // Lean toward the pointer, a little.
      const tiltX = pointer.y * 0.35 + Math.sin(time * 0.23) * 0.1
      const tiltY = spin + pointer.x * 0.5
      const cX = Math.cos(tiltX)
      const sX = Math.sin(tiltX)
      const cY = Math.cos(tiltY)
      const sY = Math.sin(tiltY)

      const mx = cx + pointer.x * R * 1.4
      const my = cy - pointer.y * R * 1.4
      const reach = R * 0.55
      const k = 1 - Math.exp(-dt * 9)

      for (let i = 0; i < count; i++) {
        const [x, y, z] = breathe(seeds[i], time)

        // Rotate around Y, then X.
        const x1 = x * cY - z * sY
        const z1 = x * sY + z * cY
        const y2 = y * cX - z1 * sX
        const z2 = y * sX + z1 * cX

        const scale = focal / (focal - z2 * R)
        let px = cx + x1 * R * scale
        let py = cy - y2 * R * scale

        // Front dots near the cursor part around it.
        let tx = 0
        let ty = 0
        if (pointer.inside && z2 > -0.2) {
          const dx = px - mx
          const dy = py - my
          const d = Math.hypot(dx, dy) || 1
          if (d < reach) {
            const f = (1 - d / reach) ** 2 * R * 0.22 * (0.4 + pointer.energy * 0.6)
            tx = (dx / d) * f
            ty = (dy / d) * f
          }
        }
        push[i * 2] += (tx - push[i * 2]) * k
        push[i * 2 + 1] += (ty - push[i * 2 + 1]) * k
        px += push[i * 2]
        py += push[i * 2 + 1]

        // Near dots are stronger and larger; far dots fade into the page.
        const depth = Math.max(0, Math.min(1, (z2 + 1.3) / 2.6))
        const a = alpha[0] + depth * (alpha[1] - alpha[0])
        const dot = dots ? dots[0] + depth * (dots[1] - dots[0]) : (0.55 + depth * 1.15) * Math.min(1.35, R / 160)
        ctx.fillStyle = `rgba(${color}, ${a.toFixed(3)})`
        ctx.beginPath()
        ctx.arc(px, py, dot, 0, TAU)
        ctx.fill()
      }
    }

    const tick = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      pointer.x += (pointer.tx - pointer.x) * (1 - Math.exp(-dt * 4))
      pointer.y += (pointer.ty - pointer.y) * (1 - Math.exp(-dt * 4))
      pointer.energy += ((pointer.inside ? 1 : 0) - pointer.energy) * (1 - Math.exp(-dt * 2.5))
      // Turn faster while the pointer is close.
      time += dt * (1 + pointer.energy * 0.6)
      spin += dt * 0.16 * (1 + pointer.energy * 1.4)
      draw(dt)
      raf = visible ? requestAnimationFrame(tick) : 0
    }

    const start = () => {
      if (reduce || raf) return
      last = performance.now()
      raf = requestAnimationFrame(tick)
    }
    const stop = () => {
      cancelAnimationFrame(raf)
      raf = 0
    }

    const onPointer = (e) => {
      const r = canvas.getBoundingClientRect()
      const R = radius()
      const x = (e.clientX - (r.left + r.width / 2)) / (R * 1.4)
      const y = -(e.clientY - (r.top + r.height / 2)) / (R * 1.4)
      pointer.tx = Math.max(-1, Math.min(1, x))
      pointer.ty = Math.max(-1, Math.min(1, y))
      // Close enough to the globe to touch it.
      pointer.inside = Math.hypot(x, y) < 1.1
    }
    const onLeave = () => {
      pointer.tx = 0
      pointer.ty = 0
      pointer.inside = false
    }

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && !document.hidden
      if (visible) start()
      else stop()
    })
    io.observe(canvas)
    const onVis = () => {
      visible = !document.hidden
      if (visible) start()
      else stop()
    }
    const ro = new ResizeObserver(() => {
      resize()
      draw(0)
    })
    ro.observe(canvas)

    resize()
    draw(0)
    start()
    if (interactive) {
      window.addEventListener('pointermove', onPointer, { passive: true })
      document.documentElement.addEventListener('pointerleave', onLeave)
    }
    document.addEventListener('visibilitychange', onVis)

    return () => {
      stop()
      io.disconnect()
      ro.disconnect()
      window.removeEventListener('pointermove', onPointer)
      document.documentElement.removeEventListener('pointerleave', onLeave)
      document.removeEventListener('visibilitychange', onVis)
    }
  }, [count, fit, dots, color, alpha, interactive])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}
