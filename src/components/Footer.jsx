/* src/components/Footer.jsx */

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-surface py-20 px-6 border-t border-primary/5 max-w-[1440px] mx-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-20">
        
        {/* Left Column: Corporate Identity with Massive Image Frame */}
        <div className="space-y-6 max-w-xs">
          <div className="flex items-center gap-3">
            {/* Logo Box matching the background container sizing dynamics */}
            <div className="p-2 bg-white border border-stone-900 w-16 h-16 shadow-[2px_2px_0px_0px_rgba(27,67,50,0.15)] shrink-0">
              <img 
                alt="Logo" 
                className="w-full h-full object-contain" 
                src="/FalFruitmandiLogo.png" 
              />
            </div>
            <span className="font-serif text-2xl font-bold text-primary">FalFruitMandi</span>
          </div>
          <p className="text-primary/60 text-xs font-bold uppercase tracking-tight leading-relaxed">
            Premium wholesale organic supply chain. Dedicated to bringing farm-fresh purity to every business pipeline.
          </p>
          <div className="text-[10px] font-mono font-black text-primary opacity-40 tracking-widest">
            GSTIN: 09AAGCF9788B1Z6
          </div>
        </div>
        
        {/* Right Column: Site Navigation Directories */}
        <div className="grid grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h5 className="font-black text-xs uppercase tracking-widest text-secondary mb-6">Pages</h5>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-wider text-primary/60">
              <li><a className="hover:text-primary transition-colors" href="#">Home</a></li>
              <li><a className="hover:text-primary transition-colors" href="#features">Features</a></li>
              <li><a className="hover:text-primary transition-colors" href="#offerings">Offerings</a></li>
              <li><a className="hover:text-primary transition-colors" href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-black text-xs uppercase tracking-widest text-secondary mb-6">Legal</h5>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-wider text-primary/60">
              <li><a className="hover:text-primary transition-colors" href="#">Privacy</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Terms</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Shipping</a></li>
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom Identity Meta Layer */}
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-primary/5 flex flex-col sm:flex-row justify-between items-center gap-6">
        <p className="text-[10px] font-mono font-black text-primary/30 tracking-widest">
          © 2026 FALFRUITMANDI WHOLESALE PVT LTD. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-4">
          <div className="w-8 h-8 rounded-full glass flex items-center justify-center text-primary/40"><span className="material-symbols-outlined text-lg">public</span></div>
          <div className="w-8 h-8 rounded-full glass flex items-center justify-center text-primary/40"><span className="material-symbols-outlined text-lg">share</span></div>
        </div>
      </div>
    </footer>
  );
}