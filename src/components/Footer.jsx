import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { FacebookIcon, InstagramIcon, XIcon } from "./SocialIcons";
import { COMPANY } from "../data/data";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-red flex items-center justify-center">
                <span className="text-white font-display font-black text-xl">S</span>
              </div>
              <div>
                <p className="font-display font-bold text-lg leading-tight">Samspring Global</p>
                <p className="text-gray-400 text-sm leading-tight">Shelters Limited</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Your trusted partner in real estate. Helping individuals and families find their perfect home in Abuja and across Nigeria since inception.
            </p>
            <div className="flex gap-3">
              <a
                href={COMPANY.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-red flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href={COMPANY.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-red flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={COMPANY.social.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-red flex items-center justify-center transition-colors"
                aria-label="X (Twitter)"
              >
                <XIcon size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-base mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/properties", label: "Properties" },
                { to: "/listing", label: "Listing" },
                { to: "/faq", label: "FAQ" },
                { to: "/policy", label: "Privacy Policy" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-red text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-base mb-4 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-red mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm leading-relaxed">{COMPANY.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-red shrink-0" />
                <a href={`tel:${COMPANY.phone}`} className="text-gray-400 hover:text-red text-sm transition-colors">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-red shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="text-gray-400 hover:text-red text-sm transition-colors break-all">
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} Samspring Global Shelters Limited. All rights reserved.</span>
          <span>
            Consultant: <span className="text-red font-semibold">{COMPANY.consultant}</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
