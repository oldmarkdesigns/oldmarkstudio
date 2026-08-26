// Full article content — Swedish + English
// slug must match the route and the Articles list link

export const articles = [
  {
    slug: 'design-med-data',
    tag: 'CRO',
    date: '12 maj 2026',
    readTime: '6 min',
    sv: {
      title: 'Därför börjar bra design med data',
      excerpt: 'Hur vi använder beteendedata för att fatta designbeslut som faktiskt flyttar nyckeltalen.',
      intro: 'De flesta designbeslut tas på känsla. Det är inte nödvändigtvis fel — erfarna designers har intuitioner som stämmer förvånansvärt ofta. Men när insatserna är höga och marginalen smal är magkänslan inte nog. Bra design börjar med att förstå hur riktiga användare faktiskt beter sig.',
      sections: [
        {
          heading: 'Vad beteendedata faktiskt är',
          body: `Beteendedata är allt som berättar vad användare gör — inte vad de säger att de gör. Det inkluderar värmekartläggning (var klickar folk?), sessionsinspelningar (hur rör sig musen innan ett avhopp?), trattanalys (var lämnar folk processen?) och rullningsdjup (läser de ens rubriken längre ner på sidan?).

Verktyg som Hotjar, Microsoft Clarity och PostHog gör det möjligt att samla detta utan enorma tekniska resurser. Men datan är värdelös utan ett ramverk för att tolka den.`,
        },
        {
          heading: 'Ramverket vi använder',
          body: `Vi börjar alltid med tre frågor: Var tappar vi användare? Vad försöker de göra men misslyckas med? Vad är den enklaste möjliga ändringen som skulle ta bort det hindret?

Det låter enkelt men kräver disciplin. Det är frestande att direkt hoppa till en fullständig redesign. Beteendedata ger dig istället en hypotes — "knappen är för lågt placerad" eller "formuläret har för många steg" — som du kan testa isolerat.

A/B-testning är inte alltid möjligt (du behöver tillräcklig trafik), men även en enkel förändring med tydlig uppföljning är mer värdefull än en total omdesign utan mätning.`,
        },
        {
          heading: 'Ett verkligt exempel',
          body: `En e-handelsaktör vi jobbade med såg att 68 % av besökarna lämnade produktsidan utan att lägga till i varukorgen. Värmekartläggningen visade att de scrollade förbi köpknappen — den var placerad under ett långt beskrivningsblock.

Vi löste det med en klibbig köpknapp som följde med vid scroll. Konverteringen ökade med 24 % inom två veckor. Ingen ny design, ingen ny copy, inget nytt erbjudande. Bara data som pekade på ett konkret problem och en konkret lösning.`,
        },
        {
          heading: 'Varför de flesta inte gör det här',
          body: `Beteendedata kräver tålamod. Du behöver vänta på att sessioner samlas in, du behöver titta igenom inspelningar (tråkigt men värdefullt), och du behöver motstå frestelsen att ändra för mycket på en gång.

Det kräver också att du accepterar att din ursprungliga designidé kanske var fel. Det är svårt för designers. Det är ännu svårare för kunder som just godkänt ett designkoncept de älskar.

Men alternativen är sämre: att designa på gissningar, lansera, och sedan inte förstå varför det inte fungerade.`,
        },
        {
          heading: 'Kom igång',
          body: `Du behöver inte ett stort team eller ett stort budget. Installera Clarity (gratis) på din webbplats idag. Titta på tio sessionsinspelningar i veckan. Skriv ner tre saker som verkar konstiga. Välj den enklaste att fixa. Testa.

Det är allt. Upprepa det varje vecka och du har ett system för datadrivet designarbete som de flesta byråer fortfarande inte erbjuder.`,
        },
      ],
      conclusion: 'Data tar inte bort designkänslan — den skärper den. De bästa designbesluten vi fattat har alltid haft både en stark estetisk intuition och ett tydligt beteendemönster bakom sig.',
    },
    en: {
      title: 'Why good design starts with data',
      excerpt: 'How we use behavioural data to make design decisions that actually move the numbers.',
      intro: 'Most design decisions are made on instinct. That\'s not necessarily wrong — experienced designers have intuitions that are surprisingly often right. But when stakes are high and margins are thin, gut feeling isn\'t enough. Good design starts with understanding how real users actually behave.',
      sections: [
        {
          heading: 'What behavioural data actually is',
          body: `Behavioural data is everything that tells you what users do — not what they say they do. It includes heatmapping (where do people click?), session recordings (how does the cursor move before a drop-off?), funnel analysis (where do people leave the process?) and scroll depth (do they even read the headline further down the page?).

Tools like Hotjar, Microsoft Clarity and PostHog make it possible to gather this without enormous technical resources. But data is worthless without a framework to interpret it.`,
        },
        {
          heading: 'The framework we use',
          body: `We always start with three questions: Where are we losing users? What are they trying to do but failing at? What is the simplest possible change that would remove that obstacle?

That sounds simple but requires discipline. It's tempting to jump straight to a complete redesign. Behavioural data gives you a hypothesis instead — "the button is placed too low" or "the form has too many steps" — that you can test in isolation.

A/B testing isn't always possible (you need sufficient traffic), but even a simple change with clear follow-up is more valuable than a total redesign without measurement.`,
        },
        {
          heading: 'A real example',
          body: `An e-commerce operator we worked with saw that 68% of visitors left the product page without adding to cart. Heatmapping showed they were scrolling past the buy button — it was placed below a long description block.

We solved it with a sticky buy button that followed on scroll. Conversion increased by 24% within two weeks. No new design, no new copy, no new offer. Just data pointing to a concrete problem and a concrete solution.`,
        },
        {
          heading: 'Why most people don\'t do this',
          body: `Behavioural data requires patience. You need to wait for sessions to accumulate, you need to watch through recordings (boring but valuable), and you need to resist the temptation to change too much at once.

It also requires accepting that your original design idea might have been wrong. That's hard for designers. It's even harder for clients who just approved a design concept they love.

But the alternatives are worse: designing on guesswork, launching, and then not understanding why it didn't work.`,
        },
        {
          heading: 'Getting started',
          body: `You don't need a large team or a large budget. Install Clarity (free) on your site today. Watch ten session recordings per week. Write down three things that seem strange. Pick the simplest to fix. Test.

That's it. Repeat every week and you have a system for data-driven design work that most agencies still don't offer.`,
        },
      ],
      conclusion: 'Data doesn\'t remove design sensibility — it sharpens it. The best design decisions we\'ve made have always had both a strong aesthetic intuition and a clear behavioural pattern behind them.',
    },
  },

  {
    slug: 'designsystem-som-skalar',
    tag: 'Designsystem',
    date: '28 apr 2026',
    readTime: '8 min',
    sv: {
      title: 'Designsystem som faktiskt skalar',
      excerpt: 'Tokenarkitektur, namngivning och dokumentation — lärdomar från system byggda för team i tillväxt.',
      intro: 'Ett designsystem är inte en Figma-fil med komponenter. Det är ett levande avtal mellan design och utveckling om hur produkten ska se ut och bete sig — nu och om tre år när teamet är fyra gånger så stort. Att bygga ett system som håller kräver mer disciplin än de flesta räknar med.',
      sections: [
        {
          heading: 'Tokens är fundamentet',
          body: `Allt börjar med design tokens — de abstrakta värdena som representerar dina designbeslut. Inte "#1a1a1a" utan "color.text.primary". Inte "16px" utan "spacing.md".

Varför abstraktionen? Därför att när du byter från ljust till mörkt tema, eller när din primärfärg ändras efter en rebrand, vill du ändra ett värde på ett ställe — inte jaga hexkoder genom hundratals komponenter.

Token-hierarkin vi rekommenderar: globala tokens (råvärdena) → semantiska tokens (vad de betyder) → komponenttokens (specifika användningar). En primärknapp använder "button.background.primary" som pekar på "color.brand.500" som pekar på "#6366f1".`,
        },
        {
          heading: 'Namngivning är viktigare än du tror',
          body: `Dålig namngivning dödar designsystem. Vi har sett system med komponenter som heter "CardNew2", "ButtonV3Final" och "ModalFixed". När ingen vet vad komponenterna heter används de inte — och om de inte används existerar de inte i praktiken.

Principerna vi följer: beskriv vad det är, inte hur det ser ut. "PrimaryButton" > "BlueButton". Använd konsekvent ordning: komponent + variant + tillstånd. "ButtonPrimaryLarge", "ButtonSecondaryDisabled". Och dokumentera varför — inte bara vad.`,
        },
        {
          heading: 'Komponenter som faktiskt används',
          body: `De flesta designsystem har för många komponenter. Teamet bygger ett komplett bibliotek, lanserar det med fanfarer, och sex månader senare designar folk fortfarande egna varianter i sidofiler.

Anledningen är nästan alltid att komponenterna inte täcker verkliga behov. Lösningen: börja med inventering. Vilka UI-mönster finns faktiskt i produkten idag? Vilka upprepas? De är dina första komponenter.

Bygg inget i förväg. Varje komponent som läggs till i systemet utan ett konkret behov är en komponent som måste underhållas utan att ge värde tillbaka.`,
        },
        {
          heading: 'Dokumentation som faktiskt läses',
          body: `Dokumentation som inte läses är lika värdelös som ingen dokumentation. Det vanligaste misstaget är att dokumentera hur komponenter fungerar utan att förklara när de ska användas.

Varje komponent behöver: ett tydligt syfte ("Använd denna för primära handlingsuppmaningar, max en per vy"), konkreta do/don't-exempel, och en lista på de vanligaste misstagen vi sett i verkligheten.

Vi föredrar Storybook för teknisk dokumentation och Notion för designriktlinjer. De pratar om olika saker till olika publiker.`,
        },
        {
          heading: 'Governance — vem äger systemet?',
          body: `Det tekniska arbetet är egentligen det enkla. Det svåra är governance: vem bestämmer vad som kommer in i systemet? Hur hanteras bidrag från team som vill ha en variant som inte finns? Vem granskar Pull Requests mot systemet?

Utan tydliga svar på de frågorna blir systemet antingen ett diktatoriskt hinder (ingen använder det) eller ett demokratiskt kaos (ingen litar på det).

Vår rekommendation för team under 30 personer: en "system owner" med slutgiltig beslutanderätt, ett öppet bidragsflöde med en tydlig process, och ett veckovisa synkmöte på 30 minuter.`,
        },
        {
          heading: 'Versionering och migration',
          body: `Versioner är oundvikliga. Hur hanterar du breaking changes utan att lamslå produktteamen?

Semantic versioning (major.minor.patch) ger tydliga signaler. Vi rekommenderar alltid en deprecation-period på minst en sprint innan en komponent tas bort, med automatiska linting-varningar för utfasade komponenter.

Migration-guides är inte valfria — de är en del av releasen. En guide som visar det exakta sök-och-ersätt-mönstret för en breaking change tar en halvtimme att skriva och sparar teamet dagar.`,
        },
      ],
      conclusion: 'Ett designsystem är en investering som lönar sig långsamt och dramatiskt. De första tre månaderna känns som merarbete. Vid tolv månader är det er produktivitetsmultiplikator. Vid tre år är det anledningen ni kan iterera snabbare än konkurrenterna.',
    },
    en: {
      title: 'Design systems that actually scale',
      excerpt: 'Token architecture, naming and documentation — lessons from systems built for growing teams.',
      intro: 'A design system is not a Figma file with components. It\'s a living agreement between design and development about how the product should look and behave — now and in three years when the team is four times the size. Building a system that holds requires more discipline than most people expect.',
      sections: [
        {
          heading: 'Tokens are the foundation',
          body: `Everything starts with design tokens — the abstract values that represent your design decisions. Not "#1a1a1a" but "color.text.primary". Not "16px" but "spacing.md".

Why the abstraction? Because when you switch from light to dark theme, or when your primary colour changes after a rebrand, you want to change one value in one place — not chase hex codes through hundreds of components.

The token hierarchy we recommend: global tokens (raw values) → semantic tokens (what they mean) → component tokens (specific uses). A primary button uses "button.background.primary" which points to "color.brand.500" which points to "#6366f1".`,
        },
        {
          heading: 'Naming matters more than you think',
          body: `Bad naming kills design systems. We\'ve seen systems with components called "CardNew2", "ButtonV3Final" and "ModalFixed". When nobody knows what components are called, they\'re not used — and if they\'re not used, they don\'t exist in practice.

The principles we follow: describe what it is, not what it looks like. "PrimaryButton" > "BlueButton". Use consistent ordering: component + variant + state. "ButtonPrimaryLarge", "ButtonSecondaryDisabled". And document the why — not just the what.`,
        },
        {
          heading: 'Components that are actually used',
          body: `Most design systems have too many components. The team builds a complete library, launches it with fanfare, and six months later people are still designing their own variants in side files.

The reason is almost always that the components don\'t cover real needs. The solution: start with an audit. What UI patterns actually exist in the product today? Which repeat? Those are your first components.

Build nothing in advance. Every component added to the system without a concrete need is a component that must be maintained without giving value back.`,
        },
        {
          heading: 'Documentation that actually gets read',
          body: `Documentation that doesn\'t get read is as useless as no documentation. The most common mistake is documenting how components work without explaining when they should be used.

Every component needs: a clear purpose ("Use this for primary calls to action, max one per view"), concrete do/don\'t examples, and a list of the most common mistakes we\'ve seen in practice.

We prefer Storybook for technical documentation and Notion for design guidelines. They talk about different things to different audiences.`,
        },
        {
          heading: 'Governance — who owns the system?',
          body: `The technical work is actually the easy part. The hard part is governance: who decides what comes into the system? How are contributions handled from teams that want a variant that doesn\'t exist? Who reviews Pull Requests against the system?

Without clear answers to those questions, the system either becomes a dictatorial barrier (nobody uses it) or democratic chaos (nobody trusts it).

Our recommendation for teams under 30 people: one "system owner" with final decision-making authority, an open contribution flow with a clear process, and a weekly 30-minute sync.`,
        },
        {
          heading: 'Versioning and migration',
          body: `Versions are inevitable. How do you handle breaking changes without paralysing product teams?

Semantic versioning (major.minor.patch) gives clear signals. We always recommend a deprecation period of at least one sprint before a component is removed, with automatic linting warnings for deprecated components.

Migration guides are not optional — they\'re part of the release. A guide showing the exact find-and-replace pattern for a breaking change takes half an hour to write and saves the team days.`,
        },
      ],
      conclusion: 'A design system is an investment that pays off slowly and dramatically. The first three months feel like extra work. At twelve months it\'s your productivity multiplier. At three years it\'s the reason you can iterate faster than the competition.',
    },
  },

  {
    slug: 'aseo-2026',
    tag: 'ASEO',
    date: '9 apr 2026',
    readTime: '5 min',
    sv: {
      title: 'ASEO 2026: så vinner du i App Store',
      excerpt: 'Nyckelord, skärmdumpar och ikoner — vad som driver nedladdningar i årets App Store-algoritm.',
      intro: 'App Store-optimering har förändrats mer de senaste tolv månaderna än under de föregående fem åren. Algorithmen är smartare, konkurrensen är hårdare, och de gamla tricken fungerar inte längre. Här är vad som faktiskt driver nedladdningar 2026.',
      sections: [
        {
          heading: 'Algoritmen 2026: vad har förändrats',
          body: `Apples algoritm väger numera engagemangssignaler tyngre än rena nyckelordsmatchningar. Det betyder att en app med 4,8-stjärnor och hög retentionsgrad kan ranka över en app med perfekt keyword-optimering men sämre användardata.

De tre viktigaste rankingfaktorerna idag: konverteringsgrad (hur stor andel som laddar ner efter att ha sett din app), engagemang (daglig aktiv användning, sessionslängd, retention), och ny trafik-relevans (hur väl dina metadata matchar det faktiska sökbeteendet den aktuella månaden).`,
        },
        {
          heading: 'Nyckelordsstrategi som fungerar',
          body: `Den gamla metoden — stoppa in så många nyckelord som möjligt i titeln — är döende. Apple straffar numera keyword-stuffing aktivt, och rubrikerna ser tillräckligt spammiga ut för att skrämma bort användare ändå.

Den moderna strategin: ett kraftfullt, naturligt namn (max 2–3 ord), en undertitel som förklarar kärnvärdet på klarspråk, och nyckelordsfältet (100 tecken) för longtail-sökningar du inte kan nämna naturligt i texten.

Använd AppFollow eller Sensor Tower för att hitta sökord med hög volym och låg konkurrens i din specifika kategori. Uppdatera nyckelordsfältet varje kvartal — sökbeteenden förändras.`,
        },
        {
          heading: 'Skärmdumpar: din viktigaste konverteringsfaktor',
          body: `De flesta appar behandlar skärmdumpar som en eftertanke. Det är ett enormt misstag. Skärmdumpar är den enskilt viktigaste faktorn för konverteringsgraden — mer än betyg, mer än recensioner, mer än beskrivning.

Regel ett: visa värde, inte UI. "Se dina utgifter i realtid" med en skärm som visar en tydlig graf konverterar bättre än en snygg skärmdump av appen utan kontext.

Regel två: den första skärmdumpen är allt. 80 % av användarna bestämmer sig baserat på den första skärmen. Om den inte kommunicerar appen huvudvärde tydligt inom tre sekunder är resten irrelevant.

Regel tre: testa. A/B-testa alltid skärmdumpar i App Store Connect Product Page Optimization.`,
        },
        {
          heading: 'Ikon — underskattad och viktig',
          body: `En ikon är inte bara ett varumärkesuttryck — det är en konverteringspunkt i sökresultaten. Användare scrollar förbi dussintals appar; din ikon måste sätta sig.

Vad som fungerar 2026: enkla former med hög kontrast, ett starkt färgval som sticker ut i din kategori (titta på konkurrenterna och välj något annorlunda), och inga ord i ikonen (för liten att läsas på de flesta enheter).

Testa din ikon mot de fem bästa konkurrenterna i en enkel Figma-mockup av sökresultaten. Syns den? Väljer du den? Det är testet.`,
        },
        {
          heading: 'Ratings och recensioner',
          body: `Du kan inte köpa dig till bra betyg (numera) — men du kan optimera när och hur du frågar om dem.

Fråga aldrig direkt efter onboarding. Fråga efter ett framgångsmoment: när användaren slutfört en uppgift, uppnått ett mål, eller sparat tid. Den emotionella topppunkten är rätt tillfälle.

Svara på negativa recensioner snabbt och konkret. "Vi jobbar på det" räcker inte. "Vi har fixat det problemet i version 3.2, uppdatera appen" är ett svar som faktiskt ändrar användarens uppfattning — och som Apples algoritm belönar.`,
        },
      ],
      conclusion: 'ASEO är inte ett engångsprojekt — det är ett löpande arbete. De appar som vinner i App Store 2026 är de som behandlar optimering som en kontinuerlig process, inte en checklista att bocka av vid lansering.',
    },
    en: {
      title: 'ASEO 2026: how to win in the App Store',
      excerpt: 'Keywords, screenshots and icons — what drives downloads in this year\'s App Store algorithm.',
      intro: 'App Store optimisation has changed more in the last twelve months than in the previous five years. The algorithm is smarter, competition is stiffer, and the old tricks no longer work. Here\'s what actually drives downloads in 2026.',
      sections: [
        {
          heading: 'The 2026 algorithm: what\'s changed',
          body: `Apple\'s algorithm now weighs engagement signals more heavily than pure keyword matching. This means an app with 4.8 stars and high retention can rank above an app with perfect keyword optimisation but worse user data.

The three most important ranking factors today: conversion rate (what proportion downloads after seeing your app), engagement (daily active use, session length, retention), and new traffic relevance (how well your metadata matches actual search behaviour that current month).`,
        },
        {
          heading: 'Keyword strategy that works',
          body: `The old method — pack as many keywords as possible into the title — is dying. Apple now actively penalises keyword stuffing, and the headlines look spammy enough to scare users away anyway.

The modern strategy: a powerful, natural name (max 2–3 words), a subtitle that explains the core value in plain language, and the keyword field (100 characters) for longtail searches you can\'t mention naturally in the text.

Use AppFollow or Sensor Tower to find high-volume, low-competition keywords in your specific category. Update the keyword field every quarter — search behaviours change.`,
        },
        {
          heading: 'Screenshots: your most important conversion factor',
          body: `Most apps treat screenshots as an afterthought. That\'s a huge mistake. Screenshots are the single most important factor for conversion rate — more than ratings, more than reviews, more than description.

Rule one: show value, not UI. "See your expenses in real time" with a screen showing a clear graph converts better than a polished screenshot of the app without context.

Rule two: the first screenshot is everything. 80% of users decide based on the first screen. If it doesn\'t communicate the app\'s main value clearly within three seconds, the rest is irrelevant.

Rule three: test. Always A/B test screenshots in App Store Connect Product Page Optimization.`,
        },
        {
          heading: 'Icon — underestimated and important',
          body: `An icon isn\'t just a brand expression — it\'s a conversion point in search results. Users scroll past dozens of apps; your icon needs to stick.

What works in 2026: simple shapes with high contrast, a strong colour choice that stands out in your category (look at competitors and choose something different), and no words in the icon (too small to read on most devices).

Test your icon against the five top competitors in a simple Figma mockup of the search results. Does it stand out? Would you choose it? That\'s the test.`,
        },
        {
          heading: 'Ratings and reviews',
          body: `You can\'t buy your way to good ratings (any more) — but you can optimise when and how you ask for them.

Never ask right after onboarding. Ask after a success moment: when the user has completed a task, achieved a goal, or saved time. The emotional peak is the right moment.

Respond to negative reviews quickly and concretely. "We\'re working on it" isn\'t enough. "We fixed that problem in version 3.2, update the app" is a response that actually changes the user\'s perception — and that Apple\'s algorithm rewards.`,
        },
      ],
      conclusion: 'ASEO is not a one-time project — it\'s ongoing work. The apps that win in the App Store in 2026 are those that treat optimisation as a continuous process, not a checklist to tick off at launch.',
    },
  },

  {
    slug: 'fran-ide-till-prototyp',
    tag: 'AI',
    date: '21 mar 2026',
    readTime: '7 min',
    sv: {
      title: 'Från idé till prototyp på en vecka',
      excerpt: 'Hur vi använder AI-verktyg för att gå från koncept till klickbar prototyp innan veckan är slut.',
      intro: 'För fem år sedan tog det minst en månad att gå från en produktidé till en prototyp värd att visa för investerare eller användare. Idag gör vi det på fem dagar. Det är inte för att vi är snabbare — det är för att verktygsstacken har förändrats fundamentalt.',
      sections: [
        {
          heading: 'Dag ett: koncept och kravformulering med AI',
          body: `Vi börjar aldrig med Figma. Vi börjar med ett samtal — numera ofta med Claude eller ChatGPT — där vi formulerar vad vi faktiskt försöker bygga.

Prompten vi använder: "Vi bygger [X] för [målgrupp]. Kärnproblemet vi löser är [Y]. Hjälp oss identifiera de tre viktigaste användarflödena och de vanligaste missförstånden om vad produkten ska göra."

Svaret ger oss en startpunkt för diskussion. Det är inte facit — AI:n vet inte allt om vår kund och kontext — men det tvingar oss att vara specifika om vad vi faktiskt vet och inte vet. Det sparar oss en dag av möten.`,
        },
        {
          heading: 'Dag två: wireframes med Figma och AI',
          body: `Med användarflödena definierade går vi in i Figma. Vi använder numera Figma AI för att generera initiala layoutförslag baserat på flödesbeskrivningar. Det är inte perfekt — resultaten kräver alltid manuell bearbetning — men det ger oss ett startläge att reagera på istället för en tom duk.

Reaktion är snabbare än skapande. Det är lättare att säga "den här layouten är fel för att X" och rätta till den än att börja från ingenting. AI-genererade wireframes ger oss något att reagera på, vilket accelererar designprocessen dramatiskt.`,
        },
        {
          heading: 'Dag tre: design med komponentbibliotek',
          body: `Vi arbetar med egna komponentbibliotek byggda i Framer och Figma. Dessa bibliotek är ackumulerade investeringar — varje projekt bidrar med komponenter som återanvänds i nästa.

På dag tre tar vi de validerade wireframerna och applicerar riktigt designspråk: typografi, färg, spacing, ikonografi. Det mesta är komponenter vi redan har. Det vi saknar bygger vi — och lägger till i biblioteket.

En prototyp av hög visuell kvalitet på denna punkt är inte fåfänga. Den hjälper oss att testa med riktiga användare och att kommunicera med stakeholders som inte kan läsa wireframes.`,
        },
        {
          heading: 'Dag fyra: prototyplänkar och användartestning',
          body: `Vi bygger klickbara prototyper i Framer eller Figma. Klickbara, inte kodade — skillnaden är hastighet. En kodat prototyp tar tio gånger längre att bygga och berättar oss sällan tio gånger mer.

Vi skickar prototyplänken till fem till åtta testpersoner med en enkel uppgift: "Prova att [göra X]". Vi spelar in med Loom. Vi tittar efter tre saker: var de fastnar, vad de frågar om, och vad de gör istället för det vi förväntat oss.

Den informationen är guld. Vi har vid det här laget investerat fyra dagar och får feedback som är mer värdefull än vad ett månads UX-arbete utan testning hade gett.`,
        },
        {
          heading: 'Dag fem: iteration och leverans',
          body: `Baserat på testerna gör vi en runda av iterationer. Vi fixar de tydligaste problemen, justerar flöden som inte fungerade, och förfinar det visuella.

I slutet av veckan levererar vi: en klickbar prototyp, en kortfattad rapport med de viktigaste inlärningarna från testningen, och en rekommendation för nästa steg — vad som bör byggas först, vad som kan vänta.

Det är inte en färdig produkt. Det är ett beslutsunderlag av hög kvalitet, producerat på en bråkdel av den tid det brukade ta.`,
        },
        {
          heading: 'Verktygen vi använder',
          body: `Claude och ChatGPT för kravformulering och research. Figma AI för initiala layoutförslag. Figma + egna bibliotek för design. Framer för prototypen. Notion för dokumentation. Loom för testinspelningar.

Ingen av dessa verktyg är magiska ensamma. Kombinationen, i rätt ordning, med ett team som vet vad de gör — det är det som gör det möjligt att gå från idé till prototyp på en vecka.`,
        },
      ],
      conclusion: 'AI har inte ersatt designers — det har tagit bort de delar av arbetet som var mest tidskrävande och minst värdeskapande. Det vi nu kan lägga mer tid på är de saker som faktiskt kräver mänskligt omdöme: att förstå användaren, att fatta svåra prioriteringsbeslut, och att bygga produkter som folk faktiskt vill använda.',
    },
    en: {
      title: 'From idea to prototype in a week',
      excerpt: 'How we use AI tools to go from concept to clickable prototype before the week is out.',
      intro: 'Five years ago it took at least a month to go from a product idea to a prototype worth showing to investors or users. Today we do it in five days. It\'s not because we\'re faster — it\'s because the tool stack has changed fundamentally.',
      sections: [
        {
          heading: 'Day one: concept and requirements with AI',
          body: `We never start with Figma. We start with a conversation — now often with Claude or ChatGPT — where we formulate what we\'re actually trying to build.

The prompt we use: "We\'re building [X] for [target audience]. The core problem we solve is [Y]. Help us identify the three most important user flows and the most common misconceptions about what the product should do."

The response gives us a starting point for discussion. It\'s not a definitive answer — the AI doesn\'t know everything about our client and context — but it forces us to be specific about what we actually know and don\'t know. It saves us a day of meetings.`,
        },
        {
          heading: 'Day two: wireframes with Figma and AI',
          body: `With the user flows defined, we go into Figma. We now use Figma AI to generate initial layout suggestions based on flow descriptions. It\'s not perfect — the results always require manual work — but it gives us a starting point to react to instead of a blank canvas.

Reaction is faster than creation. It\'s easier to say "this layout is wrong because X" and correct it than to start from nothing. AI-generated wireframes give us something to react to, which dramatically accelerates the design process.`,
        },
        {
          heading: 'Day three: design with component libraries',
          body: `We work with our own component libraries built in Framer and Figma. These libraries are accumulated investments — every project contributes components that are reused in the next.

On day three we take the validated wireframes and apply real design language: typography, colour, spacing, iconography. Most of it is components we already have. What we\'re missing we build — and add to the library.

A prototype of high visual quality at this point is not vanity. It helps us test with real users and communicate with stakeholders who can\'t read wireframes.`,
        },
        {
          heading: 'Day four: prototype links and user testing',
          body: `We build clickable prototypes in Framer or Figma. Clickable, not coded — the difference is speed. A coded prototype takes ten times longer to build and rarely tells us ten times more.

We send the prototype link to five to eight test participants with a simple task: "Try to [do X]". We record with Loom. We look for three things: where they get stuck, what they ask about, and what they do instead of what we expected.

That information is gold. At this point we\'ve invested four days and get feedback more valuable than a month of UX work without testing would have given.`,
        },
        {
          heading: 'Day five: iteration and delivery',
          body: `Based on the tests we do a round of iterations. We fix the clearest problems, adjust flows that didn\'t work, and refine the visual.

At the end of the week we deliver: a clickable prototype, a brief report with the key learnings from the testing, and a recommendation for the next steps — what should be built first, what can wait.

It\'s not a finished product. It\'s high-quality decision material, produced in a fraction of the time it used to take.`,
        },
        {
          heading: 'The tools we use',
          body: `Claude and ChatGPT for requirements and research. Figma AI for initial layout suggestions. Figma + our own libraries for design. Framer for the prototype. Notion for documentation. Loom for test recordings.

None of these tools are magic on their own. The combination, in the right order, with a team that knows what they\'re doing — that\'s what makes it possible to go from idea to prototype in a week.`,
        },
      ],
      conclusion: 'AI hasn\'t replaced designers — it has removed the parts of the work that were most time-consuming and least value-creating. What we can now spend more time on are the things that actually require human judgment: understanding the user, making difficult prioritisation decisions, and building products that people actually want to use.',
    },
  },
]

export function getArticle(slug) {
  return articles.find(a => a.slug === slug)
}
