/* src/components/Header.jsx */
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        id="main-nav" 
        className={`fixed top-0 w-full z-50 transition-all duration-300 px-4 sm:px-6 lg:px-16 ${
          isScrolled ? 'py-2' : 'py-4'
        }`}
      >
        {/* Adjusted horizontal padding on compact screens to optimize structural breathing room */}
        <div className="max-w-7xl mx-auto glass rounded-full px-4 sm:px-8 py-3 flex justify-between items-center shadow-lg border border-white/50">
          
          {/* Brand/Logo Area - Protected against layout overlaps on narrow viewports */}
          <div className="flex items-center gap-2 sm:gap-3 max-w-[calc(100%-60px)] md:max-w-none min-w-0">
            <img 
              alt="FalFruitMandi Logo" 
              className="h-8 w-auto sm:h-10 shrink-0 object-contain" 
              src="/FalFruitmandiLogo.png" 
            />
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-primary truncate">
              FalFruitMandi
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-10 items-center">
            <a className="font-semibold text-sm hover:text-secondary transition-colors" href="#features">Features</a>
            <a className="font-semibold text-sm hover:text-secondary transition-colors" href="#offerings">Offerings</a>
            <a className="font-semibold text-sm hover:text-secondary transition-colors" href="#contact">Contact</a>
            <a 
              href="https://wa.me/917048980435?text=Hello%20FalFruitMandi,%20I%20want%20to%20place%20an%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg bg-primary text-white px-8 py-2.5 rounded-full text-sm font-bold shadow-md"
            >
              Order Now
            </a>
          </div>

          {/* Mobile Menu Trigger - Explicitly sized block prevents layout layout shifting */}
          <button 
            onClick={() => setIsOpen(true)} 
            className="md:hidden p-2 text-primary focus:outline-none shrink-0"
            aria-label="Open Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Backdrop overlay - Controls fade transitions smoothly alongside sidebar sliding updates */}
      <div 
        onClick={() => setIsOpen(false)} 
        className={`fixed inset-0 bg-primary/20 backdrop-blur-md z-[60] transition-opacity duration-500 pointer-events-none ${
          isOpen ? 'opacity-100 !pointer-events-auto' : 'opacity-0'
        }`}
      />

      {/* Persistent Mobile Drawer Sidebar - Managed cleanly via custom hardware accelerated transitions */}
      <div 
        className={`fixed right-0 top-0 h-full w-4/5 max-w-sm bg-surface z-[70] p-10 flex flex-col gap-8 shadow-2xl border-l border-primary/10 transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <img alt="Logo" className="h-12 w-auto object-contain" src="/FalFruitmandiLogo.png" />
          <button 
            onClick={() => setIsOpen(false)} 
            className="text-primary focus:outline-none"
            aria-label="Close Menu"
          >
            <X size={28} />
          </button>
        </div>
        
        <div className="flex flex-col gap-6 font-serif text-3xl italic">
          <a href="#features" onClick={() => setIsOpen(false)}>Features</a>
          <a href="#offerings" onClick={() => setIsOpen(false)}>Offerings</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
        
        <a 
          href="https://wa.me/917048980435"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
          className="mt-auto block text-center bg-primary text-white p-5 rounded-2xl font-bold text-xl shadow-xl transition-transform active:scale-95"
        >
          Order Wholesale
        </a>
      </div>
    </>
  );
}