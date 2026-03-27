import React from 'react'
import { motion } from 'framer-motion'
import { User, Briefcase, CheckCircle } from 'lucide-react'

interface CandidateType {
  type: string
  icon: React.ReactNode
  experience: string
  features: string[]
  duration: string
  programName: string
}

interface CandidateTypesProps {
  onProgramSelect?: (programName: string) => void
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
} as const

const CandidateTypes: React.FC<CandidateTypesProps> = ({ onProgramSelect }) => {
  const candidateTypes: CandidateType[] = [
    {
      type: "Fresher",
      icon: <User size={26} />,
      experience: "< 2 years Experience",
      features: [
        "2-year comprehensive training",
        "₹25,000/month stipend",
        "Language & soft skills training",
        "Complete placement assistance"
      ],
      duration: "24 Months Program",
      programName: "24 Months Program"
    },
    {
      type: "Experienced",
      icon: <Briefcase size={26} />,
      experience: "> 2 years Experience",
      features: [
        "6-month accelerated training",
        "Advanced certification",
        "Higher salary packages",
        "Fast-track deployment"
      ],
      duration: "6 Months Program",
      programName: "6 Months Program"
    }
  ]

  const handleApplyClick = (programName: string) => {
    if (onProgramSelect) {
      onProgramSelect(programName);
    } else {
      // Fallback if used standalone - scroll to enroll section
      const enrollSection = document.getElementById('enroll-section');
      if (enrollSection) {
        enrollSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  return (
    <section className="pt-10 pb-24" style={{ backgroundColor: COLORS.background }} id="candidate-types">
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
              CHOOSE YOUR CAREER PATH
            </span>
          </div>
          
          <h1 
            className="text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: COLORS.text.dark }}
          >
            Tailored Programs for Every Driver
          </h1>
          <p 
            className="text-lg sm:text-xl max-w-3xl mx-auto"
            style={{ color: COLORS.text.light }}
          >
            Select the program that matches your experience level for international deployment
          </p>
        </motion.div>

        {/* Candidate Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {candidateTypes.map((candidate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative overflow-hidden rounded-2xl bg-white p-8
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
                {/* Card Header */}
                <div className="flex items-start gap-6 mb-8">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center
                            transition-all duration-300 group-hover:scale-110"
                    style={{ 
                      backgroundColor: 'white',
                      border: `2px solid rgba(${parseInt(COLORS.primary.from.slice(1, 3), 16)}, ${parseInt(COLORS.primary.from.slice(3, 5), 16)}, ${parseInt(COLORS.primary.from.slice(5, 7), 16)}, 0.2)`,
                      color: COLORS.icon.default
                    }}
                  >
                    {candidate.icon}
                  </div>
                  <div className="flex-1">
                    <h3 
                      className="text-2xl font-bold mb-2 transition-colors duration-300 group-hover:text-white"
                      style={{ color: COLORS.text.dark }}
                    >
                      {candidate.type}
                    </h3>
                    <p 
                      className="text-base transition-colors duration-300 group-hover:text-white"
                      style={{ color: COLORS.text.light }}
                    >
                      {candidate.experience}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {candidate.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 + index * 0.1 }}
                      className="flex items-start gap-4 transition-colors duration-300 group-hover:text-white"
                    >
                      <CheckCircle 
                        size={20} 
                        className="flex-shrink-0 mt-0.5 transition-colors duration-300 group-hover:text-white"
                        style={{ color: COLORS.icon.default }}
                      />
                      <span 
                        className="text-base font-medium flex-1 leading-normal transition-colors duration-300 group-hover:text-white"
                        style={{ color: COLORS.text.dark }}
                      >
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Footer */}
                <div className="pt-6 border-t" style={{ borderColor: 'rgba(229, 231, 235, 0.5)' }}>
                  <div className="flex justify-between items-center">
                    <div>
                      <span 
                        className="font-bold text-lg block transition-colors duration-300 group-hover:text-white"
                        style={{ color: COLORS.primary.to }}
                      >
                        {candidate.duration}
                      </span>
                    </div>
                    <button
                      onClick={() => handleApplyClick(candidate.programName)}
                      className="px-8 py-3 text-white text-base font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                      style={{ 
                        background: 'white',
                        color: COLORS.primary.to
                      }}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Note */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 text-center"
        >
          <div 
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
            style={{ 
              background: `linear-gradient(90deg, ${COLORS.badge.background} 0%, rgba(247, 146, 28, 0.1) 100%)`,
              border: `1px solid rgba(${parseInt(COLORS.primary.from.slice(1, 3), 16)}, ${parseInt(COLORS.primary.from.slice(3, 5), 16)}, ${parseInt(COLORS.primary.from.slice(5, 7), 16)}, 0.2)`
            }}
          >
            <div 
              className="w-3 h-3 rounded-full animate-pulse flex-shrink-0"
              style={{ 
                background: `linear-gradient(90deg, ${COLORS.primary.from} 0%, ${COLORS.primary.to} 100%)`
              }}
            />
            <p 
              className="text-sm font-medium text-center transition-colors duration-300"
              style={{ color: COLORS.text.dark }}
            >
              Both programs lead to international deployment with premium companies
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CandidateTypes