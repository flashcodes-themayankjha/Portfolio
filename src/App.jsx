
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Reveal from "./components/Reveal";
import ScrollNavigator from "./components/ScrollNavigator";
import ProjectsSlider from "./components/ProjectsSlider";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen"; // NEW

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      {!showSplash && (
        <>
          <Navbar />
          <div className="min-h-screen bg-gradient-to-tr from-gray-100 via-white to-gray-200">
            <div className="pt-20 max-w-6xl mx-auto px-4">
              <Hero />
              {/* About Section */}
              <Reveal delay={0.4}>
                <section id="about" className="py-14">
                  <About />
                </section>
              </Reveal>
              {/* Projects Section */}
              <Reveal delay={0.4}>
                <section id="projects" className="py-20">
                  <h2 className="text-3xl font-bold text-blue-600 mb-8">Projects</h2>
                  <ProjectsSlider />
                </section>
              </Reveal>
              {/* Contact Section */}
              <Reveal delay={0.5}>
                <ContactSection />
              </Reveal>
            </div>
            <ScrollNavigator />
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
