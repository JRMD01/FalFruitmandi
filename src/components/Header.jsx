/* src/components/Header.jsx */
import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import logo from '../assets/FalFruitMandiLogo.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-mandi-earth border-b-2 border-stone-900 px-4 sm:px-8">
      {/* Max-width wrapper keeping constraints tight but breathable on large screens */}
      <div className="mx-auto max-w-6xl h-24 flex items-center justify-between">
        
        {/* Brand/Logo Area - Overhauled for High Visibility Purity */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none">
          <div className="p-1 bg-white border-2 border-stone-900 shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] group-hover:translate-x-[1px] group-hover:translate-y-[1px] group-hover:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] transition-all shrink-0">
            <img 
              src={logo} 
              alt="FalFruitMandi Logo" 
              className="h-14 w-14 sm:h-16 sm:w-16 object-contain" 
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-stone-900 uppercase leading-none">
              FalFruitMandi
            </span>
            <span className="text-[10px] sm:text-xs font-black tracking-widest text-mandi-green uppercase mt-1">
              Wholesale Pvt Ltd
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-sm font-black uppercase tracking-wider text-stone-700 hover:text-mandi-green transition-colors py-2">
            About
          </a>
          <a href="#offerings" className="text-sm font-black uppercase tracking-wider text-stone-700 hover:text-mandi-green transition-colors py-2">
            Offerings
          </a>
          <a href="#contact" className="text-sm font-black uppercase tracking-wider text-stone-700 hover:text-mandi-green transition-colors py-2">
            Contact
          </a>
          <a 
            href="https://wa.me/917048980435?text=Hello%20FalFruitMandi,%20I%20want%20to%20place%20an%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-mandi-green text-white text-xs font-black uppercase tracking-widest px-5 py-3 border-2 border-stone-900 shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_rgba(28,25,23,1)] transition-all"
          >
            <MessageCircle size={16} fill="currentColor" />
            Order Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-stone-900 border-2 border-stone-900 bg-white shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_rgba(28,25,23,1)] transition-all focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} className="stroke-[3]" /> : <Menu size={24} className="stroke-[3]" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-[94px] left-0 w-full bg-mandi-earth border-b-2 border-stone-900 px-4 py-6 flex flex-col gap-4 shadow-[0_4px_0_0_rgba(28,25,23,0.05)] animate-in fade-in slide-in-from-top-2 duration-150">
          <a 
            href="#about" 
            onClick={() => setIsOpen(false)}
            className="text-base font-black uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-2"
          >
            About
          </a>
          <a 
            href="#offerings" 
            onClick={() => setIsOpen(false)}
            className="text-base font-black uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-2"
          >
            Offerings
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="text-base font-black uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-2"
          >
            Contact
          </a>
          <a 
            href="https://wa.me/917048980435?text=Hello%20FalFruitMandi,%20I%20want%20to%20place%20an%20order."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full flex items-center justify-center gap-2 bg-mandi-accent text-stone-900 text-sm font-black uppercase tracking-widest py-4 border-2 border-stone-900 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)]"
          >
            <MessageCircle size={18} fill="currentColor" />
            Order on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}