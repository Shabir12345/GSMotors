export const siteConfig = {
  name: 'GSMotorsinc',
  description: 'Quality pre-owned vehicles at fair, transparent prices. Honest car buying without the games.',
  // Production domain — always gsmotorsinc.com. Override with NEXT_PUBLIC_APP_URL for staging/preview.
  url: process.env.NEXT_PUBLIC_APP_URL || 'https://gsmotorsinc.com',
  contact: {
    phone: '647-801-2475',
    email: 'concierge@gsmotorsinc.com',
    address: '3400 ON-115, Newcastle, ON L1B 0R6',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2872.816624960731!2d-78.603318!3d43.94246859999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d5a8fd814ea1b5%3A0x458e391ea4dfbc7b!2s3400%20ON-115%2C%20Newcastle%2C%20ON%20L1B%200R6!5e0!3m2!1sen!2sca!4v1771892378033!5m2!1sen!2sca',
    mapTitle: 'GSMotorsinc Showroom',
  },
  social: {
    facebook: 'https://www.facebook.com/gsmotorsinc',
    instagram: 'https://www.instagram.com/gsmotorsinc',
    twitter: 'https://twitter.com/gsmotorsinc',
  },
  metadata: {
    title: 'GSMotorsinc | Used Cars Newcastle ON — Durham Region & GTA',
    description: 'Quality pre-owned vehicles at fair, transparent prices. Serving Newcastle, Bowmanville, Oshawa, Whitby, Ajax & the GTA. Financing for all credit types.',
    keywords: 'used cars Newcastle ON, used car dealer Durham Region, pre-owned vehicles Ontario, used cars Bowmanville, used cars Oshawa, buy used car GTA, car financing Ontario',
    ogImage: '/og-image.jpg',
  },
  integrations: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || '',
    googleTagManagerId: process.env.NEXT_PUBLIC_GTM_ID || '',
    facebookPixelId: process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || '',
    // Paste your Google Search Console verification code here once you verify ownership
    googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  }
};
