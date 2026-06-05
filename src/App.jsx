/* src/App.jsx */
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Offerings from './components/Offerings';
import TrustQuote from './components/TrustQuote';
import Contact from './components/Contact';
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer';
import WhatsAppSticky from './components/WhatsAppSticky';

export default function App() {
  return (
    <div className="min-h-screen bg-surface selection:bg-accent/30 overflow-x-hidden antialiased">
      <Header />
      <main>
        <Hero />
        <Features />
        <Offerings />
        <TrustQuote />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppSticky />
    </div>
  );
}