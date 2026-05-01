export type BlogPostContentBlock =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'callout'; title?: string; text: string }
  | { type: 'quote'; text: string }
  | { type: 'image'; src: string; alt: string; caption?: string };

export type BlogPost = {
  title: string;
  category: string;
  excerpt: string;
  slug: string;
  author?: string;
  publishedAt?: string;
  updatedAt?: string;
  featured?: boolean;
  readTime?: string;
  image?: string;
  content: BlogPostContentBlock[];
};

export const blogCategories = [
  { key: 'all', label: 'All' },
  { key: 'rf-engineering', label: 'RF Engineering' },
  { key: 'compatibility', label: 'Compatibility' },
  { key: 'rolling-code', label: 'Rolling Code' },
  { key: 'oem-odm', label: 'OEM/ODM' },
  { key: 'buyer-checklist', label: 'Buyer Checklist' },
  { key: 'troubleshooting', label: 'Troubleshooting' },
];

/** Topic hubs with descriptions and article counts for display */
export const topicHubs = [
  {
    key: 'compatibility',
    label: 'Compatibility Guides',
    description: 'Identify remote models, frequencies, chips, and compatible replacement solutions.',
    icon: 'puzzle',
    articleCount: 0,
  },
  {
    key: 'rolling-code',
    label: 'Rolling Code & Fixed Code',
    description: 'Understand different coding systems and how they affect remote compatibility.',
    icon: 'shield',
    articleCount: 0,
  },
  {
    key: 'brand',
    label: 'Brand Compatibility',
    description: 'Compatibility references for FAAC, BFT, Nice, CAME, LiftMaster, DoorHan and more.',
    icon: 'layers',
    articleCount: 0,
  },
  {
    key: 'oem-odm',
    label: 'OEM / ODM Development',
    description: 'Custom remote control development, housing, PCB, frequency and protocol solutions.',
    icon: 'cpu',
    articleCount: 0,
  },
  {
    key: 'buyer-checklist',
    label: 'Buyer Checklist',
    description: 'What buyers should send before RF matching, sample testing, or custom development.',
    icon: 'clipboard',
    articleCount: 0,
  },
  {
    key: 'troubleshooting',
    label: 'Troubleshooting',
    description: 'Common remote matching problems and practical solutions.',
    icon: 'wrench',
    articleCount: 0,
  },
];

/** Brands for the Brand Compatibility Index */
export const compatibilityBrands = [
  { label: 'FAAC', href: '/compatibility/faac', description: 'XT, SLH, TNA, 868 MHz systems and more' },
  { label: 'BFT', href: '/compatibility/bft', description: 'MITTO, CLONIX, Deimos, and B-Lo series' },
  { label: 'Nice', href: '/compatibility/nice', description: 'FLO, SMILO, ONE, and Era series' },
  { label: 'CAME', href: '/compatibility/came', description: 'TOP, TWIN, and 433 MHz gate systems' },
  { label: 'LiftMaster', href: '/compatibility/liftmaster', description: 'Security+ and Security+ 2.0 series' },
  { label: 'DoorHan', href: '/compatibility/doorhan', description: 'Transmitter series and rolling code systems' },
  { label: 'Alutech', href: '/compatibility/alutech', description: 'AT-4N, TR-1000, and 433 MHz series' },
  { label: 'Beninca', href: '/compatibility/beninca', description: 'BULL, DASH, and 433 MHz gate systems' },
  { label: 'Genius', href: '/compatibility/genius', description: 'BRAVO, SPARK, and 433 MHz systems' },
  { label: 'Marantec', href: '/compatibility/marantec', description: 'DigiCode, Comfort, and 40 MHz series' },
];

/** Popular / evergreen guide slugs */
export const popularGuides = ['circuits-dont-act-good-enough-transmitter-modules'];

