import monocard from "./monacard.jpeg";
import advsikkim from "./advsikkim.jpeg";
import culturecard from "./culturecard.webp";
import naturecard from "./naturecard.webp";
import cuisinecard from "./cuisinecard.jpeg";
import thangka from "./thangka.jpg";
import ar from "./ar.jpeg";
import audio from "./audio.jpeg";
import offline from "./offline.jpeg";
import tour360 from "./360.jpeg";
import mona1 from "./mona1.jpeg";

export { mona1 };

export const monastery = [
  {
    img: monocard,
    title: "Ancient Monasteries",
    desc: "Explore serene and spiritual sites hidden in the mountains.",
  },
  {
    img: advsikkim,
    title: "Thrilling Adventures",
    desc: "Trekking, rafting, and paragliding for the adrenaline junkies.",
  },
  {
    img: culturecard,
    title: "Vibrant Culture",
    desc: "Experience local festivals and traditional handicrafts.",
  },
  {
    img: naturecard,
    title: "Breathtaking Nature",
    desc: "Lush valleys, snow-capped peaks, and exotic wildlife.",
  },
  {
    img: cuisinecard,
    title: "Delicious Cuisine",
    desc: "Savour the unique flavors of local Sikkimese dishes.",
  },
  {
    img: thangka,
    title: "Thangka Art & Handicrafts",
    desc: "Explore monasteries and workshops where artists paint masterpieces.",
  },
];

export const features = [
  {
    title: "Interactive Virtual Tours",
    desc: "Immerse yourself in 360-degree views of Sikkim's most sacred monasteries.",
    img: tour360,
  },
  {
    title: "Augmented Reality Experience",
    desc: "Use your phone to bring ancient artifacts and architecture to life with AR.",
    img: ar,
  },
  {
    title: "Offline Access",
    desc: "Download tours and AR experiences to enjoy without internet connectivity.",
    img: offline,
  },
  {
    title: "Cultural Insights & Audio Guides",
    desc: "Learn about the history, art, and traditions of each monastery with expert narration.",
    img: audio,
  },
];

