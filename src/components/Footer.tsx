import React from "react";
import { Link } from "react-router-dom";

const socials = [
  { icon: "facebook-f", link: "#" },
  { icon: "twitter", link: "#" },
  { icon: "instagram", link: "#" },
  { icon: "linkedin-in", link: "#" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-[#1F9243] to-[#F7921C] text-white text-[16px] pt-8 md:pt-12 relative overflow-hidden font-sans mt-auto">
      {/* Main Content */}
      <div className="w-full max-w-6xl mx-auto px-6 pb-6 pt-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:pl-16">
          {/* Brand Info */}
          <div className="space-y-3 lg:-ml-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src="/logo_transparent.png"
                  alt="BVS Logo"
                  className="w-12 h-12 object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "/logo.png";
                  }}
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Bharat Vishwa Saarti
                </h3>
              </div>
            </div>

            <p className="text-base opacity-90 max-w-xs">
              Empowering individuals with expert driving skills and a strong
              focus on road safety.
            </p>

            <div className="flex gap-3 pt-1">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-md hover:bg-[#F7921C] transition-all duration-300 hover:-translate-y-1"
                  aria-label={`Follow us on ${s.icon}`}
                >
                  <i className={`fab fa-${s.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold pb-1 border-b-2 border-white/20 inline-block">
              Explore
            </h2>
            <ul className="space-y-2 text-base">
              <li>
                <Link
                  to="/"
                  className="opacity-80 hover:opacity-100 hover:text-[#F7921C] transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/learn"
                  className="opacity-80 hover:opacity-100 hover:text-[#F7921C] transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Learn
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="opacity-80 hover:opacity-100 hover:text-[#F7921C] transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Join Us */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold pb-1 border-b-2 border-white/20 inline-block">
              Join Us
            </h2>
            <ul className="space-y-2 text-base">
              <li>
                <Link
                  to="/enroll"
                  className="opacity-80 hover:opacity-100 hover:text-[#F7921C] transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Enroll Now
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="opacity-80 hover:opacity-100 hover:text-[#F7921C] transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold pb-1 border-b-2 border-white/20 inline-block">
              Contact Hub
            </h2>
            <div className="space-y-3 text-base opacity-90">
              <p className="flex items-center group hover:translate-x-1 transition-transform duration-300">
                <i className="fa fa-phone text-[#F7921C] mr-3 flex-shrink-0 w-5" />
                <a
                  href="tel:+918369496512"
                  className="hover:text-[#F7921C] transition-colors"
                >
                  +91 8369496512
                </a>
              </p>
              <p className="flex items-center group hover:translate-x-1 transition-transform duration-300">
                <i className="fa fa-envelope text-[#F7921C] mr-3 flex-shrink-0 w-5" />
                <a
                  href="mailto:contact@bharatvishwasaarthi.com"
                  className="hover:text-[#F7921C] transition-colors whitespace-nowrap"
                >
                  contact@bharatvishwasaarthi.com
                </a>
              </p>
              <p className="flex items-start group hover:translate-x-1 transition-transform duration-300">
                <i className="fa fa-location-dot text-[#F7921C] mr-3 flex-shrink-0 w-5 mt-1" />
                <span>Mumbai, Maharashtra, India</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="py-4 bg-black/40 text-center text-sm opacity-80">
        © {new Date().getFullYear()} Bharat Vishwa Saarti. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
