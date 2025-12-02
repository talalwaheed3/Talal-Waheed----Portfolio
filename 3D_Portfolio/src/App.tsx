import Navbar from "./components/Navbar";
import ContactSection from "./sections/ContactSection";
import ExperienceSection from "./sections/ExperienceSection";
import FeatureCards from "./sections/FeatureCards";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import ShowCaseSection from "./sections/ShowCaseSection";
import TechStack from "./sections/TechStack";
// import Testimonials from "./sections/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowCaseSection />
      {/* <LogoSection /> */}
      <FeatureCards />
      <ExperienceSection />
      <TechStack />
      {/* <Testimonials /> */}
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
