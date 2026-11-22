export type Language = "en" | "am";

export interface Translation {
  title: string;
  description: string;
  brandHome: string;
  navLabel: string;
  home: string;
  collection: string;
  contact: string;
  ourStory: string;
  retailer: string;
  footerNavLabel: string;
  contactEyebrow: string;
  contactTitle: string;
  contactDescription: string;
  contactAddressTitle: string;
  contactAddressLines: string[];
  contactEmailTitle: string;
  contactPhoneTitle: string;
  contactWhatsAppTitle: string;
  contactHowToTitle: string;
  contactHowToParagraphs: string[];
  contactFormTitle: string;
  contactNameField: string;
  contactEmailField: string;
  contactSubjectField: string;
  contactMessageField: string;
  contactSubmitLabel: string;
  contactFormNote: string;
  contactDefaultSubject: string;
  collectionEyebrow: string;
  heroTitleFirst: string;
  heroTitleSecond: string;
  heroDescription: string;
  productAlt: string;
  productName: string;
  productCaption: string;
  footerPromise: string;
  productsEyebrow: string;
  featuredProducts: string;
  productsDescription: string;
  tripleAProductName: string;
  tripleASubtitle: string;
  tripleACardSummary: string;
  tripleAImageAlt: string;
  tripleADescription: string;
  tripleAAssurance: string;
  productDetailsHeading: string;
  specificationsHeading: string;
  perfectForHeading: string;
  tripleASpecifications: string[];
  tripleAUses: string[];
  radicalExerciseBooksName: string;
  radicalExerciseBooksSummary: string;
  radicalExerciseBooksImageAlt: string;
  radicalExerciseBooksDescription: string;
  radicalExerciseBooksSpecifications: string[];
  radicalExerciseBooksPacking: string[];
  classicTripleAExerciseBookName: string;
  classicTripleAExerciseBookSummary: string;
  classicTripleAExerciseBookImageAlt: string;
  classicTripleAExerciseBookDescription: string;
  classicTripleAExerciseBookSpecifications: string[];
  classicTripleAExerciseBookPacking: string[];
  radicalBrandLabel: string;
  radicalIPenName: string;
  radicalIPenSummary: string;
  radicalIPenImageAlt: string;
  radicalIPenDescription: string;
  radicalIPenUses: string[];
  iPenFeaturesHeading: string;
  radicalIPenFeatures: string[];
  radicalOnePlusName: string;
  radicalOnePlusSummary: string;
  radicalOnePlusImageAlt: string;
  radicalOnePlusDescription: string;
  radicalOnePlusUses: string[];
  radicalOnePlusOptionsHeading: string;
  radicalOnePlusOptions: string[];
  radicalTapeName: string;
  radicalTapeSummary: string;
  radicalTapeImageAlt: string;
  radicalTapeDescription: string;
  radicalTapeSpecifications: string[];
  radicalTapeUses: string[];
  qualityRedPaperName: string;
  qualityRedPaperSummary: string;
  qualityRedPaperImageAlt: string;
  qualityRedPaperDescription: string;
  qualityRedPaperSpecifications: string[];
  compatibleWithHeading: string;
  qualityRedPaperUses: string[];
  qualityRedPaperIdealFor: string;
  packingStandardHeading: string;
  pensCategory: string;
  paperProductsCategory: string;
  stationeryCategory: string;
  locallyMadeLabel: string;
  comingSoonLabel: string;
  productDetailsComingSoon: string;
  previousProducts: string;
  nextProducts: string;
  showProduct: string;
  storyEyebrow: string;
  storyTitleFirst: string;
  storyTitleSecond: string;
  storyIntroduction: string;
  storyManufacturing: string;
  storyApproach: string;
  storyToday: string;
  purposeEyebrow: string;
  purposeTitle: string;
  visionTitle: string;
  visionDescription: string;
  missionTitle: string;
  missionDescription: string;
  switchToAmharic: string;
  switchToEnglish: string;
}

