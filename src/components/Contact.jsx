/* src/components/Contact.jsx */
export default function Contact() {
  return (
    <section className="py-32 px-6 max-w-[1440px] mx-auto" id="contact">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-20 text-center">
          <h2 className="font-serif text-5xl md:text-7xl text-primary mb-4 italic">Contact Details</h2>
          <p className="text-primary/50 font-bold uppercase text-xs tracking-wider">Reach out for customized lot setups or enterprise quotes.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass p-10 rounded-organic hover:bg-white hover:shadow-2xl transition-all duration-300">
            <span className="text-[10px] font-black uppercase tracking-widest text-secondary block mb-4">Phone Matrix</span>
            <a href="tel:+917048980435" className="font-serif text-2xl font-bold text-primary hover:underline">
              +91 70489 80435
            </a>
          </div>

          <div className="glass p-10 rounded-organic hover:bg-white hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <span className="text-[10px] font-black uppercase tracking-widest text-secondary block mb-4">Email Channel</span>
            <a href="mailto:falfruitmandiwholesalepvtltd@gmail.com" className="font-serif text-lg font-bold text-primary block break-all hover:underline">
              falfruitmandiwholesalepvtltd@gmail.com
            </a>
          </div>

          <div className="glass p-10 rounded-organic hover:bg-white hover:shadow-2xl transition-all duration-300">
            <span className="text-[10px] font-black uppercase tracking-widest text-secondary block mb-4">Mandi Center</span>
            <p className="font-serif text-2xl font-bold text-primary leading-tight">
              Noida Sector-16 C, Uttar Pradesh
            </p>
          </div>

          <div className="glass p-10 rounded-organic hover:bg-white hover:shadow-2xl transition-all duration-300">
            <span className="text-[10px] font-black uppercase tracking-widest text-secondary block mb-4">Registration</span>
            <p className="font-mono text-lg font-bold tracking-wider text-primary uppercase">
              GST: 09AAGCF9788B1Z6
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}