const translations = {
  sv: {
    nav: {
      links: ['Tjänster', 'Arbete', 'Process'],
      linkIds: ['#services', '#work', '#process'],
    },
    hero: {
      line1: 'Design. Bygg.',
      line2: 'Optimera.',
      accentWord: 'Optimera.',
      subheading:
        'En stockholmsbaserad studio för grundare och produktteam som behöver digitalt arbete gjort rätt — och snabbt.',
      ctaPrimary: 'Se vårt arbete',
      descriptor:
        'Appdesign · Webbutveckling · CRO · UX-granskningar · Designsystem',
      badge: 'OLDMARK STUDIO · STOCKHOLM · ',
    },
    services: {
      label: 'TJÄNSTER',
      headline: 'Allt du behöver för att',
      accentWord: 'växa.',
      count: '[ 5 TJÄNSTER ]',
      subheading:
        'Ett fokuserat utbud av tjänster inom design, utveckling och optimering — med ett par nischade erbjudanden du inte hittar på en generalist-byrå.',
      readMore: 'Läs mer',
      subscriptionChip: 'Månadsprenumeration tillgänglig',
      items: [
        {
          tag: 'Design',
          icon: 'window',
          name: 'Appdesign',
          desc: 'UX och UI från grunden för webb och mobil, redo för handoff.',
        },
        {
          tag: 'Utveckling',
          icon: 'code',
          name: 'Webbutveckling',
          desc: 'Din kompletta webbplats. En fast månadskostnad. Vi designar, bygger och driftar den åt er — så ni kan fokusera på verksamheten.',
        },
        {
          tag: 'Design',
          icon: 'grid',
          name: 'Designsystem',
          desc: 'Tokens, komponentbibliotek och dokumentation som skalar med produkten.',
        },
        {
          tag: 'Design',
          icon: 'cursor',
          name: 'Prototyping',
          desc: 'Klickbara prototyper för användartester och investerardemos.',
        },
        {
          tag: 'Optimering',
          icon: 'search',
          name: 'UX-granskning & tillgänglighet',
          desc: 'Granskning mot usability-heuristiker och WCAG 2.2, med konkreta åtgärder.',
        },
      ],
    },
    webSolution: {
      back: 'TILLBAKA',
      tag: 'Webbutveckling · Abonnemang',
      title: 'Webbutveckling',
      subtitle: 'Din kompletta webbplats. En fast månadskostnad.',
      intro:
        'Ingen budget för ett stort designprojekt, men behöver ändå en webbplats som faktiskt presterar? Vår webblösning ger dig design, utveckling, hosting och löpande underhåll — allt i ett fast månadspris. Inga överraskningsfakturor, inga lösa trådar.',
      pricingLabel: 'PRISER',
      featuredBadge: 'REKOMMENDERAD',
      pricingTitle: 'Enkelt och förutsägbart',
      pricingSubtitle: 'Välj den nivå som passar er just nu. Uppgradera när ni växer.',
      tiers: [
        {
          name: 'Bas',
          pricePrefix: 'Från',
          price: '1 490',
          period: 'kr/mån',
          desc: 'För dig som behöver en professionell webbplats utan krångel.',
          features: ['Upp till 5 sidor', 'Responsiv design', 'Grundläggande SEO', 'Hosting inkluderad', 'E-postsupport'],
          featured: false,
        },
        {
          name: 'Studio',
          pricePrefix: 'Från',
          price: '2 990',
          period: 'kr/mån',
          desc: 'Vår mest populära nivå — för växande företag som vill ha mer.',
          features: ['Allt i Bas', 'Obegränsat antal sidor', 'Skräddarsydd design', 'Avancerad SEO', 'Månatliga uppdateringar', 'Prioriterad support'],
          featured: true,
        },
        {
          name: 'Engångsprojekt',
          price: 'Offert',
          period: '',
          desc: 'Föredrar du inget abonnemang? Vi bygger webbplatsen till ett fast engångspris — du äger den helt och hållet.',
          features: ['Fast projektpris', 'Ingen bindningstid eller månadskostnad', 'Full äganderätt av design och kod', 'Valfri hosting-leverantör', 'Support vid behov, timdebiterat'],
          featured: false,
        },
      ],
      includedLabel: 'VAD SOM INGÅR',
      includedTitle: 'Allt i ett paket',
      included: [
        { icon: 'grid', title: 'Komplett webbplats', desc: 'Design, utveckling och lansering — allt i ett och samma paket.' },
        { icon: 'bolt', title: 'Hosting & drift', desc: 'Snabb, säker hosting inkluderad. Inga extra kostnader eller leverantörer.' },
        { icon: 'search', title: 'SEO inbyggt', desc: 'Sökmotoroptimering från start — inte ett tillägg i efterhand.' },
        { icon: 'loop', title: 'Löpande underhåll', desc: 'Uppdateringar, säkerhetspatchar och support ingår varje månad.' },
        { icon: 'code', title: 'Skalbar grund', desc: 'Byggd för att växa med er — inga låsta mallar eller återvändsgränder.' },
        { icon: 'flag', title: 'Fast prissättning', desc: 'En förutsägbar månadskostnad. Inga överraskningsfakturor.' },
      ],
      ctaTitle: 'Redo att komma igång?',
      ctaBody: 'Boka ett kostnadsfritt samtal så går vi igenom vilken nivå som passar er bäst.',
      ctaBtn: 'Kontakta oss',
      questionsCardTitle: 'Har du frågor?',
      questionsCardBody: 'Boka ett kostnadsfritt samtal så går vi igenom vad som passar er bäst — inga förpliktelser.',
    },
    process: {
      label: 'PROCESS',
      headline: 'Hur vi',
      accentWord: 'arbetar.',
      subheading: 'En tydlig fyrstegsprocess. Inget onödigt, inga överflödiga möten.',
      secondaryHeadline: '& vilka vi',
      secondaryAccentWord: 'arbetar med.',
      secondarySubheading: 'Vi arbetar bäst med tidiga startups och scale-ups som behöver design och digitalt arbete utan overhead från en stor byrå. Kunder som värdesätter snabbhet, tydlighet och direkt kommunikation.',
      steps: [
        {
          title: 'Förstå',
          desc: 'Vi börjar med problemet — era användare, era begränsningar och hur framgång ser ut. Inga antaganden.',
        },
        {
          title: 'Designa',
          desc: 'Wireframes, flöden och high-fidelity UI i Figma. Granskas tillsammans tills det är rätt.',
        },
        {
          title: 'Bygg',
          desc: 'Frontendsutveckling eller no-code-leverans beroende på er stack. Pixelperfekt, responsiv och snabb.',
        },
        {
          title: 'Optimera',
          desc: 'Granskningar efter lansering, A/B-testning, ASEO och löpande retainerarbete. Vi mäter, itererar och förbättrar.',
        },
      ],
    },
    who: {
      label: 'ARBETE',
      headline: 'Utforska våra',
      accentWord: 'projekt',
      casesLabel: 'UTVALDA PROJEKT',
      cases: [
        {
          slug: 'no20',
          tag: 'Webbdesign · Varumärke',
          name: 'NO20',
          location: 'Stockholms skärgård',
          desc: 'Lyxigt flytande boende mitt i skärgården — vi designade varumärket och webbplatsen från grunden.',
        },
        {
          slug: 'sea4you',
          tag: 'Webbutveckling · Redesign',
          name: 'Sea4You',
          location: 'Saltsjöbaden',
          desc: 'Redesign och uppstädning av webbplatsen för Sveriges Targa-återförsäljare, byggd för enkelt underhåll.',
        },
        {
          slug: 'iris-glaciers',
          tag: 'Webbdesign · Utveckling',
          name: 'Iris Glaciers',
          location: 'Nystartat varumärke',
          desc: 'Design och utveckling av en komplett e-handelsupplevelse för ett helt nytt glasögonmärke.',
        },
        {
          slug: 'deco-home',
          tag: 'Webbdesign · Varumärke',
          name: 'Deco Home',
          location: 'Stockholm',
          desc: 'Ny webbplats med design, utveckling och varumärkesarbete för en skräddarsydd inredningsstudio.',
        },
      ],
    },
    articles: {
      label: 'INSIKTER & PERSPEKTIV',
      headline: 'Tankar om design,',
      accentWord: 'kod',
      headlineEnd: 'och tillväxt.',
      viewAll: 'Alla inlägg',
      items: [
        {
          tag: 'CRO',
          date: '12 MAJ 2026 · 6 MIN',
          title: 'Därför börjar bra design med data',
          excerpt:
            'Hur vi använder beteendedata för att fatta designbeslut som faktiskt flyttar nyckeltalen.',
        },
        {
          tag: 'DESIGNSYSTEM',
          date: '28 APR 2026 · 8 MIN',
          title: 'Designsystem som faktiskt skalar',
          excerpt:
            'Tokenarkitektur, namngivning och dokumentation — lärdomar från system byggda för team i tillväxt.',
        },
        {
          tag: 'ASEO',
          date: '9 APR 2026 · 5 MIN',
          title: 'ASEO 2026: så vinner du i App Store',
          excerpt:
            'Nyckelord, skärmdumpar och ikoner — vad som driver nedladdningar i årets App Store-algoritm.',
        },
        {
          tag: 'AI',
          date: '21 MAR 2026 · 7 MIN',
          title: 'Från idé till prototyp på en vecka',
          excerpt:
            'Hur vi använder AI-verktyg för att gå från koncept till klickbar prototyp innan veckan är slut.',
        },
      ],
    },
    contact: {
      label: 'KONTAKT',
      headline: 'Låt oss arbeta',
      accentWord: 'tillsammans.',
      subheading:
        'Har du ett projekt i åtanke, eller vill du bara prata igenom vad du behöver? Skicka ett meddelande.',
      muted: 'Baserade i Stockholm · Tillgängliga för projekt och retainers',
      cardTag: 'OLDMARKSTUDIO · STOCKHOLM',
      statNumber: '100',
      statSuffix: '%',
      statLabel: 'Personlig kontakt genom hela projektet — ingen projektledare, inga mellanhänder.',
      secondStat: '2 v',
      secondStatLabel: 'Typisk tid från första samtal till levererad prototyp.',
      testimonials: [
        {
          quote: 'Vi fick en webbplats som faktiskt speglar vad vi står för — snabbt och utan krångel.',
          author: 'Grundare, D2C-varumärke',
        },
        {
          quote: 'Tydlig kommunikation genom hela projektet. Inga överraskningar, bara resultat.',
          author: 'Marknadschef, SaaS-bolag',
        },
        {
          quote: 'Precis den typen av samarbete vi hoppades på — lyhört och proffsigt.',
          author: 'VD, tjänsteföretag',
        },
      ],
    },
    footer: {
      copy: '© 2026 Oldmark Studio',
      location: 'Stockholm, Sverige',
    },
  },

  en: {
    nav: {
      links: ['Services', 'Work', 'Process'],
      linkIds: ['#services', '#work', '#process'],
    },
    hero: {
      line1: 'Design. Build.',
      line2: 'Optimize.',
      accentWord: 'Optimize.',
      subheading:
        'A Stockholm-based studio for founders and product teams who need digital work done well — and fast.',
      ctaPrimary: 'See our work',
      descriptor:
        'App design · Web development · CRO · UX audits · Design systems',
      badge: 'OLDMARK STUDIO · STOCKHOLM · ',
    },
    services: {
      label: 'SERVICES',
      headline: 'Everything you need to',
      accentWord: 'grow.',
      count: '[ 5 SERVICES ]',
      subheading:
        'A focused set of services across design, development, and optimization — with a few niche offerings you won\'t find at a generic agency.',
      readMore: 'Read more',
      subscriptionChip: 'Monthly subscription available',
      items: [
        {
          tag: 'Design',
          icon: 'window',
          name: 'App design',
          desc: 'End-to-end UX and UI design for web and mobile, ready for handoff.',
        },
        {
          tag: 'Development',
          icon: 'code',
          name: 'Web development',
          desc: 'Your complete website. One fixed monthly cost. We design, build and run it for you — so you can focus on the business.',
        },
        {
          tag: 'Design',
          icon: 'grid',
          name: 'Design systems',
          desc: 'Tokens, component libraries, and docs that scale with your product.',
        },
        {
          tag: 'Design',
          icon: 'cursor',
          name: 'Prototyping',
          desc: 'Clickable prototypes for user testing and investor demos.',
        },
        {
          tag: 'Optimization',
          icon: 'search',
          name: 'UX audit & accessibility review',
          desc: 'Audit against usability heuristics and WCAG 2.2, with clear fixes.',
        },
      ],
    },
    webSolution: {
      back: 'BACK',
      tag: 'Web Development · Subscription',
      title: 'Web Development',
      subtitle: 'Your complete website. One fixed monthly cost.',
      intro:
        'No budget for a big design project, but still need a website that actually performs? Our web solution gives you design, development, hosting, and ongoing maintenance — all for one fixed monthly price. No surprise invoices, no loose ends.',
      pricingLabel: 'PRICING',
      featuredBadge: 'RECOMMENDED',
      pricingTitle: 'Simple and predictable',
      pricingSubtitle: 'Pick the tier that fits you now. Upgrade as you grow.',
      tiers: [
        {
          name: 'Basic',
          pricePrefix: 'From',
          price: '1,490',
          period: 'kr/mo',
          desc: 'For a professional website without the hassle.',
          features: ['Up to 5 pages', 'Responsive design', 'Basic SEO', 'Hosting included', 'Email support'],
          featured: false,
        },
        {
          name: 'Studio',
          pricePrefix: 'From',
          price: '2,990',
          period: 'kr/mo',
          desc: 'Our most popular tier — for growing companies who want more.',
          features: ['Everything in Basic', 'Unlimited pages', 'Custom design', 'Advanced SEO', 'Monthly updates', 'Priority support'],
          featured: true,
        },
        {
          name: 'One-off project',
          price: 'Quote',
          period: '',
          desc: 'Prefer no subscription? We build the site for a fixed one-time price — you own it outright.',
          features: ['Fixed project price', 'No lock-in or monthly cost', 'Full ownership of design and code', 'Hosting provider of your choice', 'Support on request, billed hourly'],
          featured: false,
        },
      ],
      includedLabel: "WHAT'S INCLUDED",
      includedTitle: 'Everything in one package',
      included: [
        { icon: 'grid', title: 'Complete website', desc: 'Design, development and launch — all in a single package.' },
        { icon: 'bolt', title: 'Hosting & uptime', desc: 'Fast, secure hosting included. No extra costs or vendors.' },
        { icon: 'search', title: 'SEO built in', desc: 'Search optimisation from day one — not an afterthought.' },
        { icon: 'loop', title: 'Ongoing maintenance', desc: 'Updates, security patches and support included every month.' },
        { icon: 'code', title: 'Scalable foundation', desc: 'Built to grow with you — no locked templates or dead ends.' },
        { icon: 'flag', title: 'Fixed pricing', desc: 'One predictable monthly cost. No surprise invoices.' },
      ],
      ctaTitle: 'Ready to get started?',
      ctaBody: "Book a free call and we'll walk through which tier fits you best.",
      ctaBtn: 'Contact us',
      questionsCardTitle: 'Have questions?',
      questionsCardBody: "Book a free call and we'll walk through what fits you best — no obligations.",
    },
    process: {
      label: 'PROCESS',
      headline: 'How we',
      accentWord: 'work.',
      subheading: 'A straightforward four-phase process. No bloat, no unnecessary meetings.',
      secondaryHeadline: '& who we',
      secondaryAccentWord: 'work with.',
      secondarySubheading: 'We work best with early-stage startups and scale-ups that need design and digital work done without the overhead of a large agency. Clients who value speed, clarity, and direct communication.',
      steps: [
        {
          title: 'Understand',
          desc: 'We start with the problem — your users, your constraints, and what success looks like. No assumptions.',
        },
        {
          title: 'Design',
          desc: 'Wireframes, flows, and high-fidelity UI in Figma. Reviewed together until it\'s right.',
        },
        {
          title: 'Build',
          desc: 'Frontend development or no-code delivery, depending on your stack. Pixel-perfect, responsive, and fast.',
        },
        {
          title: 'Optimize',
          desc: 'Post-launch audits, A/B testing, ASEO, and ongoing retainer work. We measure, iterate, and improve.',
        },
      ],
    },
    who: {
      label: 'WORK',
      headline: 'Explore our',
      accentWord: 'projects',
      casesLabel: 'SELECTED WORK',
      cases: [
        {
          slug: 'no20',
          tag: 'Web design · Brand identity',
          name: 'NO20',
          location: 'Stockholm Archipelago',
          desc: 'A luxury floating home in the heart of the archipelago — we built the brand and website from scratch.',
        },
        {
          slug: 'sea4you',
          tag: 'Web development · Redesign',
          name: 'Sea4You',
          location: 'Saltsjöbaden',
          desc: 'A redesign and cleanup of the website for Sweden’s Targa boat dealer, built for easy maintenance.',
        },
        {
          slug: 'iris-glaciers',
          tag: 'Web design · Development',
          name: 'Iris Glaciers',
          location: 'New brand launch',
          desc: 'Design and development of a complete e-commerce experience for a brand-new eyewear label.',
        },
        {
          slug: 'deco-home',
          tag: 'Web design · Brand identity',
          name: 'Deco Home',
          location: 'Stockholm',
          desc: 'New website with design, development, and brand work for a bespoke interior design studio.',
        },
      ],
    },
    articles: {
      label: 'INSIGHTS & PERSPECTIVES',
      headline: 'Thoughts on design,',
      accentWord: 'code',
      headlineEnd: 'and growth.',
      viewAll: 'All posts',
      items: [
        {
          tag: 'CRO',
          date: '12 MAY 2026 · 6 MIN',
          title: 'Why good design starts with data',
          excerpt:
            'How we use behavioural data to make design decisions that actually move the numbers.',
        },
        {
          tag: 'DESIGN SYSTEMS',
          date: '28 APR 2026 · 8 MIN',
          title: 'Design systems that actually scale',
          excerpt:
            'Token architecture, naming, and documentation — lessons from systems built for growing teams.',
        },
        {
          tag: 'ASEO',
          date: '9 APR 2026 · 5 MIN',
          title: 'ASEO in 2026: how to win in the App Store',
          excerpt:
            'Keywords, screenshots, and icons — what drives installs in this year\'s App Store algorithm.',
        },
        {
          tag: 'AI',
          date: '21 MAR 2026 · 7 MIN',
          title: 'From idea to prototype in a week',
          excerpt:
            'How we use AI tooling to go from concept to clickable prototype before the week is out.',
        },
      ],
    },
    contact: {
      label: 'CONTACT',
      headline: 'Let\'s work',
      accentWord: 'together.',
      subheading:
        'Have a project in mind, or just want to talk through what you need? Send a message.',
      muted: 'Based in Stockholm · Available for projects and retainers',
      cardTag: 'OLDMARKSTUDIO · STOCKHOLM',
      statNumber: '100',
      statSuffix: '%',
      statLabel: 'Personal contact throughout the project — no project manager, no middlemen.',
      secondStat: '2 wk',
      secondStatLabel: 'Typical time from first call to delivered prototype.',
      testimonials: [
        {
          quote: 'We got a website that actually reflects who we are — fast, no hassle.',
          author: 'Founder, D2C brand',
        },
        {
          quote: 'Clear communication throughout. No surprises, just results.',
          author: 'Marketing lead, SaaS company',
        },
        {
          quote: 'Exactly the kind of collaboration we hoped for — responsive and professional.',
          author: 'CEO, service business',
        },
      ],
    },
    footer: {
      copy: '© 2026 Oldmark Studio',
      location: 'Stockholm, Sweden',
    },
  },
}

export default translations
