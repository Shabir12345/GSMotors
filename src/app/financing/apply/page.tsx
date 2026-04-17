import PageHero from '@/components/PageHero';
import PageCTA from '@/components/PageCTA';
import { siteConfig } from '@/siteConfig';

export const metadata = {
  title: 'Apply for Car Financing | Pre-Approval in Minutes | GSMotorsinc',
  description: 'Apply for pre-approved car financing at GSMotorsinc. All credit types welcome. 60-second application. Soft check only. Serving Ontario from Newcastle.',
};

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-brand-darker">
      <PageHero
        badge="Fast Approval"
        badgeColor="green"
        title={<><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">Apply for Financing</span></>}
        subtitle="Complete this form and our finance team will respond within 24 hours. No obligation — soft credit check only."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Financing', href: '/financing' },
          { name: 'Apply', href: '/financing/apply' },
        ]}
      />

      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/[0.04] border border-white/[0.07] rounded-3xl p-8 md:p-10">
              <h2 className="text-xl font-bold text-white mb-6">Financing Application</h2>
              <form action="#" method="POST" className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">First Name *</label>
                    <input type="text" name="firstName" required placeholder="John" className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-brand-accent/50 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Last Name *</label>
                    <input type="text" name="lastName" required placeholder="Smith" className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-brand-accent/50 transition-colors" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Email *</label>
                    <input type="email" name="email" required placeholder="john@email.com" className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-brand-accent/50 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Phone *</label>
                    <input type="tel" name="phone" required placeholder="647-000-0000" className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-brand-accent/50 transition-colors" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Employment Status *</label>
                    <select name="employment" required className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-accent/50 transition-colors appearance-none">
                      <option value="" className="bg-gray-900">Select...</option>
                      <option value="employed" className="bg-gray-900">Employed Full-Time</option>
                      <option value="part-time" className="bg-gray-900">Employed Part-Time</option>
                      <option value="self-employed" className="bg-gray-900">Self-Employed</option>
                      <option value="retired" className="bg-gray-900">Retired</option>
                      <option value="student" className="bg-gray-900">Student</option>
                      <option value="other" className="bg-gray-900">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Monthly Income (approx) *</label>
                    <input type="text" name="income" required placeholder="e.g. $3,500" className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-brand-accent/50 transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Vehicle of Interest (optional)</label>
                  <input type="text" name="vehicleInterest" placeholder="e.g. 2019 Honda Civic, or leave blank" className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-brand-accent/50 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Additional Notes (optional)</label>
                  <textarea name="message" rows={3} placeholder="Trade-in, down payment, specific needs..." className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-brand-accent/50 transition-colors resize-none" />
                </div>
                <p className="text-gray-500 text-xs">
                  Your information is kept secure and used only for financing purposes. Submitting this form initiates a soft credit inquiry only.
                </p>
                <button type="submit" className="w-full btn-modern bg-brand-accent hover:bg-brand-accent-glow text-white py-4 rounded-xl font-bold text-sm shadow-lg shadow-brand-accent/25 transition-all hover:scale-[1.01]">
                  Submit Application
                </button>
              </form>
            </div>
          </div>

          {/* Side info */}
          <div className="space-y-5">
            <div className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6 space-y-4">
              <h3 className="font-bold text-white">What Happens Next?</h3>
              {['We review your application within 24 hours', 'Our finance team contacts you to discuss options', 'We match you with suitable lenders', 'You choose a vehicle and finalize terms'].map((s, i) => (
                <div key={s} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-accent/20 text-brand-accent text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">{i + 1}</div>
                  <p className="text-gray-400 text-xs">{s}</p>
                </div>
              ))}
            </div>
            <div className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6">
              <h3 className="font-bold text-white mb-3">Prefer to Call?</h3>
              <a href={`tel:${siteConfig.contact.phone}`} className="text-brand-accent font-bold text-sm hover:underline">{siteConfig.contact.phone}</a>
              <p className="text-gray-500 text-xs mt-2">Mon–Sat 9am–6pm EST</p>
            </div>
          </div>
        </div>
      </section>

      <PageCTA title="Questions About Financing?" subtitle="Our team is happy to walk you through your options." primaryHref="/financing" primaryLabel="Financing Options" secondaryHref="/contact" secondaryLabel="Contact Us" />
    </div>
  );
}
