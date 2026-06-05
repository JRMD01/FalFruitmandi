/* src/components/TrustQuote.jsx */
import {LeafIcon} from 'lucide-react'
export default function TrustQuote() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden px-6 w-full border-b border-primary/5">
      {/* Immersive Edge-to-Edge Background Frame with Enhanced Visibility */}
      <div className="absolute inset-0 overflow-hidden w-full h-full">
        <img 
          alt="Nature Details" 
          className="animate-ken-burns w-full h-full object-cover grayscale opacity-45" 
          src="https://lh3.googleusercontent.com/aida/AP1WRLu-eggAHLwdZ2wZdKexVb_9AraviDnSWATQSLvpNTXoBabUDpwwblOzoNL48CNzTAb8kOwP43D0WXlk2QEWh5mz6BtrrqVekFwEWzOtKT2lOC2OFa9iFK0hssunmgGLBtBtvRBLDIlgfzwacHfKU41QbcUs7KSKEAPbUA3kiEkuxwMaVOev0Y6EnjNv9VPwLelC9MC3-z5uXXZCmg6Cky99Lht-D1tnjO433InD8MgfcfFsUlCATcLVxgCv"
        />
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto text-center px-4">
        <span className="font-bold text-secondary tracking-[0.3em] uppercase mb-8 block text-sm drop-shadow-sm">
          Our Sincere Promise
        </span>
        
        <blockquote className="font-serif text-5xl md:text-7xl lg:text-8xl italic leading-tight text-primary drop-shadow-sm select-none">
          "No Chemicals. <br className="sm:hidden" /> No Pesticides. <br /> Just Nature."
        </blockquote>
        
        <div className="flex justify-center mt-8">
          <div className="h-16 w-[1px] bg-primary/40" />
        </div>
      </div>
      
      {/* Lightened overlay tint to allow more background image details to pass through */}
      <div className="absolute inset-0 bg-surface/30 backdrop-blur-[1px] -z-10" />
    </section>
  );
}