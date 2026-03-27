import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SplitText from "./SplitText";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Car, GraduationCap, Clock, Award, X } from "lucide-react";
import { testimonialImages } from "../../lib/galleryData";

const Hero = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  // Image paths - images are in public/image folder
  const images = [
    "/img/hero-1.jpg",
    "/img/hero-2.jpg",
    "/img/hero-3.jpg",
    "/img/hero-4.jpg",
  ];

  // Testimonial images sourced from centralized data

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [showText, setShowText] = useState(true);

  const texts = [
    "GATEWAY TO GLOBAL MARKETS",
    "Skilling Indian Drivers for Global Mobility",
    "Drive Your Future with Confidence",
    "Empowering Drivers, Enabling Journeys",
    "Master the Road with Expert Training",
    "Your Journey to Safe Driving Starts Here",
    "Navigate the World with Skill and Safety",
  ];

  const handleEnrollClick = () => {
    navigate("/enroll");
  };

  const openModal = (imgSrc: string) => {
    setSelectedImage(imgSrc);
    setModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage("");
    // Re-enable body scroll
    document.body.style.overflow = "auto";
  };

  // Handle escape key press
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && modalOpen) {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, [modalOpen]);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(imageInterval);
  }, [images.length]);

  useEffect(() => {
    let textTimeout: ReturnType<typeof setTimeout>;

    const startTextSequence = () => {
      setShowText(true);

      textTimeout = setTimeout(() => {
        setShowText(false);

        setTimeout(() => {
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          setShowText(true);
        }, 300);
      }, 4000);
    };

    startTextSequence();

    const textInterval = setInterval(() => {
      setShowText(false);

      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setTimeout(() => {
          setShowText(true);
        }, 100);
      }, 300);
    }, 5000);

    return () => {
      clearInterval(textInterval);
      clearTimeout(textTimeout);
    };
  }, [texts.length]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative md:h-screen h-[60vh] flex items-start justify-center overflow-x-hidden overflow-y-visible w-full max-w-full">
        {/* Background with sliding images */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="relative w-full h-full pointer-events-none">
            {images.map((img, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
                style={{ backgroundImage: `url(${img})` }}
              />
            ))}
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-black/35 pointer-events-none" />
        </div>

        <div className="container max-w-6xl mx-auto px-3 relative z-10 pointer-events-auto w-full pt-[54px] md:pt-[70px]">
          {/* Text Content */}
          <div className="w-full text-white mx-auto text-center flex flex-col items-center justify-start md:min-h-[65vh] min-h-[40vh]">
            <div className="w-full overflow-visible">
              {/* Bharat Vishwa Saarti - MOVED UP */}
              <motion.div
                className="w-full mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div
                  className="
    text-white hover:text-[#F7921C] transition-colors duration-300
    text-[clamp(2.4rem,9vw,3.2rem)] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
    font-[450]
    text-center
    tracking-tight
    block
    mb-0 md:-mt-12 -mt-0
  "
                  style={{
                    textShadow: "0 6px 16px rgba(0,0,0,0.55)",
                    letterSpacing: "-1.6px",
                    lineHeight: "1.1",
                  }}
                >
                  Bharat Vishwa Saarti
                </div>
              </motion.div>

              {/* Animated SplitText - MOVED DOWN */}

              <div className="flex flex-col justify-center items-center w-full overflow-visible mb-2 md:mt-2 lg:mt-4">
                {showText && (
                  <div className="w-full overflow-visible">
                    <SplitText
                      text={texts[currentTextIndex]}
                      className="text-[clamp(1.05rem,3.4vw,2.4rem)] font-normal leading-tight mb-0 tracking-[-0.5px] whitespace-normal text-center overflow-visible w-full block"
                      delay={100}
                      duration={0.8}
                      ease="power3.out"
                      splitType="words"
                      from={{ opacity: 0, y: 50 }}
                      to={{ opacity: 1, y: 0 }}
                      threshold={0.1}
                      rootMargin="-50px"
                      textAlign="center"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Actions Section */}
          <motion.div
            className="absolute bottom-[120px] sm:bottom-[95px] left-0 right-0 flex justify-center items-center z-20 pointer-events-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex flex-col items-center gap-2">
              <div
                className="text-white text-xs sm:text-base md:text-lg lg:text-xl text-center mb-3 md:mb-4 max-w-2xl px-4 mx-auto md:mt-10 lg:mt-14"
                style={{
                  textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
                  lineHeight: "1.6",
                  fontWeight: "400",
                }}
              >
                Transform your driving skills into a global career opportunity.
                Join our comprehensive training program and unlock international
                employment prospects.
              </div>

              <Button
                onClick={handleEnrollClick}
                aria-label="Start your journey"
                className="
    relative overflow-hidden
    flex items-center justify-center
    px-12 py-6
    bg-gradient-to-r from-[#049248] to-[#F7921C]
    text-white border-none rounded-lg
    font-semibold text-xl cursor-pointer
    transition-all duration-300 mt-2.5
    hover:from-[#03843f] hover:to-[#e0851a] hover:scale-105

    after:content-['']
    after:absolute
    after:bottom-[6px]
    after:left-1/2
    after:h-[2px]
    after:w-0
    after:bg-white/95
    after:rounded-full
    after:transition-all
    after:duration-300
    after:-translate-x-1/2

    hover:after:w-2/3
    active:after:w-3/4
  "
              >
                Start Your Journey
              </Button>
            </div>
          </motion.div>

          {/* Highlights Section - FINAL */}
          <motion.div
            className="absolute -bottom-[15px] sm:bottom-[20px] md:bottom-[25px] left-0 right-0 z-20 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 px-2 w-full max-w-[95%] sm:max-w-none mx-auto">
              {/* First two items */}
              <div className="grid grid-cols-2 gap-2 sm:flex sm:gap-8 w-full sm:w-auto place-items-center">
                {[
                  {
                    label: "International Standards",
                    color: "from-[#049248] to-[#F7921C]",
                  },
                  {
                    label: "Expert Instructors",
                    color: "from-[#049248] to-[#F7921C]",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4, scale: 1.04 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className="
            relative overflow-hidden
            px-2 sm:px-6 py-2.5 sm:py-3
            rounded-xl
            backdrop-blur-md
            bg-white/10
            border border-white/20
            text-white text-[12px] sm:text-base font-medium
            shadow-[0_8px_24px_rgba(0,0,0,0.25)]
            cursor-default
            group
            w-full sm:w-auto text-center
            flex items-center justify-center
            min-h-[44px] sm:min-h-0
          "
                  >
                    {/* Hover glow */}
                    <span
                      className="
              absolute inset-0
              bg-gradient-to-r from-white/0 via-white/10 to-white/0
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
            "
                    />

                    {/* Bottom color accent */}
                    <span
                      className={`
              absolute bottom-0 left-0 right-0 h-[3px]
              bg-gradient-to-r ${item.color}
            `}
                    />

                    <span className="relative z-10 tracking-wide leading-tight">
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Third item */}
              <motion.div
                whileHover={{ y: -4, scale: 1.04 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="
        relative overflow-hidden
        px-6 py-2.5 sm:py-3
        rounded-xl
        backdrop-blur-md
        bg-white/10
        border border-white/20
        text-white text-[13px] sm:text-base font-medium
        shadow-[0_8px_24px_rgba(0,0,0,0.25)]
        cursor-default
        group
        w-auto mx-auto sm:mx-0 sm:w-auto text-center
        flex items-center justify-center
        min-h-[44px] sm:min-h-0
      "
              >
                {/* Hover glow */}
                <span
                  className="
          absolute inset-0
          bg-gradient-to-r from-white/0 via-white/10 to-white/0
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
        "
                />

                {/* Bottom color accent */}
                <span
                  className="
          absolute bottom-0 left-0 right-0 h-[3px]
          bg-gradient-to-r from-[#F7921C] to-[#049248]
        "
                />

                <span className="relative z-10 tracking-wide">
                  Job Placement Support
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Slide Controls */}
          <div className="absolute bottom-[42px] right-4 sm:right-6 flex gap-2.5 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full border-none cursor-pointer p-0 transition-all duration-300 ${
                  index === currentImageIndex
                    ? "bg-gradient-to-r from-[#049248] to-[#F7921C] scale-120 shadow-[0_0_10px_rgba(247,146,28,0.5)]"
                    : "bg-white/30 hover:bg-white/50 hover:scale-120"
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Image Section - New Section with Clickable Images */}
      <section className="py-4 bg-gradient-to-b from-white to-[#FBFBFC] relative overflow-hidden">
        <div className="container max-w-[1400px] mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-2"
          >
            <div className="inline-flex items-center gap-3 px-7 py-3 bg-gradient-to-r from-[#049248]/10 to-[#F7921C]/10 rounded-full">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F7921C]" />
              <span className="text-sm font-semibold bg-gradient-to-r from-[#049248] to-[#F7921C] bg-clip-text text-transparent tracking-wide">
                OUR SUCCESS STORIES
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mt-3 mb-0 bg-gradient-to-r from-[#049248] to-[#F7921C] bg-clip-text text-transparent">
              Building Futures, Shaping Careers
            </h1>
          </motion.div>

          {/* Scrolling Images - Left to Right */}
          <div className="relative overflow-hidden w-full">
            <div className="flex w-max animate-scroll-left-to-right">
              {/* First set of images */}
              {testimonialImages.map((img, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-[85vw] sm:w-[45vw] md:w-[33.333333vw] lg:w-[25vw] xl:w-[20vw] px-2 cursor-pointer"
                  onClick={() => openModal(img)}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <img
                      src={img}
                      alt={`Testimonial ${index + 1}`}
                      className="w-full h-[280px] md:h-[320px] lg:h-[380px] object-cover"
                    />
                    {/* Overlay gradient for better visual */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    {/* Click hint overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/40">
                      <div className="bg-white/90 rounded-full p-3 transform scale-90 hover:scale-110 transition-transform">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-[#049248]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {testimonialImages.map((img, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-[85vw] sm:w-[45vw] md:w-[33.333333vw] lg:w-[25vw] xl:w-[20vw] px-2 cursor-pointer"
                  onClick={() => openModal(img)}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <img
                      src={img}
                      alt={`Testimonial ${index + 1}`}
                      className="w-full h-[280px] md:h-[320px] lg:h-[380px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    {/* Click hint overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/40">
                      <div className="bg-white/90 rounded-full p-3 transform scale-90 hover:scale-110 transition-transform">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-[#049248]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Add custom CSS for animation */}
        <style>{`
          @keyframes scroll-left-to-right {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-scroll-left-to-right {
            animation: scroll-left-to-right 60s linear infinite;
          }
          
          .animate-scroll-left-to-right:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* Modal for Large Image View */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 md:-right-12 md:top-0 text-white hover:text-[#F7921C] transition-colors duration-300 z-10"
              aria-label="Close modal"
            >
              <X size={32} />
            </button>

            {/* Image Container */}
            <div className="relative rounded-2xl overflow-hidden bg-black/50">
              <img
                src={selectedImage}
                alt="Full size testimonial"
                className="max-w-full max-h-[85vh] object-contain"
              />
            </div>

            {/* Optional: Image Counter */}
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
              {testimonialImages.findIndex(img => img === selectedImage) + 1} / {testimonialImages.length}
            </div>
          </div>

          {/* Optional: Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = testimonialImages.findIndex(img => img === selectedImage);
              const prevIndex = (currentIndex - 1 + testimonialImages.length) % testimonialImages.length;
              setSelectedImage(testimonialImages[prevIndex]);
            }}
            className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 text-white hover:text-[#F7921C] transition-colors duration-300 bg-black/50 rounded-full p-2 hover:bg-black/70"
            aria-label="Previous image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 md:h-10 md:w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = testimonialImages.findIndex(img => img === selectedImage);
              const nextIndex = (currentIndex + 1) % testimonialImages.length;
              setSelectedImage(testimonialImages[nextIndex]);
            }}
            className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 text-white hover:text-[#F7921C] transition-colors duration-300 bg-black/50 rounded-full p-2 hover:bg-black/70"
            aria-label="Next image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 md:h-10 md:w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Features Section */}
      <section className="pt-10 pb-24 bg-[#FBFBFC] relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[#FBFBFC]" />

        <div className="container max-w-[1400px] mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-3 px-7 py-3 bg-gradient-to-r from-[#049248]/10 to-[#F7921C]/10 rounded-full">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F7921C]" />
              <span className="text-sm font-semibold bg-gradient-to-r from-[#049248] to-[#F7921C] bg-clip-text text-transparent tracking-wide">
                WHY CHOOSE BHARAT VISHWA SAARTI
              </span>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Car size={26} />,
                title: "Modern Vehicles",
                desc: "Learn with latest model cars equipped with dual controls and advanced safety features",
              },
              {
                icon: <GraduationCap size={26} />,
                title: "Certified Instructors",
                desc: "State-certified professionals with 5+ years of teaching experience and specialized training",
              },
              {
                icon: <Clock size={26} />,
                title: "Flexible Scheduling",
                desc: "Choose from morning, evening or weekend lessons tailored to your availability",
              },
              {
                icon: <Award size={26} />,
                title: "High Success Rate",
                desc: "98% first-time pass rate at driving tests with our comprehensive training",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 text-center
                     transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
              >
                {/* Slide Background */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-[#F7921C] to-[#049248]
                          translate-y-full transition-transform duration-500 ease-out
                          group-hover:translate-y-0"
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="w-16 h-16 mx-auto mb-6 rounded-full
                            bg-white ring-2 ring-[#049248]/20
                            flex items-center justify-center
                            text-[#049248]
                            transition-all duration-300
                            group-hover:text-[#F7921C]
                            group-hover:ring-white
                            group-hover:scale-110"
                  >
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-white">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed transition-colors duration-300 group-hover:text-white">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;