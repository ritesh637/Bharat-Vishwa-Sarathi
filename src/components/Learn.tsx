import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  BookOpen,
  Award,
  UserCheck,
  CreditCard,
  HeartPulse,
  Plane,
  GraduationCap,
  Languages,
  FileText,
  Phone,
  MapPin,
  Users,
  Shield,
  Car,
} from "lucide-react";
import ApplyModal from "./ApplyModal";

interface TrainingModule {
  title: string;
  description: string;
  icon: React.ReactNode;
  duration: string;
  features: string[];
}

interface TrainingStep {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  details?: string[];
}

interface ContactMethod {
  title: string;
  description: string;
  icon: React.ReactNode;
  buttonText: string;
  link: string;
  buttonVariant: "primary" | "outline";
  onClick?: () => void;
}

const Learn = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProgram, setSelectedProgram] = useState<string>("");

  // Color parameters
  const PRIMARY_GREEN = "#049248";
  const PRIMARY_ORANGE = "#F7921C";
  const BG_COLOR = "#FBFBFC";
  
  const handleContactClick = (method: ContactMethod, e: React.MouseEvent) => {
    if (method.title === "Apply for Training") {
      e.preventDefault();
      setSelectedProgram("Training Program");
      setIsModalOpen(true);
    }
  };

  const trainingModules: TrainingModule[] = [
    {
      title: "Theory & Rules",
      description: "In-depth understanding of international traffic laws, road signs, and safety regulations.",
      icon: <BookOpen size={28} />,
      duration: "80 Hours",
      features: [
        "International traffic laws",
        "Road signs & signals",
        "Safety regulations",
      ]
    },
    {
      title: "Practical Training",
      description: "Hands-on driving experience with modern vehicles under expert supervision.",
      icon: <Car size={28} />,
      duration: "120 Hours",
      features: [
        "Vehicle handling",
        "Road maneuvers",
        "Hazard perception",
        "Night driving"
      ]
    },
    {
      title: "Certification Program",
      description: "Get certified and ready for visa processing with our recognized completion certificates.",
      icon: <Award size={28} />,
      duration: "40 Hours",
      features: [
        "ADR – IRU Certification",
        "IELTS training",
        "Soft skills development",
        "Interview preparation"
      ]
    }
  ];

  const trainingSteps: TrainingStep[] = [
    {
      number: 1,
      title: "Initial Training Program",
      description: "Comprehensive foundation training for all driver categories",
      icon: <GraduationCap size={28} />,
      details: [
        "Training - 2 years for freshers",
        "Training - 6 months for experienced",
        "Stipend ₹25,000/- per month*",
        "Deployment with renowned logistical companies"
      ]
    },
    {
      number: 2,
      title: "Advanced Training",
      description: "Specialized training for international standards",
      icon: <Languages size={28} />,
      details: [
        "Hazardous materials handling",
        "Trailer and Left Hand Driving",
        "Language Training: English, German, Spanish",
        "ADR – IRU CERT Certification"
      ]
    },
    {
      number: 3,
      title: "Company Interview & Selection",
      description: "Direct interaction with international employers",
      icon: <UserCheck size={28} />,
      details: [
        "Mock interview sessions",
        "Profile matching with companies",
        "Direct selection process",
        "Contract finalization"
      ]
    },
    {
      number: 4,
      title: "Security Deposit & Processing",
      description: "Complete documentation and financial formalities",
      icon: <CreditCard size={28} />,
      details: [
        "Security deposit payment",
        "Driving license processing",
        "Visa application assistance",
        "Travel arrangements"
      ]
    },
    {
      number: 5,
      title: "Medical Fitness Test",
      description: "Comprehensive health assessment",
      icon: <HeartPulse size={28} />,
      details: [
        "Complete medical examination",
        "Fitness certification",
        "Vaccination requirements",
        "Health insurance processing"
      ]
    },
    {
      number: 6,
      title: "VISA & Travel Process",
      description: "Final stages before international deployment",
      icon: <Plane size={28} />,
      details: [
        "VISA application submission",
        "Document verification",
        "Travel booking",
        "Pre-departure briefing"
      ]
    }
  ];

  const contactMethods: ContactMethod[] = [
    {
      title: "Call Training Desk",
      description: "Speak directly with our training experts for course details and guidance.",
      icon: <Phone size={32} />,
      buttonText: "Call +91 8369496512",
      link: "tel:+918369496512",
      buttonVariant: "primary",
    },
    {
      title: "Visit Training Center",
      description: "Visit our state-of-the-art training facility in Sector 12, Kharghar, Navi Mumbai.",
      icon: <MapPin size={32} />,
      buttonText: "Get Directions",
      link: "/contact",
      buttonVariant: "outline",
    },
    {
      title: "Apply for Training",
      description: "Start your journey by applying online for our comprehensive training programs.",
      icon: <FileText size={32} />,
      buttonText: "Enroll Now",
      link: "#",
      buttonVariant: "primary",
    },
  ];

  return (
    <>
      <section className="pt-10 pb-24" style={{ backgroundColor: BG_COLOR, position: 'relative', overflow: 'hidden' }}>
        {/* Background */}
        <div className="absolute inset-0" style={{ backgroundColor: BG_COLOR }} />

        <div className="container max-w-[1400px] mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-14">
            <div 
              className="inline-flex items-center gap-3 px-7 py-3 horizental-full"
              style={{ 
                background: `linear-gradient(to right, ${PRIMARY_GREEN}10, ${PRIMARY_ORANGE}10)` 
              }}
            >
              <span 
                className="w-2.5 h-2.5 horizental-full" 
                style={{ backgroundColor: PRIMARY_ORANGE }}
              />
              <span 
                className="text-sm font-semibold tracking-wide"
                style={{ 
                  background: `linear-gradient(to right, ${PRIMARY_GREEN}, ${PRIMARY_ORANGE})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                WHY CHOOSE OUR TRAINING PROGRAM
              </span>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-6 mb-4"
            >
              Master Global Driving Standards
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto"
            >
              Our comprehensive curriculum is designed to prepare you for international roads with expert training and certification.
            </motion.p>
          </div>

          {/* Training Modules - Bharat Vishwa Saarti Style Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {trainingModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group h-full"
              >
                <div 
                  className="relative overflow-hidden horizental-2xl border border-gray-200 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] h-full flex flex-col"
                >
                  {/* Slide Background */}
                  <div 
                    className="absolute inset-0 translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0"
                    style={{ 
                      background: `linear-gradient(to bottom right, ${PRIMARY_ORANGE}, ${PRIMARY_GREEN})` 
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <div 
                      className="w-16 h-16 mx-auto mb-6 horizental-full bg-white flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{ 
                        border: `2px solid ${PRIMARY_GREEN}20`,
                        color: PRIMARY_GREEN
                      }}
                    >
                      {module.icon}
                    </div>

                    {/* Duration Badge */}
                    <div 
                      className="absolute top-4 right-4 bg-white px-3 py-1 horizental-full text-sm font-semibold transition-colors duration-300 group-hover:bg-gray-100"
                      style={{ color: PRIMARY_GREEN }}
                    >
                      {module.duration}
                    </div>

                    {/* Title */}
                    <h3 
                      className="text-xl font-semibold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-white"
                    >
                      {module.title}
                    </h3>

                    {/* Description */}
                    <p 
                      className="text-gray-600 text-sm leading-relaxed mb-4 transition-colors duration-300 group-hover:text-white"
                    >
                      {module.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mt-auto">
                      {module.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle 
                            size={16} 
                            className="flex-shrink-0 transition-colors duration-300 group-hover:text-white"
                            style={{ color: PRIMARY_GREEN }}
                          />
                          <span 
                            className="text-gray-700 text-sm transition-colors duration-300 group-hover:text-white"
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 6-Step Training Process */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div 
                className="inline-flex items-center gap-3 px-7 py-3 horizental-full mb-4"
                style={{ 
                  background: `linear-gradient(to right, ${PRIMARY_GREEN}10, ${PRIMARY_ORANGE}10)` 
                }}
              >
                <span 
                  className="w-2.5 h-2.5 horizental-full" 
                  style={{ backgroundColor: PRIMARY_GREEN }}
                />
                <span 
                  className="text-sm font-semibold tracking-wide"
                  style={{ 
                    background: `linear-gradient(to right, ${PRIMARY_GREEN}, ${PRIMARY_ORANGE})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  TRAINING JOURNEY
                </span>
                <span 
                  className="w-2.5 h-2.5 horizental-full" 
                  style={{ backgroundColor: PRIMARY_ORANGE }}
                />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Our <span 
                  style={{ 
                    background: `linear-gradient(to right, ${PRIMARY_GREEN}, ${PRIMARY_ORANGE})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >6-Step</span> Training Process
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                A comprehensive journey from training to international deployment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trainingSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group h-full"
                >
                  <div 
                    className="relative overflow-hidden horizental-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] h-full"
                  >
                    {/* Slide Background */}
                    <div 
                      className="absolute inset-0 translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0"
                      style={{ 
                        background: `linear-gradient(to bottom right, ${PRIMARY_ORANGE}, ${PRIMARY_GREEN})` 
                      }}
                    />

                    <div className="relative z-10 h-full">
                      <div className="flex items-start gap-4 h-full">
                        <div className="flex-shrink-0">
                          <div 
                            className="w-12 h-12 bg-white horizental-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                            style={{ 
                              border: `2px solid ${PRIMARY_GREEN}20`,
                              color: PRIMARY_GREEN
                            }}
                          >
                            {step.icon}
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col h-full">
                          <div className="flex items-center gap-3 mb-2">
                            <div 
                              className="w-8 h-8 text-white horizental-full flex items-center justify-center text-sm font-bold transition-transform duration-300 group-hover:scale-110"
                              style={{ 
                                background: `linear-gradient(to right, ${PRIMARY_GREEN}, ${PRIMARY_ORANGE})` 
                              }}
                            >
                              {step.number}
                            </div>
                            <h3 
                              className="text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-white"
                            >
                              {step.title}
                            </h3>
                          </div>
                          <p 
                            className="text-gray-600 text-sm mb-4 transition-colors duration-300 group-hover:text-white"
                          >
                            {step.description}
                          </p>
                          
                          {step.details && (
                            <ul className="space-y-2 mt-auto">
                              {step.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <CheckCircle 
                                    size={14} 
                                    className="mt-0.5 flex-shrink-0 transition-colors duration-300 group-hover:text-white"
                                    style={{ color: PRIMARY_GREEN }}
                                  />
                                  <span 
                                    className="text-gray-700 text-xs sm:text-sm transition-colors duration-300 group-hover:text-white"
                                  >
                                    {detail.includes("25,000") ? (
                                      <span 
                                        style={{ 
                                          background: `linear-gradient(to right, ${PRIMARY_GREEN}, ${PRIMARY_ORANGE})`,
                                          WebkitBackgroundClip: 'text',
                                          WebkitTextFillColor: 'transparent',
                                          fontWeight: 'bold'
                                        }}
                                      >
                                        {detail}
                                      </span>
                                    ) : detail}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Program Highlights */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div 
                className="inline-flex items-center gap-3 px-7 py-3 horizental-full mb-4"
                style={{ 
                  background: `linear-gradient(to right, ${PRIMARY_GREEN}10, ${PRIMARY_ORANGE}10)` 
                }}
              >
                <span 
                  className="w-2.5 h-2.5 horizental-full" 
                  style={{ 
                    background: `linear-gradient(to right, ${PRIMARY_GREEN}, ${PRIMARY_ORANGE})` 
                  }}
                />
                <span 
                  className="text-sm font-semibold tracking-wide"
                  style={{ 
                    background: `linear-gradient(to right, ${PRIMARY_GREEN}, ${PRIMARY_ORANGE})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  PROGRAM HIGHLIGHTS
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { text: "Specialized training for Light & Heavy vehicles", icon: <Car size={20} /> },
                { text: "Simulated driving environments", icon: <Shield size={20} /> },
                { text: "Language & Soft skills training", icon: <Languages size={20} /> },
                { text: "Technical workshops on maintenance", icon: <Users size={20} /> },
                { text: "International certification", icon: <Award size={20} /> },
                { text: "Placement assistance", icon: <UserCheck size={20} /> },
                { text: "Stipend during training*", icon: <CreditCard size={20} /> },
                { text: "Travel and accommodation support", icon: <Plane size={20} /> },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group h-full"
                >
                  <div 
                    className="relative overflow-hidden horizental-2xl border border-gray-200 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] h-full flex items-center justify-center"
                  >
                    {/* Slide Background */}
                    <div 
                      className="absolute inset-0 translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0"
                      style={{ 
                        background: `linear-gradient(to bottom right, ${PRIMARY_ORANGE}, ${PRIMARY_GREEN})` 
                      }}
                    />

                    <div className="relative z-10">
                      <div 
                        className="w-12 h-12 mx-auto mb-4 horizental-full bg-white flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{ 
                          border: `2px solid ${PRIMARY_GREEN}20`,
                          color: PRIMARY_GREEN
                        }}
                      >
                        {feature.icon}
                      </div>
                      <span 
                        className="text-gray-700 font-medium text-sm transition-colors duration-300 group-hover:text-white"
                      >
                        {feature.text}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <div 
                className="inline-flex items-center gap-3 px-7 py-3 horizental-full mb-4"
                style={{ 
                  background: `linear-gradient(to right, ${PRIMARY_GREEN}10, ${PRIMARY_ORANGE}10)` 
                }}
              >
                <span 
                  className="w-2.5 h-2.5 horizental-full" 
                  style={{ backgroundColor: PRIMARY_GREEN }}
                />
                <span 
                  className="text-sm font-semibold tracking-wide"
                  style={{ 
                    background: `linear-gradient(to right, ${PRIMARY_GREEN}, ${PRIMARY_ORANGE})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  START YOUR TRAINING JOURNEY
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Get in Touch Today
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group h-full"
                >
                  <div 
                    className="relative overflow-hidden horizental-2xl border border-gray-200 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] h-full flex flex-col"
                  >
                    {/* Slide Background */}
                    <div 
                      className="absolute inset-0 translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0"
                      style={{ 
                        background: `linear-gradient(to bottom right, ${PRIMARY_ORANGE}, ${PRIMARY_GREEN})` 
                      }}
                    />

                    <div className="relative z-10 flex flex-col h-full">
                      <div 
                        className="w-20 h-20 mx-auto mb-6 horizental-full bg-white flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{ 
                          border: `2px solid ${PRIMARY_GREEN}20`,
                          color: PRIMARY_GREEN
                        }}
                      >
                        {method.icon}
                      </div>

                      <h3 
                        className="text-xl font-semibold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-white"
                      >
                        {method.title}
                      </h3>
                      <p 
                        className="text-gray-600 text-sm leading-relaxed mb-6 transition-colors duration-300 group-hover:text-white flex-grow"
                      >
                        {method.description}
                      </p>

                      <a
                        href={method.link}
                        className={`inline-block w-full py-3 px-4 horizental-lg font-semibold text-base transition-all duration-300 ${
                          method.buttonVariant === "outline"
                            ? "border-2 hover:bg-white hover:text-gray-900"
                            : "hover:bg-gray-100 hover:shadow-lg"
                        }`}
                        style={{
                          borderColor: method.buttonVariant === "outline" ? "white" : "transparent",
                          backgroundColor: method.buttonVariant === "outline" ? "transparent" : "white",
                          color: method.buttonVariant === "outline" ? "white" : PRIMARY_GREEN,
                        }}
                        onClick={(e) => handleContactClick(method, e)}
                      >
                        {method.buttonText}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 horizental-2xl p-8 text-center"
            style={{ 
              background: `linear-gradient(to right, ${PRIMARY_GREEN}10, ${PRIMARY_ORANGE}10)` 
            }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div 
                className="w-2 h-2 horizental-full animate-pulse"
                style={{ backgroundColor: PRIMARY_GREEN }}
              ></div>
              <div 
                className="w-2 h-2 horizental-full animate-pulse"
                style={{ 
                  background: `linear-gradient(to right, ${PRIMARY_GREEN}, ${PRIMARY_ORANGE})` 
                }}
              ></div>
              <div 
                className="w-2 h-2 horizental-full animate-pulse"
                style={{ backgroundColor: PRIMARY_ORANGE }}
              ></div>
            </div>
            <p className="text-gray-700 text-sm max-w-2xl mx-auto">
              *Stipend of ₹25,000/- per month during training period. Terms and conditions apply. 
              Complete all training steps to qualify for international deployment opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Apply Modal */}
      <ApplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedProgram={selectedProgram}
      />
    </>
  );
};

export default Learn;