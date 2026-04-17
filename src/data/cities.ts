export interface City {
  slug: string;
  name: string;
  region: string;
  province: string;
  driveTimeMin: number;
  driveTimeDesc: string;
  population: string;
  keywords: string[];
  nearbyCities: string[];
  description: string;
  localLandmarks: string[];
}

export const cities: City[] = [
  {
    slug: 'newcastle',
    name: 'Newcastle',
    region: 'Durham Region / Clarington',
    province: 'ON',
    driveTimeMin: 0,
    driveTimeDesc: 'Our dealership is located right here in Newcastle',
    population: '10,000+',
    keywords: ['used cars Newcastle ON', 'car dealer Newcastle Ontario', 'pre-owned vehicles Newcastle'],
    nearbyCities: ['bowmanville', 'clarington', 'port-hope'],
    description: 'GSMotorsinc is based right in Newcastle, ON — your local trusted pre-owned vehicle dealer on Hwy 115. No need to drive to the city for a quality used car at a fair price.',
    localLandmarks: ['Hwy 115 / Durham Rd 17', 'Newcastle Village', 'Bond Head'],
  },
  {
    slug: 'bowmanville',
    name: 'Bowmanville',
    region: 'Durham Region / Clarington',
    province: 'ON',
    driveTimeMin: 15,
    driveTimeDesc: '15 min west via Hwy 2 or Hwy 115',
    population: '40,000+',
    keywords: ['used cars Bowmanville', 'car dealer Bowmanville ON', 'pre-owned vehicles Bowmanville'],
    nearbyCities: ['newcastle', 'clarington', 'courtice'],
    description: 'Bowmanville drivers are just 15 minutes from GSMotorsinc in Newcastle. Skip the big-city dealership markup and find quality pre-owned vehicles right in your backyard.',
    localLandmarks: ['Bowmanville Mall', 'Hwy 2', 'Liberty St'],
  },
  {
    slug: 'clarington',
    name: 'Clarington',
    region: 'Durham Region',
    province: 'ON',
    driveTimeMin: 10,
    driveTimeDesc: '10 min — GSMotorsinc is located within Clarington municipality',
    population: '115,000+',
    keywords: ['used cars Clarington', 'car dealer Clarington ON', 'Clarington used car dealership'],
    nearbyCities: ['newcastle', 'bowmanville', 'courtice'],
    description: 'GSMotorsinc is your local Clarington car dealer. Serving all Clarington communities — Newcastle, Bowmanville, Courtice, and Orono — with honest pricing and certified pre-owned vehicles.',
    localLandmarks: ['Municipality of Clarington', 'Darlington Nuclear', 'Valleys of Ganaraska'],
  },
  {
    slug: 'courtice',
    name: 'Courtice',
    region: 'Durham Region / Clarington',
    province: 'ON',
    driveTimeMin: 25,
    driveTimeDesc: '25 min east via Hwy 2 or Courtice Rd to Hwy 115',
    population: '45,000+',
    keywords: ['used cars Courtice ON', 'car dealer Courtice', 'pre-owned vehicles Courtice'],
    nearbyCities: ['clarington', 'oshawa', 'bowmanville'],
    description: 'Courtice residents are just 25 minutes from GSMotorsinc. Our Newcastle showroom offers a curated selection of certified pre-owned cars with transparent pricing and easy financing.',
    localLandmarks: ['Courtice Community Complex', 'Hwy 2', 'Nash Rd'],
  },
  {
    slug: 'oshawa',
    name: 'Oshawa',
    region: 'Durham Region',
    province: 'ON',
    driveTimeMin: 35,
    driveTimeDesc: '35 min west on Hwy 2 or Hwy 115/35',
    population: '170,000+',
    keywords: ['used cars Oshawa', 'used car dealer Oshawa ON', 'pre-owned vehicles Oshawa', 'buy used car Oshawa'],
    nearbyCities: ['whitby', 'courtice', 'clarington'],
    description: 'Oshawa drivers trust GSMotorsinc for quality pre-owned vehicles without the big-box dealership experience. Just 35 minutes east in Newcastle — worth the drive for the savings.',
    localLandmarks: ['GM Oshawa', 'Durham College', 'Oshawa Centre'],
  },
  {
    slug: 'whitby',
    name: 'Whitby',
    region: 'Durham Region',
    province: 'ON',
    driveTimeMin: 45,
    driveTimeDesc: '45 min east on Hwy 401 or Hwy 2',
    population: '140,000+',
    keywords: ['used cars Whitby ON', 'car dealer Whitby', 'pre-owned vehicles Whitby Ontario'],
    nearbyCities: ['oshawa', 'ajax', 'courtice'],
    description: 'Whitby residents make the easy 45-minute drive to GSMotorsinc in Newcastle for certified pre-owned vehicles, competitive financing, and a no-pressure buying experience.',
    localLandmarks: ['Whitby Downtown', 'Iroquois Park', 'Hwy 412'],
  },
  {
    slug: 'ajax',
    name: 'Ajax',
    region: 'Durham Region',
    province: 'ON',
    driveTimeMin: 55,
    driveTimeDesc: '55 min east on Hwy 401',
    population: '130,000+',
    keywords: ['used cars Ajax ON', 'car dealer Ajax Ontario', 'pre-owned Ajax used vehicles'],
    nearbyCities: ['whitby', 'pickering', 'oshawa'],
    description: 'Ajax buyers drive to GSMotorsinc Newcastle for our honest pricing and wide selection of inspected pre-owned vehicles. Skip the commute traffic — find your next car with us.',
    localLandmarks: ['Ajax Waterfront', 'Hwy 401 / Salem Rd', 'Ajax GO Station'],
  },
  {
    slug: 'pickering',
    name: 'Pickering',
    region: 'Durham Region',
    province: 'ON',
    driveTimeMin: 60,
    driveTimeDesc: '60 min east on Hwy 401',
    population: '100,000+',
    keywords: ['used cars Pickering ON', 'car dealer Pickering', 'pre-owned vehicles Pickering Ontario'],
    nearbyCities: ['ajax', 'scarborough', 'whitby'],
    description: 'From Pickering, GSMotorsinc is a straight drive east on the 401. Our Newcastle showroom offers competitive pricing that makes the trip worthwhile — financing and trade-ins welcome.',
    localLandmarks: ['Pickering Town Centre', 'Pickering Nuclear', 'Hwy 401'],
  },
  {
    slug: 'port-hope',
    name: 'Port Hope',
    region: 'Northumberland County',
    province: 'ON',
    driveTimeMin: 20,
    driveTimeDesc: '20 min east on Hwy 2 / Hwy 115',
    population: '17,000+',
    keywords: ['used cars Port Hope ON', 'car dealer Port Hope Ontario', 'pre-owned vehicles Port Hope'],
    nearbyCities: ['cobourg', 'newcastle', 'clarington'],
    description: 'Port Hope residents are just 20 minutes west of GSMotorsinc. Enjoy small-town service with big-city selection of certified pre-owned vehicles at fair, transparent prices.',
    localLandmarks: ['Port Hope Downtown', 'Ganaraska River', 'Hwy 115'],
  },
  {
    slug: 'cobourg',
    name: 'Cobourg',
    region: 'Northumberland County',
    province: 'ON',
    driveTimeMin: 30,
    driveTimeDesc: '30 min east on Hwy 2 / Hwy 401',
    population: '20,000+',
    keywords: ['used cars Cobourg ON', 'car dealer Cobourg Ontario', 'pre-owned vehicles Cobourg'],
    nearbyCities: ['port-hope', 'newcastle', 'peterborough'],
    description: 'Cobourg drivers are 30 minutes from GSMotorsinc in Newcastle. We serve Northumberland County buyers with the same transparent pricing and certified quality they deserve.',
    localLandmarks: ['Cobourg Beach', 'Victoria Hall', 'Hwy 401'],
  },
  {
    slug: 'peterborough',
    name: 'Peterborough',
    region: 'Peterborough County',
    province: 'ON',
    driveTimeMin: 60,
    driveTimeDesc: '60 min south on Hwy 115',
    population: '85,000+',
    keywords: ['used cars Peterborough ON', 'car dealer Peterborough Ontario', 'pre-owned vehicles Peterborough'],
    nearbyCities: ['cobourg', 'port-hope', 'newcastle'],
    description: 'Peterborough buyers find GSMotorsinc is the perfect stop on Hwy 115 heading south. Quality pre-owned vehicles, straightforward financing, and a no-pressure team await you in Newcastle.',
    localLandmarks: ['Trent University', 'Peterborough Lift Lock', 'Hwy 115'],
  },
  {
    slug: 'scarborough',
    name: 'Scarborough',
    region: 'Toronto (East)',
    province: 'ON',
    driveTimeMin: 75,
    driveTimeDesc: '75 min east on Hwy 401',
    population: '630,000+',
    keywords: ['used cars Scarborough ON', 'car dealer Scarborough Ontario', 'pre-owned vehicles Scarborough'],
    nearbyCities: ['toronto', 'pickering', 'ajax'],
    description: 'Scarborough buyers regularly make the 75-minute drive to GSMotorsinc for our honest pricing, 150-point certified vehicles, and financing options unavailable at big-city markups.',
    localLandmarks: ['Scarborough Town Centre', 'Hwy 401', 'University of Toronto Scarborough'],
  },
  {
    slug: 'toronto',
    name: 'Toronto',
    region: 'GTA',
    province: 'ON',
    driveTimeMin: 90,
    driveTimeDesc: '90 min east on Hwy 401 — worth every minute',
    population: '2,900,000+',
    keywords: ['used cars Toronto', 'car dealer near Toronto', 'pre-owned vehicles GTA', 'used cars GTA Ontario'],
    nearbyCities: ['scarborough', 'markham', 'pickering'],
    description: 'Toronto buyers discover that the 90-minute drive to GSMotorsinc Newcastle pays for itself. Skip the GTA dealership premiums — certified pre-owned vehicles at prices the city can\'t match.',
    localLandmarks: ['Hwy 401', 'Downtown Toronto', 'GTA'],
  },
  {
    slug: 'markham',
    name: 'Markham',
    region: 'York Region / GTA',
    province: 'ON',
    driveTimeMin: 70,
    driveTimeDesc: '70 min east on Hwy 407 or Hwy 401',
    population: '360,000+',
    keywords: ['used cars Markham ON', 'car dealer Markham Ontario', 'pre-owned vehicles Markham'],
    nearbyCities: ['toronto', 'scarborough', 'pickering'],
    description: 'Markham drivers are 70 minutes from our Newcastle showroom. GSMotorsinc offers the quality Markham residents expect, at prices that beat the York Region competition.',
    localLandmarks: ['Markham Town Centre', 'Hwy 407', 'Pacific Mall'],
  },
  {
    slug: 'durham-region',
    name: 'Durham Region',
    region: 'Durham Region',
    province: 'ON',
    driveTimeMin: 0,
    driveTimeDesc: 'GSMotorsinc is located in the heart of Durham Region, Newcastle ON',
    population: '700,000+',
    keywords: ['used cars Durham Region', 'car dealer Durham Region ON', 'pre-owned vehicles Durham Ontario', 'used car dealership Durham'],
    nearbyCities: ['newcastle', 'oshawa', 'whitby'],
    description: 'GSMotorsinc is Durham Region\'s trusted independent used car dealer. Serving Clarington, Oshawa, Whitby, Ajax, Pickering, and all of Durham with certified pre-owned vehicles and honest pricing since 2014.',
    localLandmarks: ['Durham Region HQ Whitby', 'Hwy 401', 'Hwy 115/35'],
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map((c) => c.slug);
}

export function getNearbyCities(city: City): City[] {
  return city.nearbyCities
    .map((slug) => getCityBySlug(slug))
    .filter((c): c is City => c !== undefined);
}
