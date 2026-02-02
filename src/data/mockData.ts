export interface Vehicle {
    id: string;
    title: string;
    priceCents: number;
    odometerKm: number;
    year: number;
    make: string;
    model: string;
    condition: string;
    transmission: string;
    drivetrain: string;
    exteriorColor: string;
    interiorColor: string;
    fuelType: string;
    engine: string;
    bodyType: string;
    features: string[];
    status: 'AVAILABLE' | 'SOLD' | 'PENDING';
    isFeatured: boolean;
    seoSlug: string;
    wholesalePrice?: number;
    conditionGrade?: number; // 1-5, 5 being best
    vin?: string;
    location?: string;
    photos: { url: string; altText?: string; sortOrder: number }[];
    createdAt: string;
    updatedAt: string;
}

export interface Review {
    id: string;
    author: string;
    authorPhoto?: string;
    rating: number;
    text: string;
    time: string;
    source: 'GOOGLE' | 'FACEBOOK' | 'DIRECT';
}

export const MOCK_VEHICLES: Vehicle[] = [
    {
        id: 'v1',
        title: '2023 Porsche 911 GT3 RS',
        priceCents: 32500000,
        odometerKm: 1200,
        year: 2023,
        make: 'Porsche',
        model: '911 GT3 RS',
        condition: 'Used',
        transmission: 'PDK',
        drivetrain: 'RWD',
        exteriorColor: 'Guards Red',
        interiorColor: 'Black / Red Stitching',
        fuelType: 'Gasoline',
        engine: '4.0L Flat-6',
        bodyType: 'Coupe',
        features: ['Weissach Package', 'Ceramic Composite Brakes', 'Front Axle Lift', 'Carbon Bucket Seats', 'Bose Surround Sound'],
        status: 'AVAILABLE',
        isFeatured: true,
        seoSlug: '2023-porsche-911-gt3-rs-v1',
        photos: [
            { url: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2070&auto=format&fit=crop', altText: 'Porsche 911 GT3 RS Front', sortOrder: 0 },
            { url: 'https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=2070&auto=format&fit=crop', altText: 'Porsche Side Profile', sortOrder: 1 }
        ],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 'v2',
        title: '2022 Mercedes-AMG G63',
        priceCents: 21000000,
        odometerKm: 15400,
        year: 2022,
        make: 'Mercedes-Benz',
        model: 'G-Class',
        condition: 'Used',
        transmission: 'Automatic',
        drivetrain: 'AWD',
        exteriorColor: 'Matte Black',
        interiorColor: 'Bengal Red',
        fuelType: 'Gasoline',
        engine: '4.0L V8 Biturbo',
        bodyType: 'SUV',
        features: ['Night Package', 'Massage Seats', 'Burmester High-End Sound', '22" Forged Wheels', 'Carbon Fiber Trim'],
        status: 'AVAILABLE',
        isFeatured: true,
        seoSlug: '2022-mercedes-amg-g63-v2',
        photos: [
            { url: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop', altText: 'Mercedes G63 AMG', sortOrder: 0 },
            { url: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop', altText: 'Mercedes Interior', sortOrder: 1 }
        ],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 'v3',
        title: '2024 Lamborghini Huracán Tecnica',
        priceCents: 38900000,
        odometerKm: 450,
        year: 2024,
        make: 'Lamborghini',
        model: 'Huracán',
        condition: 'Used',
        transmission: 'Automatic',
        drivetrain: 'RWD',
        exteriorColor: 'Verde Mantis',
        interiorColor: 'Nero Ade',
        fuelType: 'Gasoline',
        engine: '5.2L V10',
        bodyType: 'Coupe',
        features: ['Lift System', 'Smartphone Interface', 'Rear View Camera', 'Carbon Ceramic Brakes', 'Sport Seats'],
        status: 'AVAILABLE',
        isFeatured: true,
        seoSlug: '2024-lamborghini-huracan-tecnica-v3',
        photos: [
            { url: 'https://images.unsplash.com/photo-1566473965997-3de9c817e938?q=80&w=2070&auto=format&fit=crop', altText: 'Lamborghini Huracan', sortOrder: 0 },
            { url: 'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?q=80&w=2070&auto=format&fit=crop', altText: 'Lamborghini Side', sortOrder: 1 }
        ],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 'v4',
        title: '2021 Ferrari F8 Tributo',
        priceCents: 41000000,
        odometerKm: 3200,
        year: 2021,
        make: 'Ferrari',
        model: 'F8 Tributo',
        condition: 'Used',
        transmission: 'Automatic',
        drivetrain: 'RWD',
        exteriorColor: 'Rosso Corsa',
        interiorColor: 'Cuoio',
        fuelType: 'Gasoline',
        engine: '3.9L V8 Twin-Turbo',
        bodyType: 'Coupe',
        features: ['Carbon Fiber Racing Seats', 'Suspension Lifter', 'Passenger Display', 'Scuderia Ferrari Shields', 'Titanium Exhaust Pipes'],
        status: 'SOLD',
        isFeatured: false,
        seoSlug: '2021-ferrari-f8-tributo-v4',
        wholesalePrice: 39500000,
        conditionGrade: 4.9,
        vin: 'ZFF88JMA0M0234567',
        location: 'Beverly Hills Showroom',
        photos: [
            { url: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=2070&auto=format&fit=crop', altText: 'Ferrari F8 Tributo', sortOrder: 0 }
        ],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 'v5',
        title: '2023 Rolls-Royce Cullinan',
        priceCents: 45000000,
        odometerKm: 5100,
        year: 2023,
        make: 'Rolls-Royce',
        model: 'Cullinan',
        condition: 'Used',
        transmission: 'Automatic',
        drivetrain: 'AWD',
        exteriorColor: 'Diamond Black',
        interiorColor: 'Arctic White',
        fuelType: 'Gasoline',
        engine: '6.75L V12 Twin-Turbo',
        bodyType: 'SUV',
        features: ['Shooting Star Headliner', 'Immersive Seating with Center Console', 'Rear Theatre Configuration', 'Picnic Tables', 'Lambswool Footmats'],
        status: 'AVAILABLE',
        isFeatured: true,
        seoSlug: '2023-rolls-royce-cullinan-v5',
        wholesalePrice: 42000000,
        conditionGrade: 5.0,
        vin: 'SCA664S50MU123456',
        location: 'Beverly Hills Private Lounge',
        photos: [
            { url: 'https://images.unsplash.com/photo-1631295868223-63260951cb28?q=80&w=2070&auto=format&fit=crop', altText: 'Rolls Royce Cullinan', sortOrder: 0 }
        ],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 'v6',
        title: '2022 BMW M5 CS',
        priceCents: 18500000,
        odometerKm: 8900,
        year: 2022,
        make: 'BMW',
        model: 'M5',
        condition: 'Used',
        transmission: 'Automatic',
        drivetrain: 'AWD',
        exteriorColor: 'Frozen Deep Green',
        interiorColor: 'Black',
        fuelType: 'Gasoline',
        engine: '4.4L V8 Twin-Turbo',
        bodyType: 'Sedan',
        features: ['Carbon Ceramic Brakes', 'M Bucket Seats', 'Yellow Icon Adaptive LED Headlights', 'Gold Bronze Accents', 'Alcantara Steering Wheel'],
        status: 'AVAILABLE',
        isFeatured: false,
        seoSlug: '2022-bmw-m5-cs-v6',
        wholesalePrice: 17200000,
        conditionGrade: 4.8,
        vin: 'WBS83CH090CK98765',
        location: 'Off-site Storage',
        photos: [
            { url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop', altText: 'BMW M5', sortOrder: 0 }
        ],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }
];

export const MOCK_REVIEWS: Review[] = [
    {
        id: 'r1',
        author: 'James Patterson',
        rating: 5,
        text: 'Absolutely streamlined experience. The team at GS Motors Luxury understood exactly what I was looking for. My new GT3 RS is flawless. Highly recommend for anyone looking for serious machinery.',
        time: '2 days ago',
        source: 'GOOGLE'
    },
    {
        id: 'r2',
        author: 'Elena Rodriguez',
        rating: 5,
        text: 'I was hesitant about buying a luxury SUV sight unseen, but the video walkthroughs and detailed history reports gave me total confidence. Delivery to my driveway was the cherry on top.',
        time: '1 week ago',
        source: 'GOOGLE'
    },
    {
        id: 'r3',
        author: 'Michael Chang',
        rating: 5,
        text: 'Professionalism from start to finish. They gave me a fair trade-in value for my old Rover and the financing process was transparent. Love my new G-Wagon!',
        time: '3 weeks ago',
        source: 'GOOGLE'
    }
];
