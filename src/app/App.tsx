import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Ecosystem } from './components/Ecosystem';
import { Services } from './components/Services';
import { Leadership } from './components/Leadership';
import { Stats } from './components/Stats';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0015]">
      <Navbar />
      <BackToTop />
      
      <main>
        <div id="home">
          <Hero />
        </div>
        
        <div id="about">
          <About />
        </div>
        
        <div id="ecosystem">
          <Ecosystem />
        </div>
        
        <div id="services">
          <Services />
        </div>
        
        <div id="leadership">
          <Leadership />
        </div>
        
        <div id="stats">
          <Stats />
        </div>
        
        <div id="contact">
          <Contact />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}