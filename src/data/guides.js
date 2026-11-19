// Short guides for people about to get a new website. Each opens with a
// summary of three lines ("I korthet"), so a reader can stop there; the
// sections after it explain why. Shown at /guider and /guider/:slug.

export const guides = [
  {
    slug: 'innan-du-kopar-hemsida',
    minutes: 5,
    sv: {
      title: '7 saker att kolla innan du köper en hemsida',
      lede: 'Sju frågor att ställa till vem du än anlitar, så att du vet vad du får och slipper överraskningar senare.',
      summary: [
        'Se till att domänen och hemsidan är dina.',
        'Fråga vad ändringar kostar efter lansering, och hur länge du är bunden.',
        'Testa i mobilen, och fråga vem som svarar när något går fel.',
      ],
      sections: [
        { heading: 'Vem äger domänen?', body: 'Domänen är din adress på nätet, och den ska stå på ditt företag. Står den på leverantören blir det krångligt den dagen du vill byta. Fråga rakt ut, och be att få se det.' },
        { heading: 'Vem äger hemsidan?', body: 'Fråga vad som händer med design, texter och kod om du slutar. Ibland hyr du hemsidan och förlorar den när avtalet tar slut. Det är inte fel i sig, men du ska veta det innan du skriver på.' },
        { heading: 'Vad kostar ändringar efter lansering?', body: 'En hemsida behöver ändras: nya priser, nya bilder, en ny tjänst. Fråga vad som ingår och vad som kostar extra. Ett timpris utan tak kan till slut bli dyrare än själva bygget.' },
        { heading: 'Hur länge är du bunden?', body: 'Bindningstid är vanligt och inget konstigt, men jämför helheten. Räkna ihop vad du betalar under hela avtalstiden, inte bara per månad.' },
        { heading: 'Fungerar den i mobilen?', body: 'De flesta besökare kommer från en telefon. Be att få se tidigare hemsidor och öppna dem i din egen mobil: laddar de snabbt, och är det lätt att ringa eller boka?' },
        { heading: 'Vem svarar när något går fel?', body: 'Fråga vem du pratar med, och hur snabbt du får svar. Ett namn och en svarstid säger mer än orden ”support ingår”.' },
        { heading: 'Kan du flytta den?', body: 'Om du en dag vill byta leverantör ska det gå. Fråga hur det går till, och vad du får med dig.' },
      ],
    },
    en: {
      title: '7 things to check before you buy a website',
      lede: 'Seven questions to ask whoever you hire, so you know what you are getting and avoid surprises later.',
      summary: [
        'Make sure the domain and the website are yours.',
        'Ask what changes cost after launch, and how long you are tied in.',
        'Try it on your phone, and ask who answers when something breaks.',
      ],
      sections: [
        { heading: 'Who owns the domain?', body: 'The domain is your address on the web, and it should be registered to your company. If it is in the provider’s name, things get complicated the day you want to switch. Ask directly, and ask to see it.' },
        { heading: 'Who owns the website?', body: 'Ask what happens to the design, text and code if you leave. Sometimes you rent the website and lose it when the contract ends. That is not wrong in itself, but you should know before you sign.' },
        { heading: 'What do changes cost after launch?', body: 'A website needs changing: new prices, new photos, a new service. Ask what is included and what costs extra. An hourly rate with no cap can end up costing more than the build itself.' },
        { heading: 'How long are you tied in?', body: 'A lock-in period is common and nothing strange, but compare the whole picture. Add up what you pay over the full contract, not just per month.' },
        { heading: 'Does it work on a phone?', body: 'Most visitors arrive on a phone. Ask to see earlier websites and open them on your own phone: do they load quickly, and is it easy to call or book?' },
        { heading: 'Who answers when something breaks?', body: 'Ask who you will talk to, and how quickly you get a reply. A name and a response time say more than the words “support included”.' },
        { heading: 'Can you move it?', body: 'If you want to switch providers one day, it should be possible. Ask how it works, and what you get to take with you.' },
      ],
    },
  },
  {
    slug: 'abonnemang-eller-engangsprojekt',
    minutes: 4,
    sv: {
      title: 'Abonnemang eller engångsprojekt?',
      lede: 'Två sätt att betala för en hemsida. Här är vad skillnaden betyder i praktiken, och hur du vet vilket som passar dig.',
      summary: [
        'Abonnemang: låg kostnad i början, och drift och ändringar ingår.',
        'Engångsprojekt: du betalar för bygget och sköter resten själv, eller köper hjälp per timme.',
        'Ändrar du ofta, eller vill slippa tänka på hemsidan, passar abonnemang oftast bäst.',
      ],
      sections: [
        { heading: 'Så fungerar ett abonnemang', body: 'Du betalar en fast summa varje månad. I den ingår design och bygge, men också hosting, säkerhetsuppdateringar och mindre ändringar efter lansering. Hemsidan blir aldrig ett projekt som står still.' },
        { heading: 'Så fungerar ett engångsprojekt', body: 'Du betalar en gång för att få hemsidan byggd. Efter lansering är den din att sköta: hosting, uppdateringar och ändringar ordnar du själv, eller köper per timme när det behövs.' },
        { heading: 'Räkna på det', body: 'Ett abonnemang från 1 495 kr i månaden blir knappt 18 000 kr första året. Ett engångsprojekt från 19 900 kr kostar ungefär lika mycket.\n\nSkillnaden är vad som händer sedan. Abonnemanget fortsätter att ta hand om hemsidan, medan engångsprojektet är klart när det är lanserat.' },
        { heading: 'Abonnemang passar dig som…', body: '…vill komma igång utan en stor utgift, vill kunna be om ändringar utan att få en ny offert varje gång, och hellre lägger tiden på företaget än på hemsidan.' },
        { heading: 'Engångsprojekt passar dig som…', body: '…har någon som kan sköta hemsidan efteråt, sällan behöver ändra något, eller hellre tar kostnaden en gång.' },
      ],
    },
    en: {
      title: 'Subscription or one-off project?',
      lede: 'Two ways to pay for a website. Here is what the difference means in practice, and how to tell which one suits you.',
      summary: [
        'Subscription: a low cost up front, with hosting and changes included.',
        'One-off project: you pay for the build and handle the rest yourself, or buy help by the hour.',
        'If you change things often, or would rather not think about the website, a subscription usually suits best.',
      ],
      sections: [
        { heading: 'How a subscription works', body: 'You pay a fixed amount each month. It covers the design and build, but also hosting, security updates and small changes after launch. The website never becomes a project that stands still.' },
        { heading: 'How a one-off project works', body: 'You pay once to have the website built. After launch it is yours to run: hosting, updates and changes are up to you, or you buy help by the hour when you need it.' },
        { heading: 'Do the maths', body: 'A subscription from SEK 1,495 a month comes to just under SEK 18,000 in the first year. A one-off project from SEK 19,900 costs about the same.\n\nThe difference is what happens next. The subscription keeps looking after the website, while the one-off project is finished once it has launched.' },
        { heading: 'A subscription suits you if…', body: '…you want to get started without a big expense, want to ask for changes without a new quote each time, and would rather spend your time on the business than on the website.' },
        { heading: 'A one-off project suits you if…', body: '…someone can run the website afterwards, you rarely need to change anything, or you would rather pay once.' },
      ],
    },
  },
  {
    slug: 'synas-lokalt',
    minutes: 5,
    sv: {
      title: 'Så hittar kunder i närheten ditt företag',
      lede: 'Mycket av det som avgör om du syns när någon söker efter en tjänst i ditt område kan du påverka själv. Här är det viktigaste.',
      summary: [
        'Ge varje tjänst en egen sida, och skriv var du jobbar.',
        'Håll namn, adress och telefon likadana överallt.',
        'Be nöjda kunder om omdömen, och gör det lätt att kontakta dig från mobilen.',
      ],
      sections: [
        { heading: 'En sida per tjänst', body: 'Den som söker efter ”badrumsrenovering Solna” vill hamna på en sida om just det. Ge varje tjänst en egen sida med en tydlig rubrik, i stället för att samla allt på en.' },
        { heading: 'Skriv var du jobbar', body: 'Nämn orterna och stadsdelarna du jobbar i, i rubriker och text där det känns naturligt. Det hjälper både sökmotorer och kunder att förstå att du finns i närheten.' },
        { heading: 'Samma uppgifter överallt', body: 'Namn, adress och telefonnummer ska vara likadana på hemsidan, i din företagsprofil på Google och i andra företagskataloger. Olika uppgifter gör det svårare för sökmotorer att lita på dem.' },
        { heading: 'Omdömen', body: 'Omdömen påverkar både om du syns och om någon väljer dig. Be nöjda kunder direkt efter ett avslutat jobb, och svara på de omdömen du får, även de sämre.' },
        { heading: 'Snabb i mobilen', body: 'Den som söker lokalt gör det oftast i telefonen, ofta i farten. Hemsidan ska ladda snabbt, och telefonnummer och bokning ska synas utan att man behöver leta.' },
        { heading: 'Ha tålamod', body: 'Ingen kan lova en plats högst upp på Google. Det tar ofta några månader innan förändringar märks, men grunderna ovan gör skillnad över tid.' },
      ],
    },
    en: {
      title: 'How nearby customers find your business',
      lede: 'Much of what decides whether you show up when someone searches for a service in your area is up to you. Here is what matters most.',
      summary: [
        'Give each service its own page, and say where you work.',
        'Keep your name, address and phone number the same everywhere.',
        'Ask happy customers for reviews, and make it easy to reach you from a phone.',
      ],
      sections: [
        { heading: 'One page per service', body: 'Someone searching for “bathroom renovation Solna” wants to land on a page about exactly that. Give each service its own page with a clear heading, rather than putting everything on one.' },
        { heading: 'Say where you work', body: 'Mention the towns and neighbourhoods you work in, in headings and text where it feels natural. It helps both search engines and customers see that you are nearby.' },
        { heading: 'The same details everywhere', body: 'Your name, address and phone number should match on your website, your business profile on Google and other business directories. Mismatched details make them harder for search engines to trust.' },
        { heading: 'Reviews', body: 'Reviews affect both whether you show up and whether someone picks you. Ask happy customers right after a finished job, and reply to the reviews you get, the weaker ones too.' },
        { heading: 'Fast on a phone', body: 'People searching locally usually do it on a phone, often on the move. The website should load quickly, and the phone number and booking should be visible without hunting for them.' },
        { heading: 'Be patient', body: 'Nobody can promise a top spot on Google. Changes often take a few months to show, but the basics above make a difference over time.' },
      ],
    },
  },
]

export const getGuide = (slug) => guides.find((g) => g.slug === slug)
