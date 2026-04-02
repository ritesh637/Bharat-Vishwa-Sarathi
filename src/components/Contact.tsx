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

        {/* Contact Form Section */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#F7921C] to-[#069247] px-8 py-6">
              <h2 className="text-2xl font-bold text-white mb-2">Quick Contact Form</h2>
              <p className="text-white/90">Get in touch with us for enquiries or support</p>
            </div>

            <div className="p-8">
              {error && (
                <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
                  <p className="text-red-700">{error}</p>
                </div>
              )}

              {submitStatus && (
                <div className={`mb-6 p-4 rounded-lg ${
                  submitStatus.type === "success"
                    ? "bg-green-50 border-l-4 border-green-500"
                    : "bg-red-50 border-l-4 border-red-500"
                }`}>
                  <p className={submitStatus.type === "success" ? "text-green-700" : "text-red-700"}>
                    {submitStatus.message}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1 - Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7921C] focus:border-[#F7921C] outline-none transition-all duration-200 disabled:bg-gray-100"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7921C] focus:border-[#F7921C] outline-none transition-all duration-200 disabled:bg-gray-100"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                {/* Row 2 - Phone and Program */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7921C] focus:border-[#F7921C] outline-none transition-all duration-200 disabled:bg-gray-100"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Program *
                    </label>
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7921C] focus:border-[#F7921C] outline-none transition-all duration-200 disabled:bg-gray-100 bg-white"
                    >
                      <option value="">Choose a program</option>
                      <option value="Basic Driver Training">Basic Driver Training</option>
                      <option value="Advanced Driver Training">Advanced Driver Training</option>
                      <option value="International Certification">International Certification</option>
                      <option value="ADR Certification">ADR Certification</option>
                    </select>
                  </div>
                </div>

                {/* Row 3 - Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7921C] focus:border-[#F7921C] outline-none transition-all duration-200 resize-none disabled:bg-gray-100"
                    placeholder="Tell us about your goals or questions..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#F7921C] to-[#069247] text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
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
    </div>
  );
}