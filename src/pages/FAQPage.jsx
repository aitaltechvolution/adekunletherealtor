import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "../data/data";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function FAQPage() {
  useScrollAnimation();
  const [open, setOpen] = useState(null);

  return (
    <div className="pt-16">
      <section className="bg-charcoal py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-red font-semibold text-sm uppercase tracking-widest">FAQ</span>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-white mt-3 mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">Everything you need to know about buying, selling, and investing with Samspring Global Shelters.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="animate-on-scroll bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden" style={{ animationDelay: `${i * 80}ms` }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
              >
                <span className="font-display font-bold text-base text-charcoal">{faq.q}</span>
                <ChevronDown size={18} className={`text-red shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
              </button>
              <div className={`transition-all duration-300 overflow-hidden ${open === i ? "max-h-64" : "max-h-0"}`}>
                <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
