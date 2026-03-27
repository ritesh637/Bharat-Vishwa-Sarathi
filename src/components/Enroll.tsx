import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Phone,
  MapPin,
  UserCheck,
  Calendar,
  CreditCard,
  GraduationCap,
  Users,
  Shield,
  CheckCircle,
  MessageCircle,
  Car,
  Briefcase,
} from "lucide-react";
import CandidateTypes from "../components/CandidateTypes";
import ApplyModal from "./ApplyModal";

interface EnrollmentStep {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Requirement {
  text: string;
  icon: React.ReactNode;
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

// Color Constants
const COLORS = {
  primary: {
    from: "#049248", // Green
    to: "#F7921C",  // Orange
  },
  background: "#FBFBFC",
  text: {
    dark: "#111827",
    light: "#6B7280",
    white: "#FFFFFF",
  },
  border: "#E5E7EB",
  icon: {
    default: "#049248",
    hover: "#F7921C",
  },
  badge: {
    background: "rgba(4, 146, 72, 0.1)",
    text: "linear-gradient(90deg, #049248 0%, #F7921C 100%)",
  }
} as const;

const Enroll = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProgram, setSelectedProgram] = useState<string>("");

  const handleProgramSelectFromCandidateTypes = (programName: string) => {
    setSelectedProgram(programName);
    setIsModalOpen(true);
  };

  const enrollmentSteps: EnrollmentStep[] = [
    {
      number: 1,
      title: "Free Consultation",
      description:
        "Book a free consultation with our expert counselors to understand the program and assess your eligibility.",
      icon: <MessageCircle size={26} />,
    },
    {
      number: 2,
      title: "Document Submission",
      description:
        "Submit required documents including ID proof, educational certificates, and medical fitness certificate.",
      icon: <FileText size={26} />,
    },
    {
      number: 3,
      title: "Admission & Payment",
      description:
        "Complete admission formalities and secure your seat with a simple payment process.",
      icon: <CreditCard size={26} />,
    },
    {
      number: 4,
      title: "Batch Allocation",
      description:
        "Get assigned to a training batch with flexible timings that suit your schedule.",
      icon: <Calendar size={26} />,
    },
    {
      number: 5,
      title: "Training Program",
      description:
        "Begin comprehensive training covering theory, practical driving, and soft skills development.",
      icon: <Car size={26} />,
    },
    {
      number: 6,
      title: "Certification & Placement",
      description:
        "Receive international certification and get assistance with job placement opportunities.",
      icon: <Briefcase size={26} />,
    },
  ];

  const requirements: Requirement[] = [
    {
      text: "Valid Indian Driving License (for experienced drivers)",
      icon: <CheckCircle size={20} />,
    },
    { text: "Age between 21 - 45 Years", icon: <UserCheck size={20} /> },
    { text: "Basic English Communication Skills", icon: <Users size={20} /> },
    {
      text: "Medically Fit (Certificate Required)",
      icon: <Shield size={20} />,
    },
    { text: "Minimum 10th Grade Pass", icon: <GraduationCap size={20} /> },
    {
      text: "Passport (For International Processing)",
      icon: <FileText size={20} />,
    },
  ];

  const contactMethods: ContactMethod[] = [
    {
      title: "Call Admissions",
      description:
        "Speak directly with our admissions team for instant guidance and support.",
      icon: <Phone size={26} />,
      buttonText: "Call +91 8369496512",
      link: "tel:+918369496512",
      buttonVariant: "primary",
    },
    {
      title: "Visit Campus",
      description:
        "Visit our training center in Sector 12, Kharghar, Navi Mumbai for a campus tour.",
      icon: <MapPin size={26} />,
      buttonText: "Get Directions",
      link: "/contact",
      buttonVariant: "outline",
    },
    {
      title: "Apply Online",
      description:
        "Fill our online application form for quick and easy enrollment process.",
      icon: <FileText size={26} />,
      buttonText: "Start Application",
      link: "#",
      buttonVariant: "primary",
    },
  ];

