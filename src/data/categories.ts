// Vehicle category data for SEO-optimized page generation

export interface VehicleMake {
  id: string;
  slug: string;
  name: string;
  description: string;
  popularModels: string[];
  avgPriceRange: { min: number; max: number };
}

export interface VehicleModel {
  id: string;
  slug: string;
  name: string;
  makeSlug: string;
  makeName: string;
  description: string;
  bodyTypes: string[];
  avgPriceRange: { min: number; max: number };
}

export interface BodyType {
  id: string;
  slug: string;
  name: string;
  description: string;
  benefits: string[];
  popularMakes: string[];
}

export interface PriceRange {
  id: string;
  slug: string;
  label: string;
  min: number;
  max: number;
  description: string;
}

// Vehicle Makes Data
export const vehicleMakes: VehicleMake[] = [
  {
    id: 'mercedes',
    slug: 'mercedes',
    name: 'Mercedes-Benz',
    description: 'Luxury pre-owned Mercedes vehicles. Known for quality engineering, smooth handled, and reliable drivetrains. Popular models: C-Class, E-Class, A-Class.',
    popularModels: ['c-class', 'e-class', 'a-class', 'glc', 'gle'],
    avgPriceRange: { min: 18000, max: 35000 }
  },
  {
    id: 'bmw',
    slug: 'bmw',
    name: 'BMW',
    description: 'Quality German engineering with sporty handling. Pre-owned BMW vehicles offer performance and reliability. Popular models: 3-Series, 5-Series, X3, X5.',
    popularModels: ['3-series', '5-series', 'x3', 'x5', 'x1'],
    avgPriceRange: { min: 16000, max: 32000 }
  },
  {
    id: 'honda',
    slug: 'honda',
    name: 'Honda',
    description: 'Reliable Honda vehicles trusted by GTA drivers. Excellent fuel economy, low maintenance costs, and strong resale value. Popular models: Civic, Accord, CR-V, Pilot.',
    popularModels: ['civic', 'accord', 'cr-v', 'pilot', 'odyssey'],
    avgPriceRange: { min: 10000, max: 22000 }
  },
  {
    id: 'toyota',
    slug: 'toyota',
    name: 'Toyota',
    description: 'Toyota vehicles are legendary for reliability and longevity. Pre-owned Toyotas deliver years of dependable service. Popular models: Camry, Corolla, RAV4, Highlander.',
    popularModels: ['camry', 'corolla', 'rav4', 'highlander', 'sienna'],
    avgPriceRange: { min: 11000, max: 24000 }
  },
  {
    id: 'mazda',
    slug: 'mazda',
    name: 'Mazda',
    description: 'Affordable quality with engaging driving dynamics. Mazda vehicles offer great value and reliability. Popular models: Mazda3, Mazda5, CX-5, CX-9.',
    popularModels: ['mazda3', 'mazda5', 'cx-5', 'cx-9', 'mx-5'],
    avgPriceRange: { min: 9000, max: 20000 }
  },
  {
    id: 'hyundai',
    slug: 'hyundai',
    name: 'Hyundai',
    description: 'Modern, reliable Hyundai vehicles at competitive prices. Great warranties and strong build quality make Hyundai an excellent value choice. Popular models: Elantra, Sonata, Tucson, Santa Fe.',
    popularModels: ['elantra', 'sonata', 'tucson', 'santa-fe', 'accent'],
    avgPriceRange: { min: 8000, max: 18000 }
  },
  {
    id: 'nissan',
    slug: 'nissan',
    name: 'Nissan',
    description: 'Quality Japanese engineering from Nissan. Dependable vehicles with good parts availability. Popular models: Altima, Sentra, Rogue, Pathfinder.',
    popularModels: ['altima', 'sentra', 'rogue', 'pathfinder', 'maxima'],
    avgPriceRange: { min: 9000, max: 20000 }
  },
  {
    id: 'subaru',
    slug: 'subaru',
    name: 'Subaru',
    description: 'All-wheel drive standard on most Subaru vehicles. Perfect for Toronto winters. Reliable, safe, and excellent for Canadian driving conditions. Popular models: Outback, Legacy, Forester, Crosstrek.',
    popularModels: ['outback', 'legacy', 'forester', 'crosstrek', 'XV'],
    avgPriceRange: { min: 12000, max: 22000 }
  },
  {
    id: 'kia',
    slug: 'kia',
    name: 'Kia',
    description: 'Affordable, stylish Kia vehicles with strong warranties. Great value for budget-conscious buyers. Popular models: Forte, Optima, Sportage, Sorento.',
    popularModels: ['forte', 'optima', 'sportage', 'sorento', 'soul'],
    avgPriceRange: { min: 8000, max: 18000 }
  },
  {
    id: 'ford',
    slug: 'ford',
    name: 'Ford',
    description: 'American reliability with proven drivetrains. Popular Ford models offer good value and practicality. Popular models: Fusion, Escape, Edge, F-150.',
    popularModels: ['fusion', 'escape', 'edge', 'focus', 'explorer'],
    avgPriceRange: { min: 9000, max: 22000 }
  },
];

