/* src/components/Footer.jsx */
import { MapPin, Phone, Mail, FileText } from 'lucide-react';
import logo from '../assets/FalFruitMandiLogo.png';

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-stone-900 text-stone-100 pt-16 pb-8 border-t-2 border-stone-900">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-stone-800">
        
        {/* Left Column: Big Brand Massive Logo & Identity Layout */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            {/* Massive High-Visibility Logo Wrapper */}
            <div className="p-2 bg-white border-2 border-stone-900 shadow-[4px_4px_0px_0px_rgba(134,239,172,1)] inline-block shrink-0 w-24 h-24 sm:w-28 sm:h-28">
              <img 
                src={logo} 
                alt="FalFruitMandi Logo" 
                className="w-full h-full object-contain" 
              />
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white leading-none">
                FalFruitMandi
              </h3>
              <p className="text-xs font-black tracking-widest text-mandi-fresh uppercase">
                Wholesale Pvt Ltd
              </p>
            </div>
          </div>
          
          <p className="text-xs font-bold text-stone-400 uppercase tracking-tight leading-relaxed max-w-md">
            From Our Farms To Your Business. Premium chemical-free organic distribution pipelines serving household kitchens and retail storefront owners at identical wholesale rates.
          </p>
        </div>
        
        {/* Right Column: Structured Logistics & Support */}
        <div className="lg:col-span-6 space-y-4 lg:pt-4">
          <h4 className="text-xs font-black uppercase tracking-widest text-mandi-fresh">
            Corporate Logistics
          </h4>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold uppercase tracking-tight text-stone-300">
            {/* Address */}
            <div className="flex items-start gap-2">
              <MapPin size={16} className="text-mandi-fresh shrink-0 mt-0.5" />
              <p className="leading-snug">
                Noida Sector-16 C, <br />
                Gautambuddha Nagar, <br />
                U.P.-201309
              </p>
            </div>
            
            {/* Communication */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-mandi-fresh shrink-0" />
                <a href="tel:+917048980435" className="hover:text-white transition-colors">
                  +91 70489 80435
                </a>
              </div>
              <div className="flex items-center gap-2 break-all">
                <Mail size={16} className="text-mandi-fresh shrink-0" />
                <a href="mailto:falfruitmandiwholesalepvtltd@gmail.com" className="hover:text-white transition-colors lowercase">
                  falfruitmandiwholesalepvtltd@gmail.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Registry Identifier */}
          <div className="pt-4 border-t border-stone-800 flex items-center gap-2">
            <FileText size={14} className="text-stone-500 shrink-0" />
            <p className="font-mono text-[10px] tracking-wider uppercase text-stone-400">
              GSTIN: <span className="text-stone-200 font-black">09AAGCF9788B1Z6</span>
            </p>
          </div>
        </div>

      </div>

      {/* Copyright Line */}
      <div className="max-w-6xl mx-auto mt-8 text-center font-mono text-[10px] uppercase tracking-wider text-stone-600 font-bold">
        © 2026 FalFruitMandi Wholesale Private Limited. All rights reserved.
      </div>
    </footer>
  );
}