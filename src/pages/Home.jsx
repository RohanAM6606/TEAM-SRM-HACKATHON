import Navbar from "../components/common/Navbar";
import HeroSection from "../components/hero/HeroSection";
import About from "../components/about/About";


const Home = () => {
return ( <div> <Navbar />

```
  <div data-section="home">
    <HeroSection />
  </div>

  <div data-section="about">
    <About />
  </div>


  
</div>


);
};

export default Home;
