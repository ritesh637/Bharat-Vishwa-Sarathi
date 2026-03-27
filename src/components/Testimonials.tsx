import { useRef } from "react";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 7,
    name: "Sandeep Yadav",
    role: "LMV Driver - Pune",
    content:
      "Before joining the training, I was nervous about driving in city traffic. The instructors here made me confident with step-by-step practical sessions. Now I drive comfortably every day.",
  },
  {
    id: 8,
    name: "Neha Patil",
    role: "First-Time Car Learner",
    content:
      "I had zero driving experience, but the trainers were very patient and supportive. Their teaching style is very easy to understand for beginners like me.",
  },
  {
    id: 9,
    name: "Rohit Sharma",
    role: "Cab Driver - Mumbai",
    content:
      "This training helped me improve my road sense and safety awareness. It directly helped me get a job as a professional cab driver in Mumbai.",
  },
  {
    id: 10,
    name: "Pooja Verma",
    role: "Working Professional",
    content:
      "Flexible timings were the best part for me. I could attend classes after office hours and learn driving without disturbing my work schedule.",
  },
  {
    id: 11,
    name: "Manoj Tiwari",
    role: "Delivery Driver",
    content:
      "The practical road training and traffic rule guidance helped me a lot in my daily delivery job. I feel much more confident on highways now.",
  },
  {
    id: 12,
    name: "Kavita Joshi",
    role: "Homemaker",
    content:
      "Learning driving was my dream for many years. The instructors were very polite and encouraging. Now I can drive my family car independently.",
  },
  {
    id: 13,
    name: "Imran Shaikh",
    role: "Auto Driver to Car Driver",
    content:
      "I shifted from auto driving to car driving after this training. The guidance and support from trainers made this transition very easy for me.",
  },
  {
    id: 14,
    name: "Ajay Kulkarni",
    role: "College Student",
    content:
      "I joined during my college vacation. The training was very professional and helped me learn driving quickly with proper road discipline.",
  },
  {
    id: 15,
    name: "Sunita Reddy",
    role: "School Teacher",
    content:
      "The instructors focus a lot on safety and confidence. I now feel comfortable driving my car to school every day without fear.",
  },
  {
    id: 16,
    name: "Deepak Chauhan",
    role: "Private Company Driver",
    content:
      "The advanced driving techniques and real road practice improved my skills a lot. It helped me secure a better driving job in a private company.",
  },
];

const Testimonials = () => {
  // Auto-slide plugin configuration
  const autoplayPlugin = useRef(
    Autoplay({
      delay: 4000, // 4 seconds delay between slides
      stopOnInteraction: false, // Continue autoplay after user interaction
      stopOnMouseEnter: true, // Pause when user hovers over carousel
    }),
  );

  return (
    <section className="py-16 lg:py-20 bg-[#FBFBFC]">
      <div className="w-full max-w-[1400px] mx-auto px-3 lg:px-14 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          {/* Gradient Badge Header */}
          <div className="inline-flex items-center gap-3 px-7 py-3 bg-gradient-to-r from-[#049248]/10 to-[#F7921C]/10 rounded-full mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F7921C]" />
            <span className="text-sm font-semibold bg-gradient-to-r from-[#049248] to-[#F7921C] bg-clip-text text-transparent tracking-wide">
              OUR TESTIMONIALS
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1C2D] leading-tight">
            What Our Drivers Say
          </h2>

          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Hear from our trained drivers about their international driving
            career experiences
          </p>
        </motion.div>

        <div className="relative group">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[autoplayPlugin.current]}
            className="relative"
            onMouseEnter={autoplayPlugin.current.stop}
            onMouseLeave={autoplayPlugin.current.reset}
          >
            <CarouselContent>
              {testimonials.map((t) => (
                <CarouselItem
                  key={t.id}
                  className="md:basis-1/2 lg:basis-1/3 pl-4"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className="border-4 border-[#139245] rounded-2xl p-6 h-[280px] flex flex-col bg-white hover:shadow-xl transition-all duration-300 hover:border-[#e68314]"
                  >
                    <h3 className="text-xl font-bold text-gray-900">
                      {t.name}
                    </h3>
                    <p className="text-sm text-gray-500">{t.role}</p>
                    <p className="text-sm font-medium text-[#F7921C] mb-3">
                      International Driving Training Program
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed flex-grow">
                      {t.content}
                    </p>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CarouselNext className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Carousel>

          {/* Auto-play indicator */}
          <div className="flex justify-center mt-6">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#F7921C] rounded-full animate-pulse mx-1"></div>
                <div
                  className="w-2 h-2 bg-[#F7921C] rounded-full animate-pulse mx-1"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-[#F7921C] rounded-full animate-pulse mx-1"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
