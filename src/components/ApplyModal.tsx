import React, { useState, useEffect, FormEvent } from "react";
import {
  X,
  Send,
  User,
  Mail,
  Phone,
  GraduationCap,
  MessageSquare,
  Calendar,
  AlertCircle,
  CheckCircle,
  PhoneCall,
  Loader2,
  FileText,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProgram?: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  program: string;
  message: string;
}

interface EmailJSError {
  text?: string;
  status?: number;
  message?: string;
}

const EMAILJS_CONFIG = {
 SERVICE_ID: "service_n9u8bot",
  PUBLIC_KEY: "9FwZRaXUa5Sec8T1h",
   TEMPLATE_ID: "template_88m2fno",
};

const programOptions = [
  "6 Months Program",
  "24 Months Program",
  "Basic Driver Training",
  "Advanced Driver Training",
  "International Certification",
  "ADR Certification",
  "Heavy Vehicle Training",
  "Corporate Fleet Training",
];

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

const ApplyModal: React.FC<ApplyModalProps> = ({
  isOpen,
  onClose,
  selectedProgram = "",
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    program: selectedProgram,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState<string>("");

  // Handle body overflow and form reset
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "auto";
      return;
    }

    document.body.style.overflow = "hidden";
    setSubmitSuccess(false);
    setError("");

    setFormData({
      name: "",
      email: "",
      phone: "",
      program: selectedProgram || "",
      message: "",
    });

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, selectedProgram]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setError("Please enter your full name");
      return false;
    }
    if (!formData.email.trim()) {
      setError("Please enter your email address");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please enter a valid email address");
      return false;
    }
    if (!formData.phone.trim()) {
      setError("Please enter your phone number");
      return false;
    }
    const phoneRegex = /^[+]?[\d\s\-().]{10,}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      setError("Please enter a valid phone number (minimum 10 digits)");
      return false;
    }
    if (!formData.program.trim()) {
      setError("Please select a program");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const templateParams = {
        to_name: "Vishwas Bharti Admissions Team",
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        program: formData.program,
        message: formData.message || "No additional information provided",
        submission_date: new Date().toLocaleDateString("en-IN", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
        timestamp: new Date().toISOString(),
        source: "Website Application Form",
      };

      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log("✅ Email sent successfully:", response.status, response.text);

      setSubmitSuccess(true);
      setIsSubmitting(false);

      setFormData({
        name: "",
        email: "",
        phone: "",
        program: selectedProgram || "",
        message: "",
      });

      const timer = setTimeout(() => {
        onClose();
      }, 4000);

      return () => clearTimeout(timer);
    } catch (err: unknown) {
      console.error("❌ Failed to send email:", err);
      
      const errorMessage = (err as EmailJSError).text 
        || (err as Error).message 
        || "Failed to submit application. Please try again or contact us directly at +91 8369496512";
      
      setError(errorMessage);
      setIsSubmitting(false);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && !isSubmitting) {
      onClose();
    }
  };

  // Escape key handler
  useEffect(() => {
    if (!isOpen) return;

    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !isSubmitting) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [isOpen, isSubmitting, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-300"
      onClick={handleOverlayClick}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl max-h-[80vh] overflow-y-auto group"
        onClick={(e) => e.stopPropagation()}
        style={{ border: `1px solid ${COLORS.border}` }}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer z-10 transition-all duration-300 hover:bg-[#F7921C] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ 
            backgroundColor: 'white',
            border: `2px solid ${COLORS.border}`,
            color: COLORS.text.dark
          }}
          onClick={onClose}
          aria-label="Close modal"
          disabled={isSubmitting}
        >
          <X size={20} />
        </button>

        {/* Success Message */}
        {submitSuccess && (
          <div className="p-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-white mx-auto mb-6"
              style={{ 
                background: `linear-gradient(135deg, ${COLORS.primary.from} 0%, ${COLORS.primary.to} 100%)`
              }}
            >
              <CheckCircle size={28} />
            </motion.div>
            <h3 className="text-2xl font-bold mb-3" style={{ color: COLORS.text.dark }}>
              Application Submitted Successfully! 🎉
            </h3>
            <p className="text-gray-600 mb-3 text-base">
              Thank you for applying to Vishwas Bharti Driving Academy.
            </p>
            <div className="mb-4 p-3 rounded-lg text-sm"
              style={{ 
                backgroundColor: 'rgba(4, 146, 72, 0.1)',
                borderLeft: `4px solid ${COLORS.primary.from}`,
                color: COLORS.primary.from
              }}
            >
              <p className="font-semibold">
                Our admissions team will contact you within{" "}
                <span style={{ color: COLORS.text.dark }}>24 hours</span>.
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 p-3 rounded-xl text-sm text-gray-700"
              style={{ backgroundColor: 'rgba(4, 146, 72, 0.05)' }}
            >
              <PhoneCall size={14} className="text-[#F7921C]" />
              <span>Need immediate assistance? Call +91 8369496512</span>
            </div>
          </div>
        )}

        {/* Modal Content */}
        {!submitSuccess && (
          <>
            {/* Header */}
            <div className="px-8 py-8 text-center border-b"
              style={{ borderColor: COLORS.border }}
            >
              <div 
                className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110"
                style={{ 
                  backgroundColor: 'white',
                  border: `2px solid rgba(${parseInt(COLORS.primary.from.slice(1, 3), 16)}, ${parseInt(COLORS.primary.from.slice(3, 5), 16)}, ${parseInt(COLORS.primary.from.slice(5, 7), 16)}, 0.2)`,
                  color: COLORS.icon.default
                }}
              >
                <FileText size={24} />
              </div>

              {selectedProgram && (
                <div 
                  className="inline-flex items-center gap-2 px-4 py-2 text-white rounded-lg text-sm font-semibold mb-3"
                  style={{ 
                    background: `linear-gradient(90deg, ${COLORS.primary.from} 0%, ${COLORS.primary.to} 100%)`
                  }}
                >
                  <Calendar size={14} />
                  <span>{selectedProgram}</span>
                </div>
              )}

              <h1 className="text-2xl font-bold mb-3" style={{ color: COLORS.text.dark }}>
                {selectedProgram
                  ? `Apply for ${selectedProgram}`
                  : "Apply for Training Program"}
              </h1>

              <p className="text-sm max-w-[500px] mx-auto" style={{ color: COLORS.text.light }}>
                Complete this form and our admissions team will contact you
                within 24 hours to guide you through the enrollment process.
              </p>
            </div>

            {/* Form */}
            <div className="p-8">
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-3 rounded-xl flex items-start gap-2 text-sm font-medium"
                  style={{ 
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    border: `2px solid rgba(239, 68, 68, 0.2)`
                  }}
                >
                  <AlertCircle size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-red-700">{error}</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="flex items-center gap-2 text-sm font-semibold mb-2"
                    style={{ color: COLORS.text.dark }}
                  >
                    <User size={14} className="text-[#F7921C]" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required
                    className="w-full px-4 py-3 rounded-xl text-gray-900 bg-white transition-all duration-300 focus:outline-none disabled:bg-gray-50 disabled:text-gray-600 disabled:cursor-not-allowed text-sm"
                    style={{ 
                      border: `2px solid ${COLORS.border}`,
                      borderColor: formData.name ? COLORS.primary.from : COLORS.border
                    }}
                  />
                </div>

                {/* Email & Phone Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="flex items-center gap-2 text-sm font-semibold mb-2"
                      style={{ color: COLORS.text.dark }}
                    >
                      <Mail size={14} className="text-[#F7921C]" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      required
                      className="w-full px-4 py-3 rounded-xl text-gray-900 bg-white transition-all duration-300 focus:outline-none disabled:bg-gray-50 disabled:text-gray-600 disabled:cursor-not-allowed text-sm"
                      style={{ 
                        border: `2px solid ${COLORS.border}`,
                        borderColor: formData.email ? COLORS.primary.from : COLORS.border
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="flex items-center gap-2 text-sm font-semibold mb-2"
                      style={{ color: COLORS.text.dark }}
                    >
                      <Phone size={14} className="text-[#F7921C]" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      required
                      className="w-full px-4 py-3 rounded-xl text-gray-900 bg-white transition-all duration-300 focus:outline-none disabled:bg-gray-50 disabled:text-gray-600 disabled:cursor-not-allowed text-sm"
                      style={{ 
                        border: `2px solid ${COLORS.border}`,
                        borderColor: formData.phone ? COLORS.primary.from : COLORS.border
                      }}
                    />
                  </div>
                </div>

                {/* Program Select */}
                <div>
                  <label
                    htmlFor="program"
                    className="flex items-center gap-2 text-sm font-semibold mb-2"
                    style={{ color: COLORS.text.dark }}
                  >
                    <GraduationCap size={14} className="text-[#F7921C]" />
                    Select Program *
                  </label>
                  <select
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required
                    className="w-full px-4 py-3 rounded-xl text-gray-900 bg-white transition-all duration-300 focus:outline-none disabled:bg-gray-50 disabled:text-gray-600 disabled:cursor-not-allowed text-sm appearance-none pr-10"
                    style={{ 
                      border: `2px solid ${COLORS.border}`,
                      borderColor: formData.program ? COLORS.primary.from : COLORS.border,
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23049248' viewBox='0 0 256 256'%3E%3Cpath d='M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center'
                    }}
                  >
                    <option value="">Choose a training program</option>
                    {programOptions.map((program, index) => (
                      <option key={index} value={program} className="text-sm">
                        {program}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="flex items-center gap-2 text-sm font-semibold mb-2"
                    style={{ color: COLORS.text.dark }}
                  >
                    <MessageSquare size={14} className="text-[#F7921C]" />
                    Additional Information (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your experience, goals, or any questions you may have..."
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl text-gray-900 bg-white transition-all duration-300 focus:outline-none disabled:bg-gray-50 disabled:text-gray-600 disabled:cursor-not-allowed resize-none text-sm"
                    style={{ 
                      border: `2px solid ${COLORS.border}`,
                      borderColor: formData.message ? COLORS.primary.from : COLORS.border
                    }}
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-4 py-4 text-white rounded-xl font-semibold text-base flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed mt-2 group/btn"
                  style={{ 
                    background: `linear-gradient(135deg, ${COLORS.primary.to} 0%, ${COLORS.primary.from} 100%)`
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Submitting Application...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <Send size={16} />
                    </>
                  )}
                </motion.button>
              </form>

              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t" style={{ borderColor: COLORS.border }}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm"
                  style={{ color: COLORS.text.light }}
                >
                  <div className="flex items-center gap-2">
                    <Phone size={14} className="text-[#F7921C]" />
                    <span>Call Admissions: +91 8369496512</span>
                  </div>
                  <div className="hidden sm:block" style={{ color: COLORS.border }}>•</div>
                  <div className="flex items-center gap-2">
                    <Mail size={14} className="text-[#F7921C]" />
                    <span>Email: contact@bharatvishwasaarthi.com</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default ApplyModal;