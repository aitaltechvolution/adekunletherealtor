import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Clock } from "lucide-react";
import { PROPERTIES } from "../data/data";
import useScrollAnimation from "../hooks/useScrollAnimation";

function formatPrice(n) {
  return "₦" + n.toLocaleString("en-NG");
}

export default function ListingPage() {
  useScrollAnimation();
  return (
    <div className="pt-16">
      <section className="bg-charcoal py-20">
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="text-red font-semibold text-sm uppercase tracking-widest">Property Listing</span>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-white mt-3 mb-4">Available Listings</h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            A curated summary of our current property portfolio. Click "View More" for full details.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-5">
            {PROPERTIES.map((p, i) => (
              <div
                key={p.id}
                className="animate-on-scroll bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="relative w-full sm:w-48 h-40 sm:h-auto shrink-0">
                    <img src={p.images[0]} alt={p.title} className="w-full h-full object-cover" />
                    {p.status === "sold" && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <span className="text-white font-black text-sm border border-white px-3 py-1 rounded-lg rotate-[-10deg]">SOLD</span>
                      </div>
                    )}
                    {p.isLatest && (
                      <span className="absolute top-2 left-2 bg-red text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                        <Clock size={10} /> New
                      </span>
                    )}
                  </div>
                  <div className="p-5 flex flex-col sm:flex-row flex-1 gap-4 justify-between">
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-lg text-charcoal mb-1">{p.title}</h3>
                      <div className="flex items-center gap-1 text-gray-400 text-xs mb-3">
                        <MapPin size={12} className="text-red" />
                        <span>{p.address}, <strong>{p.state}</strong>, {p.country}</span>
                      </div>
                      <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                        <span className="bg-gray-100 px-3 py-1 rounded-full">{p.sqm} sqm</span>
                        <span className="bg-gray-100 px-3 py-1 rounded-full">{p.type}</span>
                        <span className={`px-3 py-1 rounded-full font-semibold capitalize ${p.status === "available" ? "bg-green-50 text-green-700" : "bg-red/10 text-red"}`}>
                          {p.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between items-end gap-3">
                      <div className="text-right">
                        {p.oldPrice && <p className="text-xs text-gray-400 line-through">{formatPrice(p.oldPrice)}</p>}
                        <p className="font-display font-black text-xl text-red">{formatPrice(p.price)}</p>
                      </div>
                      <Link
                        to={`/properties/${p.id}`}
                        className="inline-flex items-center gap-2 bg-red text-white text-xs font-bold px-5 py-2 rounded-xl hover:bg-red-dark transition-colors"
                      >
                        View More <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