// Body Types Data
export const bodyTypes: BodyType[] = [
  {
    id: 'sedan',
    slug: 'sedan',
    name: 'Sedans',
    description: 'Four-door sedans offer comfort, style, and fuel efficiency. Perfect for daily commuting and family transportation. Popular for reliability and affordable maintenance.',
    benefits: [
      'Excellent fuel efficiency',
      'Comfortable seating for 5',
      'Good cargo space with trunk',
      'Lower maintenance costs',
      'Easy to park in tight spaces',
      'Smooth highway performance'
    ],
    popularMakes: ['Honda', 'Toyota', 'Nissan', 'Hyundai', 'Mazda']
  },
  {
    id: 'suv',
    slug: 'suv',
    name: 'SUVs',
    description: 'SUVs provide higher seating, more cargo space, and better visibility. Ideal for families and winter driving in Canada. Great for those seeking versatility and safety.',
    benefits: [
      'Higher seating position and visibility',
      'Extra cargo and towing capacity',
      'Better winter performance (especially AWD)',
      'Family-friendly interior',
      'Off-road capability (many models)',
      'Excellent safety ratings'
    ],
    popularMakes: ['Honda', 'Toyota', 'Mazda', 'Subaru', 'Nissan']
  },
  {
    id: 'coupe',
    slug: 'coupe',
    name: 'Coupes',
    description: 'Two-door coupes offer sporty styling and engaging driving dynamics. Perfect for enthusiasts seeking performance and style. Great for individual buyers and couples.',
    benefits: [
      'Sporty, stylish design',
      'Engaging handling and performance',
      'Lower insurance costs (some models)',
      'Great resale value (popular models)',
      'Fun driving experience',
      'Impressive acceleration'
    ],
    popularMakes: ['Honda', 'Mazda', 'Hyundai', 'Ford', 'Nissan']
  },
  {
    id: 'wagon',
    slug: 'wagon',
    name: 'Wagons',
    description: 'Station wagons combine sedan comfort with SUV cargo space. Long roof provides excellent storage without the fuel consumption of larger vehicles. Practical and versatile.',
    benefits: [
      'Maximum cargo space of all sedans',
      'Better fuel economy than SUVs',
      'Car-like handling and comfort',
      'Great for road trips',
      'Easy loading and unloading',
      'Practical family transportation'
    ],
    popularMakes: ['Toyota', 'Subaru', 'Nissan', 'Honda', 'Mazda']
  },
  {
    id: 'hatchback',
    slug: 'hatchback',
    name: 'Hatchbacks',
    description: 'Compact hatchbacks offer agility, affordability, and practicality. Perfect for city driving and first-time buyers. Easy to park and fuel-efficient.',
    benefits: [
      'Easy to park in tight spaces',
      'Excellent fuel economy',
      'Lower price point',
      'Good cargo space for size',
      'Fun, responsive handling',
      'Great for city driving'
    ],
    popularMakes: ['Honda', 'Hyundai', 'Mazda', 'Ford', 'Kia']
  },
];

// Price Ranges Data
export const priceRanges: PriceRange[] = [
  {
    id: 'under-10k',
    slug: 'under-10k',
    label: 'Under $10,000',
    min: 0,
    max: 10000,
    description: 'Budget-friendly used cars perfect for first-time buyers and value hunters. Limited warranties but good candidates for hands-on mechanical knowledge. Great for basic transportation.'
  },
  {
    id: '10k-15k',
    slug: '10k-15k',
    label: '$10,000 - $15,000',
    min: 10000,
    max: 15000,
    description: 'Sweet spot for value buyers. More recent model years, lower mileage, and often includes warranty coverage. Good balance of price and reliability.'
  },
  {
    id: '15k-20k',
    slug: '15k-20k',
    label: '$15,000 - $20,000',
    min: 15000,
    max: 20000,
    description: 'Quality vehicles with lower mileage and comprehensive warranty options. Includes popular brands and reliable models. Great for buyers seeking peace of mind.'
  },
  {
    id: '20k-25k',
    slug: '20k-25k',
    label: '$20,000 - $25,000',
    min: 20000,
    max: 25000,
    description: 'Premium used vehicles with warranty coverage and excellent condition. Newer model years with latest features and technology. Perfect for discerning buyers.'
  },
  {
    id: '25k-plus',
    slug: '25k-plus',
    label: '$25,000+',
    min: 25000,
    max: 100000,
    description: 'High-quality luxury and premium vehicles. Newest model years with extended warranty options. For buyers seeking top condition and premium brands.'
  },
];

// Helper functions
export function getMakeBySlug(slug: string): VehicleMake | undefined {
  return vehicleMakes.find(make => make.slug === slug);
}

export function getBodyTypeBySlug(slug: string): BodyType | undefined {
  return bodyTypes.find(type => type.slug === slug);
}

export function getPriceRangeBySlug(slug: string): PriceRange | undefined {
  return priceRanges.find(range => range.slug === slug);
}

export function getAllMakeSlugs(): string[] {
  return vehicleMakes.map(m => m.slug);
}

export function getAllBodyTypeSlugs(): string[] {
  return bodyTypes.map(t => t.slug);
}

export function getAllPriceRangeSlugs(): string[] {
  return priceRanges.map(r => r.slug);
}
