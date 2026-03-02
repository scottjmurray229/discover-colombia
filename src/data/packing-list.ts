import type { PackingItem, PackingConfig, GearRecommendation } from './packing-base';

export const COLOMBIA_ESSENTIALS: PackingItem[] = [
  { id: 'co-altitude', name: 'Altitude Acclimatization Plan', category: 'destination', description: 'Bogotá sits at 8,660 feet (2,640m). Medellín at 5,000 feet. Many visitors experience altitude sickness — headache, fatigue, nausea — in the first 48 hours. Hydrate heavily, rest on arrival day, skip alcohol the first night.', essential: true, quantityMultiplier: 0, localAlternative: 'Ask pharmacist in Bogotá for acetazolamide if symptoms are severe — available over the counter' },
  { id: 'co-security', name: 'Anti-Theft Security Pouch', category: 'destination', description: 'Petty theft and phone snatching are common in tourist areas of Bogotá and Cartagena. A hidden money belt and minimal valuables on display dramatically reduce risk.', essential: true, amazonSearchFallback: 'hidden+money+belt+travel+security', affiliatePrice: '$15–25' },
  { id: 'co-repellent', name: 'DEET Insect Repellent', category: 'destination', description: 'Zika and dengue are present in coastal and lowland areas of Colombia. DEET is essential in Cartagena, Santa Marta, and Amazon-adjacent regions.', essential: true, amazonSearchFallback: 'deet+insect+repellent+travel', affiliatePrice: '$8–15' },
  { id: 'co-layers', name: 'Light Layers (altitude swing)', category: 'destination', description: 'Bogotá mornings are 50°F, afternoons are 65°F with sun. Medellín evenings drop cool. The tropical coast is 90°F. Colombia is multiple climates — light layers handle all of them.', essential: true, amazonSearchFallback: 'packable+fleece+lightweight+travel', affiliatePrice: '$30–50' },
];

export const COLOMBIA_GEAR_RECOMMENDATIONS: GearRecommendation[] = [
  { id: 'gr-co-pouch', name: 'Hidden Security Pouch', reason: 'Bogotá and Cartagena have active pickpocketing scenes. A flat hidden money belt under your clothes makes you a harder target and takes the anxiety out of crowded markets.', amazonSearchFallback: 'hidden+money+belt+travel+flat+security', affiliatePrice: '~$18' },
  { id: 'gr-co-repellent', name: 'DEET Insect Repellent', reason: 'Colombia\'s coast and lowlands have dengue and Zika. Cartagena\'s waterfront, the Amazon basin, and river towns near the coast are high-risk areas. DEET every evening.', amazonSearchFallback: 'deet+insect+repellent+30+percent+tropical', affiliatePrice: '~$9' },
  { id: 'gr-co-layers', name: 'Packable Light Layer (fleece or down)', reason: 'Bogotá is 8,660 feet — mornings start at 50°F year-round. You\'re going from cool highland mornings to warm coast afternoons on the same trip. One packable layer handles both.', amazonSearchFallback: 'packable+fleece+jacket+lightweight+travel', affiliatePrice: '~$55' },
  { id: 'gr-co-shoes', name: 'Comfortable Walking Shoes', reason: 'Bogotá\'s La Candelaria neighborhood, Cartagena\'s walled city, and Medellín\'s hillside comunas all require serious walking. City sneakers that are also comfortable on uneven stone streets are the right call.', amazonSearchFallback: 'comfortable+walking+shoes+city+sneakers+travel', affiliatePrice: '~$85' },
  { id: 'gr-co-charger', name: 'Portable Phone Charger', reason: 'Navigation is everything in Colombian cities — Bogotá\'s TransMilenio and Medellín\'s Metro require your phone for route planning. A power bank means you\'re never lost because your phone died.', amazonSearchFallback: 'power+bank+10000mah+compact+fast+charge', affiliatePrice: '~$30' },
];

export const COLOMBIA_CONFIG: PackingConfig = {
  sitePrefix: 'dco',
  destination: 'Colombia',
  climate: ['tropical'],
  currency: 'COP',
  plugType: 'Type A/B',
  plugVoltage: '110V',
  affiliateTag: 'discovermore-20',
  destinationEssentials: COLOMBIA_ESSENTIALS,
  gearRecommendations: COLOMBIA_GEAR_RECOMMENDATIONS,
};

export const SITE_CONFIG = COLOMBIA_CONFIG;

export const COLOMBIA_PACKING_FAQS = [
  { question: 'What should I pack for Colombia?', answer: 'The essentials are a hidden security pouch (petty theft in Bogotá and Cartagena tourist areas is common), DEET insect repellent (dengue and Zika on the coast), and layers for altitude (Bogotá is 8,660 feet — mornings start at 50°F year-round). No international adapter needed for US devices — Colombia uses Type A/B at 110V.' },
  { question: 'What is altitude sickness and how do I prepare?', answer: 'Bogotá sits at 8,660 feet (2,640m) — higher than most mountain resorts. Many visitors experience headache, fatigue, and shortness of breath in the first 48 hours. Prep: hydrate heavily the day before arrival, rest on your first day, avoid alcohol the first night. Most people acclimatize within 24–48 hours. Acetazolamide (Diamox) is available over the counter in Bogotá pharmacies if needed.' },
  { question: 'What power adapter do I need for Colombia?', answer: 'Colombia uses Type A and B plugs at 110V/60Hz — the same as the US. American devices work without any adapter. Check your device handles 110V (most do, but older devices may be 120V only — a 10V difference is usually fine).' },
  { question: 'Can I buy toiletries in Colombia?', answer: 'Yes — Bogotá, Medellín, and Cartagena have well-stocked pharmacies and supermarkets (Éxito, Carulla). DEET repellent is available locally but quality varies — bring your preferred brand. Basic toiletries are readily available everywhere.' },
  { question: 'How many outfits should I pack for Colombia?', answer: 'Pack for 5–7 days. Laundry services are available in all cities ($2–5/load). Most Airbnbs have washers. Pack versatile pieces — you\'ll move between cool highlands (Bogotá, coffee region) and hot coast (Cartagena, Santa Marta) on the same trip, so layers that work in both climates beat separate wardrobes.' },
  { question: 'What should I NOT bring to Colombia?', answer: 'Visible expensive jewelry or watches in city areas. Your full wallet to markets — use a small cash wallet and leave valuables at the hotel. More clothes than 5–7 days worth. And don\'t underestimate altitude in Bogotá — your first day should be slow even if you feel fine.' },
];
