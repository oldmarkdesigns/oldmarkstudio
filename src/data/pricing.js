// Packages and prices for websites: two monthly packages (Liten, Lagom) and a
// one-off project (Engång). The pricing page, the web development page and the
// structured data all read from here, so a price is changed in one place.
// All prices exclude VAT. No software or tools are named.

export const pricing = {
  sv: {
    label: 'Priser och paket',
    title: 'Ett pris du vet om i förväg',
    lede: 'Två månadspaket och ett engångsalternativ för hemsidor. Du betalar för det du behöver, och vet vad det kostar innan vi börjar.',
    vat: 'Alla priser är exklusive moms.',
    toggleLabel: 'Avtalstid',
    terms: [
      { id: 'bound', label: '12 mån, ingen startavgift' },
      { id: 'free', label: 'Ingen bindning' },
    ],
    perMonth: 'kr/mån',
    noFee: 'Ingen startavgift med 12 månaders avtal',
    fee: (n) => `+ ${n} kr i startavgift, ingen bindning`,
    popular: 'Populärast',
    cta: 'Få en gratis skiss',
    allLink: 'Se alla priser och jämför paketen',
    packages: [
      {
        id: 'liten',
        name: 'Liten',
        for: 'För företaget som behöver en proffsig sajt som någon annan tar hand om.',
        price: '1 495',
        fee: '4 900',
        lead: 'Det som ingår i alla paket, plus:',
        items: [
          'Upp till 5 sidor',
          '2 småärenden per månad',
          'Månadsrapport: besök, förfrågningar och vad jag gjort',
          'Svenska och engelska',
        ],
      },
      {
        id: 'lagom',
        name: 'Lagom',
        popular: true,
        for: 'För företaget som vill att sajten ska ge fler förfrågningar och kunder.',
        price: '2 495',
        fee: '7 900',
        lead: 'Allt i Liten, plus:',
        items: [
          'Upp till 12 sidor, och nyheter du skriver själv',
          '5 småärenden per månad',
          'Månadsrapport med sökpositioner och förslag',
          'Lokal synlighet i sök och kartor',
          'Bokning eller nyhetsbrev ingår',
        ],
      },
      {
        id: 'engang',
        name: 'Engång',
        oneOff: true,
        for: 'För företaget som vill betala en gång och sköta sajten själv.',
        price: '19 900–49 900',
        unit: 'kr',
        note: 'En gång. Priset beror på antal sidor och funktioner.',
        lead: 'Det som ingår i alla paket, plus:',
        items: [
          'Från 19 900 kr för upp till 5 sidor',
          'Upp till 49 900 kr för 12+ sidor och kopplingar',
          'Ingen månadskostnad, ingen bindning',
          'Ändringar efter lansering: 950 kr/timme',
        ],
      },
    ],
    hourly: {
      title: 'Bara en mindre sak?',
      body: 'Ändringar på en befintlig sajt eller ett avgränsat uppdrag gör jag per timme, för 950 kr.',
      cta: 'Fråga om ett uppdrag',
      subject: 'Timpris',
    },

    allLabel: 'Ingår alltid',
    allTitle: 'I alla paket',
    allIntro: 'Grunden är densamma oavsett vilket paket du väljer.',
    all: [
      'En gratis skiss innan du bestämmer dig',
      'Design gjord för ditt företag, ingen mall',
      'Fungerar lika bra i mobilen',
      'Sökmotoroptimering från start',
      'Tillgänglig för alla besökare',
      'Snabba sidor',
      'Domänen i ditt namn, design och kod är dina',
      'Live inom 2–3 veckor',
      'En genomgång med mig när du vill',
    ],
    monthlyAll: 'I månadspaketen ingår också hosting, uppdateringar och säkerhet.',

    compareLabel: 'Sida vid sida',
    compareTitle: 'Jämför paketen',
    compareIntro: 'Samma grund i alla tre. Skillnaden ligger i hur stor sajten är och hur mycket jag gör varje månad.',
    compareGroups: [
      {
        title: 'Pris',
        rows: [
          { label: 'Med 12 månaders avtal', cells: ['1 495 kr/mån', '2 495 kr/mån', '–'] },
          { label: 'Utan bindning', cells: ['1 495 kr/mån + 4 900 kr', '2 495 kr/mån + 7 900 kr', '–'] },
          { label: 'Engångspris', cells: ['–', '–', '19 900–49 900 kr'] },
          { label: 'Passar för', cells: ['En proffsig sajt som sköts', 'En sajt som ska ge kunder', 'Du sköter sajten själv'] },
        ],
      },
      {
        title: 'Sajten',
        rows: [
          { label: 'Antal sidor', cells: ['Upp till 5', 'Upp till 12', '5 till 12+'] },
          { label: 'Svenska och engelska', cells: [true, true, true] },
          { label: 'Nyheter du skriver själv', cells: [false, true, 'Tillägg'] },
          { label: 'Bokning eller nyhetsbrev', cells: ['Tillägg', true, 'Tillägg'] },
          { label: 'Lokal synlighet i sök och kartor', cells: [false, true, false] },
        ],
      },
      {
        title: 'Varje månad',
        rows: [
          { label: 'Småärenden', cells: ['2', '5', '950 kr/timme'] },
          { label: 'Hosting, uppdateringar och säkerhet', cells: [true, true, false] },
          { label: 'Månadsrapport', cells: ['Besök och förfrågningar', 'Plus sökpositioner och förslag', false] },
          { label: 'Genomgång med mig', cells: ['När du vill', 'När du vill', 'När du vill'] },
        ],
      },
    ],
    yes: 'Ingår',
    no: 'Ingår inte',

    addonsLabel: 'Tillägg',
    addonsTitle: 'Lägg till när du behöver',
    addonsIntro: 'Fungerar med alla paket. Du lägger till dem när du vill, och tar bort dem på samma sätt.',
    addons: [
      { title: 'Extra sida', price: '1 495 kr', unit: 'en gång', body: 'Fler sidor än paketet rymmer, till exempel en ny tjänst eller en kampanj.' },
      { title: 'Fler språk', price: '+295 kr/mån', unit: 'per språk', body: 'Svenska och engelska ingår redan. Varje språk utöver dem.' },
      { title: 'AI-chatt', price: '4 900 kr', unit: '+ 495 kr/mån', body: 'En chatt på sajten som svarar på vanliga frågor dygnet runt och skickar resten vidare till dig.' },
      { title: 'Bokning eller nyhetsbrev', price: '2 900 kr', unit: 'en gång', body: 'Låt kunder boka en tid eller anmäla sig till ditt nyhetsbrev direkt på sajten. Ingår i Lagom.' },
    ],

    smallLabel: 'Småärenden',
    smallTitle: 'Vad är ett småärende?',
    smallBody:
      'Ny text, nya bilder, en ny sektion eller en justerad sida: sådant som tar runt 30 minuter. Oanvända småärenden sparas inte till nästa månad. Större saker, som en helt ny funktion, får ett fast pris innan jag börjar.',

    faqLabel: 'Vanliga frågor',
    faqTitle: 'Om priser och paket',
    faq: [
      { q: 'Kan jag byta paket senare?', a: 'Ja. Du kan gå upp till Lagom när du vill. Vill du gå ner till Liten gäller det från nästa avtalsperiod.' },
      { q: 'Vad händer efter 12 månader?', a: 'Avtalet löper vidare månad för månad, och du kan säga upp det med en månads varsel.' },
      { q: 'Äger jag sajten med ett månadspaket?', a: 'Ja. Domänen registreras i ditt namn, och design och kod är dina från första dagen. Väljer du att sluta får du med dig allt.' },
      { q: 'Varför är engångspriset ett spann?', a: 'Det beror på hur många sidor sajten har och vad den ska kunna. Du får ett fast pris efter den gratis skissen, innan jag börjar.' },
    ],
    contactTitle: 'Osäker på vilket paket?',
    contactBody: 'Berätta om företaget i formuläret under priserna, eller mejla mig direkt.',
    contactCta: 'Få ett förslag',

    // The form at the end of the page: the sketch form, asking for a package
    // suggestion instead.
    form: {
      formLabel: 'Få ett förslag',
      formTitle: 'Vilket paket passar dig?',
      formIntro: 'Berätta lite om företaget och vad du vill uppnå. Jag svarar med ett förslag på paket, vad sajten behöver och vad det kostar, inom en arbetsdag.',
      subject: (company) => `Paketförslag: ${company}`,
      submitNote: 'Ditt mejlprogram öppnas med allt ifyllt. Tryck på skicka, så hör jag av mig med ett förslag inom en arbetsdag.',
      fields: {
        leaning: 'Lutar du åt något paket?',
        leanings: ['Liten', 'Lagom', 'Engång', 'Vet inte än'],
      },
      mail: {
        intro: 'Jag vill gärna ha ett förslag på vilket paket som passar mitt företag.',
        leaning: 'Lutar åt',
      },
    },
  },

  en: {
    label: 'Pricing and packages',
    title: 'A price you know up front',
    lede: 'Two monthly packages and a one-off option for websites. You pay for what you need, and know what it costs before we start.',
    vat: 'All prices exclude VAT.',
    toggleLabel: 'Contract',
    terms: [
      { id: 'bound', label: '12 months, no start fee' },
      { id: 'free', label: 'No commitment' },
    ],
    perMonth: 'SEK/month',
    noFee: 'No start fee with a 12-month contract',
    fee: (n) => `+ SEK ${n} start fee, no commitment`,
    popular: 'Most popular',
    cta: 'Get a free sketch',
    allLink: 'See all prices and compare the packages',
    packages: [
      {
        id: 'liten',
        name: 'Liten',
        for: 'For the business that needs a professional site someone else looks after.',
        price: '1,495',
        fee: '4,900',
        lead: 'Everything in every package, plus:',
        items: [
          'Up to 5 pages',
          '2 small changes a month',
          'Monthly report: visits, enquiries and what I did',
          'Swedish and English',
        ],
      },
      {
        id: 'lagom',
        name: 'Lagom',
        popular: true,
        for: 'For the business that wants the site to bring in more enquiries and customers.',
        price: '2,495',
        fee: '7,900',
        lead: 'Everything in Liten, plus:',
        items: [
          'Up to 12 pages, and news you write yourself',
          '5 small changes a month',
          'Monthly report with search positions and suggestions',
          'Local visibility in search and maps',
          'Booking or newsletter included',
        ],
      },
      {
        id: 'engang',
        name: 'Engång',
        oneOff: true,
        for: 'For the business that wants to pay once and run the site itself.',
        price: '19,900–49,900',
        unit: 'SEK',
        note: 'Once. The price depends on pages and features.',
        lead: 'Everything in every package, plus:',
        items: [
          'From SEK 19,900 for up to 5 pages',
          'Up to SEK 49,900 for 12+ pages and connections',
          'No monthly fee, no commitment',
          'Changes after launch: SEK 950/hour',
        ],
      },
    ],
    hourly: {
      title: 'Just something small?',
      body: 'Changes to an existing site or a well-defined job I do by the hour, for SEK 950.',
      cta: 'Ask about a job',
      subject: 'Hourly rate',
    },

    allLabel: 'Always included',
    allTitle: 'In every package',
    allIntro: 'The foundation is the same whichever package you choose.',
    all: [
      'A free sketch before you decide',
      'Design made for your business, not a template',
      'Works just as well on mobile',
      'Search optimisation from the start',
      'Accessible to every visitor',
      'Fast pages',
      'The domain in your name, design and code are yours',
      'Live within 2–3 weeks',
      'A review with me whenever you like',
    ],
    monthlyAll: 'The monthly packages also include hosting, updates and security.',

    compareLabel: 'Side by side',
    compareTitle: 'Compare the packages',
    compareIntro: 'The same foundation in all three. The difference is how big the site is and how much I do each month.',
    compareGroups: [
      {
        title: 'Price',
        rows: [
          { label: 'With a 12-month contract', cells: ['SEK 1,495/month', 'SEK 2,495/month', '–'] },
          { label: 'No commitment', cells: ['SEK 1,495/month + 4,900', 'SEK 2,495/month + 7,900', '–'] },
          { label: 'One-off price', cells: ['–', '–', 'SEK 19,900–49,900'] },
          { label: 'Best for', cells: ['A professional site, looked after', 'A site that brings customers', 'You run the site yourself'] },
        ],
      },
      {
        title: 'The site',
        rows: [
          { label: 'Pages', cells: ['Up to 5', 'Up to 12', '5 to 12+'] },
          { label: 'Swedish and English', cells: [true, true, true] },
          { label: 'News you write yourself', cells: [false, true, 'Add-on'] },
          { label: 'Booking or newsletter', cells: ['Add-on', true, 'Add-on'] },
          { label: 'Local visibility in search and maps', cells: [false, true, false] },
        ],
      },
      {
        title: 'Every month',
        rows: [
          { label: 'Small changes', cells: ['2', '5', 'SEK 950/hour'] },
          { label: 'Hosting, updates and security', cells: [true, true, false] },
          { label: 'Monthly report', cells: ['Visits and enquiries', 'Plus search positions and suggestions', false] },
          { label: 'Review with me', cells: ['Whenever you like', 'Whenever you like', 'Whenever you like'] },
        ],
      },
    ],
    yes: 'Included',
    no: 'Not included',

    addonsLabel: 'Add-ons',
    addonsTitle: 'Add what you need',
    addonsIntro: 'They work with every package. Add them when you like, and remove them the same way.',
    addons: [
      { title: 'Extra page', price: 'SEK 1,495', unit: 'once', body: 'More pages than the package holds, for example a new service or a campaign.' },
      { title: 'More languages', price: '+SEK 295/month', unit: 'per language', body: 'Swedish and English are already included. Each language beyond those.' },
      { title: 'AI chat', price: 'SEK 4,900', unit: '+ SEK 495/month', body: 'A chat on the site that answers common questions day and night and passes the rest on to you.' },
      { title: 'Booking or newsletter', price: 'SEK 2,900', unit: 'once', body: 'Let customers book a time or sign up for your newsletter right on the site. Included in Lagom.' },
    ],

    smallLabel: 'Small changes',
    smallTitle: 'What is a small change?',
    smallBody:
      'New copy, new images, a new section or an adjusted page: things that take around 30 minutes. Unused small changes don’t carry over to the next month. Bigger things, like a whole new feature, get a fixed price before I start.',

    faqLabel: 'Questions',
    faqTitle: 'About prices and packages',
    faq: [
      { q: 'Can I switch package later?', a: 'Yes. You can move up to Lagom whenever you like. Moving down to Liten applies from the next contract period.' },
      { q: 'What happens after 12 months?', a: 'The contract continues month to month, and you can cancel it with one month’s notice.' },
      { q: 'Do I own the site on a monthly package?', a: 'Yes. The domain is registered in your name, and the design and code are yours from day one. If you leave, you take everything with you.' },
      { q: 'Why is the one-off price a range?', a: 'It depends on how many pages the site has and what it needs to do. You get a fixed price after the free sketch, before I start.' },
    ],
    contactTitle: 'Not sure which package?',
    contactBody: 'Tell me about your business in the form below the prices, or email me directly.',
    contactCta: 'Get a suggestion',

    form: {
      formLabel: 'Get a suggestion',
      formTitle: 'Which package suits you?',
      formIntro: 'Tell me a little about your business and what you want to achieve. I’ll reply with a suggested package, what the site needs and what it costs, within one working day.',
      subject: (company) => `Package suggestion: ${company}`,
      submitNote: 'Your email app opens with everything filled in. Press send, and I’ll get back to you with a suggestion within one working day.',
      fields: {
        leaning: 'Leaning towards a package?',
        leanings: ['Liten', 'Lagom', 'Engång', 'Not sure yet'],
      },
      mail: {
        intro: 'I’d like a suggestion for which package suits my business.',
        leaning: 'Leaning towards',
      },
    },
  },
}
