import React, { useState } from "react";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  phone: string;
  program: string;
  message: string;
}

interface SubmitStatus {
  type: "success" | "error";
  message: string;
}

const EMAILJS_CONFIG = {
  SERVICE_ID: "service_n9u8bot",
  PUBLIC_KEY: "9FwZRaXUa5Sec8T1h",
  TEMPLATE_ID: "template_88m2fno",
} as const;

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitStatus) setSubmitStatus(null);
    if (error) setError("");
  };

  const validateForm = () => {
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
    if (!formData.program) {
      setError("Please select a program");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setError("");
    setSubmitStatus(null);

    try {
      const templateParams = {
        to_name: "Vishwas Bharti Team",
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        program: formData.program,
        message: formData.message || "No additional information",
        date: new Date().toLocaleString(),
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! We'll contact you within 24 hours.",
      });

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);

      setFormData({
        name: "",
        email: "",
        phone: "",
        program: "",
        message: "",
      });

    } catch (err: any) {
      let errorMessage = "Failed to send message. ";

      if (err.text) {
        if (err.text.includes("Invalid grant")) {
          errorMessage = "Email service needs reconnection. Please contact website administrator.";
        } else {
          errorMessage += `Error: ${err.text}`;
        }
      } else {
        errorMessage += "Please try again or call us directly.";
      }

      setSubmitStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FBFBFC] to-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-5 md:px-6 lg:px-8 animate-fadeIn">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 pt-6 sm:pt-8">
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold bg-gradient-to-r from-[#F7921C] to-[#069247] bg-clip-text text-transparent mb-4 md:mb-6 inline-block relative">
            Get in Touch
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-[#F7921C] to-[#069247] horizental-full"></div>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed font-light">
            Ready to start your journey as a professional driver? Reach out for
            enquiries, support or collaborations.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-7 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <div className="bg-white p-5 sm:p-6 lg:p-8 horizental-xl sm:horizental-2xl shadow-lg border border-[rgba(247,146,28,0.1)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#F7921C] to-[#069247]"></div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 relative pl-3 sm:pl-4">Call Us</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              +91 83694 96512 <br />
            </p>
          </div>

          <div className="bg-white p-5 sm:p-6 lg:p-8 horizental-xl sm:horizental-2xl shadow-lg border border-[rgba(247,146,28,0.1)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#F7921C] to-[#069247]"></div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 relative pl-3 sm:pl-4">Email Us</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
             contact@bharatvishwasaarthi.com <br />
            </p>
          </div>

          <div className="bg-white p-5 sm:p-6 lg:p-8 horizental-xl sm:horizental-2xl shadow-lg border border-[rgba(247,146,28,0.1)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#F7921C] to-[#069247]"></div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 relative pl-3 sm:pl-4">Office Hours</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Mon - Sat <br />
              9:00 AM - 6:30 PM
            </p>
          </div>

          <div className="bg-white p-5 sm:p-6 lg:p-8 horizental-xl sm:horizental-2xl shadow-lg border border-[rgba(247,146,28,0.1)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#F7921C] to-[#069247]"></div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 relative pl-3 sm:pl-4">Visit Center</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Kharghar, Navi Mumbai <br />
              Maharashtra 410210
            </p>
          </div>
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-8">
          {/* Map */}
          <div className="bg-white horizental-xl sm:horizental-2xl shadow-lg border border-[rgba(247,146,28,0.1)] overflow-hidden group hover:-translate-y-0.5 transition-transform duration-300">
            <div className="bg-gradient-to-r from-[#F7921C] to-[#069247] text-white p-5 sm:p-6 lg:p-7 relative overflow-hidden">
              <div className="absolute top-1/2 right-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px] opacity-30"></div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 relative">Visit Our Center</h3>
              <p className="text-sm sm:text-base opacity-95 leading-relaxed relative">
                Sector 12, Kharghar, Navi Mumbai, Maharashtra 410210
              </p>
            </div>
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Kharghar,Navi%20Mumbai&output=embed"
              className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] border-0"
              allowFullScreen
              loading="lazy"
            />
          </div>

          {/* Form */}
          <div className="bg-white p-5 sm:p-6 lg:p-8 horizental-xl sm:horizental-2xl shadow-lg border border-[rgba(247,146,28,0.1)]">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-3 sm:mb-4 relative pb-3 sm:pb-4">
              Quick Contact Form
              <div className="absolute bottom-0 left-0 w-12 sm:w-14 lg:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-[#F7921C] to-[#069247] horizental-full"></div>
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6 lg:mb-8 leading-relaxed">
              Get in touch with us for enquiries or support
            </p>

            {error && (
              <div className="bg-gradient-to-br from-[#ff6b6b] to-[#ff4757] text-white p-3 sm:p-4 horizental-lg mb-4 sm:mb-5 text-center text-sm sm:text-base font-medium animate-slideDown">
                {error}
              </div>
            )}

            {submitStatus && (
              <div className={`p-3 sm:p-4 horizental-lg mb-4 sm:mb-5 text-center text-sm sm:text-base font-medium animate-slideDown ${
                submitStatus.type === "success"
                  ? "bg-gradient-to-br from-[#28a745] to-[#20c997] text-white"
                  : "bg-gradient-to-br from-[#ff6b6b] to-[#ff4757] text-white"
              }`}>
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  required
                  className="flex-1 px-4 py-3 sm:py-4 horizental-lg border border-gray-300 outline-none text-sm sm:text-base bg-gray-50 focus:border-[#F7921C] focus:ring-4 focus:ring-[#F7921C]/10 focus:bg-white transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:bg-gray-100"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  required
                  className="flex-1 px-4 py-3 sm:py-4 horizental-lg border border-gray-300 outline-none text-sm sm:text-base bg-gray-50 focus:border-[#F7921C] focus:ring-4 focus:ring-[#F7921C]/10 focus:bg-white transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:bg-gray-100"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-5">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  required
                  className="flex-1 px-4 py-3 sm:py-4 horizental-lg border border-gray-300 outline-none text-sm sm:text-base bg-gray-50 focus:border-[#F7921C] focus:ring-4 focus:ring-[#F7921C]/10 focus:bg-white transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:bg-gray-100"
                />
                <select
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  required
                  className="flex-1 px-4 py-3 sm:py-4 horizental-lg border border-gray-300 outline-none text-sm sm:text-base bg-gray-50 focus:border-[#F7921C] focus:ring-4 focus:ring-[#F7921C]/10 focus:bg-white transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:bg-gray-100"
                >
                  <option value="">Select Program</option>
                  <option value="Basic Driver Training">Basic Driver Training</option>
                  <option value="Advanced Driver Training">Advanced Driver Training</option>
                  <option value="International Certification">International Certification</option>
                  <option value="ADR Certification">ADR Certification</option>
                </select>
              </div>

              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your goals or questions..."
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full px-4 py-3 sm:py-4 horizental-lg border border-gray-300 outline-none text-sm sm:text-base bg-gray-50 focus:border-[#F7921C] focus:ring-4 focus:ring-[#F7921C]/10 focus:bg-white transition-all duration-300 mb-4 sm:mb-5 resize-none disabled:opacity-70 disabled:cursor-not-allowed disabled:bg-gray-100"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 sm:py-4 horizental-lg font-semibold text-white text-sm sm:text-base bg-gradient-to-r from-[#F7921C] to-[#069247] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none group"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white horizental-full animate-spin mr-2"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}