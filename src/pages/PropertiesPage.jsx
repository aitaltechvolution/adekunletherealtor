import { useState } from "react";
import { PROPERTIES } from "../data/data";
import PropertyCard from "../components/PropertyCard";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function PropertiesPage() {
  useScrollAnimation();
  const [filter, setFilter] = useState("all");

  const filtered = PROPERTIES.filter((p) => {
    if (filter === "available") return p.status === "available";
    if (filter === "sold") return p.status === "sold";
    if (filter === "latest") return p.isLatest;
    return true;
  });

  return (
    <div className="pt-16">
      <section className="bg-charcoal py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1448630360428-65456885c650?w=1400&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="text-red font-semibold text-sm uppercase tracking-widest">All Listings</span>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-white mt-3 mb-4">Our Properties</h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Browse our portfolio of verified properties. Filter by status to find exactly what you need.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-10 bg-gray-50 border-b border-gray-200 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-3 justify-center">
          {[
            { key: "all", label: "All Properties" },
            { key: "available", label: "Available" },
            { key: "latest", label: "Latest" },
            { key: "sold", label: "Sold" },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${
                filter === key
                  ? "bg-red text-white shadow"
                  : "bg-white text-charcoal border border-gray-200 hover:border-red hover:text-red"
              }`}
            >
              {label}
            </button>
          ))}
          <span className="text-sm text-gray-400 self-center">— {filtered.length} results</span>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {filtered.length === 0 ? (
            <p className="text-center text-gray-400 py-20 text-lg">No properties match this filter.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((p, i) => (
                <div key={p.id} className="animate-on-scroll" style={{ animationDelay: `${i * 80}ms` }}>
                  <PropertyCard property={p} showFull />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
