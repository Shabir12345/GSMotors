import Link from 'next/link';
import PageHero from '@/components/PageHero';
import PageCTA from '@/components/PageCTA';
import { siteConfig } from '@/siteConfig';

export const metadata = {
  title: 'Careers at GSMotorsinc | Join Our Team in Newcastle, ON',
  description: 'Join the GSMotorsinc team in Newcastle, Ontario. We are a growing premium used car dealership looking for passionate automotive professionals.',
};

const values = [
  { title: 'Customer First', desc: 'Every decision starts with what is best for the customer. We build relationships, not just transactions.' },
  { title: 'Transparency', desc: 'No hidden fees, no bait-and-switch. We do business the way we would want to be treated.' },
  { title: 'Growth Mindset', desc: 'We are a growing dealership. The people who join now grow with us.' },
  { title: 'Team Culture', desc: 'Small team, big impact. Everyone here matters and every contribution is recognized.' },
];

const openings = [
  {
    title: 'Automotive Sales Consultant',
    type: 'Full-Time',
    desc: 'Help customers find their next vehicle. You\'ll manage the full sales cycle — from initial contact through delivery. No cold-calling — all inbound leads from our website and walk-ins.',
    requirements: ['Valid Ontario driver\'s licence', 'OMVIC licence or willingness to obtain', 'Strong communication and people skills', 'Previous automotive sales experience an asset but not required'],
  },
  {
    title: 'Finance & Insurance (F&I) Manager',
    type: 'Full-Time',
    desc: 'Structure deals, work with our lender network, and present financing and protection products to customers. You\'ll be the bridge between the sale and the keys.',
    requirements: ['2+ years F&I experience at a licensed dealership', 'Established relationships with automotive lenders', 'OMVIC licence', 'Strong numeracy and attention to detail'],
  },
  {
    title: 'Lot & Inventory Coordinator',
    type: 'Full-Time / Part-Time',
    desc: 'Keep our inventory looking its best. Responsibilities include vehicle cleaning, staging for photos, lot organization, and light prep work.',
    requirements: ['Valid Ontario driver\'s licence', 'Attention to detail', 'Physically active role — outdoor work in all seasons', 'Automotive enthusiasm an asset'],
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-brand-darker">
      <PageHero
        badge="We're Hiring"
        badgeColor="green"
        title={<>Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">GSMotorsinc Team</span></>}
        subtitle="We are a growing premium used car dealership in Newcastle, ON. If you are passionate about cars and customer experience, we want to hear from you."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Careers', href: '/careers' },
        ]}
      />

      {/* Why join us */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center tracking-tight">Why Work With Us</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v) => (
            <div key={v.title} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
              <div className="w-8 h-8 rounded-xl bg-brand-accent/15 flex items-center justify-center mb-4">
                <svg className="w-4 h-4 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="font-bold text-white text-sm mb-1.5">{v.title}</h4>
              <p className="text-gray-400 text-xs leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open positions */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <h2 className="text-2xl font-bold text-white mb-8">Current Openings</h2>
        <div className="space-y-6">
          {openings.map((job) => (
            <div key={job.title} className="bg-white/[0.04] border border-white/[0.07] hover:border-white/15 rounded-2xl p-6 md:p-8 transition-colors">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{job.title}</h3>
                  <span className="inline-block mt-1 text-xs font-bold text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full">{job.type}</span>
                </div>
                <Link
                  href={`mailto:${siteConfig.contact.email}?subject=Application: ${encodeURIComponent(job.title)}`}
                  className="btn-modern bg-brand-accent hover:bg-brand-accent-glow text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-brand-accent/25 transition-all hover:scale-105 shrink-0"
                >
                  Apply Now
                </Link>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{job.desc}</p>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Requirements</p>
                <ul className="space-y-1.5">
                  {job.requirements.map((req) => (
                    <li key={req} className="flex gap-2 text-sm text-gray-400">
                      <span className="text-brand-accent mt-0.5 shrink-0">›</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Don't see a fit */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6 md:p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-3">Don&apos;t See the Right Role?</h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xl mx-auto mb-6">
            We are always interested in speaking with automotive professionals who share our values. Send us your resume with a note about what you are looking for.
          </p>
          <Link
            href={`mailto:${siteConfig.contact.email}?subject=General Application — GSMotorsinc`}
            className="btn-modern bg-white/10 hover:bg-white/15 text-white border border-white/20 px-8 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105 inline-block"
          >
            Send a General Application
          </Link>
        </div>
      </section>

      <PageCTA
        title="Ready to Join Us?"
        subtitle="Apply today or reach out to learn more about working at GSMotorsinc."
        primaryHref={`mailto:${siteConfig.contact.email}?subject=Career Inquiry`}
        primaryLabel="Email Us"
        secondaryHref="/contact"
        secondaryLabel="Contact Page"
      />
    </div>
  );
}
