export const siteConfig = {
  name: 'GSMotorsinc',
  description: 'Experience the pinnacle of automotive excellence. Hand-picked luxury vehicles, tailored for your journey.',
  url: process.env.NEXT_PUBLIC_APP_URL || 'https://gs-motors.vercel.app',
  contact: {
    phone: '647-801-2475',
    email: 'concierge@gsmotorsinc.com',
    address: '3400 ON-115, Newcastle, ON L1B 0R6',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.431206191845!2d-78.61869832342084!3d43.92383827108992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x895d36e2f6f5d83f%3A0x6a0f4a7c8c8c8c8!2s3400%20ON-115%2C%20Newcastle%2C%20ON%20L1B%200R6%2C%20Canada!5e0!3m2!1sen!2sus!4v1708890288820!5m2!1sen!2sus',
    mapTitle: 'GSMotorsinc Showroom',
  },
  social: {
    facebook: '#',
    instagram: '#',
    twitter: '#',
  },
  metadata: {
    title: 'GSMotorsinc - Premium Pre-Owned Vehicles',
    description: 'Experience the pinnacle of automotive excellence. Hand-picked luxury vehicles, tailored for your journey.',
    keywords: 'luxury cars, exotics, premium auto sales, mercedes, bmw, porsche, used luxury cars',
  },
  integrations: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || '',
    googleTagManagerId: process.env.NEXT_PUBLIC_GTM_ID || '',
    facebookPixelId: process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || '',
  }
};