export const monasteriesData = [
  {
    monastery_id: 1,
    name: "Dubdi Monastery",
    location_village_or_town: "Yuksom",
    district: "West",
    coordinates: { latitude: 27.067, longitude: 88.467 },
    altitude_meters: 2100,
    founded_year: 1701,
    founder: "Lhatsun Namkha Jigme",
    sect_order: "Nyingma",
    number_of_monks: 10,
    major_festivals: ["Losar (Tibetan New Year)"],
    architectural_features:
      "Two-story stone structure in traditional Tibetan style, with intricately painted interiors, prayer hall, and old manuscripts corridor.",
    date_of_renovation: null,
    access_info:
      "Accessible via a steep 3 km trek from Yuksom town (West Sikkim).",
    visiting_hours: "07:00–16:00",
    significance_or_remarks:
      "Perched on a hill near Yuksom, Dubdi is Sikkim's oldest monastery (1701) known as the \"Hermit's Cell\". It offers serene ambience and sweeping views of Kanchenjunga. Inside are revered statues of the lamas who founded Sikkim. Its annual rituals and quiet charm make it a unique pilgrimage site.",
    detailed_description:
      "Dubdi Monastery was established in 1701 as the first monastery of Sikkim, founded by the great yogi Lhatsun Namkha Jigme, who also blessed the coronation of the first Chogyal of Sikkim. This two-story stone gompa features traditional Tibetan architecture, with brightly painted walls depicting deities. Inside are rare manuscripts and statues of Lhatsun Chempo and his associates. Devotees treasure Dubdi for its spiritual legends: it is said Guru Rinpoche visited here during his sacred journey. Visitors can join the quiet prayer rituals of the resident monks and enjoy panoramic mountain vistas from the hilltop courtyard. It lies at the start of Sikkim’s sacred Dubdi–Norbugang–Tashiding pilgrimage circuit, making it a must-see for cultural and nature travelers. Though modest in size, its age, history and peaceful atmosphere make Dubdi an unforgettable stop on any Sikkim journey.",
    source_reference:
      "https://www.incredibleindia.gov.in/en/sikkim/pelling/dubdi-monastery",
    ImageURL:
      "https://res.cloudinary.com/dqfwkavre/image/upload/v1757796590/DubdiMonastery_bwwran.png",
  },
  {
    monastery_id: 2,
    name: "Pemayangtse Monastery",
    location_village_or_town: "Pemayangtse (near Gyalshing)",
    district: "West",
    coordinates: { latitude: 27.30444, longitude: 88.25278 },
    altitude_meters: 2085,
    founded_year: 1705,
    founder: "Lama Lhatsun Chempo",
    sect_order: "Nyingma",
    number_of_monks: 108,
    major_festivals: ["Cham dance festival (Feb/Mar, 28th–29th lunar month)"],
    architectural_features:
      "Three-storied sanctuary built on a hilltop, richly painted interiors, antique statues of Padmasambhava and saints, with an entrance shrine of Dorje Phagmo and manicured gardens.",
    date_of_renovation: null,
    access_info:
      "Short drive from Gyalshing or Pelling; located about 6 km from Gyalshing city via motorable road.",
    visiting_hours: "08:00–16:00",
    significance_or_remarks:
      "One of Sikkim’s most famous and beautiful monasteries, Pemayangtse is known as a ‘Lotus of the Skies.’ It is famed for its annual Cham dance (vibrant masked ritual) and its role as the headquarters of the pure monk tradition (ta-tshang) in Sikkim. The monastery enjoys sweeping Himalayan views and was historically linked to the royal family.",
    detailed_description:
      "Pemayangtse Monastery, established in 1705 by Guru Lhatsun Chempo, is a major Nyingma gompa set atop a scenic ridge near Pelling (Gyalshing district). Its name means “Perfect Sublime Lotus.” Architecturally, it is a three-story structure with ornately painted walls and traditional Tibetan designs. Inside are exquisite murals and statues of Guru Padmasambhava and other saints. The complex also includes a small shrine to Dorje Phagmo, reflecting unique local legends. Notably, Pemayangtse was built for celibate “pure monks” and even played a role in anointing Sikkim’s former kings. Each year it hosts the colorful Guru Drakmar Cham festival (28–29th Tibetan month), with sacred dances by resident lamas. Visitors can stroll its gardens and rooms filled with religious relics and manuscripts. Surrounded by Kanchenjunga peaks, its tranquil atmosphere and cultural richness make it a highlight for tourists interested in Sikkim’s Tibetan Buddhist heritage.",
    source_reference:
      "https://www.incredibleindia.gov.in/en/sikkim/pelling/pemayangtse-monastery",
    ImageURL:
      "https://res.cloudinary.com/dqfwkavre/image/upload/v1757796591/PemayangtseMonastery_uv96rq.png",
  },
  {
    monastery_id: 3,
    name: "Rumtek Monastery",
    location_village_or_town: "Rumtek (near Gangtok)",
    district: "East",
    coordinates: { latitude: 27.28861, longitude: 88.56139 },
    altitude_meters: 1500,
    founded_year: 1966,
    founder: "9th Karmapa, Wangchuk Dorje",
    sect_order: "Karma Kagyu",
    number_of_monks: null,
    major_festivals: [],
    architectural_features:
      "Large Tibetan-style complex with a golden stupa housing relics of the 16th Karmapa, assembly halls with elaborate murals, prayer wheels, and landscaped gardens.",
    date_of_renovation: null,
    access_info:
      "About 24 km by road northwest of Gangtok; accessible by mountain road from Gangtok city.",
    visiting_hours: "06:00–18:00",
    significance_or_remarks:
      "Rumtek is one of Sikkim’s largest and most important monasteries, serving as the exiled seat of the Karmapa Lama.  It features a unique golden stupa with the 16th Karmapa’s relics. Rumtek’s gardens and prayer halls offer a serene retreat and are famous among visitors.",
    detailed_description:
      "Rumtek Monastery, inaugurated in 1966 by the 16th Karmapa, is a sprawling karma kagyu gompa perched on a ridge near Gangtok. It was built under guidance of the Karmapa after he fled Tibet, symbolizing a new center of Kagyu Buddhism in exile. The complex includes a magnificent golden stupa containing the sacred relics of the 16th Karmapa, a library, and meditation halls. Traditional Tibetan architectural elements abound – from intricately painted doors to carved wooden ceilings. Rumtek is also known for its beautiful prayer wheels and a college for higher Buddhist studies. The monastery famously became the focus of the 17th Karmapa succession controversy, but today it functions peacefully as a place of worship and learning. Tourists visit Rumtek to glimpse its rich interior decorations and to walk its peaceful grounds amid rhododendron forests. The site conveys both deep spirituality and stunning mountain views, making it a must-see for cultural travelers in Sikkim.",
    source_reference: "https://en.wikipedia.org/wiki/Rumtek_Monastery",
    ImageURL:
      "https://res.cloudinary.com/dqfwkavre/image/upload/v1757796590/RumtekMonastery_kol52v.png",
  },
  {
    monastery_id: 4,
    name: "Enchey Monastery",
    location_village_or_town: "Gangtok",
    district: "East",
    coordinates: { latitude: 27.33583, longitude: 88.61917 },
    altitude_meters: null,
    founded_year: 1909,
    founder: "Lama Drupthob Karpo",
    sect_order: "Nyingma",
    number_of_monks: null,
    major_festivals: ["Chaam dance festival (Singhe-Cham, Pang Lhabsol)"],
    architectural_features:
      "Small monastery built on a ridge above Gangtok, featuring Tibetan-style shrines, a prayer hall with colorful frescoes, and statues of protective deities.",
    date_of_renovation: null,
    access_info:
      "Easily reachable by foot or taxi within Gangtok (about 3 km from the market), on the Nathula highway route.",
    visiting_hours: "09:00–17:00",
    significance_or_remarks:
      'Enchey is Gangtok’s own historic monastery, meaning "Solitary Monastery." It is famous for its colorful masked Cham dances and legends of Guru Padmasambhava subduing local spirits. Its hilltop location provides panoramic views of the Himalayas and the city below.',
    detailed_description:
      "Nestled on a forested ridge above Gangtok, Enchey Monastery was founded in 1840 by the famed Drupthob Karpo, a mystic yogi. The gompa’s red-and-white buildings house ancient Buddhist deities. Devotees believe that powerful mountain gods and protectors like Chhangchen Lhakhang reside here. Each year Enchey hosts lively rituals: the Singhe-Cham festival (February) and Pang Lhabsol (July), featuring masked dances honoring Khangchendzonga, the guardian deity. The monastery courtyard overlooks Gangtok, with sweeping views of Kanchenjunga peaks. Tourists can explore its tranquil halls with Tibetan art and witness monks chanting. According to tradition, Enchey owes its holiness to Guru Padmasambhava, who is said to have flown here on a cloud – a story reflecting the monastery’s aura of mystery. Its unique blend of legend, culture, and serenity makes Enchey a captivating stop in the state capital.",
    source_reference: "https://en.wikipedia.org/wiki/Enchey_Monastery",
    ImageURL:
      "https://res.cloudinary.com/dqfwkavre/image/upload/v1757796590/EncheyMonastery_ofpgug.png",
  },
  {
    monastery_id: 5,
    name: "Tashiding Monastery",
    location_village_or_town: "Tashiding",
    district: "West",
    coordinates: { latitude: 27.30833, longitude: 88.29806 },
    altitude_meters: null,
    founded_year: 1641,
    founder: "Ngadak Sempa Chempo Phunshok Rigzing",
    sect_order: "Nyingma",
    number_of_monks: null,
    major_festivals: ["Bumchu festival (Holy Water Ceremony, Feb/Mar)"],
    architectural_features:
      "Hilltop monastery featuring twin inner temples with gilded and black statues, a golden dome chorten (stupa), and traditional Tibetan roofs adorned with prayer flags.",
    date_of_renovation: 1717,
    access_info:
      "About 40 km southwest of Gyalshing (West Sikkim) by road; reachable via route through Pelling or Gyalshing.",
    visiting_hours: "08:00–16:00",
    significance_or_remarks:
      'Called the "Heart of Sikkim," Tashiding is one of the holiest Nyingma monasteries. Its sacred Bumchu ceremony (water vase ritual) is said to predict the fortunes of the region each year. Pilgrims seek its powerful blessings and panoramic mountain views.',
    detailed_description:
      'Tashiding Monastery stands atop a high hill between two rivers in West Sikkim. Founded in 1641 by Lama Ngadak Sempa Chempo, it soon became the most revered gompa in Sikkim, earning the title "Denzong’s heart." The two main temples enshrine divine statues (black and gold) of Padmasambhava and guardian deities. Surrounding them are traditional Nyingma elements: prayer wheels, colorful prayer flags, and a radiant golden stupa. The monastery’s most famous event is the annual Bumchu festival (14th–15th Tibetan New Year), when lamas draw holy water from a sacred vase to predict the year’s destiny – a spectacle attracting devotees from all over. Apart from its spiritual aura, Tashiding also offers stunning views of snow-capped peaks and the Rangit River valley below. Visitors enjoy the serene ambience and can learn of legends of Guru Rinpoche and royal disciples associated with this holy site. With its rich history and striking architecture, Tashiding is a top pilgrimage and sightseeing destination in Sikkim.',
    source_reference: "https://en.wikipedia.org/wiki/Tashiding_Monastery",
    ImageURL:
      "https://res.cloudinary.com/dqfwkavre/image/upload/v1757796591/TashidingMonastery_qapeqs.png",
  },
  {
    monastery_id: 6,
    name: "Ralang Monastery",
    location_village_or_town: "Ravangla (Ralong)",
    district: "South",
    coordinates: { latitude: 27.32833, longitude: 88.33472 },
    altitude_meters: null,
    founded_year: 1768,
    founder: null,
    sect_order: "Kagyu",
    number_of_monks: null,
    major_festivals: ["Pang Lhabsol (mountain worship festival, Sept–Dec)"],
    architectural_features:
      "Large white temple buildings with golden roofs, extensive Tibetan thangka murals, prayer halls, and surrounding stupas, maintained in Kagyu style.",
    date_of_renovation: null,
    access_info:
      "Approximately 6 km from Ravangla town (near Namchi) on a winding mountain road.",
    visiting_hours: "09:00–17:00",
    significance_or_remarks:
      "Ralang (Palchen Choling) is one of South Sikkim’s major Kagyu institutes, known for its large prayer halls and colorful frescoes. It hosts the Pang Lhabsol festival celebrating Mt. Kanchenjunga, attracting many visitors.",
    detailed_description:
      "Perched on a scenic hillside near Ravangla, Ralang Monastery (Palchen Choling) is a prominent Karma Kagyu center built in 1768. It features a sprawling compound with white-painted temples and golden pagoda roofs. The main assembly hall is adorned with elaborate Tibetan thangka paintings and statues of Buddhist saints. Established by the 12th Gyaltsab Rinpoche, the monastery blends traditional design with bright murals and carved woodwork. Ralang is best known for celebrating Pang Lhabsol – a unique festival (September–December) during which lamas perform sacred dances in honor of Khangchendzonga, symbolizing local mountain spirits. The joyous ceremonies and the chant-filled air make Ralang a vibrant cultural experience. Visitors can walk through its meditation lawns, large prayer wheels, and the new Palchen Choeling institute (rebuilt in the 1970s). Its tranquil setting, coupled with a view of snow peaks, provides a contemplative escape. Ralang stands as a testament to Sikkim’s living Kagyu traditions and continues to draw pilgrims and trekkers alike.",
    source_reference: "https://en.wikipedia.org/wiki/Ralang_Monastery",
    ImageURL:
      "https://res.cloudinary.com/dqfwkavre/image/upload/v1757796590/RalangMonastery_iltjol.png",
  },
  {
    monastery_id: 7,
    name: "Phodong Monastery",
    location_village_or_town: "Phodong",
    district: "North",
    coordinates: { latitude: 27.41278, longitude: 88.58389 },
    altitude_meters: null,
    founded_year: 1740,
    founder: "Chogyal Gyurmed Namgyal",
    sect_order: "Karma Kagyu",
    number_of_monks: 260,
    major_festivals: ["Chaam dance (10th Tibetan month)"],
    architectural_features:
      "Traditional whitewashed Kagyu monastery with a spacious courtyard, assembly hall, and well-preserved murals and relics from the 18th century.",
    date_of_renovation: null,
    access_info:
      "About 28 km north of Gangtok on the route to Dzongu and Lachen; reachable by bus or taxi via Mangan road.",
    visiting_hours: "08:00–17:00",
    significance_or_remarks:
      "Phodong is one of Sikkim’s oldest Kagyu monasteries, founded with royal support. It houses ancient wall paintings and a large monk community. Visitors often include it on the journey to Yuksom and North Sikkim for its historic art and peaceful atmosphere.",
    detailed_description:
      "Phodong Monastery was built in 1740 under the patronage of the Sikkimese king, and it later became a favored retreat of the 9th Karmapa. This Kagyu gompa is known for its well-preserved murals depicting Buddhist deities and lineage masters. Inside the main temple’s prayer hall are elaborate thangka paintings and gilded statues. The monastery historically served as a seat of studies for Sikkimese royalty. Today it accommodates around 260 monks, continuing centuries-old practices. Phodong’s setting on a hill offers views of lush green valleys, reflecting its reputation as a tranquil retreat. Key events include a masked Cham dance in the 10th Tibetan month (around December), drawing locals and travelers. Pilgrims respect Phodong for its spiritual heritage and artifacts. As part of traditional pilgrimage circuits in North Sikkim, it provides insight into the region’s Buddhist culture, complementing visits to nearby Rumtek and Dubdi.",
    source_reference: "https://en.wikipedia.org/wiki/Phodong_Monastery",
    ImageURL:
      "https://res.cloudinary.com/dqfwkavre/image/upload/v1757796590/PhodongMonastery_sk76so.png",
  },
  {
    monastery_id: 8,
    name: "Tsuklakhang Palace (Royal Chapel)",
    location_village_or_town: "Gangtok",
    district: "East",
    coordinates: { latitude: 27.326, longitude: 88.615 },
    altitude_meters: null,
    founded_year: 1898,
    founder: null,
    sect_order: "Tibetan Buddhist (state monastery)",
    number_of_monks: null,
    major_festivals: ["Pang Lhabsol (Sept)", "Kagyad (Dec)", "Losar"],
    architectural_features:
      "Elaborate royal chapel style building; contains richly carved altars, statues of Buddhas and Bodhisattvas, a large scripture library, and ornate ceremonial halls.",
    date_of_renovation: null,
    access_info:
      "In the heart of Gangtok city; easily accessible from major city roads.",
    visiting_hours: "09:00–17:00",
    significance_or_remarks:
      "Tsuklakhang served as the royal chapel of the Sikkim kings and was the site of royal ceremonies. It remains the main centre for state Buddhist festivals, featuring fine Tibetan artwork and a rich collection of scriptures.",
    detailed_description:
      "Tsuklakhang Palace, literally the Royal Chapel and Monastery, was established in 1898 as the personal place of worship for Sikkim’s royalty. Located in downtown Gangtok, it is a palatial temple of Tibetan Buddhist design. Its interior houses carved wood altars filled with gilded statues of the Buddha and Tantric deities. The assembly hall displays royal insignia and a repository of sacred books. Tsuklakhang has been the coronation and ceremony site for the Chogyals (kings) of Sikkim. To this day it is an active state monastery where major festivals are celebrated, including Losar (New Year), Pang Lhabsol (in honor of Mount Khangchendzonga), and Kagyad. Visitors can witness monks performing rituals in the grand courtyard. Though smaller than the hilltop gompas, Tsuklakhang’s urban setting and royal history make it important for understanding Sikkim’s cultural heritage. Tourists often enjoy its majestic prayer hall and the unique blend of religious devotion with historical architecture.",
    source_reference: "https://en.wikipedia.org/wiki/Tsuklakhang_Palace",
    ImageURL:
      "https://res.cloudinary.com/dqfwkavre/image/upload/v1757796591/TsuklakhangPalace_gzmpc5.png",
  },
  {
    monastery_id: 9,
    name: "Phensang Monastery",
    location_village_or_town: "Phensang, North Sikkim",
    district: "North",
    coordinates: { latitude: 27.42028, longitude: 88.61028 },
    altitude_meters: null,
    founded_year: 1721,
    founder: "Jigme Pawo (a Tibetan lama)",
    sect_order: "Nyingma",
    number_of_monks: null,
    major_festivals: ["Chaam dance (10th Tibetan month)"],
    architectural_features:
      "Classic whitewashed monastery buildings with carved wooden windows, prayer halls with Tibetan murals, and a serene temple yard.",
    date_of_renovation: null,
    access_info:
      "About 9 km north of Gangtok via Lingdum road; accessible by jeep or bus on the route to Mangan.",
    visiting_hours: "08:00–17:00",
    significance_or_remarks:
      "Phensang is one of the oldest Nyingma monasteries, predating Rumtek. It retains ancient Tibetan art and was known to the 9th Karmapa who helped build it. The monastery sits at a tranquil altitude above the Roro Valley, giving a peaceful retreat feel.",
    detailed_description:
      "Phensang Monastery is a small gem of Sikkimese Buddhism, founded in 1721. Built during the time of the 9th Karmapa’s visit, it became a favored Nyingma gompa. The temple compound features prayer halls decorated with traditional wall paintings of deities. The shrine houses ancient thangka paintings and statues that have survived centuries. Outside, the monastery overlooks lush hillsides and the valley, offering an aura of calm. Visitors here often note the quiet devotion of the resident monks. Each year a simple masked dance is performed in honor of Guru Rinpoche. Though lesser-known, Phensang is cherished by pilgrims for its old-world charm and its role in linking Tibet and Sikkim’s spiritual history. Tours may include it en route to Dzongri trekking trail, giving trekkers a cultural highlight before leaving civilization.",
    source_reference: "https://en.wikipedia.org/wiki/Phensang_Monastery",
    ImageURL:
      "https://res.cloudinary.com/dqfwkavre/image/upload/v1757796591/PhensangMonastery_y2srxa.png",
  },
  {
    monastery_id: 18,
    name: "Lingdum Zurmang Monastery",
    location_village_or_town: "Lingdum (near Gangtok)",
    district: "East",
    coordinates: null,
    altitude_meters: null,
    founded_year: 1999,
    founder: null,
    sect_order: "Karma Kagyu",
    number_of_monks: null,
    major_festivals: [],
    architectural_features:
      "Modern Tibetan gompa complex with whitewashed walls, red ochre roofs, prayer wheels and stupa.",
    date_of_renovation: null,
    access_info:
      "About 30 minutes’ drive north of Gangtok on the road to Lachung (via Phodong).",
    visiting_hours: "06:00–18:00",
    significance_or_remarks:
      "Lingdum (also called Zurmang Palchen Choling) is an active Kagyu monastery that attracts both devotees and tourists. Set in a serene meadow, it is known for its peaceful environment and chance to interact with young monks.",
    detailed_description:
      "Constructed in 1999, Lingdum Monastery (Zurmang Palchen Choling) follows the Kagyu school of Tibetan Buddhism. The white gompa stands amidst alpine fields, creating a scene of quiet beauty. In front are prayer wheels that pilgrims turn for blessings. Inside, the main hall contains colorful images of Tibetan deities. Lingdum hosts regular teachings and has become a spiritual retreat for Gangtok’s residents. It does not have historic relics, but its modern architecture is pristine and welcoming. Visitors can often witness monks in maroon robes practicing debates or painting thangkas. The monastery’s tranquility and view of distant mountains make it a peaceful stop. It also offers retreats for laypeople to learn meditation. Lingdum exemplifies how even new monasteries continue vibrant traditions, and it provides a glimpse of contemporary Buddhist monastic life in Sikkim.",
    source_reference: null,
    ImageURL:
      "https://res.cloudinary.com/dqfwkavre/image/upload/v1757796590/Lingdum_Zurmang_Monastery_n3rbto.png",
  },
];

