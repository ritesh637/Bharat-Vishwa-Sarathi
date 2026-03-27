import React from "react";
import {
  Building2,
  Globe,
  ShieldCheck,
  Award,
  Briefcase,
  Truck,
  LucideIcon,
} from "lucide-react";

interface Partner {
  id: number;
  name: string;
  icon: LucideIcon; // ✅ store component
}

const partners: Partner[] = [
  { id: 1, name: "Global Logistics", icon: Globe },
  { id: 2, name: "Safe Drive Corp", icon: ShieldCheck },
  { id: 3, name: "Transport Masters", icon: Truck },
  { id: 4, name: "City Cab Services", icon: Building2 },
  { id: 5, name: "Elite Driving", icon: Award },
  { id: 6, name: "Career Wheels", icon: Briefcase },
  { id: 7, name: "Speedy Cargo", icon: Truck },
  { id: 8, name: "Urban Transit", icon: Building2 },
];

const Partners: React.FC = () => {
  return (
    <section className="pt-6 sm:pt-8 pb-12 sm:pb-16 bg-[#FBFBFC] overflow-hidden">
      <div className="container max-w-[1400px] mx-auto px-3">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-6">
            <div
              className="inline-flex items-center gap-3 px-9 py-3.5 rounded-full
      bg-gradient-to-r from-[#E8F7EE] via-[#FFF6EA] to-[#FFF2E2]
      shadow-[0_8px_30px_rgba(0,0,0,0.06)]
      backdrop-blur-xl border border-white/40"
            >
              <span className="w-3 h-3 rounded-full bg-gradient-to-r from-[#049248] to-[#827464]" />
              <span
                className="text-sm font-semibold tracking-wide
        bg-gradient-to-r from-[#049248] to-[#F7921C]
        bg-clip-text text-transparent"
              >
                OUR PARTNERS
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1C2D] leading-tight">
            Companies That Hire Our Candidates
          </h2>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden group">
          <div className="animate-logo-marquee whitespace-nowrap gap-6 sm:gap-8 md:gap-12 py-4">
            {[...partners, ...partners].map((partner, index) => {
              const Icon = partner.icon;

              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-3
                text-gray-400 hover:text-[#F7921C] transition-colors cursor-pointer
                min-w-[100px] sm:min-w-[140px] md:min-w-[150px] flex-shrink-0"
                >
                  <div className="p-3 sm:p-4 bg-secondary/30 rounded-full">
                    <Icon className="h-8 w-8 sm:h-10 sm:w-10" />
                  </div>

                  <span className="font-semibold text-sm sm:text-base md:text-lg text-center px-1">
                    {partner.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
