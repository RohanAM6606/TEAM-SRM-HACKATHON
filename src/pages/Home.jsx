import Navbar from "../components/common/Navbar";
import HeroSection from "../components/hero/HeroSection";
import About from "../components/about/About";
import Domains from "../components/Domains/Domains";
import Events from "../components/Events/Events";
import Teams from "../components/Teams/Teams";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div data-section="home">
        <HeroSection />
      </div>

      <div data-section="about">
        <About />
      </div>
      <div data-section="domains">
        <Domains />
      </div>

      <div data-section="events">
        <Events />
      </div>

      <div data-section="teams">
        <Teams />
      </div>
    </div>
  );
};

export default Home;