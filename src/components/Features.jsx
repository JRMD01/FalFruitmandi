/* src/components/Features.jsx */
import { useEffect, useRef, useState } from 'react';

const features = [
  {
    icon: "eco",
    title: "100% Organic",
    backTitle: "Farm Pure",
    backDesc: "Our commitment starts at the root. We only source what we'd feed our families.",
    mobileBg: "bg-emerald-50/90",
    mobileBorder: "border-emerald-200",
    mobileIconColor: "text-emerald-700",
    bgImage: "/hundered_percent_organic.jpg",
    backBgColor: "bg-emerald-50", 
    backTextColor: "text-emerald-950",
    backTitleColor: "text-emerald-700",
    backBorderColor: "border-emerald-200/50"
  },
  {
    icon: "payments",
    title: "Mandi Pricing",
    backTitle: "Value Driven",
    backDesc: "Direct sourcing means no middleman markups, just fair prices for all.",
    mobileBg: "bg-amber-50/90",
    mobileBorder: "border-amber-200",
    mobileIconColor: "text-amber-700",
    bgImage: "/wholesale.png",
    backBgColor: "bg-amber-50",
    backTextColor: "text-amber-950",
    backTitleColor: "text-amber-700",
    backBorderColor: "border-amber-200/50"
  },
  {
    icon: "verified_user",
    title: "Trust Purity",
    backTitle: "Reliability",
    backDesc: "Building long-term partnerships through consistent quality delivery.",
    mobileBg: "bg-sky-50/90",
    mobileBorder: "border-sky-200",
    mobileIconColor: "text-sky-700",
    bgImage: "/certified_purity.png",
    backBgColor: "bg-sky-50",
    backTextColor: "text-sky-950",
    backTitleColor: "text-sky-700",
    backBorderColor: "border-sky-200/50"
  },
  {
    icon: "local_shipping",
    title: "Daily Supply",
    backTitle: "Fastest Logistics",
    backDesc: "Our supply chain never sleeps to keep your business running fresh.",
    mobileBg: "bg-orange-50/90",
    mobileBorder: "border-orange-200",
    mobileIconColor: "text-orange-700",
    bgImage: "/daily_logistics.png",
    backBgColor: "bg-orange-50",
    backTextColor: "text-orange-950",
    backTitleColor: "text-orange-700",
    backBorderColor: "border-orange-200/50"
  }
];

export default function Features() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const windowObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) windowObserver.observe(sectionRef.current);
    return () => windowObserver.disconnect();
  }, []);

  return (
    <section 
      className="py-24 px-6 overflow-hidden max-w-[1440px] mx-auto" 
      id="features"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Title Viewport Transition */}
        <div className={`mb-14 text-center md:text-left transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <h2 className="font-serif text-4xl md:text-6xl mb-3 text-[#1b4332] italic">Why Choose Us</h2>
          <div className="h-1 w-20 bg-[#95d5b2] rounded-full mx-auto md:mx-0" />
        </div>
        
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-sm sm:max-w-none mx-auto">
          {features.map((f, i) => (
            <div 
              key={i} 
              className={`w-full transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              } group sm:[perspective:1000px] h-auto sm:h-[280px] cursor-pointer`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Desktop-only 3D Card wrapper wrapper. Completely bypassed on mobile viewports */}
              <div className="relative w-full h-full sm:[transform-style:preserve-3d] sm:group-hover:[transform:rotateY(180deg)] transition-transform duration-700">
                
                {/* MOBILE VIEW: Side-by-Side stacked card layouts / DESKTOP VIEW: Pure Front Face */}
                <div className={`flex flex-col max-sm:${f.mobileBg} max-sm:${f.mobileBorder} max-sm:p-5 bg-white glass rounded-organic sm:absolute sm:inset-0 sm:p-4 sm:items-center sm:justify-center border border-white/50 sm:[backface-visibility:hidden] overflow-hidden`}>
                  
                  {/* Image Frame - Scaled perfectly inside container padding parameters */}
                  <div className="w-full h-[140px] sm:h-full p-2 flex items-center justify-center select-none pointer-events-none shrink-0">
                    <img 
                      src={f.bgImage} 
                      alt={f.title}
                      className="w-full h-full max-h-full max-w-full object-contain"
                    />
                  </div>

                  {/* Mobile-Only Content Area: Safely exposed outside the image block with clean matching palette identities */}
                  <div className="sm:hidden w-full mt-4 pt-4 border-t border-stone-200/40 text-center">
                    <h3 className={`font-serif text-lg font-bold mb-1.5 ${f.backTitleColor} italic`}>
                      {f.backTitle}
                    </h3>
                    <p className={`text-xs font-medium tracking-wide leading-relaxed ${f.backTextColor} opacity-90`}>
                      {f.backDesc}
                    </p>
                  </div>

                </div>

                {/* DESKTOP ONLY: Rear Face Card Layer */}
                <div className={`hidden sm:flex absolute inset-0 ${f.backBgColor} ${f.backTextColor} rounded-organic p-6 flex-col justify-center text-center border ${f.backBorderColor} [transform:rotateY(180deg)] [backface-visibility:hidden]`}>
                  <div className="w-full h-full flex flex-col justify-center items-center">
                    <h3 className={`font-serif text-xl font-bold mb-2 ${f.backTitleColor} italic border-b border-stone-200/40 pb-1 w-max mx-auto`}>
                      {f.backTitle}
                    </h3>
                    <p className="text-xs font-medium tracking-wide leading-relaxed max-w-[90%] opacity-90">
                      {f.backDesc}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}