import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2, CheckCircle2, Phone, User, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";
import supportAvatar from "../assets/hero/support-avatar.png";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const EMAILJS_CONFIG = {
  SERVICE_ID: "service_n9u8bot",
  PUBLIC_KEY: "9FwZRaXUa5Sec8T1h",
   TEMPLATE_ID: "template_88m2fno",
} as const;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const COLORS = {
  primary: '#049248',
  accent: '#F7921C',
  white: '#FFFFFF',
  surface: '#FFFFFF',
  border: '#E5E7EB',
  title: '#111827',
  description: '#4B5563',
  lightGreen: '#EAF6EF'
};
const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.innerWidth > 768) {
        // setIsOpen(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const validateForm = (): boolean => {
    if (!formState.name.trim()) {
      setError("Please enter your name");
      return false;
    }
    if (!formState.email.trim()) {
      setError("Please enter your email");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formState.email)) {
      setError("Please enter a valid email address");
      return false;
    }
    if (!formState.phone.trim()) {
      setError("Please enter your phone number");
      return false;
    }
    if (!/^\d{10,}$/.test(formState.phone.replace(/\D/g, ""))) {
      setError("Please enter a valid phone number (at least 10 digits)");
      return false;
    }
    if (!formState.message.trim()) {
      setError("Please enter your message");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSending(true);
    setError("");

    try {
      const templateParams = {
        to_name: "Support Team",
        from_name: formState.name,
        from_email: formState.email,
        phone: formState.phone,
        program: "Chat Widget Inquiry",
        message: formState.message,
        date: new Date().toLocaleString("en-IN", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
        source: "Website Chat Widget",
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setIsSending(false);
      setIsSent(true);
      setFormState({ name: "", email: "", phone: "", message: "" });

      setTimeout(() => {
        setIsSent(false);
        setIsOpen(false);
      }, 6000);
    } catch (err: any) {
      setError(err?.text || err?.message || "Failed to send message.");
      setIsSending(false);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
    if (error) setError("");
  };

  return (
    <>
      {/* Trigger Button */}
      <div className="fixed bottom-6 left-6 right-6 sm:left-auto sm:right-6 z-50 flex flex-col items-end">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: 1.5 }}
              className="mb-3"
            >
              <div className="rounded-lg bg-white px-4 py-2.5 shadow-lg ring-1 ring-gray-100">
                <p className="text-sm font-medium text-[#0D0849]">
                  How can I help? 👋
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#049248] to-[#F7921C] shadow-lg ring-2 ring-white"
          aria-label="Toggle chat"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
              >
                <X className="h-6 w-6 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <img
                  src={supportAvatar}
                  alt="Support"
                  className="h-full w-full object-cover rounded-full"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed bottom-24 left-6 right-6 sm:left-auto sm:right-6 z-40 max-w-sm overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-gray-100"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#049248] to-[#F7921C] px-5 py-4">
              <div className="flex items-start gap-3 pt-4">
                <div className="relative">
                  <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-white">
                    <img
                      src={supportAvatar}
                      alt="Support"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Support Team</h3>
                  <div className="flex items-center gap-1.5 text-xs text-white/90">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-300" />
                    Online • Responds quickly
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="max-h-[60vh] overflow-y-auto p-5">
              {isSent ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-8 text-center"
                >
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="mb-2 text-lg font-semibold text-gray-900">
                    Message Sent!
                  </h4>
                  <p className="mb-6 text-sm text-gray-600">
                    We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg bg-gradient-to-r from-[#049248] to-[#F7921C] px-6 py-2.5 text-sm font-medium text-white"
                  >
                    Close Chat
                  </button>
                </motion.div>
              ) : (
                <>
                  {/* Welcome Message */}
                  <div className="mb-6">
                    <div className="mb-3 flex items-start gap-3">
                      <div className="h-8 w-8 overflow-hidden rounded-full">
                        <img
                          src={supportAvatar}
                          alt="AI Support"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="rounded-lg rounded-tl-none bg-gray-50 px-4 py-3">
                        <p className="text-sm text-gray-700">
                          Hi there! 👋 How can we help you today?
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-3">
                      <div className="relative">
                        <User className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formState.name}
                          onChange={handleChange}
                          disabled={isSending}
                          className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-10 pr-3 text-sm placeholder:text-gray-400 focus:border-[#049248] focus:outline-none focus:ring-1 focus:ring-[#049248]"
                        />
                      </div>

                      <div className="relative">
                        <Mail className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          value={formState.email}
                          onChange={handleChange}
                          disabled={isSending}
                          className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-10 pr-3 text-sm placeholder:text-gray-400 focus:border-[#049248] focus:outline-none focus:ring-1 focus:ring-[#049248]"
                        />
                      </div>

                      <div className="relative">
                        <Phone className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number"
                          value={formState.phone}
                          onChange={handleChange}
                          disabled={isSending}
                          className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-10 pr-3 text-sm placeholder:text-gray-400 focus:border-[#049248] focus:outline-none focus:ring-1 focus:ring-[#049248]"
                        />
                      </div>

                      <textarea
                        name="message"
                        placeholder="Your message..."
                        rows={3}
                        value={formState.message}
                        onChange={handleChange}
                        disabled={isSending}
                        className="w-full rounded-lg border border-gray-200 bg-white p-3 text-sm placeholder:text-gray-400 focus:border-[#049248] focus:outline-none focus:ring-1 focus:ring-[#049248]"
                      />
                    </div>

                    {error && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="rounded-lg bg-red-50 p-3 text-sm text-red-600"
                      >
                        {error}
                      </motion.div>
                    )}

                    <button
                      type="submit"
                      disabled={isSending}
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#049248] to-[#F7921C] py-3 text-sm font-medium text-white disabled:opacity-70"
                    >
                      {isSending ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-gray-500">
                      By sending, you agree to our privacy policy.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;