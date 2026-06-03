/* src/components/TrustQuote.jsx */
import { Leaf, Truck, Banknote, ShieldCheck } from 'lucide-react';

const trustPoints = [
  {
    icon: <Leaf size={20} className="stroke-[3]" />,
    label: "Organically Grown"
  },
  {
    icon: <Truck size={20} className="stroke-[3]" />,
    label: "Fresh Supply"
  },
  {
    icon: <Banknote size={20} className="stroke-[3]" />,
    label: "Fair Pricing"
  },
  {
    icon: <ShieldCheck size={20} className="stroke-[3]" />,
    label: "Home & Retail"
  }
];

export default function TrustQuote() {
  return (
    <section className="w-full bg-mandi-green text-white px-4 sm:px-8 py-14 border-b-2 border-stone-900 relative overflow-hidden">
      {/* Brutalist Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
      
      <div className="mx-auto max-w-6xl relative z-10 text-center">
        
        {/* Core Statement Banner */}
        <div className="inline-block bg-mandi-accent text-stone-900 text-sm font-black uppercase tracking-wider px-4 py-1.5 border-2 border-stone-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mb-8">
          Quality You Can Trust
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-none mb-6 max-w-4xl mx-auto">
          "No Chemicals. <br className="sm:hidden" /> No Pesticides. <br /> Just Nature."
        </h2>

        {/* Horizontal Brutalist Core Competency Badges */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {trustPoints.map((point, index) => (
            <div 
              key={index} 
              className="flex items-center gap-2 bg-white text-stone-900 border-2 border-stone-900 px-4 py-2 text-xs font-black uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="text-mandi-green">
                {point.icon}
              </div>
              <span>{point.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}