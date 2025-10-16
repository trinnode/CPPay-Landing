import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BlockchainBackground from "./components/BlockchainBackground";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import AboutSection from "./components/AboutSection";
import InstallationGuide from "./components/InstallationGuide";

function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Blockchain Background - Full Screen */}
      <BlockchainBackground />

      {/* Content Overlay - No bg-white to allow background to show through */}
      <div className="relative z-20">
        <Navbar />
        <main className="relative z-20">
          <section id="home" className="relative z-20  bg-white">
            <HeroSection />
          </section>
          <section id="features" className="relative z-20 bg-white">
            <FeaturesSection />
          </section>
          <section id="about" className="relative z-20 bg-white">
            <AboutSection />
          </section>
          <section id="installation" className="relative z-20 bg-white">
            <InstallationGuide />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
