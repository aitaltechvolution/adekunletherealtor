import { useParams, Link, Navigate } from "react-router-dom";
import { MapPin, Maximize2, Tag, ArrowLeft, Phone, Mail, CheckCircle, Clock } from "lucide-react";
import { PROPERTIES, COMPANY } from "../data/data";
import { useState } from "react";

function formatPrice(n) {
  return "₦" + n.toLocaleString("en-NG");
}

export default function PropertyDetailPage() {
  const { id } = useParams();
  const property = PROPERTIES.find((p) => p.id === Number(id));
  const [activeImg, setActiveImg] = useState(0);

  if (!property) return <Navigate to="/properties" replace />;

  const { title, type, address, state, country, price, oldPrice, sqm, status, isLatest, images, description } = property;

  return (
    <div className="pt-16">
      <div className="bg-gray-50 py-4 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <Link to="/properties" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-red transition-colors">
            <ArrowLeft size={16} /> Back to Properties
          </Link>
        </div>
      </div>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-10">
          {/* Images + Info */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl overflow-hidden mb-4 h-80 sm:h-96 relative">
              <img src={images[activeImg]} alt={title} className="w-full h-full object-cover" />
              {status === "sold" && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="text-white font-display font-black text-4xl border-4 border-white px-8 py-4 rounded-2xl rotate-[-12deg]">SOLD</span>
                </div>
              )}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${status === "available" ? "bg-green-100 text-green-700" : "bg-red/20 text-red"}`}>
                  {status === "available" ? "Available" : "Sold"}
                </span>
                {isLatest && (
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-red text-white flex items-center gap-1">
                    <Clock size={10} /> Latest
                  </span>
                )}
              </div>
            </div>
            {images.length > 1 && (
              <div className="flex gap-3 mb-6">
                {images.map((img, i) => (
                  <button key={i} onClick={() => setActiveImg(i)} className={`w-20 h-16 rounded-xl overflow-hidden border-2 transition-all ${activeImg === i ? "border-red" : "border-transparent"}`}>
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            <h1 className="font-display font-black text-3xl text-charcoal mb-3">{title}</h1>
            <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
              <MapPin size={14} className="text-red" />
              <span>{address}, <strong>{state}</strong>, {country}</span>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {[
                { icon: Maximize2, label: "Size", val: `${sqm} sqm` },
                { icon: Tag, label: "Type", val: type },
                { icon: CheckCircle, label: "Status", val: status.charAt(0).toUpperCase() + status.slice(1) },
              ].map(({ icon: Icon, label, val }) => (
                <div key={label} className="bg-gray-50 rounded-xl p-4 flex items-center gap-3">
                  <Icon size={18} className="text-red" />
                  <div>
                    <p className="text-xs text-gray-400">{label}</p>
                    <p className="font-semibold text-charcoal text-sm">{val}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h2 className="font-display font-bold text-xl text-charcoal mb-3">Description</h2>
              <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-7 sticky top-28">
              <div className="mb-6">
                {oldPrice && (
                  <p className="text-sm text-gray-400 line-through mb-1">{formatPrice(oldPrice)}</p>
                )}
                <p className="font-display font-black text-3xl text-red">{formatPrice(price)}</p>
                <p className="text-xs text-gray-400 mt-1">{sqm} sqm · {type}</p>
              </div>

              {status === "available" ? (
                <>
                  <Link
                    to="/contact"
                    className="w-full block text-center bg-red text-white font-bold py-4 rounded-2xl hover:bg-red-dark transition-all hover:scale-105 mb-3"
                  >
                    Buy Now
                  </Link>
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="w-full flex items-center justify-center gap-2 border-2 border-red text-red font-bold py-4 rounded-2xl hover:bg-red hover:text-white transition-all mb-6"
                  >
                    <Phone size={16} /> Call Realtor
                  </a>
                </>
              ) : (
                <div className="bg-gray-100 text-gray-500 text-center font-bold py-4 rounded-2xl mb-6">
                  Property Sold
                </div>
              )}

              <div className="border-t border-gray-100 pt-5">
                <p className="font-display font-bold text-sm text-charcoal mb-3">Contact Realtor Adekunle</p>
                <div className="space-y-3">
                  <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-3 text-sm text-gray-600 hover:text-red transition-colors">
                    <Phone size={14} className="text-red" /> {COMPANY.phone}
                  </a>
                  <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-sm text-gray-600 hover:text-red transition-colors break-all">
                    <Mail size={14} className="text-red" /> {COMPANY.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
