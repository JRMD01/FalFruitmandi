/* src/components/Offerings.jsx */
import { Apple, Salad, ShoppingCart, Home, Store } from 'lucide-react';

const offerings = [
  { 
    name: "Fresh Fruits", 
    items: "Premium seasonal & nutrient-rich exotic selections.", 
    icon: <Apple size={24} className="stroke-[2.5]" /> 
  },
  { 
    name: "Fresh Vegetables", 
    items: "Daily garden-fresh staples, leafy greens, and organic roots.", 
    icon: <Salad size={24} className="stroke-[2.5]" /> 
  },
  { 
    name: "Online Ordering", 
    items: "Streamlined digital checkout directly via your smartphone.", 
    icon: <ShoppingCart size={24} className="stroke-[2.5]" /> 
  },
  { 
    name: "Home Delivery", 
    items: "Pure, chemical-free custom packs scaled perfectly for families.", 
    icon: <Home size={24} className="stroke-[2.5]" /> 
  },
  { 
    name: "Wholesale Supply", 
    items: "Bulk commercial pipelines tailored for retail storefront owners.", 
    icon: <Store size={24} className="stroke-[2.5]" /> 
  }
];

export default function Offerings() {
  return (
    <section id="offerings" className="w-full bg-mandi-earth px-4 sm:px-8 py-14 border-b-2 border-stone-900 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        
        {/* Header Layout */}
        <div className="mb-10 max-w-md">
          <div className="inline-block bg-stone-900 text-white text-xs font-black uppercase tracking-widest px-3 py-1 mb-4">
            What We Offer
          </div>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-stone-900 leading-none">
            Our Core Pipelines
          </h2>
          
          {/* Enhanced Seamless Sea Wave Pattern */}
          <div className="w-32 h-4 mt-3 text-mandi-green overflow-hidden relative">
            <svg 
              className="absolute top-0 left-0 h-full w-[200px] animate-[wave_1.6s_linear_infinite]" 
              viewBox="0 0 100 16" 
              preserveAspectRatio="none"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M0 8 C 12.5 15, 12.5 1, 25 8 C 37.5 15, 37.5 1, 50 8 C 62.5 15, 62.5 1, 75 8 C 87.5 15, 87.5 1, 100 8" 
                stroke="currentColor" 
                strokeWidth="4" 
                strokeLinecap="round"
              />
              <path 
                d="M100 8 C 112.5 15, 112.5 1, 125 8 C 137.5 15, 137.5 1, 150 8 C 162.5 15, 162.5 1, 175 8 C 187.5 15, 187.5 1, 200 8" 
                stroke="currentColor" 
                strokeWidth="4" 
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Dense Brutalist List/Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {offerings.map((cat, i) => (
            <div 
              key={i} 
              className="bg-white border-2 border-stone-900 p-6 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] flex items-start gap-4 hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              <div className="p-3 bg-mandi-fresh/30 border-2 border-stone-900 text-stone-900 shrink-0">
                {cat.icon}
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-black uppercase tracking-tight text-stone-900">
                  {cat.name}
                </h4>
                <p className="text-xs font-bold text-stone-600 leading-snug">
                  {cat.items}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Math-Perfect Inline Keyframe Animation to Avoid Layout Breaks */}
      <style>{`
        @keyframes wave {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100px); }
        }
      `}</style>
    </section>
  );
}