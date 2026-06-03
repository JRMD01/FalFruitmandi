/* src/components/FinalCTA.jsx */
import { MessageCircle } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="w-full bg-mandi-earth px-4 sm:px-8 py-16 border-b-2 border-stone-900 text-center">
      <div className="mx-auto max-w-4xl bg-white border-2 border-stone-900 p-8 sm:p-12 shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] relative overflow-hidden">
        
        {/* Decorative Background Grid Accent */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

        <div className="relative z-10 space-y-6">
          {/* Tag */}
          <span className="inline-block bg-mandi-fresh border-2 border-stone-900 px-3 py-1 text-xs font-black uppercase tracking-wider text-stone-950 shadow-[2px_2px_0px_0px_rgba(28,25,23,1)]">
            Direct Farm Pipeline
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-stone-900 leading-none">
            Secure Purity. <br />
            Lock In Wholesale Rates.
          </h2>

          {/* Subheading */}
          <p className="text-sm sm:text-base font-bold text-stone-700 max-w-lg mx-auto uppercase tracking-tight">
            Skip chemical retail markups completely. We fulfill custom organic loads directly for domestic home kitchens and retail shop displays.
          </p>

          {/* High Impact Brutalist WhatsApp Action Button */}
          <div className="pt-4">
            <a 
              href="https://wa.me/917048980435?text=Hello%20FalFruitMandi,%20I%20want%20to%20place%20an%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white text-lg sm:text-xl font-black uppercase tracking-wider px-8 py-4 border-2 border-stone-900 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all w-full sm:w-auto justify-center"
            >
              <MessageCircle size={22} fill="currentColor" />
              Place Order on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}