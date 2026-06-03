/* src/App.jsx */
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Offerings from './components/Offerings';
import TrustQuote from './components/TrustQuote';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppSticky from './components/WhatsAppSticky';
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-mandi-earth selection:bg-mandi-fresh/40 antialiased">
      <Header />
      
      <main>
        {/* 1. Hero Section */}
        <Hero />
        
        {/* 2. About / Why Choose Us */}
        <Features />
        
        {/* 3. What We Offer */}
        <Offerings />
        
        {/* 4. Trust / Value Section */}
        <TrustQuote />

        {/* 5. Contacts */}

        <Contact />
        
        {/* 6. Final CTA Section */}
        <FinalCTA />
      </main>

      {/* 7. Contact / Business Information & Footer */}
      <Footer />
      
      {/* Mobile-Only Interactive Fixed Anchor Overlay */}
      <WhatsAppSticky />
    </div>
  );
}

export default App;