/* src/components/Offerings.jsx */
import { useEffect, useRef, useState } from 'react';
import { Smartphone, Home } from 'lucide-react';

export default function Offerings() {
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
      id="offerings" 
      ref={sectionRef}
      className="py-32 px-6 lg:px-16 bg-[#f3f4ec] border-y border-stone-200 max-w-[1440px] mx-auto overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header Animation Track */}
        <div className={`mb-20 text-center transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translateY-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="font-bold text-emerald-800 text-sm tracking-widest uppercase mb-4 block">What we do</span>
          <h2 className="font-serif text-5xl md:text-7xl text-[#1b4332] italic">Our Core Pipelines</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Main Visual Commercial Block */}
          <div className={`lg:col-span-8 group relative rounded-[24px] overflow-hidden shadow-2xl h-[500px] border border-stone-200 transition-all duration-1000 delay-200 transform ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <img 
              alt="Wholesale Fruit Crate" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida/AP1WRLszvENctuy8q11fTKAgvjnZDtZAUuhYjFSzTe7aqL5thu4aZ-eDtsqFusu_yDpzSPkne_l_WmaWw99t0gQm4KxFfW8qUqAuZWWTt3_trBjRBTQFzwzKl1nCEmtxkH9Ak-uowTkdGC6sFj2ogzxeSP0VqaJO08sE9c5kNsyINOT-8uO-vpRV3SWAoMTk6CmMq0kn3C5l9J-OVlncZG1-0rKApxDo01mvSNhIsqQEFBMCGxjrHus3ABYq3Yey"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b4332] via-[#1b4332]/40 to-transparent flex flex-col justify-end p-8 sm:p-12">
              <h3 className="font-serif text-5xl md:text-6xl text-white italic mb-4">Wholesale Supply</h3>
              <p className="text-white/80 max-w-md text-sm font-medium leading-relaxed uppercase tracking-tight">
                B2B infrastructure customized explicitly for food systems, grocery chains, and local markets.
              </p>
            </div>
          </div>

          {/* Secondary Stacked Category Blocks */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {/* Box 1: Fresh Fruits */}
            <div className={`flex-1 bg-white glass rounded-[24px] p-8 flex flex-col justify-between shadow-sm border border-stone-200 group hover:bg-[#1b4332] transition-all duration-700 delay-400 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}>
              <div>
                {/* Text remains strictly stable on element hover states */}
                <h4 className="font-serif text-3xl font-bold text-[#1b4332]">
                  Fresh Fruits
                </h4>
                <p className="text-stone-600 text-xs font-bold uppercase tracking-tight mt-1">
                  Seasonally logged clean crop selections.
                </p>
              </div>
              <div className="mt-4 overflow-hidden rounded-xl h-20 border border-stone-100 shadow-inner">
                <img 
                  alt="Fruit Detail" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida/AP1WRLt3ZJp_uh9Z4t4cJxsnJgDUtUI81eT9nvu6bjD744o5oGJItCgW4CGnUOk9l1j9Mox9HoxN3FgT4cH5HB51TGVEknWafBO8BLvA7UYP_vasR4ds52ozvDUt6JWIVqwaX68sZYUCboenJ6Ade6eb6f_R5AfACuDyN3YZIlnH69jomeIX4v38v4ySiwICP0W-kE5FwaPY0sY1KaAjxp5tvIPSn54jLjyb5OhHS2Yu6pmcvyk2UghJLJzYxsYJ"
                />
              </div>
            </div>
            
            {/* Box 2: Fresh Veggies */}
            <div className={`flex-1 bg-white glass rounded-[24px] p-8 flex flex-col justify-between shadow-sm border border-stone-200 group hover:bg-[#2d6a4f] transition-all duration-700 delay-500 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}>
              <div>
                <h4 className="font-serif text-3xl font-bold text-[#1b4332]">
                  Fresh Veggies
                </h4>
                <p className="text-stone-600 text-xs font-bold uppercase tracking-tight mt-1">
                  Daily picked raw varieties distributed prompt.
                </p>
              </div>
              <div className="mt-4 overflow-hidden rounded-xl h-20 border border-stone-100 shadow-inner">
                <img 
                  alt="Veggie Detail" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida/AP1WRLsojnc8uHAkxB5_KUVZ9avlq42AicRct6UFMAyM4FDIKlm7gTijZzAvsUHCOlvtL2slqKis5WkjLKnwNSlEf5vrNtYi-1T4E6pox2N_mti9MmtZSI7d7C3cq202TMGSiejElMKnThdvoV5nFE2BSpNQZYNDH4LZeCpBnxIQNvE9-GIaVv6eYMSARlfAqVoEn-DvqeQ85hevkiuatRpmwd0uJ-_JwxYi0DoHz_91fi0CLfiiNJ29AFG4Y60"
                />
              </div>
            </div>
          </div>

          {/* Bottom Horizon Grid Blocks */}
          <div className={`lg:col-span-6 bg-white glass rounded-[24px] p-8 flex items-center gap-6 shadow-sm border border-stone-200 group hover:bg-[#1b4332] transition-all duration-700 delay-600 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="w-16 h-16 bg-[#95d5b2]/20 rounded-2xl flex items-center justify-center text-[#1b4332] shrink-0 group-hover:bg-white group-hover:text-[#1b4332] transition-all duration-300">
              <Smartphone size={28} className="stroke-[2]" />
            </div>
            <div>
              <h4 className="font-serif text-2xl font-bold text-[#1b4332]">
                Digital Mandi
              </h4>
              <p className="text-sm text-stone-600 font-medium mt-0.5">
                Streamlined smartphone dashboard for active operations management.
              </p>
            </div>
          </div>

          <div className={`lg:col-span-6 bg-white glass rounded-[24px] p-8 flex items-center gap-6 shadow-sm border border-stone-200 group hover:bg-[#2d6a4f] transition-all duration-700 delay-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="w-16 h-16 bg-[#2d6a4f]/20 rounded-2xl flex items-center justify-center text-[#2d6a4f] shrink-0 group-hover:bg-white group-hover:text-[#2d6a4f] transition-all duration-300">
              <Home size={28} className="stroke-[2]" />
            </div>
            <div>
              <h4 className="font-serif text-2xl font-bold text-[#1b4332]">
                Home Delivery
              </h4>
              <p className="text-sm text-stone-600 font-medium mt-0.5">
                Optimized last-mile cold networks providing pure logistics directly to homes.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}