export const posts = [
  {
    author: "Tenzin Gyatso",
    title: "Exploring the Ancient Murals of Pemayangtse Monastery",
    desc: "The vibrant colors and intricate details of the murals at Pemayangtse Monastery offer a glimpse into the rich artistic heritage of Sikkim. Each painting tells a story, connecting us to the spiritual narratives of the past.",
    img: "https://res.cloudinary.com/dqfwkavre/image/upload/v1757796590/DubdiMonastery_bwwran.png",
  },
  {
    author: "Karma Wangchuk",
    title: "A Day of Reflection at Tashiding Monastery",
    desc: "Spent a peaceful day at Tashiding Monastery, surrounded by the serene beauty of the mountains. The quiet atmosphere is perfect for meditation and introspection.",
    img: "https://res.cloudinary.com/dqfwkavre/image/upload/v1757796591/PemayangtseMonastery_uv96rq.png",
  },
  {
    author: "Rinchen Dolma",
    title: "The Annual Saga Dawa Festival at Rumtek Monastery",
    desc: "The Saga Dawa Festival at Rumtek Monastery is a vibrant celebration of Buddha's life. The procession and rituals are a powerful display of faith and community spirit.",
    img: "https://res.cloudinary.com/dqfwkavre/image/upload/v1757796590/RumtekMonastery_kol52v.png",
  },
  {
    author: "Karma Phuntsok",
    title: "Meditation Retreat at Rumtek Monastery",
    desc: "Participated in a week-long meditation retreat at Rumtek Monastery. The serene surroundings and spiritual guidance provided a deep sense of inner peace and clarity.",
    img: "https://res.cloudinary.com/dqfwkavre/image/upload/v1757796590/EncheyMonastery_ofpgug.png",
  },
  {
    author: "Lhamo Tsering",
    title: "Trekking to Tashiding Monastery",
    desc: "A beautiful trek through the Sikkim hills leading to Tashiding Monastery. The journey offered stunning landscapes and a spiritual experience amidst nature.",
    img: "https://res.cloudinary.com/dqfwkavre/image/upload/v1757796591/TashidingMonastery_qapeqs.png",
  },
  {
    author: "Pema Choden",
    title: "Photography Workshop at Pemayangtse Monastery",
    desc: "Joined a photography workshop capturing the intricate murals and architecture of Pemayangtse Monastery. A perfect blend of art, culture, and spiritual heritage.",
    img: "https://res.cloudinary.com/dqfwkavre/image/upload/v1757796590/PhodongMonastery_sk76so.png",
  },
];