export const blogPosts: BlogPost[] = [
  {
    title: 'Circuits Don\'t Act: Why I Hate "Good Enough" Transmitter Modules More and More',
    category: 'rf-engineering',
    excerpt:
      'A transmitter module is not reliable just because it can send a signal. Real quality depends on stability, clean output, tuning margin, and repeatable mass production.',
    slug: 'circuits-dont-act-good-enough-transmitter-modules',
    author: 'Eric Huang',
    publishedAt: '2026-05-01',
    readTime: '14 min read',
    featured: true,
    image: '/images/blog/circuits-dont-act/circuits-dont-act-cover.webp',
    content: [
      {
        type: 'image',
        src: '/images/blog/circuits-dont-act/circuits-dont-act-cover.webp',
        alt: 'Transmitter module reliability with spectrum analyzer and remote control',
        caption: 'A transmitter module is not reliable just because it can send a signal. Stability matters more than just usable.',
      },
      { type: 'paragraph', text: 'Many problems with transmitter modules are not because they cannot work.' },
      { type: 'paragraph', text: 'The problem is that they only work when everything is "just right".' },
      {
        type: 'paragraph',
        text:
          'A sample can transmit a signal, but that does not mean mass production will be stable. A spectrum analyzer can show a signal, but that does not mean the signal is clean. A customer can open the gate at close range, but that does not mean the product is truly reliable.',
      },
      {
        type: 'paragraph',
        text:
          'Crystal oscillators, matching circuits, and filters may look like small details on the circuit board. But in the end, they become the real user experience in the customer\'s hand.',
      },
      {
        type: 'list',
        items: [
          'Can the remote control work from a long distance?',
          'Is the response stable?',
          'Will the quality stay consistent in mass production?',
        ],
      },
      {
        type: 'paragraph',
        text:
          'This article is not meant to explain RF circuits like a textbook. I want to talk about something more practical: why a good transmitter module is not just about whether it can transmit a signal, but whether it has the confidence to stay stable for a long time.',
      },
      {
        type: 'quote',
        text:
          'Customers will not discuss crystal accuracy, impedance matching, or harmonic suppression with you. They will only say: "This remote control does not have a good range."',
      },
      {
        type: 'paragraph',
        text:
          'Once, I tested a transmitter module and felt something was wrong. It was not broken. When I pressed the button, there was a signal. The receiver responded. The spectrum analyzer also showed a waveform.',
      },
      {
        type: 'paragraph',
        text:
          'But with the same battery, the same case, and the same 433 MHz frequency, another remote control could work from dozens of meters away, while this one could only work from around ten meters.',
      },
      {
        type: 'paragraph',
        text:
          'That simple customer complaint turns all the complicated reasons into one very direct judgment: your product is not reliable enough.',
      },
      {
        type: 'paragraph',
        text:
          'So the real difficulty of a transmitter module is never just "can it transmit?" The real questions are whether it can transmit stably, transmit cleanly, and keep the same performance in different environments, different batches, and different customers\' hands.',
      },
      {
        type: 'callout',
        title: 'Engineering bottom line',
        text:
          'The crystal oscillator, matching circuit, and filter are not decorative details. They are the foundation of a reliable RF product.',
      },
      { type: 'heading', text: 'The Crystal Is Not a Small Part. It Is the Rhythm of the Whole System' },
      {
        type: 'paragraph',
        text:
          'Many people easily ignore the crystal oscillator when they first look at a transmitter module. It is just a small metal part with two pins, usually with two small capacitors beside it. On the schematic, it only takes a small space.',
      },
      { type: 'paragraph', text: 'So it is easy to think: "Almost the same should be fine, right?"' },
      {
        type: 'paragraph',
        text:
          'But the crystal is the rhythm of the whole system. If the rhythm is not stable, everything after it will also become unstable.',
      },
      {
        type: 'paragraph',
        text:
          'You can imagine a transmitter as a band. The chip is the singer. The matching network is the sound mixer. The antenna is the speaker. The filter is the post-processing. Then the crystal is the beat.',
      },
      {
        type: 'image',
        src: '/images/blog/circuits-dont-act/crystal-sets-the-rhythm.webp',
        alt: 'Crystal oscillator sets the rhythm of the transmitter module',
        caption: 'The crystal is the timing reference. If the timing drifts, the whole transmitter becomes harder to trust.',
      },
      {
        type: 'paragraph',
        text:
          'That is why some modules can work, but still feel unreliable. At close range, they work fine. At a longer distance, they start to become unstable. In an open area, they work fine. When there is more interference, they start to fail.',
      },
      {
        type: 'paragraph',
        text:
          'This kind of instability is often not because one part is completely broken. It is because the basic reference of the whole system is not stable enough.',
      },
      {
        type: 'paragraph',
        text:
          'Customers will not say: "Maybe your crystal load capacitance is not matched." They will only say: "Sometimes this remote works, sometimes it does not."',
      },
      {
        type: 'paragraph',
        text:
          'So how should we choose a crystal? For beginners, I think there are a few practical points to remember.',
      },
      {
        type: 'list',
        items: [
          'First, read the chip datasheet. Do not guess. Use the frequency required by the chip and follow the recommended load capacitance range.',
          'Second, look at the accuracy. Numbers like +/-10 ppm, +/-20 ppm, and +/-30 ppm are not decorations.',
          'Third, look at the load capacitance. The CL value marked on the crystal, such as 12 pF or 16 pF, is not just extra information.',
          'Fourth, look at batch consistency. One board working normally in the lab does not mean the whole batch will work normally.',
        ],
      },
      {
        type: 'paragraph',
        text:
          'Many people think that if a crystal is marked 26 MHz, then it must be exactly 26 MHz. That is not true. It is close to the marked frequency only under specific load conditions.',
      },
      {
        type: 'paragraph',
        text:
          'A good sample but failed mass production is one of the scariest things in product development. The crystal is a small part that looks unimportant, but once it causes problems, it is very hard to explain.',
      },
      { type: 'heading', text: 'The Matching Circuit Solves One Real Problem: Is the Energy Being Wasted?' },
      {
        type: 'paragraph',
        text:
          'Impedance matching sounds very technical. But in simple words, it means: has the energy you send out really reached the antenna?',
      },
      {
        type: 'paragraph',
        text:
          'Many people think that if the transmitting distance is not enough, the power must be too low. Not always. Sometimes the energy is there, but it is wasted on the way.',
      },
      {
        type: 'list',
        items: [
          'It is reflected back.',
          'It is lost.',
          'It does not enter the antenna smoothly.',
        ],
      },
      {
        type: 'paragraph',
        text:
          'Then what do you see in the final product? The board gets a little warm. The range becomes shorter. The performance drops after putting it into the case. The result changes when your hand gets close to the antenna.',
      },
      {
        type: 'image',
        src: '/images/blog/circuits-dont-act/matching-delivers-energy.webp',
        alt: 'Matching network delivers RF energy from chip output to antenna',
        caption: 'Matching is not about adding more power. It is about wasting less energy before it reaches the antenna.',
      },
      {
        type: 'paragraph',
        text:
          'RF circuits care about layout. They care about grounding. They care about trace length. They can even feel your finger getting close. This is not being too sensitive. This is simply the reality of RF circuits.',
      },
      {
        type: 'paragraph',
        text:
          'Some people say: "Just copy the reference design for the matching circuit." This sentence is not completely wrong, but it is only half true.',
      },
      {
        type: 'paragraph',
        text:
          'A reference design works under a specific PCB, a specific antenna, a specific case, and specific test conditions. If your board size changes, the antenna position changes, the case material changes, or the ground plane size changes, the matching may also change.',
      },
      {
        type: 'callout',
        title: 'Leave room for tuning',
        text:
          'The truly reliable method is not to fix the matching network forever from the beginning. Start with recommended values, but leave proper positions on the PCB for later adjustment.',
      },
      {
        type: 'list',
        items: [
          'Output power.',
          'Antenna matching.',
          'Harmonics.',
          'Real distance.',
          'Performance after putting the board into the case.',
        ],
      },
      {
        type: 'paragraph',
        text:
          'There is a very real distance between "it can transmit on paper" and "it works well as a product". Many low-cost modules do not fail because of the chip. They fail because of the matching.',
      },
      { type: 'heading', text: 'Filtering Is Actually About Boundaries' },
      {
        type: 'paragraph',
        text:
          'In the past, I understood filtering in a very simple way. I thought it was just to make the signal cleaner. Later, I realized there is a deeper meaning behind it: it is about boundaries.',
      },
      {
        type: 'paragraph',
        text:
          'A transmitter cannot only care about "what I want to send". It must also care about "what I should not send".',
      },
      {
        type: 'paragraph',
        text:
          'The main frequency is the message you really want to send. Harmonics, spurious signals, and noise are the things you accidentally send out.',
      },
      {
        type: 'image',
        src: '/images/blog/circuits-dont-act/filtering-protects-boundary.webp',
        alt: 'Filtering suppresses harmonics and protects RF signal boundaries',
        caption: 'A good filter keeps the useful signal and suppresses what should not be transmitted.',
      },
      {
        type: 'paragraph',
        text:
          'You want to transmit at 433 MHz, but the second and third harmonics may also come out. The remote control may still open the gate. But from the view of the whole wireless environment, the signal is already not clean.',
      },
      {
        type: 'paragraph',
        text:
          'That is why certification tests check these things. Wireless space is a public resource. You cannot send out unwanted signals just because your own device can work.',
      },
      {
        type: 'paragraph',
        text:
          'Filtering helps the circuit keep this boundary: send out what should be sent, and suppress what should not be sent. This is not decoration. This is discipline.',
      },
      {
        type: 'paragraph',
        text:
          'But stronger filtering is not always better. If the filtering is too heavy, the main frequency power may also be reduced. A proper filter makes the signal clean. Too much filtering may damage the signal.',
      },
      {
        type: 'paragraph',
        text:
          'RF circuit design is not about memorizing answers. It is more like tuning a musical instrument. You cannot only look at the parameters and assume the sound must be good.',
      },
      { type: 'heading', text: 'The Real Beginner Mistake Is Looking at One Component, Not the Whole Chain' },
      {
        type: 'paragraph',
        text:
          'A transmitter module can easily mislead people. It makes people think the problem must come from one single point. If the range is not good, blame the antenna. If the frequency is unstable, blame the crystal. If the signal is not clean, blame the filter.',
      },
      {
        type: 'paragraph',
        text:
          'But many times, the problem is not one single point. It is the whole chain affecting each other.',
      },
      {
        type: 'list',
        items: [
          'The crystal provides the reference.',
          'The chip handles modulation and output.',
          'The matching circuit decides whether energy can be sent out.',
          'The filter decides whether the signal is clean.',
          'The antenna decides whether energy can become useful radiation.',
          'The PCB layout decides whether these parts interfere with each other.',
          'The case and installation environment can change the result again.',
        ],
      },
      {
        type: 'paragraph',
        text:
          'That is why some boards perform well in the lab, but become worse after being put into the case. That is why samples can be good, but mass production becomes unstable.',
      },
      { type: 'heading', text: 'From "Usable" to "Good" to "Repeatable" Are Three Different Levels' },
      {
        type: 'paragraph',
        text:
          'The first level is usable. You press the button, there is a signal, the receiver responds, and the distance is acceptable.',
      },
      {
        type: 'paragraph',
        text:
          'The second level is good. The range is stable. The response is quick. The performance does not drop too much after putting it into the case. The customer does not need too much explanation after receiving it.',
      },
      {
        type: 'paragraph',
        text:
          'The third level is repeatable. One board works like this today, and one batch works the same tomorrow. When another group of workers assembles it, the result does not change too much.',
      },
      {
        type: 'quote',
        text:
          'A real commercial product does not depend on one good sample. It depends on repeatability.',
      },
      {
        type: 'paragraph',
        text:
          'Repeatability is product capability. Repeatability is factory capability. Repeatability is the reason customers dare to place another order.',
      },
      { type: 'heading', text: 'Truly Advanced Design Leaves Margin for Imperfection' },
      {
        type: 'paragraph',
        text:
          'The hardest part of engineering is not chasing perfect conditions. It is admitting that the real world is not perfect.',
      },
      {
        type: 'paragraph',
        text:
          'Many beginners design circuits as if everything is ideal: the battery voltage is stable, the component values are perfect, the antenna environment is ideal, the case has no effect, and every batch is exactly the same.',
      },
      {
        type: 'paragraph',
        text:
          'But in the real world, batteries run low. Soldering can vary. Cases can absorb signals. Customers may install devices in strange places. Supplier batches can change.',
      },
      {
        type: 'paragraph',
        text:
          'So the quality of a design is not only about whether it can run under ideal conditions. It is about how much margin is left when conditions are not ideal.',
      },
      {
        type: 'quote',
        text:
          'There is no margin when a product only works under perfect conditions. It is only barely standing. It is not standing firmly.',
      },
      {
        type: 'paragraph',
        text:
          'A truly good low-cost design does not remove the key things. It keeps the bottom line within limited cost.',
      },
      { type: 'heading', text: 'So Now, When I Look at a Transmitter Module, I Look for Long-Term Thinking' },
      {
        type: 'paragraph',
        text:
          'Long-term thinking is not a slogan. It means when you choose a crystal, you do not only care about saving a few cents. It means when you design the PCB, you do not route the RF trace casually.',
      },
      {
        type: 'paragraph',
        text:
          'It means when you design the matching circuit, you know you need to leave space for tuning. It means when you could remove a small component to save cost, you still understand that the risk may be passed to the customer.',
      },
      {
        type: 'paragraph',
        text:
          'Low-cost products can also be made seriously. Low cost does not mean rough. Cheap does not mean careless. Good value does not mean passing risk to the customer.',
      },
      {
        type: 'list',
        items: [
          'The crystal should be stable.',
          'The matching should be smooth.',
          'The filtering should be clean.',
          'The structure should not damage the antenna.',
          'Mass production should not go out of control.',
        ],
      },
      { type: 'heading', text: 'In the End, Circuits Are Not About Being Smart. They Are About Being Honest' },
      {
        type: 'paragraph',
        text:
          'A transmitter module is not something you can explain with empty words. If you say the range is long, testing will show it. If you say the frequency is accurate, the spectrum analyzer will show it. If you say the signal is clean, certification testing will show it.',
      },
      {
        type: 'paragraph',
        text:
          'Circuits will not act for you. They are cold, but they are fair. Where you are lazy, they will make you embarrassed sooner or later. Where you are serious, they will reward you in some small detail one day.',
      },
      {
        type: 'paragraph',
        text:
          'When a customer says "This remote control is quite stable", "The range is better than the previous one", or "This batch is almost the same as the last batch", those words are the best praise for a product.',
      },
      { type: 'heading', text: 'A Good Transmitter Module Is Reliability Compressed Into a Circuit' },
      {
        type: 'paragraph',
        text:
          'Now when I look at a transmitter module, I am not only looking at the crystal, inductor, capacitor, and antenna. I am also looking at the working attitude behind it.',
      },
      {
        type: 'paragraph',
        text:
          'Which parts cannot be saved? Where should margin be left? Where should we not cut corners just because the customer cannot see it?',
      },
      {
        type: 'paragraph',
        text:
          'People outside the industry may not notice these things at first glance. But the product will speak for you. When it is stable, it speaks for you. When it passes certification, it speaks for you. When the whole batch stays consistent, it also speaks for you.',
      },
      {
        type: 'paragraph',
        text:
          'The user presses the button. The gate opens. The signal arrives. The device responds. The user does not need to know how the crystal is selected, how the matching is tuned, or how the harmonics are suppressed. But the user can feel one thing: this product is reliable.',
      },
      {
        type: 'paragraph',
        text:
          'Behind the word "reliable", there is design, testing, discipline, margin, and no laziness. It is also the simplest and most valuable dignity of a product.',
      },
      {
        type: 'paragraph',
        text:
          'During product export, remote control sourcing, or transmitter module mass production, what is the most difficult unstable problem you have ever met? Was the sample good but the mass production bad? Was the range unstable? Did the performance drop after changing the case? Or was the customer\'s installation environment too complicated?',
      },
    ],
  },
  {
    title: 'OEM or ODM? You Think You\'re Choosing a Production Method, But You\'re Actually Choosing Your Future',
    category: 'oem-odm',
    excerpt:
      'For hardware startups, OEM and ODM are not just production labels. They decide who controls the product, the certification path, and the future leverage in the supply chain.',
    slug: 'oem-odm-hardware-future',
    author: 'Eric Huang',
    publishedAt: '2026-05-01',
    readTime: '7 min read',
    image: '/images/blog/oem-odm-hardware-future/oem-vs-odm-path.webp',
    content: [
      {
        type: 'quote',
        text:
          'You may think you are choosing a production method, but in hardware you are often choosing a completely different future.',
      },
      {
        type: 'paragraph',
        text:
          'A friend of mine was recently confused by three different factories while working on a smart home project. He needed an RF remote control, but each factory gave him a different suggestion. One offered OEM, another offered ODM, and another said it could do ODM customization.',
      },
      {
        type: 'paragraph',
        text:
          'He asked me, "Do you know about this?" I told him that I knew a little, but his situation was very common. Most people entering hardware think they are choosing a production method. In reality, they are choosing a path for the product and the company behind it.',
      },
      {
        type: 'paragraph',
        text:
          'These two options look close from the outside, but the logic behind them is completely different.',
      },
      {
        type: 'image',
        src: '/images/blog/oem-odm-hardware-future/oem-vs-odm-path.webp',
        alt: 'OEM versus ODM production path comparison for hardware products',
        caption:
          'OEM gives you more control over design and engineering. ODM gives you speed by starting from a factory-owned design.',
      },
      { type: 'heading', text: 'OEM and ODM Are Not the Same Business Path' },
      {
        type: 'paragraph',
        text:
          'Let us skip the dictionary explanation. You can find "Original Equipment Manufacturer" and "Original Design Manufacturer" on Google. The more useful way to understand the difference is control.',
      },
      {
        type: 'list',
        items: [
          'OEM means you design and the factory produces. The technical solution, drawings, firmware, and product logic are yours.',
          'ODM means the factory designs and you brand. The factory already has a mature solution, and you change the logo, color, shell, or some surface details.',
        ],
      },
      {
        type: 'paragraph',
        text:
          'With OEM, you give the factory your intellectual property and ask it to manufacture according to your specification. With ODM, the factory owns the intellectual property and you only use it for your brand.',
      },
      {
        type: 'callout',
        title: 'The real difference',
        text:
          'OEM gives you more control but requires more capability. ODM gives you speed but gives the factory more long-term power.',
      },
      {
        type: 'paragraph',
        text:
          'At the beginning, this may not feel important. When the product starts to scale, it becomes a very different story.',
      },
      { type: 'heading', text: 'The Hidden Risk of ODM Is Competing Against the Same Design' },
      {
        type: 'paragraph',
        text:
          'The reality is simple. You choose an RF remote control design from a factory, put your logo on it, and start selling. But because the design belongs to the factory, the same design can also be sold to other brands.',
      },
      {
        type: 'paragraph',
        text:
          'One year later, you may search online and find several similar remotes with the same PCB idea, the same basic function, and only a different shell or logo. Some may even be cheaper than yours.',
      },
      {
        type: 'paragraph',
        text:
          'What can you do? If you do not own the design, your legal and commercial position is weak. I have seen hardware startups lose in this way, not because their market idea was bad, but because the product was too easy to copy through the same supply chain.',
      },
      {
        type: 'image',
        src: '/images/blog/oem-odm-hardware-future/hidden-risk-of-odm.webp',
        alt: 'Hidden risk of ODM with duplicated remote control designs and price competition',
        caption:
          'When the factory owns the design, the same basic product can appear under many brands and compete mainly on price.',
      },
      { type: 'heading', text: 'RF Remotes Add One More Layer: Certification' },
      {
        type: 'paragraph',
        text:
          'RF remotes are more complicated than many ordinary hardware products because they are wireless devices. A remote for a door, curtain, industrial controller, toy, or access system may need different certifications in different markets.',
      },
      {
        type: 'list',
        items: [
          'China usually requires SRRC certification.',
          'Europe usually requires CE compliance under the RED Directive.',
          'The United States usually requires FCC approval for radio devices.',
        ],
      },
      {
        type: 'paragraph',
        text:
          'Certification can take months and cost thousands to tens of thousands, depending on the market and product. It is also tied to the hardware solution. If you change the antenna design, RF module, transmission power, or important radio structure, you may need to test again.',
      },
      {
        type: 'image',
        src: '/images/blog/oem-odm-hardware-future/rf-compliance-matters.webp',
        alt: 'RF remote control compliance testing for SRRC CE RED and FCC ID markets',
        caption:
          'Certification is not just paperwork. For RF products, it affects launch timing, cost, and whether later hardware changes are safe.',
      },
      {
        type: 'paragraph',
        text:
          'This is where ODM can be attractive. A mature factory solution may already have test experience or existing certification materials, which can save time. But OEM means you must plan certification yourself, including schedule, cost, test risk, and document preparation.',
      },
      {
        type: 'callout',
        title: 'Do not ignore the calendar',
        text:
          'Many teams do not fail because the product cannot work. They fail because certification time was not included in the launch plan.',
      },
      { type: 'heading', text: 'Fixed Code and Rolling Code Are Not Just Technical Details' },
      {
        type: 'paragraph',
        text:
          'One core technical choice in RF remotes is fixed code versus rolling code. This is not only an engineering detail. It affects security, market positioning, and whether the product is suitable for the application.',
      },
      {
        type: 'list',
        items: [
          'Fixed code sends the same signal each time. It is simple and low cost, but older fixed-code remotes are easier to copy.',
          'Rolling code changes the signal each time. The transmitter and receiver use a synchronized logic, making copying much harder.',
        ],
      },
      {
        type: 'image',
        src: '/images/blog/oem-odm-hardware-future/fixed-code-vs-rolling-code.webp',
        alt: 'Fixed code versus rolling code comparison for RF remote control security',
        caption:
          'Fixed-code remotes can be easier to copy. Rolling-code systems are better suited to secure access applications.',
      },
      {
        type: 'paragraph',
        text:
          'For secure applications such as door locks, garage doors, and access control, rolling code is often the better direction. The problem is that some ODM solutions still push fixed-code designs because they are mature, cheap, and easy to ship.',
      },
      {
        type: 'paragraph',
        text:
          'If the buyer does not understand the difference, they may choose a solution that looks fine in samples but becomes risky in real use.',
      },
      { type: 'heading', text: 'Choose by Stage, Not by Vocabulary' },
      {
        type: 'paragraph',
        text:
          'There is no answer that fits every company. The right choice depends on your stage, your resources, your target market, and how much product control you need.',
      },
      {
        type: 'list',
        items: [
          'If this is your first hardware project and you have no R&D team, ODM is usually the faster way to test the market.',
          'If the remote must work with your own receiver, platform, app, or protocol, OEM is usually necessary.',
          'If you need speed now but control later, start with ODM while developing your own OEM solution in parallel.',
          'If the product involves industrial safety, special regulations, or high-risk environments, OEM is usually the safer route.',
        ],
      },
      {
        type: 'paragraph',
        text:
          'For an ODM path, the contract should at least make component changes visible. If the factory changes the chip, RF module, antenna, or other key parts without telling you, your product quality and certification position may change without warning.',
      },
      { type: 'heading', text: 'Do Not Use a Next-Stage Solution Too Early' },
      {
        type: 'paragraph',
        text:
          'Many teams fail not because they chose the wrong technology, but because they used a solution meant for another stage. If a small startup needs to ship in six months, full OEM development may slow everything down because R&D, tooling, testing, and certification all take time.',
      },
      {
        type: 'paragraph',
        text:
          'But if an ODM product is already selling well and competitors are copying the same factory design, staying with ODM for too long can also hurt the business.',
      },
      {
        type: 'quote',
        text:
          'Timing matters. The best solution is not the most advanced one. It is the one that fits your current stage and protects your next stage.',
      },
      { type: 'heading', text: 'Supply Chain Sovereignty Is the Real Decision' },
      {
        type: 'paragraph',
        text:
          'Factory partners are important, but factories also have their own interests. Whoever owns the design and intellectual property has more power in the relationship.',
      },
      {
        type: 'paragraph',
        text:
          'With ODM, you give up some power in exchange for speed, lower development cost, and lower early risk. That can be a reasonable choice, but you should know what you are giving up and when you need to take it back.',
      },
      {
        type: 'paragraph',
        text:
          'Choosing OEM or ODM is not just a production decision. It is a decision about your future. Are you only putting new packaging on old logic, or are you clearly understanding your stage, your needs, and what you must control?',
      },
      {
        type: 'paragraph',
        text:
          'During RF remote control sourcing, smart home product development, or overseas hardware sales, what was your hardest OEM or ODM decision? Was it certification, fixed code versus rolling code, factory component changes, or losing uniqueness after the product started selling?',
      },
      {
        type: 'paragraph',
        text:
          'Feel free to share your thoughts in the comments. These real cases are often more useful than textbook definitions.',
      },
    ],
  },
];
