import { useEffect, useRef } from 'react'

// A portrait you scratch free, like a lottery ticket. It rests as a coarse
// colour mosaic laid over the sharp photo; wherever the pointer (or a finger)
// moves, the mosaic comes off block by block and the photo shows through. What
// is scratched stays scratched. Keyboard focus, or Enter/Space, uncovers it all.

// Mosaic block size and brush radius, in CSS pixels.
const BLOCK = 14
const BRUSH = 30

export default function PixelPortrait({ src, alt }) {
  const wrapRef = useRef(null)
  const photoRef = useRef(null)
  const coverRef = useRef(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const photo = photoRef.current
    const cover = coverRef.current
    const pctx = photo?.getContext('2d')
    const cctx = cover?.getContext('2d')
    if (!wrap || !pctx || !cctx) return

    const img = new Image()
    const small = document.createElement('canvas')
    const sctx = small.getContext('2d')
    let ready = false
    let w = 0
    let h = 0
    let dpr = 1
    let last = null
    // Blocks already scratched off, so a resize can redraw the same state.
    const cleared = new Set()

    // Where the photo sits so it covers the frame, like object-fit: cover.
    const fit = () => {
      const s = Math.max(w / img.naturalWidth, h / img.naturalHeight)
      const dw = img.naturalWidth * s
      const dh = img.naturalHeight * s
      return [(w - dw) / 2, (h - dh) * 0.35, dw, dh]
    }

    const paint = () => {
      if (!ready) return
      const [x, y, dw, dh] = fit()

      // The sharp photo underneath.
      pctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      pctx.imageSmoothingEnabled = true
      pctx.drawImage(img, x, y, dw, dh)

      // The mosaic on top: draw small, scale up without smoothing.
      const cols = Math.ceil(w / BLOCK)
      const rows = Math.ceil(h / BLOCK)
      small.width = cols
      small.height = rows
      sctx.imageSmoothingEnabled = true
      // One block wider and taller, so the partial blocks at the edges are filled too.
      sctx.drawImage(img, x / BLOCK, y / BLOCK, dw / BLOCK + 1, dh / BLOCK + 1)
      cctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      cctx.clearRect(0, 0, w, h)
      cctx.imageSmoothingEnabled = false
      cctx.drawImage(small, 0, 0, cols, rows, 0, 0, cols * BLOCK, rows * BLOCK)
      cleared.forEach((key) => {
        const [c, r] = key.split(',').map(Number)
        cctx.clearRect(c * BLOCK, r * BLOCK, BLOCK, BLOCK)
      })
    }

    // Take off every block whose centre is within the brush of (px, py).
    const scratchAt = (px, py) => {
      const reach = Math.ceil(BRUSH / BLOCK)
      const c0 = Math.floor(px / BLOCK)
      const r0 = Math.floor(py / BLOCK)
      for (let c = c0 - reach; c <= c0 + reach; c++) {
        for (let r = r0 - reach; r <= r0 + reach; r++) {
          if (c < 0 || r < 0 || c * BLOCK > w || r * BLOCK > h) continue
          const dx = (c + 0.5) * BLOCK - px
          const dy = (r + 0.5) * BLOCK - py
          if (dx * dx + dy * dy > BRUSH * BRUSH) continue
          const key = `${c},${r}`
          if (cleared.has(key)) continue
          cleared.add(key)
          cctx.clearRect(c * BLOCK, r * BLOCK, BLOCK, BLOCK)
        }
      }
    }

    // Scratch along the path since the last event, so fast strokes leave no gaps.
    const onMove = (e) => {
      if (!ready) return
      const r = cover.getBoundingClientRect()
      const px = e.clientX - r.left
      const py = e.clientY - r.top
      if (last) {
        const dist = Math.hypot(px - last[0], py - last[1])
        const steps = Math.max(1, Math.ceil(dist / (BLOCK / 2)))
        for (let i = 1; i <= steps; i++) scratchAt(last[0] + ((px - last[0]) * i) / steps, last[1] + ((py - last[1]) * i) / steps)
      } else {
        scratchAt(px, py)
      }
      last = [px, py]
    }
    const onLeave = () => {
      last = null
    }
    // Keyboard: uncover the whole photo. A mouse click also focuses the card,
    // so only keyboard focus (focus-visible) counts.
    const uncover = () => {
      for (let c = 0; c * BLOCK < w; c++) for (let r = 0; r * BLOCK < h; r++) cleared.add(`${c},${r}`)
      cctx.clearRect(0, 0, w, h)
    }
    const onFocus = () => {
      if (wrap.matches(':focus-visible')) uncover()
    }
    const onKey = (e) => {
      if (e.key !== 'Enter' && e.key !== ' ') return
      e.preventDefault()
      uncover()
    }

    const resize = () => {
      const r = cover.getBoundingClientRect()
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = r.width
      h = r.height
      for (const c of [photo, cover]) {
        c.width = Math.max(1, Math.round(w * dpr))
        c.height = Math.max(1, Math.round(h * dpr))
      }
      paint()
    }

    img.onload = () => {
      ready = true
      resize()
    }
    img.src = src

    const ro = new ResizeObserver(resize)
    ro.observe(cover)
    cover.addEventListener('pointermove', onMove)
    cover.addEventListener('pointerdown', onMove)
    cover.addEventListener('pointerleave', onLeave)
    cover.addEventListener('pointerup', onLeave)
    wrap.addEventListener('focus', onFocus)
    wrap.addEventListener('keydown', onKey)

    return () => {
      ro.disconnect()
      cover.removeEventListener('pointermove', onMove)
      cover.removeEventListener('pointerdown', onMove)
      cover.removeEventListener('pointerleave', onLeave)
      cover.removeEventListener('pointerup', onLeave)
      wrap.removeEventListener('focus', onFocus)
      wrap.removeEventListener('keydown', onKey)
    }
  }, [src])

  return (
    <figure className="st-pixel" ref={wrapRef} tabIndex={0} role="img" aria-label={alt}>
      <canvas ref={photoRef} aria-hidden="true" />
      <canvas ref={coverRef} className="st-pixel-cover" aria-hidden="true" />
    </figure>
  )
}
