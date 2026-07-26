import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Ecosystem } from "./components/Ecosystem";
import { GroupArchitecture } from "./components/GroupArchitecture";
import { VentureStudio } from "./components/VentureStudio";
import { Services } from "./components/Services";
import { InvestorRelations } from "./components/InvestorRelations";
import { GroupNewsroom } from "./components/GroupNewsroom";
import { Leadership } from "./components/Leadership";
import { Stats } from "./components/Stats";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";

export default function App() {
  return (
    <div className="min-h-screen bg-[#07000e] text-white selection:bg-amber-400 selection:text-black">
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

        <div id="synergy">
          <GroupArchitecture />
        </div>

        <div id="venture-studio">
          <VentureStudio />
        </div>

        <div id="services">
          <Services />
        </div>

        <div id="investors">
          <InvestorRelations />
        </div>

        <div id="newsroom">
          <GroupNewsroom />
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