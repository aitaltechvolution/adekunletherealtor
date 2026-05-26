import { Link } from "react-router-dom";
import { MapPin, Maximize2, Tag, BadgeCheck, Clock } from "lucide-react";

function formatPrice(n) {
  return "₦" + n.toLocaleString("en-NG");
}

export default function PropertyCard({ property, showFull = false }) {
  const { id, title, type, address, state, country, price, oldPrice, sqm, status, isLatest, images } = property;

  const statusStyles = {
    available: "bg-green-100 text-green-700",
    sold: "bg-red/10 text-red",
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-gray-100">
      {/* Image */}
      <div className="relative overflow-hidden h-52">
        <img
          src={images[0]}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full capitalize ${statusStyles[status] || "bg-gray-100 text-gray-600"}`}>
            {status === "sold" ? "Sold" : "Available"}
          </span>
          {isLatest && (
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-red text-white flex items-center gap-1">
              <Clock size={10} /> Latest
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display font-bold text-base text-charcoal mb-1 line-clamp-1">{title}</h3>
        <div className="flex items-center gap-1 text-gray-500 text-xs mb-3">
          <MapPin size={12} className="text-red" />
          <span className="line-clamp-1">{address}, <span className="font-semibold">{state}</span>, {country}</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center gap-1 text-xs text-gray-400">
            <Maximize2 size={12} />
            <span>{sqm} sqm</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-400">
            <Tag size={12} />
            <span>{type}</span>
          </div>
        </div>

        <div className="flex items-end justify-between">
          <div>
            {oldPrice && (
              <p className="text-xs text-gray-400 line-through">{formatPrice(oldPrice)}</p>
            )}
            <p className="font-display font-bold text-lg text-red">{formatPrice(price)}</p>
          </div>
          {showFull ? (
            status === "sold" ? (
              <span className="bg-gray-100 text-gray-500 text-xs px-4 py-2 rounded-xl font-semibold">Sold</span>
            ) : (
              <Link
                to="/contact"
                className="bg-red text-white text-xs px-4 py-2 rounded-xl font-semibold hover:bg-red-dark transition-colors"
              >
                Buy Now
              </Link>
            )
          ) : (
            <Link
              to={`/properties/${id}`}
              className="text-red text-xs font-semibold border border-red px-4 py-2 rounded-xl hover:bg-red hover:text-white transition-colors"
            >
              View More
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
