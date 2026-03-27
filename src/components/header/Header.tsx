import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Calendar,
  Menu,
  X,
  Map,
  GraduationCap,
  Globe,
  Briefcase,
  Award,
  DollarSign,
  ShieldCheck,
  BookOpen,
  Clock,
  Shield,
  Truck,
  Handshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);

  // Debounced scroll handler for performance
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  // Debounced resize handler
  const handleResize = useCallback(() => {
    if (window.innerWidth > 1024) {
      setIsMobileMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    let scrollTimer: ReturnType<typeof setTimeout>;
    const debouncedScroll = () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(handleScroll, 10);
    };

    let resizeTimer: ReturnType<typeof setTimeout>;
    const debouncedResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(handleResize, 10);
    };

    window.addEventListener("scroll", debouncedScroll);
    window.addEventListener("resize", debouncedResize);

    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", debouncedScroll);
      window.removeEventListener("resize", debouncedResize);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen, handleScroll, handleResize]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Program", path: "/learn" },
    { name: "Enroll now", path: "/enroll" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const marqueeItems = [
    { icon: Map, text: "Gateway to Global Markets" },
    { icon: GraduationCap, text: "Apprenticeship Program for Indian Drivers" },
    { icon: Globe, text: "International Mobilisation Process" },
    { icon: Briefcase, text: "Global Employment Opportunities" },
    { icon: Award, text: "Logistics Skill Council Approved" },
    { icon: DollarSign, text: "Affordable Fee Structure" },
    { icon: ShieldCheck, text: "Skill India Certified Program" },
    { icon: BookOpen, text: "Learn from Expert Trainers" },
    { icon: Clock, text: "Flexible Batch Timings" },
    { icon: Shield, text: "Insurance & Legal Support" },
    { icon: Truck, text: "International Driving Careers" },
    { icon: Handshake, text: "Bharat Vishwa Sarathi Initiative" },
  ];

  return (
    <header
      className={`sticky top-0 z-[1000] w-full transition-all duration-400 ${
        isScrolled
          ? "shadow-[0_4px_30px_rgba(0,0,0,0.08)] backdrop-blur-md bg-white/95"
          : "bg-white"
      }`}
    >
      {/* Marquee - Updated with gradient from old code */}
      <div
        className="relative bg-gradient-to-r from-[#049248] via-[#F7921C] to-[#049248] text-white py-2 overflow-x-hidden overflow-y-hidden whitespace-nowrap h-10 flex items-center w-full max-w-full"
        onMouseEnter={() => setIsMarqueePaused(true)}
        onMouseLeave={() => setIsMarqueePaused(false)}
        role="banner"
        aria-label="Promotional announcements"
      >
        <div
          className={`inline-flex items-center gap-8 px-4 ${
            isMarqueePaused
              ? "[animation-play-state:paused]"
              : "animate-[marquee_70s_linear_infinite]"
          }`}
          aria-live="polite"
        >
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span
              key={index}
              className="flex items-center gap-2 text-sm font-semibold tracking-wide whitespace-nowrap"
            >
              <item.icon size={16} />
              {item.text}
            </span>
          ))}
        </div>
        <div className="absolute top-0 bottom-0 left-0 w-12 pointer-events-none z-[1] bg-gradient-to-r from-[#049248] to-transparent"></div>
        <div className="absolute top-0 bottom-0 right-0 w-12 pointer-events-none z-[1] bg-gradient-to-l from-[#049248] to-transparent"></div>
      </div>

      {/* Main Navigation */}
      <div className="min-h-[72px] py-3 flex items-center bg-white relative z-[1000]">
        <div className="w-full max-w-full mx-0 px-3 sm:px-6 lg:px-[60px]">
          <div className="flex justify-between items-center w-full gap-4 lg:gap-10">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 no-underline transition-all duration-300 flex-shrink-0 h-full"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Bharat Vishwa Saarti - Home"
            >
              <img
                src="/logo.png"
                alt="Logo"
                className="h-20 lg:h-24 w-auto object-contain scale-110 origin-left transition"
                loading="eager"
              />
            </Link>

            {/* Desktop Navigation - Updated with old code colors */}
            <nav
              className="hidden lg:flex items-center justify-center flex-1 max-w-[800px]"
              aria-label="Main navigation"
            >
              <ul className="flex list-none m-0 p-0 gap-2">
                {navLinks.map((link) => (
                  <li key={link.name} className="relative">
                    <Link
                      to={link.path}
                      className={`flex items-center justify-center gap-1.5 px-4 py-3 no-underline font-medium text-base lg:text-lg rounded-lg transition-all duration-300 bg-transparent border-none cursor-pointer relative outline-none whitespace-nowrap hover:text-[#F7921C] focus-visible:outline-2 focus-visible:outline-[#F7921C] focus-visible:outline-offset-2 ${
                        location.pathname === link.path
                          ? "text-[#049248] font-semibold scale-105"
                          : "text-gray-700"
                      }`}
                      aria-label={link.name}
                    >
                      {link.name}
                      <span
                        className={`absolute bottom-2 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-gradient-to-r from-[#049248] to-[#F7921C] rounded-full transition-transform duration-300 ${
                          location.pathname === link.path
                            ? "scale-x-100"
                            : "scale-x-0"
                        } hover:scale-x-100`}
                      ></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right Actions - Updated with gradient from old code */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <Link
                to="/enroll"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Enroll now"
                className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#049248] to-[#F7921C] text-white border-none rounded-lg font-semibold text-base lg:text-lg cursor-pointer transition-all duration-300 mt-2.5 hover:from-[#03843f] hover:to-[#e0851a] hover:scale-105 no-underline"
              >
                Enroll Now
              </Link>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="hidden max-lg:flex bg-transparent border-none w-10 h-10 rounded-xl text-lg cursor-pointer text-gray-700 transition-all duration-300 items-center justify-center hover:bg-[#049248]/10 hover:text-[#049248] hover:-translate-y-0.5"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                <Menu size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Sidebar - Updated with old code colors */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-[1001] animate-[fadeIn_0.3s_ease]"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          ></div>
          <div
            className="fixed top-0 right-0 bottom-0 w-80 bg-white z-[1002] flex flex-col shadow-[-10px_0_40px_rgba(0,0,0,0.1)] animate-[slideIn_0.4s_cubic-bezier(0.4,0,0.2,1)] overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="p-6 flex justify-between items-center border-b border-[#eeeeee] bg-gradient-to-r from-[#049248]/5 to-[#F7921C]/5">
              <div className="flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="Bharat Vishwa Saarti"
                  width="50"
                  height="50"
                  className="w-12 h-12 rounded-lg"
                />
                <h3 className="m-0 text-lg text-[#1a1a1a] font-semibold">
                  Menu
                </h3>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="bg-white border border-[#eeeeee] w-9 h-9 rounded-full text-xl cursor-pointer transition-all duration-300 text-black flex items-center justify-center z-[1005] hover:bg-[#049248]/10 hover:text-[#049248] hover:rotate-90"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </Button>
            </div>

            <ul className="list-none p-5 m-0 flex-1 flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`flex items-center px-5 py-4 no-underline text-[#444] font-medium text-base rounded-lg transition-all duration-300 bg-transparent hover:bg-[#049248]/10 hover:text-[#049248] hover:scale-105 ${
                      location.pathname === link.path
                        ? "bg-gradient-to-r from-[#049248]/10 to-[#F7921C]/10 text-[#049248] font-semibold scale-105"
                        : ""
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/enroll"
                  className="flex items-center justify-center gap-2.5 px-5 py-4 bg-gradient-to-r from-[#049248] to-[#F7921C] text-white border-none rounded-lg font-semibold text-base cursor-pointer transition-all duration-300 no-underline mt-2.5 hover:from-[#03843f] hover:to-[#e0851a] hover:scale-105"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Enroll now"
                >
                  <Calendar size={18} />
                  Enroll Now
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
