import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Car,
  CheckCircle,
  Circle,
  MapPin,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

interface Step {
  id: number;
  title: string;
  description: string;
}

const LogisticsJourney: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const steps: Step[] = [
    {
      id: 1,
      title: "Training Registration",
      description: "Start your logistics career journey with us",
    },
    {
      id: 2,
      title: "Document Verification",
      description: "Complete your paperwork for seamless processing",
    },
    {
      id: 3,
      title: "Medical Assessment",
      description: "Health check clearance and fitness certification",
    },
    {
      id: 4,
      title: "Theory Training",
      description: "Learn logistics fundamentals and regulations",
    },
    {
      id: 5,
      title: "Practical Training",
      description: "Hands-on driving and operations experience",
    },
    {
      id: 6,
      title: "License Test",
      description: "Get your professional certification"
    },
    {
      id: 7,
      title: "Job Placement",
      description: "Connect with top logistics employers"
    },
    {
      id: 8,
      title: "Travel & Deployment",
      description: "Begin your international career journey",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) return 0;
        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [steps.length]);

  const progressPercentage = Math.round(((currentStep + 1) / steps.length) * 100);

  const getCarPosition = (stepIndex: number): string => {
    const stepWidth = 100 / steps.length;
    const stepCenter = stepIndex * stepWidth + stepWidth / 2;
    return `calc(${stepCenter}% - 24px)`;
  };

  const handleNext = (): void => {
    setCurrentStep((prev) => (prev >= steps.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = (): void => {
    setCurrentStep((prev) => (prev <= 0 ? steps.length - 1 : prev - 1));
  };

  return (
    <section className="relative py-8 md:py-10 lg:py-12" style={{ backgroundColor: '#FBFBFC' }}>

      <div className="w-full overflow-hidden">
        {/* REMOVED SCALE WRAPPER TO FIX HORIZONTAL OVERFLOW */}
        <div className="origin-top">
          <div className="w-full max-w-[1650px] mx-auto px-3 lg:px-10 relative z-10">
            {/* Header - Matching Hero's style */}
            <div className="text-center mb-6 md:mb-8">
              <div className="inline-flex items-center gap-3 px-7 py-3 bg-gradient-to-r from-[#049248]/10 to-[#F7921C]/10 rounded-full mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#049248] to-[#F7921C]" />
                <span className="text-sm font-semibold bg-gradient-to-r from-[#049248] to-[#F7921C] bg-clip-text text-transparent tracking-wide">
                  YOUR LOGISTICS CAREER JOURNEY
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3"
                style={{
                  letterSpacing: "-0.5px",
                  lineHeight: "1.1",
                }}>
                Navigate Your Path to Global Logistics Success
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
                style={{ lineHeight: "1.6" }}>
                Follow our comprehensive step-by-step process to build your international logistics career
              </p>
            </div>

            {/* Progress Indicator - Matching Hero's highlights style */}
            <div className="text-center mb-4 md:mb-6">
              <div className="inline-flex items-center gap-4 bg-white backdrop-blur-sm rounded-xl px-6 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100">
                <span className="text-gray-900 font-bold text-lg md:text-xl">
                  {progressPercentage}% Progress
                </span>
                <div className="w-px h-6 bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
                <div className="flex items-center gap-2">
                  <span className="text-gray-700 font-semibold text-base md:text-lg">
                    Step {currentStep + 1} of {steps.length}
                  </span>
                  <div className="w-8 h-6 rounded-md bg-gradient-to-r from-[#049248] to-[#F7921C] flex items-center justify-center shadow-sm">
                    <span className="text-white text-sm font-bold">
                      {currentStep + 1}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Timeline */}
            <div className="hidden lg:block relative max-w-7xl mx-auto">
              {/* Progress Bar */}
              <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  className="absolute h-full bg-gradient-to-r from-[#049248] to-[#F7921C] rounded-full shadow-lg"
                  style={{ width: `${progressPercentage}%` }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </div>

              {/* Steps Container */}
              <div className="relative flex justify-between items-start mt-14 mb-8">
                {steps.map((step, index) => (
                  <div
                    key={step.id}
                    className="flex flex-col items-center relative"
                    style={{ width: `${100 / steps.length}%` }}
                  >
                    {/* Step Indicator */}
                    <div className="relative mb-6">
                      {/* Glow Effect for Current Step */}
                      {index === currentStep && (
                        <motion.div
                          animate={{
                            opacity: [0.3, 0.6, 0.3],
                            scale: [1, 1.3, 1]
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 2,
                            ease: "easeInOut"
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-[#049248] to-[#F7921C] rounded-full blur-xl"
                        />
                      )}

                      {/* Step Circle */}
                      <div
                        className={`w-14 h-14 rounded-full flex items-center justify-center border-4 relative z-10 transition-all duration-300 ${index <= currentStep
                          ? "bg-white border-gradient-to-r from-[#049248] to-[#F7921C] shadow-lg scale-105"
                          : "bg-white border-gray-200"
                          }`}
                      >
                        {index <= currentStep ? (
                          <CheckCircle className="w-7 h-7 text-gradient-to-r from-[#049248] to-[#F7921C]" />
                        ) : (
                          <Circle className="w-7 h-7 text-gray-400" />
                        )}

                        {/* Step Number Badge */}
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-[#049248] to-[#F7921C] text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center shadow-lg">
                          {step.id}
                        </div>
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="text-center px-3">
                      <h3 className="text-base font-semibold text-brandOrange mb-1.5 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 max-w-[120px]"
                        style={{ lineHeight: "1.4" }}>
                        {step.description}
                      </p>
                    </div>

                    {/* Current Step Pin Indicator */}
                    {index === currentStep && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute -bottom-4"
                      >
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-[#049248] to-[#F7921C] rounded-full blur-sm" />
                          <MapPin className="w-6 h-6 text-gradient-to-r from-[#049248] to-[#F7921C] relative z-10" />
                        </div>
                      </motion.div>
                    )}
                  </div>
                ))}

                {/* Animated Car */}
                <motion.div
                  className="absolute top-1/2 transform -translate-y-1/2 z-30"
                  style={{ left: getCarPosition(currentStep) }}
                  animate={{
                    left: getCarPosition(currentStep),
                    rotate: currentStep % 2 === 0 ? -4 : 4,
                  }}
                  transition={{
                    left: { type: "spring", stiffness: 400, damping: 25 },
                    rotate: { duration: 0.4 },
                  }}
                >
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="relative"
                  >
                    {/* Car Shadow */}
                    <div className="absolute inset-0 bg-gray-300/40 rounded-full blur transform translate-y-3 scale-110" />

                    {/* Car Container */}
                    <div className="bg-gradient-to-r from-[#049248] to-[#F7921C] p-3 rounded-full shadow-xl relative">
                      <Car className="w-8 h-8 text-white" />

                      {/* Car Lights */}
                      <div className="absolute -left-1.5 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 bg-yellow-300 rounded-full animate-pulse" />
                      <div className="absolute -right-1.5 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 bg-yellow-300 rounded-full animate-pulse" />
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Tablet Timeline */}
            <div className="hidden md:block lg:hidden relative max-w-5xl mx-auto">
              {/* Progress Bar */}
              <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden mb-14">
                <motion.div
                  className="absolute h-full bg-gradient-to-r from-[#049248] to-[#F7921C] rounded-full shadow-lg"
                  style={{ width: `${progressPercentage}%` }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </div>

              {/* Timeline with Vertical Line */}
              <div className="relative px-8">
                {/* Vertical Background Line */}
                <div className="absolute left-8 top-0 bottom-0 w-2 bg-gray-100 rounded-full" />

                {/* Vertical Progress Line */}
                <motion.div
                  className="absolute left-8 top-0 w-2 bg-gradient-to-b from-[#049248] to-[#F7921C] rounded-full"
                  animate={{
                    height: `${(currentStep + 1) * (100 / steps.length)}%`,
                  }}
                  transition={{ duration: 0.6 }}
                  style={{ height: `${(currentStep + 1) * (100 / steps.length)}%` }}
                />

                {/* Steps List */}
                <div className="space-y-8">
                  {steps.map((step, index) => (
                    <motion.div
                      key={step.id}
                      className={`flex items-start gap-6 p-4 rounded-xl transition-all duration-300 ${index === currentStep
                        ? "bg-gradient-to-r from-[#049248]/5 to-[#F7921C]/5 scale-105 border border-gray-200"
                        : "bg-white"
                        }`}
                      whileHover={{ scale: 1.02 }}
                    >
                      {/* Step Indicator */}
                      <div className="relative">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${index <= currentStep
                            ? "bg-white border-gradient-to-r from-[#049248] to-[#F7921C] shadow-md"
                            : "bg-white border-gray-200"
                            }`}
                        >
                          {index <= currentStep ? (
                            <CheckCircle className="w-6 h-6 text-gradient-to-r from-[#049248] to-[#F7921C]" />
                          ) : (
                            <Circle className="w-6 h-6 text-gray-400" />
                          )}
                        </div>

                        {/* Step Number Badge */}
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-[#049248] to-[#F7921C] text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center shadow">
                          {step.id}
                        </div>
                      </div>

                      {/* Step Content */}
                      <div className="flex-1 pt-2">
                        <h3 className="font-semibold text-gray-900 text-base mb-1">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-sm" style={{ lineHeight: "1.5" }}>
                          {step.description}
                        </p>
                      </div>

                      {/* Current Step Indicator */}
                      {index === currentStep && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3 }}
                          className="mt-1"
                        >
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#049248] to-[#F7921C] rounded-full blur" />
                            <MapPin className="w-5 h-5 text-gradient-to-r from-[#049248] to-[#F7921C] relative z-10" />
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Car Indicator */}
                <motion.div
                  className="absolute left-8 top-0 transform -translate-x-1/2 -translate-y-1/2 z-30"
                  style={{ top: `${(currentStep + 0.5) * (100 / steps.length)}%` }}
                  animate={{
                    top: `${(currentStep + 0.5) * (100 / steps.length)}%`,
                  }}
                  transition={{
                    top: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="relative"
                  >
                    <div className="bg-gradient-to-r from-[#049248] to-[#F7921C] p-3 rounded-full shadow-lg">
                      <Car className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Navigation Controls */}
              <div className="flex justify-center items-center gap-6 mt-10">
                <motion.button
                  onClick={handlePrev}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#049248] to-[#F7921C] text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  aria-label="Previous step"
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>

                <div className="text-center">
                  <div className="text-lg font-bold bg-gradient-to-r from-[#049248] to-[#F7921C] bg-clip-text text-transparent">
                    Step {currentStep + 1}
                  </div>
                  <div className="text-sm text-gray-500">
                    of {steps.length}
                  </div>
                </div>

                <motion.button
                  onClick={handleNext}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#049248] to-[#F7921C] text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  aria-label="Next step"
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden relative">
              {/* Progress Bar */}
              <div className="relative h-2.5 bg-gray-100 rounded-full overflow-hidden mb-10">
                <motion.div
                  className="absolute h-full bg-gradient-to-r from-[#049248] to-[#F7921C] rounded-full"
                  style={{ width: `${progressPercentage}%` }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </div>

              {/* Steps List */}
              <div className="relative px-3">
                <div className="space-y-5">
                  {steps.map((step, index) => (
                    <motion.div
                      key={step.id}
                      className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${index === currentStep
                        ? "bg-gradient-to-r from-[#049248]/10 to-[#F7921C]/10 border border-gray-200 shadow-sm"
                        : "bg-white"
                        }`}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Step Indicator */}
                      <div className="relative">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center border-3 transition-all ${index <= currentStep
                            ? "bg-white border-gradient-to-r from-[#049248] to-[#F7921C]"
                            : "bg-white border-gray-200"
                            }`}
                        >
                          {index <= currentStep ? (
                            <CheckCircle className="w-5 h-5 text-gradient-to-r from-[#049248] to-[#F7921C]" />
                          ) : (
                            <Circle className="w-5 h-5 text-gray-400" />
                          )}
                        </div>

                        {/* Step Number Badge */}
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-[#049248] to-[#F7921C] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                          {step.id}
                        </div>
                      </div>

                      {/* Step Content */}
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-sm mb-0.5">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-xs" style={{ lineHeight: "1.4" }}>
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Navigation Controls */}
                <div className="flex justify-center items-center gap-4 mt-8">
                  <motion.button
                    onClick={handlePrev}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#049248] to-[#F7921C] text-white shadow hover:shadow-md transition-shadow"
                    aria-label="Previous step"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </motion.button>

                  <div className="text-center">
                    <div className="text-base font-bold bg-gradient-to-r from-[#049248] to-[#F7921C] bg-clip-text text-transparent">
                      {currentStep + 1} / {steps.length}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {steps[currentStep].title}
                    </div>
                  </div>

                  <motion.button
                    onClick={handleNext}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#049248] to-[#F7921C] text-white shadow hover:shadow-md transition-shadow"
                    aria-label="Next step"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Current Step Details - Matching Hero's button style */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mt-8 md:mt-10"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white p-6 max-w-md mx-auto border border-gray-200 shadow-lg group">
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#049248]/5 to-[#F7921C]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#049248] to-[#F7921C] flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">
                          {steps[currentStep].id}
                        </span>
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg">
                        {steps[currentStep].title}
                      </h3>
                    </div>

                    <p className="text-gray-700 text-center text-base mb-4"
                      style={{ lineHeight: "1.6" }}>
                      {steps[currentStep].description}
                    </p>

                    {/* Progress Dots - Matching Hero's slide controls */}
                    <div className="mt-5 flex justify-center gap-1.5">
                      {steps.map((_, index) => (
                        <div
                          key={index}
                          className={`h-2 rounded-full transition-all duration-300 ${index === currentStep
                            ? "bg-gradient-to-r from-[#049248] to-[#F7921C] w-6 shadow-[0_0_8px_rgba(247,146,28,0.4)]"
                            : index < currentStep
                              ? "bg-gradient-to-r from-[#049248]/70 to-[#F7921C]/70 w-3"
                              : "bg-gray-300 w-2"
                            }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Bottom gradient bar - Matching Hero's highlights */}
                  <span className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-[#049248] to-[#F7921C] opacity-80" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>   {/* container close */}
        </div>     {/* origin-top close */}
      </div>       {/* overflow-hidden wrapper close */}
    </section>

  );
};

export default LogisticsJourney;