export const translations: Record<Language, Translation> = {
  en: {
    title: "Radical — Exercise books, made locally",
    description:
      "Locally made Radical exercise books and paper, thoughtfully produced for everyday learning.",
    brandHome: "Radical home",
    navLabel: "Main navigation",
    home: "Home",
    collection: "Collection",
    contact: "Contact",
    ourStory: "Our story",
    retailer: "Find us",
    footerNavLabel: "Footer navigation",
    contactEyebrow: "Let’s connect",
    contactTitle: "Contact",
    contactDescription:
      "We’d love to hear from you! For product inquiries, wholesale orders, or partnership opportunities, feel free to reach out through the form or contact details below.",
    contactAddressTitle: "Address",
    contactAddressLines: ["Radical P.L.C", "Piazza & Merkato Branches", "Addis Ababa, Ethiopia"],
    contactEmailTitle: "Email",
    contactPhoneTitle: "Phone",
    contactWhatsAppTitle: "WhatsApp",
    contactHowToTitle: "How to reach us",
    contactHowToParagraphs: [
      "You can visit our main branches in Piazza and Merkato, Addis Ababa.",
      "For inquiries, bulk orders, or support, contact us via phone, email, or WhatsApp.",
      "We’re happy to assist you during business hours.",
    ],
    contactFormTitle: "Send us a message",
    contactNameField: "Your name",
    contactEmailField: "Your email address",
    contactSubjectField: "Subject",
    contactMessageField: "Message",
    contactSubmitLabel: "Create email",
    contactFormNote: "Your email app will open with your message ready to review and send.",
    contactDefaultSubject: "Website contact",
    collectionEyebrow: "The exercise book collection",
    heroTitleFirst: "A good place",
    heroTitleSecond: "for big ideas.",
    heroDescription: "Everyday exercise books and paper, thoughtfully made close to home.",
    productAlt: "Three colorful Radical exercise books",
    productName: "RADICAL / EXERCISE BOOKS",
    productCaption: "Made for everyday ideas.",
    footerPromise: "Locally made paper, ready for anywhere.",
    productsEyebrow: "Our collection",
    featuredProducts: "Featured Products",
    productsDescription:
      "Discover Radical exercise books, Triple A premium copy paper, and more locally made products.",
    tripleAProductName: "Triple A A4 Premium Copy Paper",
    tripleASubtitle: "Triple A A4 Premium Printing and Copy Paper",
    tripleACardSummary: "Premium A4 paper · 80 gsm · 500 sheets",
    tripleAImageAlt: "Triple A A4 Premium Copy Paper ream packaging",
    tripleADescription:
      "Triple A is our flagship A4 paper—the highest quality in our range and proudly recognized as our signature product. It delivers exceptional performance, superior clarity, and a smooth finish for professional and high-volume printing.",
    tripleAAssurance:
      "Trusted across businesses and institutions, Triple A sets the standard in paper quality, consistency, reliability, and performance.",
    productDetailsHeading: "Product details",
    specificationsHeading: "Specifications",
    perfectForHeading: "Perfect for",
    tripleASpecifications: [
      "Size: A4 (210 mm × 297 mm)",
      "Weight: 80 gsm",
      "500 sheets per ream",
      "5 reams per carton",
      "Bright white, ultra-smooth surface",
      "Eco-friendly and jam-free",
    ],
    tripleAUses: [
      "Laser and inkjet printing",
      "High-speed photocopying",
      "Plain paper fax",
      "Double-sided printing",
      "Everyday office documentation",
    ],
    radicalExerciseBooksName: "Radical Premium PP Exercise Books",
    radicalExerciseBooksSummary: "32, 50, and 100 sheets · Lined or squared",
    radicalExerciseBooksImageAlt: "Radical PP exercise book with a colorful landscape cover",
    radicalExerciseBooksDescription:
      "Our premium Radical PP exercise books are available in 32, 50, and 100 sheets, in lined and squared formats. Durable and easy to write on, they are designed to support students from elementary through high school across Ethiopia.",
    radicalExerciseBooksSpecifications: [
      "Sheet options: 32, 50, and 100 sheets",
      "Formats: Lined and squared",
      "20-micron PP cover",
      "128 gsm glossy laminate with a glitter-printed Triple A logo",
      "Bright white 60 gsm inner paper",
    ],
    radicalExerciseBooksPacking: [
      "32-sheet: 240 pcs per carton",
      "50-sheet: 192 pcs per carton",
      "100-sheet: 96 pcs per carton",
    ],
    classicTripleAExerciseBookName: "Classic Triple A Exercise Book",
    classicTripleAExerciseBookSummary: "50 sheets · Lined format",
    classicTripleAExerciseBookImageAlt:
      "Classic Triple A lined exercise book with a green butterfly cover",
    classicTripleAExerciseBookDescription:
      "The Classic Triple A exercise book is durable, easy to write on, and designed to support learning at every level. Its colored PVC jacket adds protection and appeal.",
    classicTripleAExerciseBookSpecifications: [
      "Sheet count: 50 sheets",
      "Format: Lined",
      "Cover: 20-micron colored PVC jacket",
      "Inside pages: Bright white 65 gsm paper",
    ],
    classicTripleAExerciseBookPacking: ["192 pieces per carton"],
    radicalBrandLabel: "Radical",
    radicalIPenName: "Radical i-Pen",
    radicalIPenSummary: "Smooth and reliable ink pens for everyday use.",
    radicalIPenImageAlt: "Radical i-Pen ballpoint pens displayed in a box",
    radicalIPenDescription:
      "Available in black, blue, and red. Perfect for classrooms, offices, and resellers. Sold in packs or bulk boxes.",
    radicalIPenUses: ["Classrooms", "Offices", "Resellers"],
    iPenFeaturesHeading: "Features",
    radicalIPenFeatures: [
      "Free-flow ink system for smooth writing",
      "Firm grip for long writing performance",
      "Bright-colour ink for clear writing",
    ],
    radicalOnePlusName: "Radical One Plus+",
    radicalOnePlusSummary: "Smooth and reliable ink pens for everyday use.",
    radicalOnePlusImageAlt: "Radical One Plus+ ink pens displayed in a clear jar",
    radicalOnePlusDescription:
      "Smooth and reliable ink pens for everyday use. Available in black, blue, and red. Perfect for classrooms, offices, and resellers. Sold in packs or bulk boxes.",
    radicalOnePlusUses: ["Classrooms", "Offices", "Resellers"],
    radicalOnePlusOptionsHeading: "Options",
    radicalOnePlusOptions: ["Black, blue, and red ink", "Packs or bulk boxes"],
    radicalTapeName: "Radical Tape",
    radicalTapeSummary: "BOPP sealing tape · Transparent or brown · Multiple sizes",
    radicalTapeImageAlt: "Stack of transparent orange Radical sealing tape rolls",
    radicalTapeDescription:
      "Durable, high-adhesion sealing tape for packaging and storage. Available in transparent and brown, it offers a strong grip and clean finish for businesses, homes, schools, and industrial use.",
    radicalTapeSpecifications: [
      "Strong BOPP material for durability",
      "Pressure-sensitive adhesive for a long-lasting hold",
      "Available in transparent and brown",
      "Standard size: 45 mm × 80 yards; multiple sizes available",
    ],
    radicalTapeUses: [
      "Carton sealing",
      "Packaging and shipping",
      "Office and warehouse organisation",
    ],
    qualityRedPaperName: "Quality Red",
    qualityRedPaperSummary: "A4 copy and printing paper · 80 gsm · 500 sheets per ream",
    qualityRedPaperImageAlt: "Quality Red A4 80 gsm copy and printing paper ream",
    qualityRedPaperDescription:
      "High-performance office copy and printing paper for everyday needs. Engineered for excellent results, this 80 gsm paper delivers smooth, jam-free performance across a wide range of machines.",
    qualityRedPaperSpecifications: [
      "Size: A4 (210 mm × 297 mm)",
      "Weight: 80 gsm",
      "500 sheets per ream",
      "Bright, smooth finish for sharp and clear print quality",
      "Smooth, jam-free performance",
    ],
    compatibleWithHeading: "Compatible with",
    qualityRedPaperUses: [
      "Copying",
      "Printing",
      "Laser and inkjet printing",
      "Plain paper fax",
      "Double-sided copying",
      "Handwriting",
    ],
    qualityRedPaperIdealFor:
      "Perfect for offices, schools, and everyday home use, Quality Red delivers consistent results with every page.",
    packingStandardHeading: "Packing standard",
    pensCategory: "Pens",
    paperProductsCategory: "Paper products",
    stationeryCategory: "Stationery",
    locallyMadeLabel: "Locally made",
    comingSoonLabel: "Coming soon",
    productDetailsComingSoon: "Product details will be added soon.",
    previousProducts: "Previous products",
    nextProducts: "Next products",
    showProduct: "Show product",
    storyEyebrow: "Our story",
    storyTitleFirst: "Affordable Quality.",
    storyTitleSecond: "Local Strength.",
    storyIntroduction:
      "Established in 2000, Radical P.L.C. is one of Ethiopia’s leading stationery companies, proudly rooted in Addis Ababa with major outlets in Piazza and Merkato. From humble beginnings as a small family business, we’ve grown into a trusted brand that serves schools, businesses, and institutions across the country.",
    storyManufacturing:
      "With a strong foundation in local manufacturing, we produce high-quality A4 paper right here in Ethiopia. Over the years, we’ve expanded our offerings to include exercise books, pens, paper products, and over 400 additional stationery items, both manufactured and imported.",
    storyApproach:
      "At Radical, we believe in combining affordability with consistent quality, ensuring that every product meets the needs of our growing customer base. Our strength lies in bulk supply, efficient distribution, and a deep commitment to empowering education and business nationwide.",
    storyToday:
      "Today, Radical P.L.C. continues to lead the market with innovation, service, and purpose, proudly Ethiopian, and proudly built for the future.",
    purposeEyebrow: "What guides us",
    purposeTitle: "Our vision & mission",
    visionTitle: "Our vision",
    visionDescription:
      "To be Ethiopia’s most trusted and accessible stationery provider, empowering education, business, and creativity across generations.",
    missionTitle: "Our mission",
    missionDescription:
      "To deliver affordable, high-quality stationery solutions with integrity, innovation, and local impact at the core.",
    switchToAmharic: "Switch to Amharic",
    switchToEnglish: "Switch to English",
  },
  am: {
    title: "ራዲካል — በአካባቢው የተሠሩ ደብተሮች",
    description:
      "ራዲካል በአካባቢው የሚያመርታቸው የልምምድ ደብተሮችና ወረቀቶች፣ ለዕለታዊ ትምህርት በጥንቃቄ የተዘጋጁ።",
    brandHome: "ወደ ራዲካል መነሻ ገጽ",
    navLabel: "ዋና ማውጫ",
    home: "መነሻ",
    collection: "ስብስብ",
    contact: "ያግኙን",
    ourStory: "ስለ እኛ",
    retailer: "እዚህ ያግኙን",
    footerNavLabel: "የግርጌ ማውጫ",
    contactEyebrow: "እንገናኝ",
    contactTitle: "ያግኙን",
    contactDescription:
      "ከእርስዎ መስማት ደስ ይለናል! ስለ ምርቶች፣ የጅምላ ትዕዛዞች ወይም የአጋርነት እድሎች በቅጹ ወይም ከታች ባሉት የመገኛ መረጃዎች ያግኙን።",
    contactAddressTitle: "አድራሻ",
    contactAddressLines: ["Radical P.L.C", "የፒያሳና የመርካቶ ቅርንጫፎች", "አዲስ አበባ፣ ኢትዮጵያ"],
    contactEmailTitle: "ኢሜይል",
    contactPhoneTitle: "ስልክ",
    contactWhatsAppTitle: "WhatsApp",
    contactHowToTitle: "እንዴት ሊያገኙን ይችላሉ",
    contactHowToParagraphs: [
      "በአዲስ አበባ በሚገኙት የፒያሳና የመርካቶ ዋና ቅርንጫፎቻችን መጎብኘት ይችላሉ።",
      "ለጥያቄዎች፣ ለጅምላ ትዕዛዞች ወይም ለድጋፍ በስልክ፣ በኢሜይል ወይም በWhatsApp ያግኙን።",
      "በስራ ሰዓት በደስታ እናግዛችኋለን።",
    ],
    contactFormTitle: "መልዕክት ይላኩልን",
    contactNameField: "ሙሉ ስም",
    contactEmailField: "የኢሜይል አድራሻ",
    contactSubjectField: "ርዕስ",
    contactMessageField: "መልዕክት",
    contactSubmitLabel: "ኢሜይል ይፍጠሩ",
    contactFormNote: "መልዕክትዎን ለማየትና ለመላክ የኢሜይል መተግበሪያዎ ይከፈታል።",
    contactDefaultSubject: "የድረ-ገጽ መልዕክት",
    collectionEyebrow: "የልምምድ ደብተር ስብስብ",
    heroTitleFirst: "ትልቅ ሀሳቦች",
    heroTitleSecond: "የሚጀምሩበት ቦታ።",
    heroDescription: "ለዕለታዊ ትምህርት በአካባቢው በጥንቃቄ የተዘጋጁ ደብተሮችና ወረቀቶች።",
    productAlt: "ሶስት ባለቀለም የራዲካል የልምምድ ደብተሮች",
    productName: "ራዲካል / የልምምድ ደብተሮች",
    productCaption: "ለዕለታዊ ሀሳቦች የተዘጋጁ።",
    footerPromise: "በአካባቢው የተሠሩ ወረቀቶች፣ ለሁሉም ዝግጁ።",
    productsEyebrow: "የእኛ ስብስብ",
    featuredProducts: "ተለይተው የቀረቡ ምርቶች",
    productsDescription:
      "የራዲካል ደብተሮችን፣ Triple A ፕሪሚየም የኮፒ ወረቀትንና ሌሎች በአካባቢው የተሠሩ ምርቶችን ይመልከቱ።",
    tripleAProductName: "Triple A A4 ፕሪሚየም የኮፒ ወረቀት",
    tripleASubtitle: "Triple A A4 ፕሪሚየም የማተሚያና የኮፒ ወረቀት",
    tripleACardSummary: "ፕሪሚየም A4 ወረቀት · 80 ግ/ሜ² · 500 ወረቀቶች",
    tripleAImageAlt: "የTriple A A4 ፕሪሚየም የኮፒ ወረቀት እሽግ",
    tripleADescription:
      "Triple A ዋና የA4 ወረቀታችን ሲሆን በክልላችን ከፍተኛ ጥራት ያለውና የፊርማ ምርታችን እንደሆነ የታወቀ ነው። ለሙያዊና ከፍተኛ መጠን ህትመት ተስማሚ የሆነ ግልጽ ውጤትና ለስላሳ ወለል ያቀርባል።",
    tripleAAssurance:
      "በንግዶችና ተቋማት የታመነው Triple A በወረቀት ጥራት፣ ወጥነት፣ አስተማማኝነትና አፈጻጸም መለኪያ ይሆናል።",
    productDetailsHeading: "የምርት ዝርዝሮች",
    specificationsHeading: "መግለጫዎች",
    perfectForHeading: "ተስማሚ ለ",
    tripleASpecifications: [
      "መጠን: A4 (210 ሚሜ × 297 ሚሜ)",
      "ክብደት: 80 ግ/ሜ²",
      "500 ወረቀቶች በአንድ ሪም",
      "5 ሪሞች በአንድ ካርቶን",
      "ነጭና በጣም ለስላሳ ወለል",
      "ለአካባቢ ተስማሚ፣ በህትመት ጊዜ የማይጣበቅ",
    ],
    tripleAUses: [
      "ለሌዘርና ኢንክጄት ማተሚያ",
      "ለፈጣን ፎቶኮፒ",
      "ለተራ ወረቀት ፋክስ",
      "በሁለቱም ጎን ማተም",
      "ለዕለታዊ የቢሮ ሰነዶች",
    ],
    radicalExerciseBooksName: "የራዲካል ፕሪሚየም PP የልምምድ ደብተሮች",
    radicalExerciseBooksSummary: "32፣ 50 እና 100 ሉሆች · በመስመር ወይም በካሬ",
    radicalExerciseBooksImageAlt: "ባለቀለም የተፈጥሮ ምስል ያለው የራዲካል PP ደብተር",
    radicalExerciseBooksDescription:
      "የራዲካል ፕሪሚየም PP የልምምድ ደብተሮች በ32፣ 50 እና 100 ሉሆች፣ በመስመርና በካሬ ቅርጾች ይገኛሉ። ዘላቂና ለመጻፍ ቀላል ሲሆኑ በኢትዮጵያ ከአንደኛ ክፍል እስከ ሁለተኛ ደረጃ ለሚማሩ ተማሪዎች ትምህርትን ለመደገፍ ተዘጋጅተዋል።",
    radicalExerciseBooksSpecifications: [
      "የሉህ ብዛት: 32፣ 50 እና 100",
      "ቅርጾች: በመስመርና በካሬ",
      "20-ማይክሮን PP ሽፋን",
      "128 gsm አንጸባራቂ ላሚኔሽን፣ በብልጭልጭ የታተመ የTriple A አርማ",
      "ውስጠኛ ገጾች: ደማቅ ነጭ 60 gsm ወረቀት",
    ],
    radicalExerciseBooksPacking: [
      "32 ሉህ: 240 ቁርጥራጮች በካርቶን",
      "50 ሉህ: 192 ቁርጥራጮች በካርቶን",
      "100 ሉህ: 96 ቁርጥራጮች በካርቶን",
    ],
    classicTripleAExerciseBookName: "ክላሲክ Triple A የልምምድ ደብተር",
    classicTripleAExerciseBookSummary: "50 ሉሆች · በመስመር",
    classicTripleAExerciseBookImageAlt: "አረንጓዴ የቢራቢሮ ሽፋን ያለው ክላሲክ Triple A ደብተር",
    classicTripleAExerciseBookDescription:
      "ክላሲክ Triple A የልምምድ ደብተር ዘላቂና ለመጻፍ ቀላል ሲሆን በሁሉም ደረጃ ትምህርትን ለመደገፍ ተዘጋጅቷል። ባለቀለም የPVC ሽፋኑ ተጨማሪ ጥበቃና ውበት ይሰጠዋል።",
    classicTripleAExerciseBookSpecifications: [
      "የሉህ ብዛት: 50 ሉሆች",
      "ቅርጽ: በመስመር",
      "ሽፋን: 20-ማይክሮን ባለቀለም PVC",
      "ውስጠኛ ገጾች: ደማቅ ነጭ 65 gsm ወረቀት",
    ],
    classicTripleAExerciseBookPacking: ["192 ቁርጥራጮች በካርቶን"],
    radicalBrandLabel: "Radical",
    radicalIPenName: "Radical i-Pen",
    radicalIPenSummary: "ለዕለታዊ ጽሕፈት ለስላሳና አስተማማኝ ብዕሮች።",
    radicalIPenImageAlt: "በሳጥን ውስጥ የቀረቡ የRadical i-Pen ኳስ ብዕሮች",
    radicalIPenDescription:
      "በጥቁር፣ በሰማያዊና በቀይ ቀለም ይገኛሉ። ለክፍል ትምህርት፣ ለቢሮዎችና ለዳግም ሻጮች ተስማሚ ናቸው። በፓክ ወይም በትልቅ ሳጥን ይሸጣሉ።",
    radicalIPenUses: ["የትምህርት ክፍሎች", "ቢሮዎች", "ዳግም ሻጮች"],
    iPenFeaturesHeading: "ባህሪያት",
    radicalIPenFeatures: [
      "ለስላሳ ጽሕፈት የሚያስችል ነፃ የቀለም ፍሰት ስርዓት",
      "ረጅም ጊዜ ለመጻፍ ጠንካራ መያዣ",
      "ግልጽ ጽሕፈት የሚያስችል ደማቅ ቀለም",
    ],
    radicalOnePlusName: "Radical One Plus+",
    radicalOnePlusSummary: "ለዕለታዊ ጽሕፈት ለስላሳና አስተማማኝ ብዕሮች።",
    radicalOnePlusImageAlt: "በግልጽ ማሰሮ ውስጥ የቀረቡ Radical One Plus+ ብዕሮች",
    radicalOnePlusDescription:
      "ለዕለታዊ ጽሕፈት ለስላሳና አስተማማኝ ብዕሮች። በጥቁር፣ በሰማያዊና በቀይ ቀለም ይገኛሉ። ለክፍል ትምህርት፣ ለቢሮዎችና ለዳግም ሻጮች ተስማሚ ናቸው። በፓክ ወይም በትልቅ ሳጥን ይሸጣሉ።",
    radicalOnePlusUses: ["የትምህርት ክፍሎች", "ቢሮዎች", "ዳግም ሻጮች"],
    radicalOnePlusOptionsHeading: "አማራጮች",
    radicalOnePlusOptions: ["ጥቁር፣ ሰማያዊና ቀይ ቀለም", "በፓክ ወይም በትልቅ ሳጥን"],
    radicalTapeName: "Radical ቴፕ",
    radicalTapeSummary: "BOPP ማሸጊያ ቴፕ · ግልጽ ወይም ቡናማ · ብዙ መጠኖች",
    radicalTapeImageAlt: "የግልጽ ብርቱካናማ Radical ማሸጊያ ቴፕ ጥቅሎች",
    radicalTapeDescription:
      "ለማሸጊያና ለማከማቻ የሚሆን ዘላቂና ከፍተኛ የማጣበቅ ኃይል ያለው ቴፕ። በግልጽና በቡናማ ቀለም ይገኛል፤ ለንግዶች፣ ለቤቶች፣ ለትምህርት ቤቶችና ለኢንዱስትሪ ጥቅም ጠንካራ መያዣና ንጹህ አጨራረስ ይሰጣል።",
    radicalTapeSpecifications: [
      "ለከፍተኛ ዘላቂነት ጠንካራ BOPP ቁሳቁስ",
      "ለረጅም ጊዜ መያዣ ግፊትን የሚነካ ማጣበቂያ",
      "በግልጽና በቡናማ ቀለም ይገኛል",
      "መደበኛ መጠን: 45 ሚሜ × 80 ያርድ፤ ብዙ መጠኖች አሉ",
    ],
    radicalTapeUses: [
      "ካርቶን ማሸግ",
      "ማሸግና ማጓጓዝ",
      "የቢሮና የመጋዘን ማደራጀት",
    ],
    qualityRedPaperName: "Quality Red",
    qualityRedPaperSummary: "A4 የኮፒና የማተሚያ ወረቀት · 80 gsm · 500 ሉሆች በአንድ ሪም",
    qualityRedPaperImageAlt: "የQuality Red A4 80 gsm የኮፒና የማተሚያ ወረቀት እሽግ",
    qualityRedPaperDescription:
      "ለዕለታዊ ፍላጎቶች ከፍተኛ አፈጻጸም ያለው የቢሮ ኮፒና የማተሚያ ወረቀት። ለጥሩ ውጤት የተዘጋጀው ይህ 80 gsm ወረቀት በተለያዩ ማሽኖች ውስጥ ለስላሳና የማይጣበቅ አፈጻጸም ይሰጣል።",
    qualityRedPaperSpecifications: [
      "መጠን: A4 (210 ሚሜ × 297 ሚሜ)",
      "ክብደት: 80 gsm",
      "500 ሉሆች በአንድ ሪም",
      "ለጥራት ያለውና ግልጽ ህትመት ደማቅና ለስላሳ ወለል",
      "ለስላሳና የማይጣበቅ አፈጻጸም",
    ],
    compatibleWithHeading: "ተስማሚ ከ",
    qualityRedPaperUses: [
      "ኮፒ",
      "ማተሚያ",
      "ሌዘርና ኢንክጄት ማተሚያ",
      "ተራ ወረቀት ፋክስ",
      "በሁለት ጎን ኮፒ",
      "በእጅ ጽሕፈት",
    ],
    qualityRedPaperIdealFor:
      "ለቢሮዎች፣ ለትምህርት ቤቶችና ለዕለታዊ የቤት አጠቃቀም ተስማሚ ሲሆን Quality Red በእያንዳንዱ ገጽ ወጥ ውጤት ያረጋግጣል።",
    packingStandardHeading: "የማሸጊያ ደረጃ",
    pensCategory: "እስክሪብቶች",
    paperProductsCategory: "የወረቀት ውጤቶች",
    stationeryCategory: "የጽሕፈት መሣሪያዎች",
    locallyMadeLabel: "በአካባቢው የተሠራ",
    comingSoonLabel: "በቅርቡ",
    productDetailsComingSoon: "የምርት ዝርዝሮች በቅርቡ ይጨመራሉ።",
    previousProducts: "ያለፉት ምርቶች",
    nextProducts: "ቀጣይ ምርቶች",
    showProduct: "ምርቱን አሳይ",
    storyEyebrow: "ስለ እኛ",
    storyTitleFirst: "ተመጣጣኝ ጥራት።",
    storyTitleSecond: "አካባቢያዊ ጥንካሬ።",
    storyIntroduction:
      "በ2000 የተቋቋመው ራዲካል ኃ.የተ.የግ.ማ ከኢትዮጵያ መሪ የጽሕፈት መሣሪያ ኩባንያዎች አንዱ ሲሆን መሠረቱ አዲስ አበባ ነው፤ በፒያሳና በመርካቶ ዋና ዋና መደብሮች አሉት። ከትንሽ የቤተሰብ ንግድ ተነስተን በመላ አገሪቱ ለትምህርት ቤቶች፣ ለንግዶች እና ለተቋማት የሚያገለግል ታማኝ ብራንድ ሆነናል።",
    storyManufacturing:
      "በአገር ውስጥ ምርት ላይ በመመስረት ከፍተኛ ጥራት ያለው A4 ወረቀት እዚሁ ኢትዮጵያ ውስጥ እናመርታለን። በዓመታት ውስጥ ምርቶቻችንን የልምምድ ደብተሮችን፣ እስክሪብቶችን፣ የወረቀት ውጤቶችን እና ከ400 በላይ ተጨማሪ የጽሕፈት መሣሪያ እቃዎችን፣ የምናመርታቸውንም የምናስገባቸውንም ጨምረን አስፋፍተናል።",
    storyApproach:
      "ራዲካል ተመጣጣኝ ዋጋን ከተረጋጋ ጥራት ጋር በማጣመር እያንዳንዱ ምርት የደንበኞቻችንን ፍላጎት እንዲያሟላ ያምናል። ጥንካሬያችን በብዛት ማቅረብ፣ በቀልጣፋ ስርጭት እና ትምህርትንና ንግድን በሀገር አቀፍ ደረጃ ለማጠናከር ባለን ቁርጠኝነት ላይ የተመሰረተ ነው።",
    storyToday:
      "ዛሬ ራዲካል ኃ.የተ.የግ.ማ በፈጠራ፣ በአገልግሎት እና በዓላማ ገበያውን እየመራ ይቀጥላል፤ ኩሩ ኢትዮጵያዊ እና ለወደፊት የተገነባ።",
    purposeEyebrow: "የሚመሩን መርሆዎች",
    purposeTitle: "ራዕያችን እና ተልዕኮአችን",
    visionTitle: "ራዕያችን",
    visionDescription:
      "በትውልዶች ሁሉ ትምህርትን፣ ንግድን እና ፈጠራን በማጠናከር የኢትዮጵያ በጣም ታማኝ እና ተደራሽ የጽሕፈት መሣሪያ አቅራቢ መሆን።",
    missionTitle: "ተልዕኮአችን",
    missionDescription:
      "ተመጣጣኝ ዋጋ ያላቸውን ከፍተኛ ጥራት ያላቸውን የጽሕፈት መሣሪያ መፍትሄዎች በታማኝነት፣ በፈጠራ እና በአካባቢያዊ ተፅዕኖ መሠረት ማቅረብ።",
    switchToAmharic: "ወደ አማርኛ ቀይር",
    switchToEnglish: "ወደ እንግሊዝኛ ቀይር",
  },
};
