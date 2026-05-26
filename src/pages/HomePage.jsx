import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star, Users, Home, Award } from "lucide-react";
import { PROPERTIES, COMPANY } from "../data/data";
import PropertyCard from "../components/PropertyCard";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function HomePage() {
  useScrollAnimation();
  const featured = PROPERTIES.filter((p) => p.isLatest).slice(0, 3);

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-charcoal">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80"
            alt="hero"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-red/20 border border-red/40 text-red px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in">
              <Star size={14} fill="currentColor" /> Abuja's Trusted Real Estate Consultant
            </div>
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6 animate-fade-up">
              Find Your <span className="text-red">Dream Home</span> in Abuja & Beyond
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-10 animate-fade-up animate-delay-200">
              Realtor Adekunle and the Samspring Global Shelters team connect you with verified, premium properties across Nigeria's capital and beyond.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up animate-delay-300">
              <Link
                to="/properties"
                className="bg-red text-white px-8 py-4 rounded-2xl font-bold text-base hover:bg-red-dark transition-all hover:scale-105 flex items-center gap-2"
              >
                Browse Properties <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-base hover:border-red hover:text-red transition-all"
              >
                Talk to Realtor
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-white">
            {[
              { icon: Home, val: "200+", label: "Properties Listed" },
              { icon: Users, val: "150+", label: "Happy Clients" },
              { icon: Award, val: "10+", label: "Years Experience" },
              { icon: CheckCircle, val: "100%", label: "Verified Titles" },
            ].map(({ icon: Icon, val, label }) => (
              <div key={label} className="flex flex-col items-center">
                <Icon size={20} className="text-red mb-1" />
                <p className="font-display font-black text-xl">{val}</p>
                <p className="text-xs text-gray-300">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14 animate-on-scroll">
            <span className="text-red font-semibold text-sm uppercase tracking-widest">Why Choose Us</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-charcoal mt-2">
              Real Estate Done Right
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Verified Properties", desc: "Every listing is legally verified with proper documentation — C of O, R of O and more.", icon: "🏛️" },
              { title: "Expert Consultation", desc: "Realtor Adekunle provides personalized advice to match your budget, location, and lifestyle goals.", icon: "🎯" },
              { title: "Transparent Pricing", desc: "No hidden fees. What you see is what you pay — with full breakdowns provided upfront.", icon: "💰" },
              { title: "Fast Transactions", desc: "We streamline every step of the buying process, from inspection to title transfer.", icon: "⚡" },
              { title: "Dedicated Support", desc: "Our team is reachable via phone, email, and social media — always ready to assist you.", icon: "🤝" },
              { title: "Prime Locations", desc: "From Maitama to Asokoro, we cover the best neighborhoods in Abuja and beyond.", icon: "📍" },
            ].map((item, i) => (
              <div
                key={item.title}
                className="animate-on-scroll bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-gray-100"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-display font-bold text-lg text-charcoal mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div className="animate-on-scroll">
              <span className="text-red font-semibold text-sm uppercase tracking-widest">Latest Listings</span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-charcoal mt-2">
                Hot Properties
              </h2>
            </div>
            <Link
              to="/properties"
              className="hidden sm:flex items-center gap-2 text-red font-semibold text-sm hover:gap-3 transition-all"
            >
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((p, i) => (
              <div key={p.id} className="animate-on-scroll" style={{ animationDelay: `${i * 120}ms` }}>
                <PropertyCard property={p} />
              </div>
            ))}
          </div>
          <div className="mt-10 text-center sm:hidden">
            <Link to="/properties" className="inline-flex items-center gap-2 text-red font-semibold border border-red px-6 py-3 rounded-xl hover:bg-red hover:text-white transition-colors">
              View All Properties <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Consultant CTA */}
      <section className="py-20 bg-red relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full border-4 border-white translate-x-24 -translate-y-24" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border-4 border-white -translate-x-12 translate-y-12" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="animate-on-scroll">
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white mb-5">
              Ready to Find Your Perfect Property?
            </h2>
            <p className="text-red-100 text-lg mb-10 max-w-xl mx-auto">
              Speak directly with <strong className="text-white">Realtor Adekunle</strong> today for a free consultation and personalized property recommendations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={`tel:${COMPANY.phone}`}
                className="bg-white text-red px-8 py-4 rounded-2xl font-bold text-base hover:bg-gray-100 transition-all hover:scale-105"
              >
                Call Now: {COMPANY.phone}
              </a>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-base hover:bg-white hover:text-red transition-all"
              >
                Send a Message
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14 animate-on-scroll">
            <span className="text-red font-semibold text-sm uppercase tracking-widest">Testimonials</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-charcoal mt-2">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Amaka O.", text: "Realtor Adekunle made my first property purchase so seamless. No stress, no hidden fees. I love my new home!", stars: 5 },
              { name: "Emeka I.", text: "Samspring listed and sold my property in under 3 weeks! Professional, honest, and highly effective.", stars: 5 },
              { name: "Hajiya Binta S.", text: "I was skeptical at first but they showed me verified documents for everything. I'm glad I chose Samspring.", stars: 5 },
            ].map((t, i) => (
              <div
                key={t.name}
                className="animate-on-scroll bg-white rounded-2xl p-7 shadow-sm border border-gray-100"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="flex mb-3">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} size={14} className="text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
                <p className="font-bold text-charcoal text-sm">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
