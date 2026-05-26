import { Link } from "react-router-dom";
import { ArrowRight, Building, MapPin, FileText, TrendingUp, Users, Shield } from "lucide-react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const services = [
  {
    icon: TrendingUp,
    title: "Real Estate Consultancy",
    desc: "Whether you're buying, selling, or investing, Realtor Adekunle provides expert strategic advice tailored to your specific real estate goals. We analyze market trends, evaluate properties, and help you make informed decisions.",
    bullets: ["Market analysis & valuation", "Investment advisory", "Property portfolio management", "Risk assessment"],
  },
  {
    icon: MapPin,
    title: "Land Sales & Acquisition",
    desc: "We specialize in the sourcing, verification, and sale of prime land plots across Abuja and other key Nigerian cities. Every land parcel comes with full legal documentation.",
    bullets: ["Verified C of O titles", "Plot layout & survey plans", "Legal documentation support", "Negotiation assistance"],
  },
  {
    icon: Building,
    title: "Residential Property Sales",
    desc: "Find your ideal home — from compact apartments to luxurious duplexes with BQ. We list only verified, move-in-ready residential properties in prime locations.",
    bullets: ["Apartments & flats", "Duplexes & terraces", "Mansions & executive homes", "Boys' quarters included listings"],
  },
  {
    icon: FileText,
    title: "Property Documentation",
    desc: "Navigating Nigerian property documentation can be complex. We assist clients with every step — from due diligence to title transfer — ensuring all paperwork is complete and legally valid.",
    bullets: ["Title searches & verification", "C of O processing", "Deed of assignment", "Consent to transfer"],
  },
  {
    icon: Users,
    title: "Property Representation",
    desc: "Owners looking to sell can list their properties through Samspring Global Shelters Limited. We act as your agent — marketing, screening buyers, and negotiating on your behalf.",
    bullets: ["Professional photography", "Wide marketing reach", "Buyer screening", "Commission-based sales"],
  },
  {
    icon: Shield,
    title: "Investment Guidance",
    desc: "Looking to grow your wealth through real estate? We identify high-yield property investment opportunities in emerging and established neighborhoods across Nigeria.",
    bullets: ["High-yield property identification", "ROI projections", "Off-plan investment advisory", "Exit strategy planning"],
  },
];

export default function ServicesPage() {
  useScrollAnimation();
  return (
    <div className="pt-16">
      <section className="bg-charcoal py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="text-red font-semibold text-sm uppercase tracking-widest">What We Offer</span>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-white mt-3 mb-4">Our Services</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            From land acquisition to full property consultancy, Samspring Global Shelters has you covered.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, title, desc, bullets }, i) => (
            <div
              key={title}
              className="animate-on-scroll bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-13 h-13 w-12 h-12 rounded-xl bg-red flex items-center justify-center mb-5">
                <Icon size={22} className="text-white" />
              </div>
              <h3 className="font-display font-bold text-xl text-charcoal mb-3">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{desc}</p>
              <ul className="space-y-2">
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-xs text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-red shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-red text-white">
        <div className="max-w-4xl mx-auto px-4 text-center animate-on-scroll">
          <h2 className="font-display font-black text-3xl sm:text-4xl mb-4">Need a Custom Solution?</h2>
          <p className="text-red-100 mb-8">Every client is unique. Contact Realtor Adekunle for a personalized consultation.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-red px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all"
          >
            Get In Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
