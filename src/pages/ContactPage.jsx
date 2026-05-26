import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { FacebookIcon, InstagramIcon, XIcon } from "./../components/SocialIcons";
import { COMPANY } from "../data/data";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function ContactPage() {
  useScrollAnimation();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSent(false), 6000);
  };

  return (
    <div className="pt-16">
      <section className="bg-charcoal py-20">
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="text-red font-semibold text-sm uppercase tracking-widest">Get In Touch</span>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-white mt-3 mb-4">Contact Us</h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Reach Realtor Adekunle and the Samspring team via any channel below. We respond fast.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div className="animate-on-scroll">
            <h2 className="font-display font-bold text-2xl text-charcoal mb-6">Send Us a Message</h2>
            {sent ? (
              <div className="flex flex-col items-center justify-center h-64 text-center bg-green-50 rounded-2xl border border-green-200">
                <CheckCircle size={48} className="text-green-500 mb-4" />
                <h3 className="font-display font-bold text-xl text-green-700">Message Sent!</h3>
                <p className="text-gray-500 text-sm mt-2">Realtor Adekunle will reach out to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold text-gray-500 mb-1 block">Full Name *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 mb-1 block">Phone Number</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="08XXXXXXXXX"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Email Address *</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us what you're looking for..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-red text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-red-dark transition-all hover:scale-[1.02]"
                >
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="animate-on-scroll animate-delay-200">
            <h2 className="font-display font-bold text-2xl text-charcoal mb-6">Contact Details</h2>
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5">
                <div className="w-10 h-10 bg-red rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-charcoal text-sm mb-1">Office Address</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{COMPANY.address}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-gray-50 rounded-2xl p-5">
                <div className="w-10 h-10 bg-red rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-charcoal text-sm mb-1">Phone Number</p>
                  <a href={`tel:${COMPANY.phone}`} className="text-red font-bold text-base hover:underline">{COMPANY.phone}</a>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-gray-50 rounded-2xl p-5">
                <div className="w-10 h-10 bg-red rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-charcoal text-sm mb-1">Email Address</p>
                  <a href={`mailto:${COMPANY.email}`} className="text-red font-bold text-sm hover:underline break-all">{COMPANY.email}</a>
                </div>
              </div>
            </div>

            <h3 className="font-display font-bold text-lg text-charcoal mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {[
                { href: COMPANY.social.facebook, icon: FacebookIcon, label: "Facebook", color: "hover:bg-blue-600" },
                { href: COMPANY.social.instagram, icon: InstagramIcon, label: "Instagram", color: "hover:bg-pink-600" },
                { href: COMPANY.social.twitter, icon: XIcon, label: "X (Twitter)", color: "hover:bg-sky-500" },
              ].map(({ href, icon: Icon, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-2 bg-charcoal text-white px-5 py-3 rounded-xl text-sm font-semibold transition-all ${color}`}
                  aria-label={label}
                >
                  <Icon size={16} /> {label}
                </a>
              ))}
            </div>

            <div className="mt-8 bg-red/5 border border-red/20 rounded-2xl p-5">
              <p className="font-display font-bold text-charcoal mb-1">Realtor Adekunle</p>
              <p className="text-sm text-gray-500">{COMPANY.name}</p>
              <p className="text-xs text-gray-400 mt-2">Mon – Sat: 8:00am – 6:00pm WAT</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
