import { REFERRAL_URL } from '../config.js';

/**
 * FAQ content for Network School landing page.
 * Each item has its own page at /faq/{slug} for programmatic SEO.
 * Tone: conversational and personal. Includes honest downsides.
 *
 * To add a new question, add an object with:
 *   id, slug (URL-friendly), question, answer, category,
 *   seo: { title, description, keywords }
 * Optional: ctaText, ctaUrl for apply-related FAQs
 */

export const FAQ_CATEGORIES = [
  { id: 'basics', label: 'Basics & Costs' },
  { id: 'travel', label: 'Travel & Location' },
  { id: 'working', label: 'Working & Learning' },
  { id: 'health', label: 'Health & Fitness' },
  { id: 'living', label: 'Living & Accommodation' },
  { id: 'application', label: 'Application & Admissions' },
  { id: 'community', label: 'Community & Culture' },
  { id: 'visas', label: 'Visas & Legal' },
];

export const faqItems = [
  // === BASICS ===
  {
    category: 'basics',
    slug: 'what-is-network-school',
    image: '/images/faq-illustrations/what-is-network-school.png',
    imageAlt: 'Typographic illustration: What is Network School?',
    question: 'What is Network School?',
    answer: "Network School (NS) is a startup society—sometimes called 'Society-as-a-Service'—where builders, founders, and remote workers live together on a campus near Singapore. Think of it as a first-mover community: you're surrounded by people building in tech, Web3, and AI. It's not a formal school with grades or credentials—it's more like a luxury hacker house meets co-living meets startup boot camp. The idea is to turn online communities into physical ones, and it's the live pilot for the broader 'Network State' thesis.",
    seo: {
      title: 'What is Network School? | NS FAQ 2026',
      description: 'Network School is a startup society and Society-as-a-Service for builders near Singapore. Learn what NS is—co-living, coworking, and community.',
      keywords: 'what is Network School, ns.com, startup society, Society-as-a-Service, Singapore',
    },
  },
  {
    category: 'travel',
    slug: 'where-located',
    image: '/images/faq-illustrations/where-located.png',
    imageAlt: 'Typographic illustration: Where is Network School located?',
    question: 'Where is Network School located?',
    answer: "NS is in Forest City, Malaysia—a $100 billion megaproject by China's Country Garden, built on artificial islands in the Johor Strait, about an hour from Singapore. The development was originally a luxury enclave for foreign investors, but market shifts left it largely empty. NS leases the undervalued luxury infrastructure—towering high-rises, marble lobbies, ocean views—at a fraction of what comparable facilities would cost in any major city. It's peaceful, green, and isolated, which is the point: fewer distractions, more focus. Singapore is close enough for conferences and city trips, and NS runs regular shuttle services.",
    seo: {
      title: 'Where is Network School Located? | Forest City, Malaysia',
      description: 'Network School is in Forest City, Malaysia—a $100B megaproject near Singapore. Luxury infrastructure, ocean views, quiet campus. Location details.',
      keywords: 'Network School location, Forest City Malaysia, NS campus, Singapore-Johor',
    },
  },
  {
    category: 'basics',
    slug: 'how-much-cost',
    image: '/images/faq-illustrations/how-much-cost.png',
    imageAlt: 'Typographic illustration: How much does Network School cost?',
    question: 'How much does Network School cost?',
    answer: "It's $1,500/month for a double room (shared) or $3,000/month for a single room. That covers housing, three meals a day, gym access, coworking, Starlink internet, room cleaning, laundry, and all courses and events. The café and vending machines are optional extras. For context, that's less than rent alone in SF or Singapore—and you're getting food, gym, and coworking bundled in. Day passes are also available if you're just visiting.",
    seo: {
      title: 'Network School Cost: $1,500–$3,000/month (2026)',
      description: 'Network School costs $1,500/month double or $3,000/month single. All-inclusive: housing, meals, gym, coworking, Starlink. Full pricing.',
      keywords: 'Network School cost, NS price, how much does Network School cost, ns.com pricing',
    },
  },
  {
    category: 'living',
    slug: 'whats-included',
    image: '/images/faq-illustrations/whats-included.png',
    imageAlt: "Typographic illustration: What's included in the fee?",
    question: "What's included in the fee?",
    answer: "Pretty much everything: accommodation (rooms upwards of 50 sqm with ocean-view balconies), three Blueprint meals a day, 24/7 gym, coworking spaces, Starlink high-speed internet, room cleaning, laundry, workshops, and community events. The café and vending machines are separate if you want extra coffee or snacks. You get access to meeting rooms, a library, yoga space, and the whole campus. Zero domestic friction—you don't cook, clean, or deal with logistics.",
    seo: {
      title: "What's Included at Network School? Housing, Meals, Gym & More",
      description: 'Network School includes 50sqm rooms, Blueprint meals, gym, coworking, Starlink, cleaning, laundry. Full list of NS amenities.',
      keywords: 'Network School included, NS amenities, what does Network School include, Starlink',
    },
  },
  {
    category: 'basics',
    slug: 'how-long',
    image: '/images/faq-illustrations/how-long.png',
    imageAlt: 'Typographic illustration: How long can I stay?',
    question: 'How long can I stay?',
    answer: "It's flexible. Some people come for a few weeks, others stay months or a full year. The program runs year-round. v1 was a 128-person 90-day popup. v2 expanded to 256 people for a full year. Cohort sizes now regularly hit 270+. There's no lock-in: you can leave on any day during your paid month if something comes up—you won't be penalized. Extending is easy, but extensions are only available in full-month increments (no partial-month add-ons). So if you want to stay longer, you commit to another full month at the current rate.",
    seo: {
      title: 'How Long Can You Stay at Network School? Duration Explained',
      description: 'Network School stays are flexible—weeks to a full year. v1: 128 people, v2: 256 people. No fixed commitment.',
      keywords: 'Network School duration, NS program length, how long to stay, v1 v2',
    },
  },
  // === APPLICATION & ADMISSIONS ===
  {
    category: 'application',
    slug: 'who-can-join',
    image: '/images/faq-illustrations/who-can-join.png',
    imageAlt: 'Typographic illustration: Who can join?',
    question: 'Who can join?',
    answer: "Founders, builders, digital nomads, Web3 folks, AI creators—anyone value-aligned and interested in building. NS specifically seeks three archetypes: (1) founders, engineers, designers, investors—the tech engine; (2) trainers, athletes, coaches—the fitness engine; (3) writers, artists, influencers using generative AI—the cultural engine. Age doesn't matter—there are teenage coders and fifty-something professionals. Members have seen an 80-year-old and a 7-year-old both have great experiences with daily walks and the community. Anyone fascinated by or curious about tech will fit in regardless of age. They look for fit, not credentials.",
    seo: {
      title: 'Who Can Join Network School? Eligibility & Requirements',
      description: 'Network School welcomes founders, builders, digital nomads, AI creators. Three archetypes sought. No age limit. How selective NS is.',
      keywords: 'who can join Network School, NS eligibility, Network School requirements',
    },
  },
  {
    category: 'application',
    slug: 'how-selective',
    image: '/images/faq-illustrations/how-selective.png',
    imageAlt: 'Typographic illustration: How selective is Network School?',
    question: 'How selective is Network School?',
    answer: "Very. During v1, NS received over 4,000 applications from 80+ countries for 128 spots—a 3.2% acceptance rate, comparable to Harvard or Stanford. They filter for value alignment and raw intellectual potential, not credentials. A referral can help but isn't required. If you're genuinely building something, that matters more than a polished resume.",
    seo: {
      title: 'How Selective is Network School? 3.2% Acceptance Rate',
      description: 'Network School v1 had a 3.2% acceptance rate—4,000+ apps from 80 countries for 128 spots. Value alignment over credentials.',
      keywords: 'Network School acceptance rate, NS selective, how hard to get in',
    },
  },
  {
    category: 'application',
    slug: 'how-to-apply',
    image: '/images/faq-illustrations/how-to-apply.png',
    imageAlt: 'Typographic illustration: How do I apply?',
    question: 'How do I apply?',
    answer: "Apply online at ns.com. Standard admission evaluates value alignment and potential. For the Fellowship track, there's a rigorous 'Form, Zoom, Room, Boom' pipeline: online application, video interview, in-person pencil-and-paper exam at the campus (to AI-proof the process), then acceptance. Be genuine about what you're building—that matters more than a polished resume.",
    ctaText: 'Apply now to join the next cohort',
    ctaUrl: REFERRAL_URL,
    seo: {
      title: 'How to Apply to Network School | Step-by-Step',
      description: 'Apply to Network School at ns.com. Standard admission + Fellowship pipeline (Form, Zoom, Room, Boom). Apply now.',
      keywords: 'how to apply Network School, NS application, apply ns.com, Form Zoom Room Boom',
    },
  },
  {
    category: 'application',
    slug: 'application-pipeline',
    image: '/images/faq-illustrations/application-pipeline.png',
    imageAlt: 'Typographic illustration: What is the "Form, Zoom, Room, Boom" process?',
    question: 'What is the "Form, Zoom, Room, Boom" process?',
    answer: "It's the four-stage pipeline for the Fellowship and long-term residencies. Form: online application with screening test and references. Zoom: video interview assessing integrity and agency. Room: in-person, pencil-and-paper exam at the campus—no digital aids, to confirm your raw cognitive abilities. Boom: acceptance and relocation. Standard admission is simpler (mainly Form + review), but the Fellowship pipeline is deliberately rigorous.",
    seo: {
      title: 'Form, Zoom, Room, Boom: NS Application Pipeline',
      description: 'Network School Fellowship uses a 4-stage pipeline: Form, Zoom, Room, Boom. Online app, video interview, in-person exam, acceptance.',
      keywords: 'Form Zoom Room Boom, NS application process, Network School Fellowship application',
    },
  },
  {
    category: 'application',
    slug: 'referral-needed',
    image: '/images/faq-illustrations/referral-needed.png',
    imageAlt: 'Typographic illustration: Do I need a referral to get in?',
    question: 'Do I need a referral to get in?',
    answer: "No, but it can help. Applications are reviewed on their own; a referral might give you a nudge. If you know someone who's been, ask them. If not, apply anyway—your story and what you're building matter more.",
    seo: {
      title: 'Do You Need a Referral for Network School?',
      description: 'Referral not required for Network School but can help. Apply on merit. Value alignment matters most.',
      keywords: 'Network School referral, NS referral needed, apply NS',
    },
  },
  // === THE FOUR PILLARS ===
  {
    category: 'working',
    slug: 'learn-earn-burn',
    image: '/images/faq-illustrations/learn-earn-burn.png',
    imageAlt: 'Typographic illustration: What is Learn, Earn, Burn, and Fun?',
    question: 'What is Learn, Earn, Burn, and Fun?',
    answer: "The four pillars of NS—and they call the whole thing 'Willpower-as-a-Service.' Learn: pick up frontier skills—AI, crypto, DeFi, or whatever you're into, via two tracks (Power Users and Programmers). Earn: work remotely, build your thing, earn crypto bounties. Burn: gym, HIIT classes, fitness combine—NS partnered with Bryan Johnson's Blueprint protocol. Fun: community dinners, events, spontaneous hangouts. The environment is engineered so peak performance is the path of least resistance.",
    seo: {
      title: 'Learn, Earn, Burn, Fun: Network School Pillars Explained',
      description: 'Learn, Earn, Burn, Fun are the four pillars. Willpower-as-a-Service. AI/crypto learning, bounties, Blueprint fitness, community.',
      keywords: 'Learn Earn Burn Fun, Network School pillars, Willpower-as-a-Service',
    },
  },
  {
    category: 'working',
    slug: 'typical-day',
    image: '/images/faq-illustrations/typical-day.png',
    imageAlt: 'Typographic illustration: What\'s a typical day at Network School?',
    question: "What's a typical day at Network School?",
    answer: "Morning: wake up, hit the gym or a HIIT class (7 AM, 11 AM, or 5 PM slots), Blueprint breakfast. Then head to the coworking space—everyone's doing their own thing. Afternoon: optional sessions (vibe coding, book club, DeFi 101, bug bounty hunting, whatever members teach), side projects, or deep work. Evening: community dinner, maybe a small event or just hanging out. Alcohol is minimal; caffeine is the drug of choice. It's structured but flexible—you design your day.",
    seo: {
      title: "A Typical Day at Network School | NS Daily Schedule",
      description: 'Morning gym, coworking, optional classes, community dinner. What a typical day at Network School looks like. Flexible schedule.',
      keywords: 'Network School typical day, NS daily schedule, what to expect',
    },
  },
  // === LEARNING & EARNING ===
  {
    category: 'working',
    slug: 'is-it-a-school',
    image: '/images/faq-illustrations/is-it-a-school.png',
    imageAlt: 'Typographic illustration: Is Network School actually a school?',
    question: 'Is Network School actually a school?',
    answer: "Not in the traditional sense. No fixed curriculum, no grades, no paper degrees. Members teach each other—one-hour seminars on whatever they're into. The staff runs a few core sessions, but most learning is peer-to-peer. Instead of diplomas, you earn 'cryptocredentials'—NFTs that prove you completed tasks and populate your profile on GitHub or Replit. 'School' is more of a brand than a description.",
    seo: {
      title: 'Is Network School a Real School? Curriculum & Learning',
      description: "NS isn't a formal school—no grades, no degrees. Peer-to-peer learning, cryptocredentials (NFTs). How NS education works.",
      keywords: 'Network School school, NS curriculum, cryptocredentials, is NS a school',
    },
  },
  {
    category: 'working',
    slug: 'learning-tracks',
    image: '/images/faq-illustrations/learning-tracks.png',
    imageAlt: 'Typographic illustration: What learning tracks are available?',
    question: 'What learning tracks are available?',
    answer: "Two main tracks in the v2 program: Power Users learn to orchestrate AI and crypto tools to automate complex workflows—think combining ChatGPT, Midjourney, and Solana into a product. Programmers go deep: intensive hackathons using specific APIs like Solana, Ollama, and Midjourney to build deployable apps. Plus member-led sessions on anything from filmmaking to fundraising.",
    seo: {
      title: 'Network School Learning Tracks: Power Users & Programmers',
      description: 'NS v2 has two tracks: Power Users (AI/crypto orchestration) and Programmers (deep hackathons with Solana, Ollama). Plus member-led classes.',
      keywords: 'Network School learning, NS tracks, Power Users Programmers, AI crypto',
    },
  },
  {
    category: 'working',
    slug: 'cryptocredentials',
    image: '/images/faq-illustrations/cryptocredentials.png',
    imageAlt: 'Typographic illustration: What are cryptocredentials?',
    question: 'What are cryptocredentials?',
    answer: "Non-transferable NFTs that prove you completed learning modules or tasks at NS. Think of them as blockchain-verified certificates—they automatically populate your 'cryptoresume' on developer platforms like GitHub or Replit. Instead of a paper diploma, you build a verifiable portfolio of work that investors and employers can check. Also: you earn 'proof-of-workout' NFTs from gym sessions.",
    seo: {
      title: 'What are Cryptocredentials? NS NFT Certificates',
      description: 'Cryptocredentials are non-transferable NFTs proving NS task completion. Populate your cryptoresume on GitHub/Replit. Blockchain-verified.',
      keywords: 'cryptocredentials, Network School NFT, cryptoresume, proof-of-workout',
    },
  },
  {
    category: 'working',
    slug: 'earning-bounties',
    image: '/images/faq-illustrations/earning-bounties.png',
    imageAlt: 'Typographic illustration: Can I earn money while at Network School?',
    question: 'Can I earn money while at Network School?',
    answer: "Yes. NS offers daily $1,000 crypto bounties for completing tasks—code contributions, bug bounties, AI content, solving technical challenges. Some people offset their entire tuition this way. The campus also attracts visiting VCs and investors who come specifically to scout talent, and programs like Monad Founder Residency distribute incentives directly. Between bounties, remote work, and networking with capital, there are real earning opportunities.",
    seo: {
      title: 'Earn Money at Network School: $1,000 Daily Bounties',
      description: 'Network School offers daily $1,000 crypto bounties. Bug bounties, code contributions, visiting VCs. Earn while you learn at NS.',
      keywords: 'Network School earn money, NS bounties, crypto bounties, earn at NS',
    },
  },
  {
    category: 'working',
    slug: 'fellowship',
    image: '/images/faq-illustrations/fellowship.png',
    imageAlt: 'Typographic illustration: What is the NS Fellowship?',
    question: 'What is the NS Fellowship?',
    answer: "$100K. 100 fellows. 1 year. The Network School Fellowship is for founders and creators from around the world. Anyone from anywhere can apply online in ten minutes. If accepted, you will receive $100k in funding for a new or existing venture. Fellows will relocate to our Network School campus on an island near Singapore for one year to focus on their projects and lock in.",
    ctaText: 'Apply for Fellowship',
    ctaUrl: 'https://ns.com/fellowship',
    seo: {
      title: 'Network School Fellowship: $100K Startup Funding',
      description: 'The Network School Fellowship is for founders and creators. Receive $100k in funding to relocate to NS campus for one year to focus on your project.',
      keywords: 'Network School Fellowship, $100K funding, NS startup, Fellowship application, founder funding',
    },
  },
  // === FITNESS & FOOD ===
  {
    category: 'health',
    slug: 'food',
    image: '/images/faq-illustrations/food.png',
    imageAlt: 'Typographic illustration: What\'s the food like?',
    question: "What's the food like?",
    answer: "Three Blueprint-inspired meals are included daily. Breakfast runs 7–10 AM at the hotel lobby—buffet style. Lunch is a packed boxed meal (dry-style) that you can pick up around 12–2 PM whenever you want to eat; it includes nutty potato and banana pudding, which are delicious and high in protein. Dinner is a hot buffet from 5:30–7:30 PM. There are solid options for both vegetarians and non-vegetarians. Everything is optimized for longevity and cognitive performance—lean proteins, vegetables, nuts, berries. You can check full nutrition facts at ns.com/nutrition. Some people love it; others find it bland compared to their usual diet. Beyond the included meals, the NS Café lets you order extras online at ns.com/food and pick up at the counter. Water stations are throughout the campus, and you can buy NS bottles and mugs at the café. If you want groceries, there are nearby stores that accept GrabPay and foreign credit cards (excluding Amex), plus the hotel provides bottled water.",
    seo: {
      title: 'Network School Food: Blueprint Meals, Café & Groceries',
      description: 'NS includes 3 Blueprint meals daily: buffet breakfast, boxed lunch, hot dinner. NS Café for extras. Groceries nearby. Full food guide.',
      keywords: 'Network School food, NS meals, Blueprint diet NS, NS Café, NS nutrition',
    },
  },
  {
    category: 'health',
    slug: 'gym',
    image: '/images/faq-illustrations/gym.png',
    imageAlt: 'Typographic illustration: What\'s the gym like?',
    question: "What's the gym like?",
    answer: "Built from scratch for NS, partnered with Bryan Johnson's Blueprint program. Well-equipped with weights, cardio, and space for group classes. HIIT sessions run a few times daily (7 AM, 11 AM, 5 PM). They run a 'fitness combine'—AI-powered measurement of push-ups, balance, grip strength, body composition, and VO2 max at the start and end of your stay. You earn proof-of-workout NFTs for completing sessions. A lot of people say the gym was a big reason they came.",
    seo: {
      title: 'Network School Gym: Blueprint, HIIT, Fitness Combine',
      description: 'NS gym: built from scratch, Blueprint partnership, HIIT classes, AI body composition tracking, proof-of-workout NFTs. Full review.',
      keywords: 'Network School gym, NS fitness, HIIT, fitness combine, Blueprint gym',
    },
  },
  {
    category: 'health',
    slug: 'ns-combine',
    image: '/images/faq-illustrations/gym.png',
    imageAlt: 'Typographic illustration: What is the NS Combine?',
    question: 'What is the NS Combine?',
    answer: "It's a comprehensive fitness test usually done on the first or second day of your stay at NS. Various metrics are measured to track your health and performance. Common measurements include Weight, Body Fat Percentage, Grip Strength, Push-ups, Vertical Jump, Medicine Ball Toss, Single Leg Balance, Sit-to-Stand reps, Pull-ups, and cardiovascular endurance via The Beep Test. The combine gives you a baseline for improvement during your stay.",
    seo: {
      title: 'What is the NS Combine? Fitness Test at Network School',
      description: 'The NS Combine is a comprehensive fitness test measuring metrics like grip strength, push-ups, body fat, and cardiovascular endurance on campus.',
      keywords: 'NS Combine, Network School fitness test, Proof of Workout, Blueprint NS, gym metrics',
    },
  },
  {
    category: 'health',
    slug: 'sports-availability',
    image: '/images/faq-illustrations/sports-availability.png',
    imageAlt: 'Typographic illustration: What sports are available at Network School?',
    question: 'What sports are available at Network School?',
    answer: "NS has solid sports options. On campus, there's a very nice table tennis table—great for quick games. Inside the gym, the space is spacious enough that people set up nets and play badminton regularly; it's a popular choice. Within about 100 meters of NS there's a basketball court with infrastructure to put up nets—some members use it for pickleball too. There's a massive swimming pool very close and easily accessible, plus at least one more pool nearby. You can also bring your own road bike or bicycle—members do ride around Forest City, and the flat terrain makes it easy. Combined with the gym (weights, cardio, HIIT), you've got table tennis, badminton, basketball, pickleball, swimming, and cycling all within reach.",
    seo: {
      title: 'Sports at Network School: TT, Badminton, Basketball, Pickleball, Swimming',
      description: 'NS sports: table tennis, badminton in gym, basketball court and pickleball within 100m, swimming pools nearby. Full sports guide.',
      keywords: 'Network School sports, NS table tennis, badminton NS, basketball pickleball swimming NS',
    },
  },
  {
    category: 'health',
    slug: 'haven',
    image: '/images/faq-illustrations/haven.png',
    imageAlt: 'Typographic illustration: What is NS Haven?',
    question: 'What is NS Haven?',
    answer: "Haven is NS's dedicated wellness space—think of it as 'heart infrastructure.' The gym is for the body, the library and coworking are for the head, and Haven is for the heart. It's a soft space for mindfulness, meditation, yoga, and just unwinding. It comes equipped with lush carpets, a massage chair (bookable), a large couch, meditation cushions, aromatherapy, and custom lighting and audio setups. After days of intense building and locking in, Haven is where people go to decompress and rebalance. Members also run sessions there—sound baths, somatic experiences, guided meditation.",
    seo: {
      title: 'NS Haven: Network School Wellness & Meditation Space',
      description: 'NS Haven is a wellness space for meditation, yoga, massage chair, aromatherapy. Heart infrastructure for balance at Network School.',
      keywords: 'NS Haven, Network School wellness, meditation NS, massage chair, yoga NS',
    },
  },
  {
    category: 'health',
    slug: 'alcohol',
    image: '/images/faq-illustrations/alcohol.png',
    imageAlt: 'Typographic illustration: Is alcohol common at Network School?',
    question: 'Is alcohol common at Network School?',
    answer: "Minimal. The longevity and fitness culture means alcohol is generally frowned upon as counterproductive. Caffeine is the dominant substance—long hours, deep technical debates, and lots of coffee. If you're looking for a party scene, this isn't it. The geographic isolation reinforces the heads-down vibe during the week. Weekends in Singapore offer more variety if you want it.",
    seo: {
      title: 'Alcohol at Network School: Culture & Social Life',
      description: 'Alcohol is minimal at NS—longevity culture, caffeine preferred. No party scene. Honest take on NS social life.',
      keywords: 'Network School alcohol, NS social life, drinking at NS',
    },
  },
  // === ROOMS & INFRASTRUCTURE ===
  {
    category: 'living',
    slug: 'rooms',
    image: '/images/faq-illustrations/rooms.png',
    imageAlt: 'Typographic illustration: What are the rooms like?',
    question: 'What are the rooms like?',
    answer: "All rooms are at the Forest City Marina Hotel and come with a private bathroom with toiletries, free WiFi, air conditioning, flat-screen TV, in-room safe, hair dryer, electric kettle, mini-fridge, and a balcony or opening windows. There are two types: Twin Bedrooms for NS Basic (shared with a roommate—two separate beds) and King Bedrooms reserved for couples or those upgrading to a private room. Bathrooms are the same quality in both. If you're bringing a child, an extra small bed is available for a small monthly fee—just ask NS staff. Long-term residents may get two-bedroom apartments with more space. The whole setup is designed to eliminate domestic friction so you can focus entirely on building.",
    seo: {
      title: 'Network School Rooms: Twin, King, Balcony, Mini-Fridge & More',
      description: 'NS rooms at Marina Hotel: Twin or King, private bathroom, WiFi, AC, TV, safe, kettle, mini-fridge, balcony. Kids bed available. Full details.',
      keywords: 'Network School rooms, NS accommodation, Marina Forest Hotel, NS room types, twin king',
    },
  },
  {
    category: 'living',
    slug: 'cleaning-laundry',
    image: '/images/faq-illustrations/cleaning-laundry.png',
    imageAlt: 'Typographic illustration: Is room cleaning and laundry included?',
    question: 'Is room cleaning and laundry included?',
    answer: "Room cleaning is included in the monthly fee. For laundry, there's a wash-and-dry service that collects from the hotel lobby at 8:45 AM daily (except Sunday) and returns the next day at the same time. Pricing is affordable—around RM 28–58 per load depending on size (14kg or 28kg) and whether you mix or separate darks and lights. Detergent is included. You can also choose water temperature and dryer heat level. It's not free, but it's cheap and convenient—you drop it off, pick it up, done. Zero domestic friction is the whole idea.",
    seo: {
      title: 'Room Cleaning & Laundry at Network School: Pricing & Schedule',
      description: 'NS room cleaning included. Laundry service daily at 8:45 AM (except Sunday), RM 28–58/load. Wash, dry, detergent included. Full details.',
      keywords: 'Network School cleaning, NS laundry, laundry service NS, room service NS',
    },
  },
  {
    category: 'living',
    slug: 'pods-offices',
    image: '/images/faq-illustrations/pods-offices.png',
    imageAlt: 'Typographic illustration: Are there private pods or offices at Network School?',
    question: 'Are there private pods or offices at Network School?',
    answer: "Yes. If the open coworking space isn't enough, NS offers private workspaces. There's an hourly pod in the NS Café—first come, first served, book one-hour slots via a QR code on the pod itself. Good for private calls or quick meetings. For something more permanent, you can rent a Private NS Pod ($200/month—table and monitor) or a Private NS Office ($400/month—standing desk, office chair, and monitor). Pods are in the café area; offices are in the library and coworking spaces. These are on top of the base membership fee, but worth it if you need a locked-in, dedicated workspace.",
    seo: {
      title: 'Network School Pods & Offices: $200–$400/month Private Workspaces',
      description: 'NS offers private pods ($200/mo) and offices ($400/mo) with desks and monitors. Hourly pods free in the café. Full workspace options.',
      keywords: 'Network School office, NS pods, private workspace NS, coworking NS, NS office rental',
    },
  },
  {
    category: 'living',
    slug: 'internet',
    image: '/images/faq-illustrations/internet.png',
    imageAlt: 'Typographic illustration: How fast is the internet at Network School?',
    question: 'How fast is the internet at Network School?',
    answer: "Starlink-powered—100 to 400 Mbps download, with latency as low as 25 to 60 milliseconds. That's fast enough for 4K video conferencing, continuous code deployment, cloning large GitHub repos, and even high-frequency trading. Starlink bypasses the local terrestrial infrastructure limitations of Forest City. It's reliable (99.9% uptime) and weather-resilient. You won't miss your home internet.",
    seo: {
      title: 'Network School Internet: Starlink, 100–400 Mbps',
      description: 'NS uses Starlink: 100–400 Mbps, 25–60ms latency, 99.9% uptime. Fast enough for video calls, code deployment, trading.',
      keywords: 'Network School internet, NS Starlink, WiFi Network School, internet speed',
    },
  },
  // === COMMUNITY & CULTURE ===
  {
    category: 'community',
    slug: 'who-attends',
    image: '/images/faq-illustrations/who-attends.png',
    imageAlt: 'Typographic illustration: What kind of people attend?',
    question: 'What kind of people attend?',
    answer: "Roughly 80% of attendees come from AI, crypto, or content-creation backgrounds—those are the dominant communities. The rest includes remote workers, founders in other verticals, former military, academic professors, and teenage coders. Very international—70+ nationalities, with strong representation from India, the US, Europe, Southeast Asia, and the Middle East. Demographics skew male (around 80%). There's a mix of temporary visitors (one month to test it out) and semi-permanent residents (3–12 months); digital nomads show up too but get quickly integrated through the constant events and community programming. It's a cultural smorgasbord with a strong tech-builder bias.",
    seo: {
      title: 'Who Attends Network School? Demographics & Community',
      description: 'NS attracts founders, nomads, Web3 builders from 70+ countries. Skews male. Former military to teenage coders. Who you will meet.',
      keywords: 'Network School demographics, who attends NS, NS community',
    },
  },
  {
    category: 'community',
    slug: 'dark-talent',
    image: '/images/faq-illustrations/dark-talent.png',
    imageAlt: 'Typographic illustration: What is "Dark Talent"?',
    question: 'What is "Dark Talent"?',
    answer: "Like dark matter in physics—it's everywhere but invisible to traditional systems. Dark talent is the massive global pool of high-potential individuals disconnected from elite institutions. Indian engineers, African founders, American Midwest makers, Latin American libertarians—people with raw ability who never had a shot at Stanford or YC. NS exists specifically to surface them. Traditional universities sort by credentials; NS sorts by capability and drive.",
    seo: {
      title: 'What is Dark Talent? Network School\'s Core Mission',
      description: 'Dark talent: high-potential people disconnected from elite institutions. NS exists to surface them. Indian engineers, African founders, global builders.',
      keywords: 'dark talent, Network School mission, NS dark talent, Balaji dark talent',
    },
  },
  {
    category: 'community',
    slug: 'gender-ratio',
    image: '/images/faq-illustrations/gender-ratio.png',
    imageAlt: 'Typographic illustration: What\'s the gender ratio?',
    question: "What's the gender ratio?",
    answer: "Honestly, it's mostly guys—around 80% male. That comes with a merit-based admission system that doesn't factor in demographics. Some single guys have mentioned the ratio and head to Singapore on weekends. It's something to be aware of if it matters to you. The community is working on it, but it's a known dynamic.",
    seo: {
      title: 'Network School Gender Ratio: What to Expect',
      description: 'Network School is around 80% male. Merit-based admission. Honest take on the gender ratio at NS.',
      keywords: 'Network School gender ratio, NS demographics, male female NS',
    },
  },
  {
    category: 'community',
    slug: 'culture',
    image: '/images/faq-illustrations/culture.png',
    imageAlt: 'Typographic illustration: What\'s the culture like?',
    question: "What's the culture like?",
    answer: "'Win and help win'—people share knowledge, teach classes, support each other. About 60% of members run sessions for others. There's a 'leave NS better than you found it' ethos. The ideological baseline is technocapitalism: belief in technological acceleration, free-market principles, and internationalism. That said, like any community, there are a few less social types. Overall the vibe is generous, collaborative, and intensely focused.",
    seo: {
      title: 'Network School Culture: Win and Help Win',
      description: 'NS culture: win and help win, technocapitalist, collaborative. 60% of members teach. What to expect at NS.',
      keywords: 'Network School culture, NS community vibe, win and help win, technocapitalism',
    },
  },
  {
    category: 'community',
    slug: 'ethnic-cliques',
    image: '/images/faq-illustrations/ethnic-cliques.png',
    imageAlt: 'Typographic illustration: Are there cliques or is it hard to break in?',
    question: 'Are there cliques or is it hard to break in?',
    answer: "Some ethnic and language-based groups do form—especially among Hindi and Mandarin speakers. Even extroverts can find it tricky to break into those circles. The flip side: 70+ nationalities, so it's still a UN of sorts. Cliques tend to form more among short-termers; people who stay longer usually mix more. It's something to be aware of, not a dealbreaker.",
    seo: {
      title: 'Network School Cliques: Community Dynamics',
      description: 'NS has some ethnic and language cliques. Honest take on breaking in and mixing. 70+ nationalities represented.',
      keywords: 'Network School cliques, NS community dynamics, breaking in',
    },
  },
  {
    category: 'community',
    slug: 'political',
    image: '/images/faq-illustrations/political.png',
    imageAlt: 'Typographic illustration: Is Network School political?',
    question: 'Is Network School political?',
    answer: "No. It's oriented toward the private sector—building companies, not governments. You might hear about network states as a concept, but there's no political organizing or activism. It's teaching by example: the living community is the lesson. The ideological filter is technocapitalist and internationalist, but the output is startups, not policy.",
    seo: {
      title: 'Is Network School Political? Private Sector Focus',
      description: 'NS is not political—focused on building, not activism. Technocapitalist, internationalist ethos. What NS is and is not.',
      keywords: 'Network School political, NS politics, is NS political',
    },
  },
  // === LOGISTICS & LOCATION ===
  {
    category: 'travel',
    slug: 'which-airport',
    image: '/images/faq-illustrations/which-airport.png',
    imageAlt: 'Typographic illustration: Which airport should I fly into for Network School?',
    question: 'Which airport should I fly into for Network School?',
    answer: "You have three main options. Singapore Changi is the most connected and best if you have (or can get) a Singapore visa. NS runs a bus from Changi to Forest City on the 1st of every month—ideal for first-time visitors. Johor Bahru (Senai) is about 45 minutes by bus but has fewer flight options; good if you want to avoid a Singapore visa. Kuala Lumpur is a longer journey but works if you can't get a Singapore visa or Johor Bahru flights don't suit you. Grab and cab providers can pick you up from Singapore (some only from the city, not the airport). Cross-border buses run frequently and are the most structured way to reach NS. If you're coming via Singapore for the first time, the NS-organized bus from Changi on the 1st is usually the smoothest option.",
    seo: {
      title: 'Which Airport for Network School? Singapore, Johor Bahru, Kuala Lumpur',
      description: 'Best airports for NS: Singapore Changi, Johor Bahru, Kuala Lumpur. NS bus from Changi on 1st of month. Visa and transport options.',
      keywords: 'Network School airport, fly to NS, Singapore airport NS, Johor Bahru Forest City',
    },
  },
  {
    category: 'travel',
    slug: 'singapore-transport',
    image: '/images/faq-illustrations/singapore-transport.png',
    imageAlt: 'Typographic illustration: How do I get to Singapore from Network School?',
    question: 'How do I get to Singapore from Network School?',
    answer: "NS runs regular shuttle services. The bus stand is about a 5-minute walk from NS; buses run roughly every hour to and from Singapore. One-way cost is around 5 MYR to Singapore and around 5 SGD from Singapore to Forest City. The bus drops you at Singapore's MRT, so onward connectivity is excellent. But be realistic: plan 1.5 to 2 hours each way. You disembark at Malaysian checkpoint, clear exit immigration, cross the bridge, clear Singapore entry immigration, then transit onward. There are also cross-border buses (CW6, FC1) connecting to Singapore's MRT. It works for Token2049, conferences, or weekend trips—but daily commuting is impractical due to double border crossing.",
    seo: {
      title: 'Network School to Singapore: Shuttle, Border Crossing & Time',
      description: 'NS shuttles to Singapore: 1.5–2 hours with double immigration. Buses CW6/FC1 to MRT. Weekend trips, not daily commute.',
      keywords: 'Network School Singapore, NS shuttle, Forest City to Singapore, border crossing',
    },
  },
  {
    category: 'travel',
    slug: 'getting-around',
    image: '/images/faq-illustrations/getting-around.png',
    imageAlt: 'Typographic illustration: How do I get around Forest City?',
    question: 'How do I get around Forest City?',
    answer: "Forest City is only about 1–2 km end to end, so most people walk everywhere day-to-day. Some members bring bikes or use shared ones for quicker trips. The core NS facilities—Coworking, Lobby, Café, and Gym—are all within a few minutes' walk. For anything outside Forest City, Grab is the go-to: trips to Johor Bahru for shopping, weekend getaways to Singapore, Kuala Lumpur, or nearby islands are all common. A few residents have cars, but most don't need one. Public transport is limited, so Grab is essentially your taxi service. Bring some Malaysian ringgit for Grab rides and local errands.",
    seo: {
      title: 'Getting Around Forest City at Network School',
      description: 'Forest City: Grab for rides, limited public transit. NS campus is walkable. How to get around. Bring ringgit.',
      keywords: 'Forest City transport, Network School getting around, Grab Malaysia',
    },
  },
  {
    category: 'living',
    slug: 'restaurants-shops-nearby',
    image: '/images/faq-illustrations/restaurants-shops-nearby.png',
    imageAlt: 'Typographic illustration: What restaurants and shops are near Network School?',
    question: 'What restaurants and shops are near Network School?',
    answer: "Within walking distance you'll find Thai restaurants, a bar and pub with pool, Singha, and places for Indian, Korean, and Japanese food. There's a good coffee shop nearby. Multiple 24/7 convenience stores within ~200m stock snacks, toiletries, and everyday items. Grab is available 24/7. Online delivery and e-commerce work normally. You won't run short of options.",
    seo: {
      title: 'Restaurants & Shops Near Network School | Forest City',
      description: 'Thai, Indian, Korean, Japanese food, bar, coffee shop, 24/7 stores near NS. Grab and delivery available. What\'s nearby.',
      keywords: 'Network School restaurants, Forest City food, NS nearby shops, convenience stores NS',
    },
  },
  {
    category: 'living',
    slug: 'forest-city-isolated',
    image: '/images/faq-illustrations/forest-city-isolated.png',
    imageAlt: 'Typographic illustration: Is Forest City isolated? Can I get food delivery and groceries?',
    question: 'Is Forest City isolated? Can I get food delivery and groceries?',
    answer: "No. Forest City isn't isolated. Grab runs 24/7. You can order food via apps and use e-commerce for groceries and other items. Multiple 24/7 convenience stores are within ~200m of NS for snacks, toiletries, and everyday essentials. You won't feel cut off.",
    seo: {
      title: 'Is Forest City Isolated? Delivery, Grab & Convenience at NS',
      description: "Forest City isn't isolated. Grab 24/7, food delivery, e-commerce, 24/7 stores within 200m of NS. Full logistics guide.",
      keywords: 'Forest City isolated, NS delivery, Grab Forest City, convenience stores NS',
    },
  },
  {
    category: 'travel',
    slug: 'forest-city',
    image: '/images/faq-illustrations/forest-city.png',
    imageAlt: 'Typographic illustration: Is Forest City a ghost town?',
    question: 'Is Forest City a ghost town?',
    answer: "It's a developing area—modern buildings, lots of green space, but not densely populated. Many buildings are empty. Media has called it a 'ghost town,' but it's not dirty or chaotic—and it's not spooky or abandoned. Thousands of people live in Forest City. Staff maintain everything. Chinese signage is everywhere (the original target market). NS has created a lively pocket within it: Thai restaurants, a bar and pub with pool, Singha, Indian/Korean/Japanese food, a good coffee shop within walking distance, and multiple 24/7 convenience stores within ~200m for snacks, toiletries, and FMCG. Grab runs 24/7; online delivery and e-commerce work normally. New shops are opening. If you want a bustling city, this isn't it. If you want focus and fewer distractions, it works.",
    seo: {
      title: 'Is Forest City a Ghost Town? Network School Location Honest Take',
      description: 'Forest City is developing and quiet—media says ghost town. Modern, maintained. NS creates a lively community within it. Honest take.',
      keywords: 'Forest City ghost town, Network School location, Forest City Malaysia, Country Garden',
    },
  },
  {
    category: 'travel',
    slug: 'sim-card-internet',
    image: '/images/faq-illustrations/internet.png',
    imageAlt: 'Typographic illustration: Internet and connectivity at Network School',
    question: 'Do I get a SIM card or mobile data at Network School?',
    answer: "Yes. When you arrive at Network School, you will be given a local physical SIM card that usually has enough data to last for a month. If you want connectivity immediately upon landing in Singapore or Malaysia, you can buy a digital eSIM at the airport, but rest assured that NS does provide a physical SIM card with internet access.",
    seo: {
      title: 'SIM Cards & Mobile Data at Network School',
      description: 'Network School provides a local SIM card with a month of data upon arrival. You can also purchase eSIMs at the airport for immediate connectivity.',
      keywords: 'Network School SIM card, NS mobile data, internet Forest City, eSIM Malaysia',
    },
  },
  {
    category: 'working',
    slug: 'crypto-adoption',
    image: '/images/faq-illustrations/crypto-adoption.png',
    imageAlt: 'Typographic illustration: How much crypto is used at Network School?',
    question: 'How much crypto is used at Network School?',
    answer: "Less than you might expect for day-to-day life. You get an NFT in your Solana wallet when accepted, you can pay for café items with crypto, bounties are paid in crypto, and you earn proof-of-workout NFTs. But rent and meals aren't paid in crypto. The Web3 vibe is in the people, ideas, and programs (Solana Superteam, Monad Residency)—the daily infrastructure is still mostly traditional.",
    seo: {
      title: 'Crypto at Network School: NFTs, Bounties & Reality',
      description: 'NS uses crypto for NFTs, bounties, café payments. But rent and meals are traditional. Honest take on crypto adoption at NS.',
      keywords: 'Network School crypto, NS Web3, crypto adoption NS, Solana NS',
    },
  },
  // === VISAS & LEGAL ===
  {
    category: 'visas',
    slug: 'visa-requirements',
    image: '/images/faq-illustrations/visa-requirements.png',
    imageAlt: 'Typographic illustration: Do I need a visa?',
    question: 'Do I need a visa?',
    answer: "Most nationalities use a standard tourist visa for Malaysia. Indian nationals get visa-free entry for up to 30 days (through Dec 2026). Others use eVisa or eNTRI programs (15–30 days). For longer stays, the DE Rantau Digital Nomad Pass is the best option—3 to 12 months, renewable to 24. Check your country's requirements for both Malaysia and Singapore.",
    seo: {
      title: 'Network School Visa: Malaysia Tourist, eVisa & DE Rantau',
      description: 'NS visa options: tourist visa (30 days), eVisa, DE Rantau nomad pass (3–12 months). India visa-free. Full guide.',
      keywords: 'Network School visa, NS visa requirements, Malaysia visa, DE Rantau',
    },
  },
  {
    category: 'visas',
    slug: 'de-rantau',
    image: '/images/faq-illustrations/de-rantau.png',
    imageAlt: 'Typographic illustration: What is the DE Rantau Digital Nomad Pass?',
    question: 'What is the DE Rantau Digital Nomad Pass?',
    answer: "Malaysia's official digital nomad visa. Gives you 3 to 12 months of legal residency, renewable up to 24 months total. Requires $24,000/year income and costs ~MYR 1,000 (plus MYR 500 per dependent). Your spouse and kids can come too. It lets you work remotely legally—no visa runs, no anxiety. Way better than juggling 30-day tourist stamps. The income threshold is low compared to European or Japanese nomad visas.",
    seo: {
      title: 'DE Rantau Digital Nomad Pass for Network School',
      description: 'DE Rantau: Malaysia digital nomad visa, 3–12 months, $24K income req, MYR 1,000 cost. Dependents allowed. Best option for long NS stays.',
      keywords: 'DE Rantau, Malaysia digital nomad visa, Network School visa, long-term stay',
    },
  },
  {
    category: 'visas',
    slug: 'visa-runs',
    image: '/images/faq-illustrations/visa-runs.png',
    imageAlt: 'Typographic illustration: Are visa runs viable?',
    question: 'Are visa runs viable?',
    answer: "Technically possible—exit to Singapore, re-enter Malaysia for a fresh stamp. But risky. Immigration uses advanced tracking, and a pattern of repeated border crossings to extend tourist status is illegal. You can get flagged, interrogated, denied entry, or banned. The DE Rantau pass is the safer, legal option for anything beyond a single 30-day stay. Don't rely on visa runs.",
    seo: {
      title: 'Visa Runs at Network School: Risks & Better Options',
      description: 'Visa runs from NS to Singapore are risky—immigration tracks patterns. DE Rantau is the safer legal option. Honest advice.',
      keywords: 'visa runs Malaysia, Network School visa run, Malaysia Singapore border',
    },
  },
  {
    category: 'visas',
    slug: 'health-insurance',
    image: '/images/faq-illustrations/health-insurance.png',
    imageAlt: 'Typographic illustration: Do I need health insurance?',
    question: 'Do I need health insurance?',
    answer: "Yes, for longer stays. EMGS-approved plans cost $100–$210/year with low deductibles ($5–$11 per visit). Providers like Great Eastern Takaful and Etiqa offer inpatient, outpatient, and emergency evacuation coverage. Malaysia has excellent healthcare infrastructure—it's a top medical tourism destination. Short-term visitors can use international travel insurance. Either way, don't come uninsured.",
    seo: {
      title: 'Health Insurance for Network School: $100–$210/year',
      description: 'NS health insurance: EMGS-approved plans $100–$210/year. Low deductibles. Malaysia has excellent healthcare. Options for NS.',
      keywords: 'Network School health insurance, Malaysia insurance, EMGS insurance',
    },
  },
  {
    category: 'visas',
    slug: 'medical-facilities',
    image: '/images/faq-illustrations/medical-facilities.png',
    imageAlt: 'Typographic illustration: What medical and healthcare facilities are near Network School?',
    question: 'What medical and healthcare facilities are near Network School?',
    answer: "You're well covered. There are local clinics right in Forest City for everyday stuff—minor illnesses, quick checkups. For anything more serious, there are multiple full-service hospitals within driving distance in Johor Bahru, including international-standard ones with specialist departments and emergency care. There's also a women's clinic nearby. Pharmacies are accessible in the area, some with WhatsApp ordering for convenience. Malaysia's emergency number is 999. Before you come, make sure your health insurance covers you in Malaysia—if it doesn't, nomad insurance providers like World Nomads, Insured Nomads, or SafetyWing are popular options among NS members. Malaysia is a top medical tourism destination, so the quality of care is excellent and affordable.",
    seo: {
      title: 'Medical Facilities Near Network School | Clinics & Hospitals',
      description: 'Network School has clinics in Forest City and hospitals in Johor Bahru nearby. Pharmacies with WhatsApp delivery. Nomad insurance options.',
      keywords: 'Network School medical, NS healthcare, Forest City clinic, Johor hospital, nomad insurance',
    },
  },
  {
    category: 'visas',
    slug: 'visa-singapore',
    image: '/images/faq-illustrations/visa-singapore.png',
    imageAlt: 'Typographic illustration: Good for digital nomads with Singapore visa issues?',
    question: 'Good for digital nomads with Singapore visa issues?',
    answer: "Yes. Malaysia is much more welcoming to immigration. If you or your team have had Singapore employment pass issues, Forest City is close and the DE Rantau pass makes it legal. NS works well as a base for global teams who can't all get Singapore visas. Several members are there specifically for this reason.",
    seo: {
      title: 'Network School for Singapore Visa Issues | Digital Nomads',
      description: 'Malaysia is more visa-friendly than Singapore. NS + DE Rantau works for nomads with Singapore visa problems.',
      keywords: 'Network School visa, Singapore visa alternative, digital nomad Malaysia',
    },
  },
  // === PROGRAMS & EVENTS ===
  {
    category: 'working',
    slug: 'programs-events',
    image: '/images/faq-illustrations/programs-events.png',
    imageAlt: 'Typographic illustration: What programs and events run at Network School?',
    question: 'What programs and events run at Network School?',
    answer: "Solana Superteam ran a six-week Ignition incubation residency. Monad had a three-week Founder Residency. There are hackathons, book clubs, vibe coding sessions, DeFi 101, AI discussions—lots of member-led stuff. Guest speakers include the caliber of ByteDance's first investor. The school also hosts VC office hours for fundraising and career counseling. Zcash and Polystate run recurring office hours on campus. All events are organized through Luma (luma.com/ns) where anyone can submit sessions pending admin approval.",
    seo: {
      title: 'Network School Programs: Solana, Monad, Hackathons, VCs',
      description: 'NS hosts Solana Superteam, Monad Residency, hackathons, VC office hours, Zcash sessions. Events on Luma. What runs at NS.',
      keywords: 'Network School programs, Solana NS, Monad Network School, NS hackathons, Luma NS',
    },
  },
  {
    category: 'working',
    slug: 'daily-events-sessions',
    image: '/images/faq-illustrations/daily-events-sessions.png',
    imageAlt: 'Typographic illustration: What kind of daily events and sessions happen at NS?',
    question: 'What kind of daily events and sessions happen at NS?',
    answer: "There's something happening almost every hour—all organized through the NS Luma calendar (luma.com/ns) and anyone can propose a session. On any given day you might find: fitness sessions (beach sprints, swim club, tennis classes for all levels, kids gym for 8–12 year olds), wellness (45-minute meditation, sound baths, somatic experiences, a ladies-only wellness circle), learning (MBA in a Box, nutrition deep dives, longevity surgeon talks, how to grow to 150K followers, consciousness research), crypto/Web3 office hours (Zcash, Polystate, startup office hours), social (coffee raves, sun club by the pool, Chinese conversation hour), and practical sessions (how to lead a session at NS, trips office hours for organizing group outings). Events happen across the NS Library, NS Café, NS Gym, the pool, hotel VIP rooms, and even nearby courts for tennis. Popular sessions sell out or hit near capacity, so booking early on Luma helps. The vibe is bottom-up: members create most of the programming, and the community decides what sticks.",
    seo: {
      title: 'Daily Events at Network School: Fitness, Talks, Crypto, Wellness',
      description: 'NS runs daily events: beach sprints, tennis, meditation, MBA in a Box, crypto office hours, coffee raves, swim club. All on Luma. Full guide.',
      keywords: 'Network School events, NS daily sessions, NS Luma calendar, NS activities, what happens at NS',
    },
  },
  // === FAMILY & SPECIAL NEEDS ===
  {
    category: 'basics',
    slug: 'bring-family',
    image: '/images/faq-illustrations/bring-family.png',
    imageAlt: 'Typographic illustration: Can I bring my family?',
    question: 'Can I bring my family?',
    answer: "Yes. Families and kids are welcome—people of all ages are at NS. Some members have brought children for hackathons and events. The DE Rantau pass allows dependents (MYR 500 each). Family integration is a work in progress—the more families participate, the easier it gets. If you're considering it, check on current family participation levels before you come.",
    seo: {
      title: 'Can I Bring My Family to Network School? Dependents & Kids',
      description: 'Families and children welcome at NS. DE Rantau allows dependents. Family integration improving. Bring your family.',
      keywords: 'Network School family, NS children, bring family, DE Rantau dependents',
    },
  },
  {
    category: 'living',
    slug: 'pets-allowed',
    image: '',
    imageAlt: '',
    question: 'Are pets allowed at Network School?',
    answer: "Yes—at least one resident has brought two dogs to Network School for a year-long stay. It requires paperwork and planning, but it's been done successfully. The pet owner created a guide for the required documentation and logistics. That said, it's not a common setup—most residents don't bring pets. If you're considering it, reach out to NS staff in advance to understand the requirements for importing pets into Malaysia (quarantine rules, vaccination certificates, and import permits). The Forest City campus has green spaces and walking areas that are dog-friendly.",
    seo: {
      title: 'Are Pets Allowed at Network School? Dogs, Cats & Animals',
      description: 'Yes, pets are allowed at Network School. At least one resident brought two dogs. Requires paperwork and planning. Guide to bringing pets to Forest City.',
      keywords: 'Network School pets, NS dogs allowed, bring pets to Forest City, Network School animals',
    },
  },
  {
    category: 'basics',
    slug: 'ramadan',
    image: '/images/faq-illustrations/ramadan.png',
    imageAlt: 'Typographic illustration: Is Network School good for Ramadan?',
    question: 'Is Network School good for Ramadan?',
    answer: "It can be tricky. Meal timings, food availability, and gym schedules aren't designed around fasting hours. Some members observing Ramadan have found it challenging. The team could tailor for specific groups, but it hasn't been a default priority. If you're observing Ramadan, ask about accommodations before you come.",
    seo: {
      title: 'Network School and Ramadan: Fasting & Accommodations',
      description: 'NS meal and gym schedules can be challenging during Ramadan. Ask about accommodations. Honest take.',
      keywords: 'Network School Ramadan, NS fasting, Muslim at Network School',
    },
  },
  // === PAYMENTS ===
  {
    category: 'basics',
    slug: 'payment-cards',
    image: '/images/faq-illustrations/payment-cards.png',
    imageAlt: 'Typographic illustration: Can I use credit cards?',
    question: 'Can I use credit cards?',
    answer: "At NS facilities, yes. In Forest City more broadly, many small shops prefer cash (Malaysian ringgit). There are ATMs with no withdrawal fees in the NS area. Cross-border buses to Singapore accept the ManjaLink cashless card. For your main expenses—accommodation, meals—you're covered by the monthly fee. Bring some cash for local errands.",
    seo: {
      title: 'Credit Cards & Payment at Network School',
      description: 'NS facilities take cards. Forest City shops prefer cash (ringgit). ATMs available. ManjaLink for buses. Payment at NS.',
      keywords: 'Network School payment, credit card NS, Forest City cash, ManjaLink',
    },
  },
  // === ROI & COMPARISON ===
  {
    category: 'basics',
    slug: 'roi-comparison',
    image: '/images/faq-illustrations/roi-comparison.png',
    imageAlt: 'Typographic illustration: What\'s the ROI vs a university or coding bootcamp?',
    question: "What's the ROI vs a university or coding bootcamp?",
    answer: "A four-year CS degree costs $100K–$150K+ in tuition alone, plus living expenses, and delays earnings by four years. A coding bootcamp costs $10K–$20K for 3–6 months but doesn't cover living. NS costs $3K–$12K for 3–12 months and includes housing, food, gym, and internet—plus immediate earning opportunities via daily bounties and VC access. The actual cost of NS is arguably negative relative to maintaining an existence in SF or NYC when you factor in eliminated expenses.",
    seo: {
      title: 'Network School ROI: NS vs University vs Coding Bootcamp',
      description: 'NS costs $3K–$12K total vs $100K+ for a CS degree. Includes housing, food, gym. Daily bounties. ROI comparison.',
      keywords: 'Network School ROI, NS vs university, NS vs bootcamp, cost comparison',
    },
  },
  {
    category: 'basics',
    slug: 'what-makes-different',
    image: '/images/faq-illustrations/what-makes-different.png',
    imageAlt: 'Typographic illustration: What makes NS different from YC or accelerators?',
    question: 'What makes NS different from YC or accelerators?',
    answer: "NS isn't an accelerator—no demo day, no batch structure, no equity taken. It's a semi-permanent community. YC competes for credentialed talent; NS welcomes dark talent. YC gives you 3 months of advice and funding; NS gives you a living environment where peak performance is the default. It's more like a venture fund (discrete cohorts) than a school. You're living and building alongside peers, not being 'accelerated' through a pipeline.",
    seo: {
      title: 'Network School vs YC: How NS Differs from Accelerators',
      description: "NS isn't an accelerator—no demo day, no equity. Dark talent, community living. How NS differs from YC.",
      keywords: 'Network School vs YC, NS different, startup society, NS vs accelerator',
    },
  },
  // === SAFETY & DOWNSIDES ===
  {
    category: 'basics',
    slug: 'is-it-safe',
    image: '/images/faq-illustrations/is-it-safe.png',
    imageAlt: 'Typographic illustration: Is Network School safe?',
    question: 'Is Network School safe?',
    answer: "Yes. You're near Singapore, one of the safest places in the world. The campus is in a planned development with security and maintenance. The community has written principles and expectations. Healthcare is excellent and cheap ($100–$210/year for full insurance). It's a high-trust environment—people feel comfortable walking around at night, working late, and leaving stuff in common areas.",
    seo: {
      title: 'Is Network School Safe? Safety, Healthcare & Security',
      description: 'Yes. NS is near Singapore—one of the safest countries. Security, cheap healthcare ($100/yr), high-trust community.',
      keywords: 'is Network School safe, NS safety, Singapore safety, Malaysia healthcare',
    },
  },
  {
    category: 'basics',
    slug: 'who-should-not-go',
    image: '/images/faq-illustrations/who-should-not-go.png',
    imageAlt: 'Typographic illustration: Who should NOT go to Network School?',
    question: 'Who should NOT go to Network School?',
    answer: "If you want vibrant nightlife, spontaneous urban energy, or a relaxing vacation—skip it. The isolation of Forest City means maintaining external social relationships takes effort. If you're not comfortable with an intense, fitness-first, ideology-aligned community where your schedule and environment are optimized by design, it'll feel constraining. You need to embrace the 'Proof of Work' culture. If you're not building or seriously exploring, you'll feel out of place.",
    seo: {
      title: 'Who Should NOT Go to Network School?',
      description: 'NS is not for: nightlife seekers, casual tourists, anyone uncomfortable with intense fitness-first culture. Honest guide.',
      keywords: 'Network School not for, who should avoid NS, NS downsides, honest review',
    },
  },
  {
    category: 'basics',
    slug: 'downsides',
    image: '/images/faq-illustrations/downsides.png',
    imageAlt: 'Typographic illustration: What are the downsides of Network School?',
    question: 'What are the downsides of Network School?',
    answer: "Quiet, developing area—not a bustling city. Gender ratio skews 80% male. Some ethnic and language cliques form. Crypto infrastructure is lighter than the marketing suggests. Meal and gym schedules don't accommodate Ramadan. Singapore trips take 1.5–2 hours each way with double immigration. A few members are less social. The heat is relentless. But most people find the tradeoffs worth it for the community, focus, and network.",
    seo: {
      title: 'Network School Downsides: Complete Honest Review',
      description: 'NS downsides: quiet area, 80% male, cliques, limited crypto, heat, border friction. Complete honest review of what to consider.',
      keywords: 'Network School downsides, NS cons, Network School review, honest',
    },
  },
  // === META CONCEPTS ===
  {
    category: 'basics',
    slug: 'society-as-service',
    image: '/images/faq-illustrations/society-as-service.png',
    imageAlt: 'Typographic illustration: What is Society-as-a-Service?',
    question: 'What is Society-as-a-Service?',
    answer: "It's what NS calls itself—an all-in-one package: community, learning, lodging, meals, coworking, fitness, startup opportunities, guest speakers. Instead of piecing together a co-living, a gym, and a coworking space in different cities, it's bundled into one subscription. The idea is that this model can be replicated globally—open-sourced architectural blueprints, clone-stamped like a franchise for startup societies.",
    seo: {
      title: 'Society-as-a-Service: What Network School Calls Itself',
      description: "Society-as-a-Service: NS's all-in-one model—community, lodging, meals, coworking. Replicable globally. What it means.",
      keywords: 'Society-as-a-Service, Network School, NS model, startup society franchise',
    },
  },
  {
    category: 'basics',
    slug: 'willpower-as-service',
    image: '/images/faq-illustrations/willpower-as-service.png',
    imageAlt: 'Typographic illustration: What is "Willpower-as-a-Service"?',
    question: 'What is "Willpower-as-a-Service"?',
    answer: "NS's term for engineering your environment so peak performance is the default. Modern society optimizes for sedentary behavior and junk food. NS flips it: healthy meals served to you, gym right there with accountability from peers, no distractions from an isolated campus. You don't need individual willpower when the system does it for you. It's the same logic as why it's easier to diet when there's no junk food in the house—scaled to an entire community.",
    seo: {
      title: 'Willpower-as-a-Service: How NS Engineers Peak Performance',
      description: "Willpower-as-a-Service: NS engineers your environment for peak performance. Healthy meals, gym, no distractions. You don't need willpower.",
      keywords: 'Willpower-as-a-Service, Network School, NS peak performance, environment design',
    },
  },
  {
    category: 'basics',
    slug: 'cohort-timeline',
    image: '/images/faq-illustrations/cohort-timeline.png',
    imageAlt: 'Typographic illustration: What\'s the long-term vision for Network School?',
    question: "What's the long-term vision for Network School?",
    answer: "Phase by phase: v1 was a 128-person 90-day popup (Sept–Dec 2024), capped at Dunbar's Number for high trust. v2 expanded to 256 for a full year starting March 2025. v3 is a permanent campus nearby for 1,024+ people. v4 is global: open-source the architectural blueprints so anyone can clone-stamp a Network School anywhere—like franchising startup societies. The goal is thousands of Network Schools worldwide.",
    seo: {
      title: 'Network School Roadmap: v1 to v4 and Global Expansion',
      description: "NS roadmap: v1 (128 people), v2 (256), v3 (1,024+ permanent campus), v4 (global franchise). Dunbar's Number to thousands.",
      keywords: 'Network School roadmap, NS v1 v2 v3 v4, NS expansion, future plans',
    },
  },
  {
    category: 'basics',
    slug: 'expansion',
    image: '/images/faq-illustrations/expansion.png',
    imageAlt: 'Typographic illustration: Will Network School expand to other locations?',
    question: 'Will Network School expand to other locations?',
    answer: "That's the v4 vision—open-source the model globally. Malaysia's heat and distance from the West limits appeal. Japan, South America, Europe, UAE, and Australia have all been mentioned. The Society-as-a-Service model has found product-market fit; the question is execution. No official announcements yet, but the demand is clearly there based on the 4,000+ applications from 80+ countries.",
    seo: {
      title: 'Network School Expansion: Japan, Europe, UAE?',
      description: 'NS may expand globally—Japan, Europe, South America, UAE mentioned. v4 is open-source franchise model. Future NS locations.',
      keywords: 'Network School expansion, NS new locations, Network School Japan, NS global',
    },
  },
];

export function getFaqBySlug(slug) {
  return faqItems.find((item) => item.slug === slug) ?? null;
}

export function getFaqByCategory(categoryId) {
  return faqItems.filter((item) => item.category === categoryId);
}

export function getAllFaqSlugs() {
  return faqItems.map((item) => item.slug);
}

export function getQuestionSchema(item) {
  return {
    '@context': 'https://schema.org',
    '@type': 'QAPage',
    mainEntity: {
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    },
  };
}

export function getFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
