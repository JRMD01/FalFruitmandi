/* src/components/Contact.jsx */
import { Phone, Mail, MapPin, FileText } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-white px-4 sm:px-8 py-14 border-b-2 border-stone-900">
      <div className="mx-auto max-w-6xl">
        
        {/* Section Title */}
        <div className="inline-block bg-stone-900 text-white text-xs font-black uppercase tracking-widest px-3 py-1 mb-8">
          Contact Details
        </div>

        {/* 2x2 Grid Layout for Corporate Identifiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Mobile Number Block */}
          <div className="bg-mandi-earth border-2 border-stone-900 p-6 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] flex items-center gap-5">
            <div className="p-3 bg-white border-2 border-stone-900 text-mandi-green shrink-0">
              <Phone size={24} className="stroke-[2.5]" />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-stone-500">Call Operations</h4>
              <a href="tel:+917048980435" className="text-lg font-black text-stone-900 hover:underline">
                +91 70489 80435
              </a>
            </div>
          </div>

          {/* Email Address Block */}
          <div className="bg-mandi-earth border-2 border-stone-900 p-6 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] flex items-center gap-5 overflow-hidden">
            <div className="p-3 bg-white border-2 border-stone-900 text-mandi-green shrink-0">
              <Mail size={24} className="stroke-[2.5]" />
            </div>
            <div className="min-w-0">
              <h4 className="text-xs font-black uppercase tracking-wider text-stone-500">Email Pipeline</h4>
              <a href="mailto:falfruitmandiwholesalepvtltd@gmail.com" className="text-sm sm:text-base font-black text-stone-900 break-all hover:underline">
                falfruitmandiwholesalepvtltd@gmail.com
              </a>
            </div>
          </div>

          {/* Physical Address Block */}
          <div className="bg-mandi-earth border-2 border-stone-900 p-6 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] flex items-center gap-5">
            <div className="p-3 bg-white border-2 border-stone-900 text-mandi-green shrink-0">
              <MapPin size={24} className="stroke-[2.5]" />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-stone-500">Registered Office</h4>
              <p className="text-sm font-black text-stone-900 leading-tight">
                Noida Sector-16 C, Gautambuddha Nagar, U.P.-201309
              </p>
            </div>
          </div>

          {/* Corporate Identification Block (GSTIN) */}
          <div className="bg-stone-900 border-2 border-stone-900 p-6 shadow-[4px_4px_0px_0px_rgba(134,239,172,1)] flex items-center gap-5">
            <div className="p-3 bg-white border-2 border-stone-900 text-stone-900 shrink-0">
              <FileText size={24} className="stroke-[2.5]" />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-mandi-fresh">Official Registry</h4>
              <p className="font-mono text-base font-black text-white tracking-wider uppercase">
                GSTIN: 09AAGCF9788B1Z6
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}