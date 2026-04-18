import PageHero from '@/components/PageHero';
import { siteConfig } from '@/siteConfig';

export const metadata = {
  title: 'Terms of Use | GSMotorsinc',
  description: 'Terms and conditions for using the GSMotorsinc website and services.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-brand-darker">
      <PageHero
        badge="Legal"
        badgeColor="gray"
        title="Terms of Use"
        subtitle="Terms and conditions governing use of the GSMotorsinc website and services."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Terms of Use', href: '/terms' },
        ]}
      />

      <section className="container mx-auto px-4 md:px-6 mb-20">
        <div className="max-w-3xl mx-auto space-y-10">

          <p className="text-gray-500 text-xs">Last updated: April 2026</p>

          {[
            {
              title: '1. Acceptance of Terms',
              content: `By accessing or using the GSMotorsinc website (gsmotorsinc.com or gs-motors.vercel.app), you agree to be bound by these Terms of Use. If you do not agree, please do not use this website.`,
            },
            {
              title: '2. Website Use',
              content: `You may use this website for lawful purposes only. You agree not to:

• Use the website in a way that violates any applicable law or regulation
• Transmit any unsolicited or unauthorized advertising or promotional material
• Attempt to gain unauthorized access to any part of the website or its systems
• Use automated tools to scrape, crawl, or extract data from this website without our written permission`,
            },
            {
              title: '3. Vehicle Listings & Pricing',
              content: `Vehicle listings on this website are for informational purposes only. All prices are in Canadian dollars and exclude applicable taxes and fees unless stated otherwise. Vehicle availability, pricing, and specifications are subject to change without notice. We make reasonable efforts to ensure accuracy but do not guarantee that all information is error-free.

Prices listed represent dealer asking price and are subject to negotiation. Final pricing is confirmed in a written bill of sale.`,
            },
            {
              title: '4. Financing Information',
              content: `Financing information, rate examples, and payment estimates on this website are illustrative only and do not constitute a financing offer or commitment. Actual rates and terms depend on your creditworthiness, lender approval, and applicable regulations. Financing is subject to lender approval.`,
            },
            {
              title: '5. Submitted Information',
              content: `When you submit information through our contact, financing, or trade-in forms, you represent that the information is accurate and complete. You consent to our use of that information as described in our Privacy Policy.`,
            },
            {
              title: '6. Intellectual Property',
              content: `All content on this website — including text, images, logos, and design — is the property of GSMotorsinc or its content suppliers and is protected by Canadian copyright law. You may not reproduce, distribute, or create derivative works without our written permission.`,
            },
            {
              title: '7. Disclaimer of Warranties',
              content: `This website is provided "as is" without warranties of any kind, express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.`,
            },
            {
              title: '8. Limitation of Liability',
              content: `To the maximum extent permitted by applicable law, GSMotorsinc shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website or reliance on information contained herein.`,
            },
            {
              title: '9. Third-Party Links',
              content: `This website may contain links to third-party websites. These links are provided for convenience only. We do not endorse or take responsibility for the content or practices of third-party websites.`,
            },
            {
              title: '10. Changes to Terms',
              content: `We may update these terms at any time. The updated version will be posted on this page with a revised date. Continued use of the website after changes constitutes acceptance of the new terms.`,
            },
            {
              title: '11. Governing Law',
              content: `These terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein. Any disputes shall be resolved in the courts of Ontario.`,
            },
            {
              title: '12. Contact',
              content: `Questions about these terms? Contact us:\n\nGSMotorsinc\n${siteConfig.contact.address}\nEmail: ${siteConfig.contact.email}\nPhone: ${siteConfig.contact.phone}`,
            },
          ].map((section) => (
            <div key={section.title} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 md:p-8">
              <h2 className="text-lg font-bold text-white mb-4">{section.title}</h2>
              <div className="whitespace-pre-line text-gray-400 text-sm leading-relaxed">{section.content}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
