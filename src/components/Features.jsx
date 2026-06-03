/* src/components/Features.jsx */
import { Leaf, ShieldCheck, Banknote, Truck } from 'lucide-react';

const features = [
  {
    icon: <Leaf size={32} className="stroke-[2.5]" />,
    title: "100% Organic",
    desc: "Strictly grown without chemical modifications, dangerous toxic sprays, or artificial pesticides."
  },
  {
    icon: <Banknote size={32} className="stroke-[2.5]" />,
    title: "Equal Pricing",
    desc: "Identical bulk wholesale market rates extended directly to standard homes and retail shop owners alike."
  },
  {
    icon: <ShieldCheck size={32} className="stroke-[2.5]" />,
    title: "Absolute Trust",
    desc: "Freshly harvested from natural farm operations and brought right to your operational destination."
  },
  {
    icon: <Truck size={32} className="stroke-[2.5]" />,
    title: "Constant Supply",
    desc: "Highly dependable daily distribution loops built for domestic kitchens or fast-moving retail racks."
  }
];

export default function Features() {
  return (
    <section id="about" className="w-full bg-white px-4 sm:px-8 py-14 border-b-2 border-stone-900">
      <div className="mx-auto max-w-6xl">
        
        {/* Section Heading Tag */}
        <div className="inline-block bg-stone-900 text-white text-xs font-black uppercase tracking-widest px-3 py-1 mb-8">
          Why Choose Us
        </div>
        
        {/* Brutalist Flat Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="bg-mandi-earth border-2 border-stone-900 p-6 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] flex flex-col justify-between"
            >
              <div>
                {/* Icon Wrapper */}
                <div className="inline-block p-3 bg-white border-2 border-stone-900 text-mandi-green mb-4 shadow-[2px_2px_0px_0px_rgba(28,25,23,1)]">
                  {item.icon}
                </div>
                
                {/* Text Layout */}
                <h3 className="text-xl font-black uppercase tracking-tight text-stone-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm font-bold text-stone-700 leading-snug">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}