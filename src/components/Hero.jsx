/* src/components/Hero.jsx */
import { MessageCircle, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full bg-mandi-earth px-4 sm:px-8 pt-12 pb-16 border-b-2 border-stone-900 overflow-hidden">
      <div className="mx-auto max-w-6xl relative z-10">
        
        {/* Slogan Badge */}
        <div className="inline-block bg-white border-2 border-stone-900 px-3 py-1 text-xs font-black uppercase tracking-wider text-mandi-green mb-6 shadow-[2px_2px_0px_0px_rgba(28,25,23,1)]">
          From Our Farms To Your Business
        </div>
        
        {/* Core Brutalist Typography Header */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-stone-900 uppercase leading-none mb-6">
          Fresh Organic <br />
          <span className="bg-mandi-fresh px-2 inline-block my-1 border-2 border-stone-900 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)]">
            Fruits & Veggies
          </span>
        </h1>
        
        {/* Subtext Body */}
        <p className="text-base sm:text-lg font-bold text-stone-800 max-w-xl leading-extended mb-8 uppercase tracking-tight">
          Organically grown with <span className="text-mandi-green underline decoration-wavy decoration-2">no chemicals and no pesticides</span>. Available at the exact same wholesale rates for home kitchens and retail shop owners.
        </p>
        
        {/* Action Button Container */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-md sm:max-w-none">
          <a 
            href="https://wa.me/917048980435?text=Hello%20FalFruitMandi,%20I%20want%20to%20place%20an%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-mandi-accent text-stone-900 text-lg font-black uppercase tracking-wider px-8 py-4 border-2 border-stone-900 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
          >
            <MessageCircle size={22} fill="currentColor" />
            Order on WhatsApp
          </a>
          
          <a 
            href="tel:+917048980435"
            className="flex items-center justify-center gap-2 bg-white text-stone-900 text-lg font-black uppercase tracking-wider px-6 py-4 border-2 border-stone-900 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
          >
            <Phone size={18} />
            Call Us
          </a>
        </div>

      </div>
    </section>
  );
}