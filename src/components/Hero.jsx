/* src/components/Hero.jsx */
import { useState, useEffect } from 'react';
import {LeafIcon} from 'lucide-react'
const slideshowImages = [
  "https://lh3.googleusercontent.com/aida/AP1WRLsojnc8uHAkxB5_KUVZ9avlq42AicRct6UFMAyM4FDIKlm7gTijZzAvsUHCOlvtL2slqKis5WkjLKnwNSlEf5vrNtYi-1T4E6pox2N_mti9MmtZSI7d7C3cq202TMGSiejElMKnThdvoV5nFE2BSpNQZYNDH4LZeCpBnxIQNvE9-GIaVv6eYMSARlfAqVoEn-DvqeQ85hevkiuatRpmwd0uJ-_JwxYi0DoHz_91fi0CLfiiNJ29AFG4Y60",
  "https://lh3.googleusercontent.com/aida/AP1WRLszvENctuy8q11fTKAgvjnZDtZAUuhYjFSzTe7aqL5thu4aZ-eDtsqFusu_yDpzSPkne_l_WmaWw99t0gQm4KxFfW8qUqAuZWWTt3_trBjRBTQFzwzKl1nCEmtxkH9Ak-uowTkdGC6sFj2ogzxeSP0VqaJO08sE9c5kNsyINOT-8uO-vpRV3SWAoMTk6CmMq0kn3C5l9J-OVlncZG1-0rKApxDo01mvSNhIsqQEFBMCGxjrHus3ABYq3Yey",
  "https://lh3.googleusercontent.com/aida/AP1WRLt3ZJp_uh9Z4t4cJxsnJgDUtUI81eT9nvu6bjD744o5oGJItCgW4CGnUOk9l1j9Mox9HoxN3FgT4cH5HB51TGVEknWafBO8BLvA7UYP_vasR4ds52ozvDUt6JWIVqwaX68sZYUCboenJ6Ade6eb6f_R5AfACuDyN3YZIlnH69jomeIX4v38v4ySiwICP0W-kE5FwaPY0sY1KaAjxp5tvIPSn54jLjyb5OhHS2Yu6pmcvyk2UghJLJzYxsYJ"
];

export default function Hero() {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % slideshowImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden px-6 lg:px-20 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto z-10 w-full">
        
        <div className="space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-primary font-bold text-xs uppercase tracking-widest mb-2">
            Mandi to Warehouse Direct
          </span>
          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-normal leading-[0.95] text-primary italic">
            Fresh Organic <br />
            <span className="font-bold not-italic text-stone-900">Produce</span> <br />
            <span className="text-secondary">& Purity.</span>
          </h1>
          <p className="text-lg md:text-xl text-primary/70 max-w-xl leading-relaxed font-medium">
            Sourced daily from the most fertile fields. We bridge the gap between organic farms and your wholesale needs with 100% transparency.
          </p>
          <div className="flex flex-wrap gap-5">
            <a 
              href="https://wa.me/917048980435"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-2xl font-bold shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-emerald-500/20"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.628 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
              </svg>
              Connect
            </a>
            <a 
              href="tel:+917048980435"
              className="inline-flex items-center gap-3 bg-white border border-primary/10 text-primary px-10 py-5 rounded-2xl font-bold shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <span className="material-symbols-outlined">call</span> Call Mandi
            </a>
          </div>
        </div>

        {/* Right Fluid Multi-Image Display Block */}
        <div className="relative w-full">
          <div className="relative rounded-organic overflow-hidden shadow-[0_40px_100px_-20px_rgba(27,67,50,0.4)] aspect-[4/5] md:aspect-square lg:max-w-xl ml-auto">
            {slideshowImages.map((src, index) => (
              <img 
                key={index}
                alt="Fresh Produce Stack" 
                className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-1000 ease-in-out ${
                  index === currentImg ? 'opacity-100 animate-ken-burns' : 'opacity-0'
                }`}
                src={src}
              />
            ))}
          </div>
          <div className="absolute -bottom-10 left-4 w-40 h-40 bg-white/40 backdrop-blur-xl rounded-full border border-white/50 shadow-2xl flex items-center justify-center p-6 hidden md:flex">
            <img alt="Leaf Detail" className="w-full h-full object-contain opacity-80 animate-leaf-float" src="/FalFruitmandiLogo.png" />
          </div>
        </div>

      </div>
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/10 blur-[120px] rounded-full -z-10 translate-x-1/2" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-secondary/5 blur-[100px] rounded-full -z-10" />
    </section>
  );
}