  const handleContactClick = (method: ContactMethod, e: React.MouseEvent) => {
    if (method.title === "Apply Online") {
      e.preventDefault();
      setSelectedProgram("");
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <CandidateTypes onProgramSelect={handleProgramSelectFromCandidateTypes} />

      <section className="pt-10 pb-24" style={{ backgroundColor: COLORS.background }} id="enroll-section">
        {/* Background */}
        <div className="absolute inset-0" style={{ backgroundColor: COLORS.background }} />

        <div className="container max-w-[1400px] mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div 
              className="inline-flex items-center gap-3 px-7 py-3 rounded-full mb-6"
              style={{ 
                background: `linear-gradient(90deg, ${COLORS.badge.background} 0%, rgba(247, 146, 28, 0.1) 100%)`
              }}
            >
              <span 
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: COLORS.primary.to }}
              />
              <span 
                className="text-sm font-semibold tracking-wide"
                style={{ 
                  background: COLORS.badge.text,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                6-STEP ENROLLMENT PROCESS
              </span>
            </div>
            
            <h1 
              className="text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: COLORS.text.dark }}
            >
              Start Your International Driving Career
            </h1>
          </motion.div>

          {/* Steps Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {enrollmentSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 text-center
                     transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
                style={{ border: `1px solid ${COLORS.border}` }}
              >
                {/* Slide Background */}
                <div
                  className="absolute inset-0 translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0"
                  style={{ 
                    background: `linear-gradient(135deg, ${COLORS.primary.to} 0%, ${COLORS.primary.from} 100%)`
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Step Number */}
                  <div 
                    className="absolute top-0 right-0 text-white w-12 h-12 flex items-center justify-center text-lg font-bold rounded-bl-xl"
                    style={{ backgroundColor: COLORS.primary.to }}
                  >
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center
                            transition-all duration-300 group-hover:scale-110"
                    style={{ 
                      backgroundColor: 'white',
                      border: `2px solid rgba(${parseInt(COLORS.primary.from.slice(1, 3), 16)}, ${parseInt(COLORS.primary.from.slice(3, 5), 16)}, ${parseInt(COLORS.primary.from.slice(5, 7), 16)}, 0.2)`,
                      color: COLORS.icon.default
                    }}
                  >
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-white"
                    style={{ color: COLORS.text.dark }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="text-sm leading-relaxed transition-colors duration-300 group-hover:text-white"
                    style={{ color: COLORS.text.light }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Requirements Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-center mb-14">
              <div 
                className="inline-flex items-center gap-3 px-7 py-3 rounded-full"
                style={{ 
                  background: `linear-gradient(90deg, rgba(${parseInt(COLORS.primary.from.slice(1, 3), 16)}, ${parseInt(COLORS.primary.from.slice(3, 5), 16)}, ${parseInt(COLORS.primary.from.slice(5, 7), 16)}, 0.1) 0%, rgba(${parseInt(COLORS.primary.to.slice(1, 3), 16)}, ${parseInt(COLORS.primary.to.slice(3, 5), 16)}, ${parseInt(COLORS.primary.to.slice(5, 7), 16)}, 0.1) 100%)`
                }}
              >
                <span 
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: COLORS.primary.to }}
                />
                <span 
                  className="text-sm font-semibold tracking-wide"
                  style={{ 
                    background: `linear-gradient(90deg, ${COLORS.primary.from} 0%, ${COLORS.primary.to} 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  ADMISSION REQUIREMENTS
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {requirements.map((req, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl bg-white p-6
                     transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
                  style={{ border: `1px solid ${COLORS.border}` }}
                >
                  {/* Slide Background */}
                  <div
                    className="absolute inset-0 translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0"
                    style={{ 
                      background: `linear-gradient(135deg, ${COLORS.primary.to} 0%, ${COLORS.primary.from} 100%)`
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10 flex items-center gap-4">
                    <div 
                      className="flex-shrink-0 transition-colors duration-300 group-hover:text-white"
                      style={{ color: COLORS.icon.default }}
                    >
                      {req.icon}
                    </div>
                    <span 
                      className="text-gray-700 font-medium text-sm transition-colors duration-300 group-hover:text-white"
                      style={{ color: COLORS.text.dark }}
                    >
                      {req.text}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Section */}
          <div className="mb-16">
            <div className="text-center mb-14">
              <div 
                className="inline-flex items-center gap-3 px-7 py-3 rounded-full"
                style={{ 
                  background: `linear-gradient(90deg, rgba(${parseInt(COLORS.primary.from.slice(1, 3), 16)}, ${parseInt(COLORS.primary.from.slice(3, 5), 16)}, ${parseInt(COLORS.primary.from.slice(5, 7), 16)}, 0.1) 0%, rgba(${parseInt(COLORS.primary.to.slice(1, 3), 16)}, ${parseInt(COLORS.primary.to.slice(3, 5), 16)}, ${parseInt(COLORS.primary.to.slice(5, 7), 16)}, 0.1) 100%)`
                }}
              >
                <span 
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: COLORS.primary.from }}
                />
                <span 
                  className="text-sm font-semibold tracking-wide"
                  style={{ 
                    background: `linear-gradient(90deg, ${COLORS.primary.from} 0%, ${COLORS.primary.to} 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  TAKE THE NEXT STEP
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl bg-white p-8 text-center
                     transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
                  style={{ border: `1px solid ${COLORS.border}` }}
                >
                  {/* Slide Background */}
                  <div
                    className="absolute inset-0 translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0"
                    style={{ 
                      background: `linear-gradient(135deg, ${COLORS.primary.to} 0%, ${COLORS.primary.from} 100%)`
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center
                              transition-all duration-300 group-hover:scale-110"
                      style={{ 
                        backgroundColor: 'white',
                        border: `2px solid rgba(${parseInt(COLORS.primary.from.slice(1, 3), 16)}, ${parseInt(COLORS.primary.from.slice(3, 5), 16)}, ${parseInt(COLORS.primary.from.slice(5, 7), 16)}, 0.2)`,
                        color: COLORS.icon.default
                      }}
                    >
                      {method.icon}
                    </div>

                    {/* Title */}
                    <h3 
                      className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-white"
                      style={{ color: COLORS.text.dark }}
                    >
                      {method.title}
                    </h3>

                    {/* Description */}
                    <p 
                      className="text-sm leading-relaxed mb-6 transition-colors duration-300 group-hover:text-white"
                      style={{ color: COLORS.text.light }}
                    >
                      {method.description}
                    </p>

                    {/* Button */}
                    <a
                      href={method.link}
                      className={`inline-block w-full py-3 px-4 rounded-lg font-semibold text-base transition-all duration-300 ${
                        method.buttonVariant === "outline"
                          ? "border-2 hover:bg-white hover:text-[#F7921C]"
                          : "bg-white hover:bg-gray-50 hover:shadow-lg"
                      }`}
                      style={method.buttonVariant === "outline" ? {
                        borderColor: 'white',
                        color: 'white'
                      } : {
                        backgroundColor: 'white',
                        color: COLORS.primary.to
                      }}
                      onClick={(e) => handleContactClick(method, e)}
                    >
                      {method.buttonText}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Apply Online Modal */}
      <ApplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedProgram={selectedProgram}
      />
    </>
  );
};

export default Enroll;