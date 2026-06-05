/* src/components/Features.jsx */
import { useEffect, useRef, useState } from 'react';

const features = [
  {
    icon: "eco",
    title: "100% Organic",
    desc: "Certified chemical-free produce from natural farms.",
    backTitle: "Farm Pure",
    backDesc: "Our commitment starts at the root. We only source what we'd feed our families.",
    mobileBg: "bg-emerald-50/90",
    mobileBorder: "border-emerald-200",
    mobileIconColor: "text-emerald-700"
  },
  {
    icon: "payments",
    title: "Mandi Pricing",
    desc: "Transparent wholesale rates updated daily.",
    backTitle: "Value Driven",
    backDesc: "Direct sourcing means no middleman markups, just fair prices for all.",
    mobileBg: "bg-amber-50/90",
    mobileBorder: "border-amber-200",
    mobileIconColor: "text-amber-700"
  },
  {
    icon: "verified_user",
    title: "Trust Purity",
    desc: "Decades of reliability in the supply chain.",
    backTitle: "Reliability",
    backDesc: "Building long-term partnerships through consistent quality delivery.",
    mobileBg: "bg-sky-50/90",
    mobileBorder: "border-sky-200",
    mobileIconColor: "text-sky-700"
  },
  {
    icon: "local_shipping",
    title: "Daily Supply",
    desc: "Ensuring 24/7 availability of core items.",
    backTitle: "Fastest Logistics",
    backDesc: "Our supply chain never sleeps to keep your business running fresh.",
    mobileBg: "bg-orange-50/90",
    mobileBorder: "border-orange-200",
    mobileIconColor: "text-orange-700"
  }
];

export default function Features() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
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
        
        {/* Cascade Matrix Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-sm sm:max-w-none mx-auto">
          {features.map((f, i) => (
            <div 
              key={i} 
              className={`group [perspective:1000px] h-[200px] sm:h-[260px] w-full cursor-pointer transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* Front Side */}
                <div className={`absolute inset-0 max-sm:${f.mobileBg} max-sm:${f.mobileBorder} sm:bg-white/80 glass rounded-organic p-5 sm:p-6 flex flex-col justify-between shadow-sm border border-white/50 [backface-visibility:hidden] transition-all duration-300 group-hover:border-[#2d6a4f]/40 group-hover:shadow-md`}>
                  <span className={`material-symbols-outlined max-sm:${f.mobileIconColor} sm:text-[#1b4332] text-4xl transition-transform duration-300 group-hover:scale-110`}>
                    {f.icon}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1b4332] mb-0.5 sm:mb-1">{f.title}</h3>
                    <p className="text-xs opacity-75 font-medium leading-snug text-stone-800">{f.desc}</p>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 bg-[#1b4332] text-white rounded-organic p-5 sm:p-6 flex flex-col justify-center text-center border border-white/10 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <h3 className="font-serif text-lg sm:text-xl mb-1 sm:mb-2 text-[#95d5b2] italic border-b border-[#95d5b2]/20 pb-1 w-max mx-auto">{f.backTitle}</h3>
                  <p className="text-xs italic tracking-wide text-stone-200 leading-relaxed">{f.backDesc}</p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}