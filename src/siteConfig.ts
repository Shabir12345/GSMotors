export const siteConfig = {
  name: 'GS Motors Luxury',
  description: 'Experience the pinnacle of automotive excellence. Hand-picked luxury vehicles, tailored for your journey.',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  contact: {
    phone: '(555) 987-6543',
    email: 'concierge@gsmotorsluxury.com',
    address: '888 Prestige Boulevard, Beverly Hills, CA 90210',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26430.762410886617!2d-118.42857410884638!3d34.073620330000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA!5e0!3m2!1sen!2sus!4v1645486877028!5m2!1sen!2sus',
    mapTitle: 'GS Motors Luxury Showroom',
  },
  social: {
    facebook: '#',
    instagram: '#',
    twitter: '#',
  },
  metadata: {
    title: 'GS Motors Luxury - Premium Pre-Owned Vehicles',
    description: 'Experience the pinnacle of automotive excellence. Hand-picked luxury vehicles, tailored for your journey.',
    keywords: 'luxury cars, exotics, premium auto sales, mercedes, bmw, porsche, used luxury cars',
  },
  integrations: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || '',
    googleTagManagerId: process.env.NEXT_PUBLIC_GTM_ID || '',
    facebookPixelId: process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || '',
  }
};
