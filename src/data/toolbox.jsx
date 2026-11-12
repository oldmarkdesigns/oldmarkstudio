// The tools behind the work: three columns of skills and four ways AI is used,
// in Swedish or English, for the old homepage's Skills section (/v1).
import imgFigma       from '../assets/tool-icons/figma.png'
import imgFramer      from '../assets/tool-icons/framer.png'
import imgCursor      from '../assets/tool-icons/cursor.png'
import imgNotion      from '../assets/tool-icons/notion.png'
import imgWebflow     from '../assets/tool-icons/webflow.png'
import imgClaude      from '../assets/tool-icons/claude.png'
import imgChatGPT     from '../assets/tool-icons/chatgpt.png'
import imgCodex       from '../assets/tool-icons/codex.png'
import imgGemini      from '../assets/tool-icons/gemini.png'
import imgWordPress   from '../assets/tool-icons/wordpress.png'
import imgAntigravity from '../assets/tool-icons/antigravity.png'

import { PngIcon, SvgIcon, BadgeIcon } from '../components/ToolIcons'

export function toolbox(isSv) {
  const skillColumns = [
    {
      title: isSv ? 'UX Design' : 'UX Design',
      rows: [
        { icon: <PngIcon src={imgFigma} alt="Figma" />, label: 'Figma' },
        { icon: <SvgIcon><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></SvgIcon>, label: isSv ? 'Research' : 'Research' },
        { icon: <SvgIcon><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></SvgIcon>, label: isSv ? 'Prototyping' : 'Prototyping' },
        { icon: <SvgIcon><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></SvgIcon>, label: isSv ? 'Användartestning' : 'User testing' },
        { icon: <SvgIcon><path d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z"/><path d="M12 8v4l3 3"/></SvgIcon>, label: 'EAA / WCAG 2.2' },
      ],
    },
    {
      title: 'Frontend',
      rows: [
        {
          icon: (
            <BadgeIcon bg="#E34F26">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3 3 12l5 9" />
                <path d="M16 3l5 9-5 9" />
              </svg>
            </BadgeIcon>
          ),
          label: 'HTML',
        },
        {
          icon: (
            <BadgeIcon bg="#1572B6">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 4c-2 0-3 1-3 3v2c0 1.5-.5 2-2 2 1.5 0 2 .5 2 2v2c0 2 1 3 3 3" />
                <path d="M15 4c2 0 3 1 3 3v2c0 1.5.5 2 2 2-1.5 0-2 .5-2 2v2c0 2-1 3-3 3" />
              </svg>
            </BadgeIcon>
          ),
          label: 'CSS / Tailwind',
        },
        {
          icon: (
            <BadgeIcon bg="#F7DF1E">
              <span style={{ color: '#000', fontSize: 9, fontWeight: 800, lineHeight: 1, letterSpacing: '-0.02em' }}>JS</span>
            </BadgeIcon>
          ),
          label: 'JavaScript / TypeScript',
        },
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
              <g stroke="#61DAFB" strokeWidth="1.4">
                <ellipse cx="12" cy="12" rx="10" ry="4.2" />
                <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
                <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
              </g>
            </svg>
          ),
          label: 'React',
        },
        {
          icon: (
            <BadgeIcon bg="#F05032">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round">
                <circle cx="6" cy="6" r="1.8" fill="#fff" stroke="none" />
                <circle cx="6" cy="18" r="1.8" fill="#fff" stroke="none" />
                <circle cx="18" cy="12" r="1.8" fill="#fff" stroke="none" />
                <path d="M6 8v8M6 8c0 4 4 4 8 4h4" />
              </svg>
            </BadgeIcon>
          ),
          label: 'Git',
        },
      ],
    },
    {
      title: 'Web',
      rows: [
        { icon: <PngIcon src={imgFramer} alt="Framer" />, label: 'Framer' },
        { icon: <PngIcon src={imgWebflow} alt="Webflow" />, label: 'Webflow' },
        { icon: <PngIcon src={imgWordPress} alt="WordPress" />, label: 'WordPress' },
        { icon: <PngIcon src={imgCursor} alt="Cursor" />, label: 'Cursor' },
        { icon: <PngIcon src={imgAntigravity} alt="Antigravity" />, label: 'Antigravity' },
      ],
    },
  ]

  const aiCards = [
    {
      title: isSv ? 'AI för snabb prototyping & utveckling' : 'AI for Rapid Prototyping & Development',
      tools: [
        { icon: <PngIcon src={imgCursor} alt="Cursor" />, label: 'Cursor' },
        { icon: <PngIcon src={imgCodex} alt="Codex" />, label: 'Codex' },
      ],
      bullets: isSv
        ? ['Snabbt bygga och iterera på webbapp-prototyper', 'Utforska flera implementationsmetoder effektivt', 'Minska tid från koncept till fungerande prototyp']
        : ['Quickly build and iterate on web app prototypes', 'Explore multiple implementation approaches efficiently', 'Reduce time from concept to working prototype'],
    },
    {
      title: isSv ? 'AI för webbplatsskapande & kundarbete' : 'AI for Website Creation & Client Work',
      tools: [
        { icon: <PngIcon src={imgWebflow} alt="Webflow" />, label: 'Webflow AI' },
      ],
      bullets: isSv
        ? ['Generera layouts och sektioner från prompts', 'Snabba upp innehållsskapande och iteration', 'Leverera produktionsklara webbplatser snabbare']
        : ['Generating layouts and sections from prompts', 'Speeding up content creation and iteration', 'Delivering production-ready websites faster'],
    },
    {
      title: isSv ? 'AI för idéutveckling, spec & visuell utforskning' : 'AI for Ideation, Specifications & Visuals',
      tools: [
        { icon: <PngIcon src={imgClaude} alt="Claude" />, label: 'Claude' },
        { icon: <PngIcon src={imgChatGPT} alt="ChatGPT" />, label: 'ChatGPT' },
        { icon: <PngIcon src={imgGemini} alt="Gemini" offsetY={2} />, label: 'Gemini' },
      ],
      bullets: isSv
        ? ['Brainstorma UX-koncept och interaktionsflöden', 'Skriva och förfina produkt- och tekniska specifikationer', 'Generera och utforska visuella idéer under designfasen']
        : ['Brainstorm UX concepts and interaction flows', 'Write and refine product and technical specifications', 'Generate and explore visual ideas and imagery during design'],
    },
    {
      title: isSv ? 'AI för dokumentation & kunskapshantering' : 'AI for Documentation & Knowledge Management',
      tools: [
        { icon: <PngIcon src={imgNotion} alt="Notion" />, label: 'Notion AI' },
      ],
      bullets: isSv
        ? ['Strukturera projektdokumentation och designsystem', 'Skriva och sammanfatta tekniska anteckningar', 'Upprätthålla tydlig, sökbar produktkunskap']
        : ['Structuring project documentation and design systems', 'Writing and summarising technical notes', 'Maintaining clear, searchable product knowledge'],
    },
  ]

  return { skillColumns, aiCards }
}
