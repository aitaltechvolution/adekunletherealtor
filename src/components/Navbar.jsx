import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { COMPANY } from "../data/data";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/properties", label: "Properties" },
  { to: "/listing", label: "Listing" },
  { to: "/faq", label: "FAQ" },
  { to: "/policy", label: "Policy" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg py-2" : "bg-white/95 py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-red flex items-center justify-center shadow">
              <span className="text-white font-display font-black text-lg leading-none">S</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-display font-bold text-sm text-charcoal leading-tight">Samspring Global</p>
              <p className="text-xs text-gray-500 leading-tight">Shelters Limited</p>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.to
                    ? "bg-red text-white"
                    : "text-charcoal hover:bg-red/10 hover:text-red"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${COMPANY.phone}`}
              className="hidden md:flex items-center gap-2 bg-red text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-red-dark transition-colors"
            >
              <Phone size={14} />
              {COMPANY.phone}
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-xl bg-gray-100 hover:bg-red/10 text-charcoal hover:text-red transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
        <div
          className={`absolute top-0 right-0 w-72 h-full bg-white shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 pt-20">
            <div className="mb-6">
              <p className="font-display font-bold text-lg text-charcoal">Samspring Global</p>
              <p className="text-sm text-gray-500">Shelters Limited</p>
            </div>
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    location.pathname === link.to
                      ? "bg-red text-white"
                      : "text-charcoal hover:bg-red/10 hover:text-red"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-2 bg-red text-white px-4 py-3 rounded-xl text-sm font-semibold w-full justify-center"
              >
                <Phone size={14} />
                {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
