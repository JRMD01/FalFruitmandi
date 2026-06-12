/* src/components/FinalCTA.jsx */
import { MessageCircle } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="relative min-h-[60vh] bg-accent flex items-center justify-center overflow-hidden px-6 w-full border-b border-primary/8">
      {/* Extracted Edge-to-Edge Immersive Canvas matching TrustQuote size */}
      <div className="absolute inset-0 overflow-hidden w-full h-full">
        <img 
          alt="Immersive Graphic Frame" 
          className="animate-ken-burns w-full h-full object-cover opacity-40 mix-blend-overlay" 
          src="/basket.jpg"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto text-center px-4 space-y-8">
        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary italic leading-tight drop-shadow-sm select-none">
          Secure Purity. <br /> Lock In Wholesale Rates.
        </h2>
        
        <div className="flex justify-center">
          <a 
            href="https://wa.me/917048980435?text=Hello%20FalFruitMandi,%20I%20want%20to%20place%20an%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-primary text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl transition-transform duration-300 hover:-translate-y-1"
          >
            <MessageCircle size={24} className="fill-[#25D366] text-[#25D366]" />
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Backdrop shadow mask layout matcher */}
      <div className="absolute inset-0 bg-surface/30 backdrop-blur-[1px] -z-10" />
    </section>
  );
}