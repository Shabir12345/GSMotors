import PageHero from '@/components/PageHero';
import { siteConfig } from '@/siteConfig';

export const metadata = {
  title: 'Privacy Policy | GSMotorsinc',
  description: 'GSMotorsinc privacy policy — how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-brand-darker">
      <PageHero
        badge="Legal"
        badgeColor="gray"
        title="Privacy Policy"
        subtitle="How GSMotorsinc collects, uses, and protects your personal information."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Privacy Policy', href: '/privacy' },
        ]}
      />

      <section className="container mx-auto px-4 md:px-6 mb-20">
        <div className="max-w-3xl mx-auto space-y-10 text-gray-300 text-sm leading-relaxed">

          <div>
            <p className="text-gray-500 text-xs mb-6">Last updated: April 2026</p>
            <p>GSMotorsinc (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting the privacy of our customers and website visitors. This policy explains what personal information we collect, how we use it, and your rights regarding that information.</p>
          </div>

          {[
            {
              title: '1. Information We Collect',
              content: `We collect information you provide directly to us, including:

• Contact information (name, email address, phone number) when you submit an inquiry, financing application, or trade-in request
• Vehicle information when you submit a sell/trade-in valuation request
• Financing application details (employment, income, credit information) when you apply for financing
• Communications you send us via our contact forms or email

We also automatically collect certain technical information when you visit our website, including IP address, browser type, pages visited, and time spent on pages. This is collected via cookies and analytics tools including Google Analytics.`,
            },
            {
              title: '2. How We Use Your Information',
              content: `We use your information to:

• Respond to your inquiries and provide requested services
• Process financing applications and communicate decisions
• Send you information about vehicles and services you have expressed interest in
• Improve our website and services through analytics
• Comply with legal obligations
• Prevent fraud and ensure security

We do not sell your personal information to third parties.`,
            },
            {
              title: '3. Sharing Your Information',
              content: `We may share your information with:

• Financial institutions and lenders when you apply for financing (with your consent)
• Service providers who assist us in operating our website and business (under confidentiality agreements)
• Law enforcement or regulators when required by law

We do not share your information with advertisers or data brokers.`,
            },
            {
              title: '4. Cookies & Tracking',
              content: `Our website uses cookies and similar technologies to:

• Remember your preferences
• Analyze website traffic via Google Analytics
• Measure the effectiveness of our marketing

You can control cookies through your browser settings. Disabling cookies may affect some website functionality.`,
            },
            {
              title: '5. Data Retention',
              content: `We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, or as required by law. Financing application data is retained for a minimum of 7 years as required by financial regulations.`,
            },
            {
              title: '6. Your Rights (PIPEDA)',
              content: `Under Canada's Personal Information Protection and Electronic Documents Act (PIPEDA), you have the right to:

• Access the personal information we hold about you
• Correct inaccurate personal information
• Withdraw consent to our use of your personal information (where consent is the legal basis)
• Lodge a complaint with the Office of the Privacy Commissioner of Canada

To exercise these rights, contact us at ${siteConfig.contact.email}.`,
            },
            {
              title: '7. Security',
              content: `We implement reasonable technical and organizational measures to protect your personal information against unauthorized access, disclosure, alteration, or destruction. However, no internet transmission is completely secure.`,
            },
            {
              title: '8. Third-Party Links',
              content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.`,
            },
            {
              title: '9. Contact Us',
              content: `If you have questions about this privacy policy or our data practices, contact us at:\n\nGSMotorsinc\n${siteConfig.contact.address}\nEmail: ${siteConfig.contact.email}\nPhone: ${siteConfig.contact.phone}`,
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
