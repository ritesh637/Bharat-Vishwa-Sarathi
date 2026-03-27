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
    <footer className="bg-gradient-to-br from-[#1F9243] to-[#F7921C] text-white text-[16px] pt-8 md:pt-12 relative overflow-hidden font-sans">
      {/* Main Content */}
      <div className="w-full max-w-6xl mx-auto px-6 pb-6 pt-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:pl-16">
          {/* Brand Info */}
          <div className="space-y-3 animate-slide-up lg:-ml-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src="/logo_transparent.png"
                  alt="BVS Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Bharat Vishwa Saarti
                </h3>
                <p className="text-sm opacity-70">
                  Professional Driving School
                </p>
              </div>
            </div>

            <p className="text-base opacity-90 max-w-xs">
              Empowering individuals with professional driving skills and road
              safety awareness.
            </p>

            <div className="flex gap-3 pt-1">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-md hover:bg-[#F7921C] transition hover:-translate-y-1"
                >
                  <i className={`fab fa-${s.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="space-y-3 animate-slide-up delay-200">
            <h2 className="text-xl font-semibold pb-1">Explore</h2>
            <ul className="space-y-2 text-base">
              {["Home", "Learn", "About Us"].map((item) => (
                <li key={item}>
                  <Link
                    to="/"
                    className="opacity-80 hover:opacity-100 hover:text-[#F7921C] transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Join Us */}
          <div className="space-y-3 animate-slide-up delay-300">
            <h2 className="text-lg font-semibold pb-1">Join Us</h2>
            <ul className="space-y-2 text-sm">
              {["Enroll Now", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link
                    to="/"
                    className="opacity-80 hover:opacity-100 hover:text-[#F7921C] transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3 animate-slide-up delay-500">
            <h2 className="text-lg font-semibold pb-2">Contact Hub</h2>
            <div className="space-y-2 text-sm opacity-80">
              <p className="flex items-center">
                <i className="fa fa-phone text-[#F7921C] mr-2 flex-shrink-0" />
                +91 8369496512
              </p>
              <p className="flex items-center whitespace-nowrap">
                <i className="fa fa-envelope text-[#F7921C] mr-2 flex-shrink-0" />
                contact@bharatvishwasaarthi.com
              </p>
              <p className="flex items-center">
                <i className="fa fa-location-dot text-[#F7921C] mr-2 flex-shrink-0" />
                Mumbai, Maharashtra
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="py-4 bg-black/40 text-center text-sm opacity-60 animate-slide-up delay-700">
        {" "}
        © {new Date().getFullYear()} Bharat Vishwa Saarti. All rights
        reserved.{" "}
      </div>
    </footer>
  );
};

export default Footer;
