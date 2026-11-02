import { useState } from 'react';
import { motion } from 'motion/react';
import { Building2, Mail, Send, ArrowUpRight } from 'lucide-react';

const inquiryCategories = [
  { id: 'partnership', label: 'Product & Institutional Partnerships', subtitle: 'Discuss a campus or product collaboration.' },
  { id: 'technology', label: 'Technology & Engineering', subtitle: 'Talk about software, AI, or engineering work.' },
  { id: 'investment', label: 'Investment & Business', subtitle: 'Discuss business development or investment enquiries.' },
  { id: 'general', label: 'General Enquiry', subtitle: 'For media, feedback, and other questions.' },
];

type FormData = {
  name: string;
  email: string;
  organization: string;
  role: string;
  message: string;
};

const emptyForm: FormData = {
  name: '',
  email: '',
  organization: '',
  role: '',
  message: '',
};

export function Contact() {
  const [selectedCategory, setSelectedCategory] = useState('partnership');
  const [formData, setFormData] = useState<FormData>(emptyForm);
  const [submissionMessage, setSubmissionMessage] = useState('');

  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL?.trim();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!contactEmail) {
      setSubmissionMessage(
        'The contact form is not configured yet. Please set VITE_CONTACT_EMAIL in the deployment environment before accepting enquiries.',
      );
      return;
    }

    const category = inquiryCategories.find((item) => item.id === selectedCategory)?.label ?? 'General Enquiry';
    const subject = `CSREXUS enquiry — ${category}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Organisation: ${formData.organization || 'Not provided'}`,
      `Role: ${formData.role || 'Not provided'}`,
      `Enquiry type: ${category}`,
      '',
      'Message:',
      formData.message,
    ].join('\n');

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmissionMessage('Your email application should open with a draft. Review it and press Send there; this website does not submit or store the message.');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setSubmissionMessage('');
  };

  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-[#0a0015] via-[#0d041e] to-[#0a0015] py-24 md:py-28">
      <div className="pointer-events-none absolute left-10 top-1/4 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-10 h-[420px] w-[420px] rounded-full bg-purple-600/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5">
            <Building2 className="h-4 w-4 text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">Contact CSREXUS</span>
          </div>
          <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            Let&apos;s build something
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-amber-200 via-white to-blue-300 bg-clip-text text-transparent"> meaningful together.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
            Share a little context about your enquiry. We&apos;ll prepare an email draft addressed to the configured CSREXUS contact.
          </p>
        </motion.div>

        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.09] to-white/[0.03] p-6 shadow-2xl backdrop-blur-xl sm:p-8 lg:col-span-7"
          >
            <div className="mb-6 border-b border-white/10 pb-5">
              <p className="mb-1 text-xs font-bold uppercase tracking-wider text-amber-300">Enquiry type</p>
              <h3 className="text-xl font-bold text-white">{inquiryCategories.find((item) => item.id === selectedCategory)?.label}</h3>
            </div>

            <div className="mb-7 grid grid-cols-1 gap-3 sm:grid-cols-2" role="group" aria-label="Enquiry category">
              {inquiryCategories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  aria-pressed={selectedCategory === category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setSubmissionMessage('');
                  }}
                  className={`rounded-xl border p-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                    selectedCategory === category.id
                      ? 'border-amber-400/70 bg-amber-400/10'
                      : 'border-white/10 bg-white/[0.03] hover:bg-white/[0.07]'
                  }`}
                >
                  <span className="block text-sm font-semibold text-white">{category.label}</span>
                  <span className="mt-1 block text-xs leading-relaxed text-gray-400">{category.subtitle}</span>
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-300">Name *</label>
                  <input id="contact-name" name="name" value={formData.name} onChange={handleChange} required maxLength={100} autoComplete="name" placeholder="Your name" className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20" />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-300">Email *</label>
                  <input id="contact-email" name="email" type="email" value={formData.email} onChange={handleChange} required maxLength={254} autoComplete="email" placeholder="you@example.com" className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20" />
                </div>
                <div>
                  <label htmlFor="contact-organization" className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-300">Organisation</label>
                  <input id="contact-organization" name="organization" value={formData.organization} onChange={handleChange} maxLength={150} autoComplete="organization" placeholder="Company or institution" className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20" />
                </div>
                <div>
                  <label htmlFor="contact-role" className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-300">Role</label>
                  <input id="contact-role" name="role" value={formData.role} onChange={handleChange} maxLength={100} autoComplete="organization-title" placeholder="Your role (optional)" className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20" />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-300">Message *</label>
                <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} required minLength={10} maxLength={5000} rows={5} placeholder="Tell us what you would like to discuss..." className="w-full resize-y rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20" />
                <p className="mt-1 text-right text-xs text-gray-500">{formData.message.length}/5000</p>
              </div>

              <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-amber-500 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-purple-900/30 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d041e]">
                Prepare email draft <Send className="h-4 w-4" />
              </button>
              <p role="status" aria-live="polite" className="min-h-5 text-sm leading-relaxed text-amber-200">{submissionMessage}</p>
              <p className="text-xs leading-relaxed text-gray-500">
                Your message is not sent or stored by this website. Your email application handles the draft after you review it.
              </p>
            </form>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 lg:col-span-5"
          >
            <div className="rounded-3xl border border-white/15 bg-white/5 p-7">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10">
                <Mail className="h-5 w-5 text-amber-300" />
              </div>
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-amber-300">Email contact</p>
              <h3 className="mb-2 text-xl font-bold text-white">Start a conversation</h3>
              {contactEmail ? (
                <a href={`mailto:${contactEmail}`} className="inline-flex items-center gap-2 break-all text-sm text-blue-300 hover:text-amber-200">
                  {contactEmail}<ArrowUpRight className="h-4 w-4 shrink-0" />
                </a>
              ) : (
                <p className="text-sm leading-relaxed text-gray-400">
                  Email contact is not configured yet. Set <code className="rounded bg-white/10 px-1.5 py-0.5 text-amber-200">VITE_CONTACT_EMAIL</code> in the hosting environment to enable email drafts.
                </p>
              )}
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/[0.03] p-7">
              <h3 className="mb-3 text-lg font-bold text-white">A note on enquiries</h3>
              <p className="text-sm leading-relaxed text-gray-400">
                Please avoid including passwords, payment details, government identifiers, or other sensitive personal information in an initial enquiry.
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
