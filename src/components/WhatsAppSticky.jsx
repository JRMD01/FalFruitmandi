/* src/components/WhatsAppSticky.jsx */
import { MessageCircle } from 'lucide-react';

export default function WhatsAppSticky() {
  return (
    <>
      <a 
        href="https://wa.me/917048980435?text=Hello%20FalFruitMandi,%20I%20want%20to%20place%20an%20order."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 border-2 border-stone-900 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] md:hidden flex items-center justify-center focus:outline-none group"
        aria-label="Chat on WhatsApp"
      >
        {/* Android Material Design Inspired Spring-Loaded Scale & Pulse Icon Animation */}
        <div className="relative w-7 h-7 flex items-center justify-center">
          {/* Pulsing Target Ring (Material Ripple Effect) */}
          <span className="absolute inset-0 rounded-full bg-white/40 animate-[materialPulse_2s_cubic-bezier(0.2,0,0,1)_infinite]" />
          
          {/* Scaling Icon */}
          <MessageCircle 
            size={28} 
            fill="currentColor" 
            className="relative z-10 animate-[androidSpring_3s_cubic-bezier(0.175,0.885,0.32,1.275)_infinite]" 
          />
        </div>
      </a>

      {/* Android/Google UI Bezier Interpolated Custom Keyframes */}
      <style>{`
        @keyframes androidSpring {
          0%, 70%, 100% { transform: scale(1); }
          75% { transform: scale(1.18); }
          80% { transform: scale(0.95); }
          85% { transform: scale(1.05); }
          90% { transform: scale(0.98); }
        }
        @keyframes materialPulse {
          0% { transform: scale(1); opacity: 0.6; }
          60%, 100% { transform: scale(2.2); opacity: 0; }
        }
      `}</style>
    </>
  );
}