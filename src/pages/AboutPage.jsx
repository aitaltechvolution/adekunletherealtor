import { CheckCircle, Award, Users, Target } from "lucide-react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { COMPANY } from "../data/data";

export default function AboutPage() {
  useScrollAnimation();
  return (
    <div className="pt-16">
      {/* Hero Banner */}
      <section className="bg-charcoal py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="text-red font-semibold text-sm uppercase tracking-widest">About Us</span>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-white mt-3 mb-4">
            Who We Are
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A trusted real estate consultancy firm committed to delivering premium property solutions across Nigeria.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&q=80"
              alt="Realtor Adekunle"
              className="rounded-3xl w-full h-96 object-cover shadow-xl"
            />
          </div>
          <div className="animate-on-scroll animate-delay-200">
            <span className="text-red font-semibold text-sm uppercase tracking-widest">Our Story</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-charcoal mt-3 mb-6">
              Meet Realtor Adekunle
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Realtor Adekunle is the visionary behind Samspring Global Shelters Limited — a seasoned real estate professional with over a decade of hands-on experience in land acquisition, property sales, and investment consultancy in Abuja's dynamic real estate market.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded on the principles of transparency, integrity, and client satisfaction, Samspring Global Shelters Limited has helped hundreds of families and businesses secure verified properties in prime locations across Abuja and Nigeria.
            </p>
            <ul className="space-y-3">
              {[
                "Over 10 years of real estate experience",
                "Licensed and certified real estate consultant",
                "Specialist in Abuja residential & commercial properties",
                "End-to-end support from search to title transfer",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircle size={16} className="text-red mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14 animate-on-scroll">
            <span className="text-red font-semibold text-sm uppercase tracking-widest">Our Core</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-charcoal mt-2">Mission & Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: "Our Mission", desc: "To simplify property ownership for every Nigerian by delivering reliable, verified, and affordable real estate solutions." },
              { icon: Award, title: "Integrity", desc: "We operate with full transparency, ensuring every transaction is documented and above board." },
              { icon: Users, title: "Client-First", desc: "We put your needs, goals, and budget at the center of every recommendation we make." },
              { icon: CheckCircle, title: "Excellence", desc: "From property sourcing to final handover, we maintain the highest standards of service delivery." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="animate-on-scroll bg-white rounded-2xl p-7 text-center shadow-sm border border-gray-100" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="w-12 h-12 rounded-xl bg-red/10 flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-red" />
                </div>
                <h3 className="font-display font-bold text-lg text-charcoal mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 text-center animate-on-scroll">
          <h2 className="font-display font-black text-3xl mb-4">{COMPANY.name}</h2>
          <p className="text-gray-400 mb-2">{COMPANY.address}</p>
          <p className="text-red font-semibold">{COMPANY.phone} · {COMPANY.email}</p>
        </div>
      </section>
    </div>
  );
}
