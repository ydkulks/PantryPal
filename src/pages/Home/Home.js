//CSS
import '../style/Home/Hero.css';
import '../style/Home/About.css';
import '../style/Home/Services.css';
import '../style/Home/Contact.css';
// Pages
import HeroSection from './Hero';
import About from './About';
import Recipes from './Services';
import Contact from './Contact';
const Home = () => {
  return (
    <div id="Home">
      <HeroSection />
      <About />
      <Recipes />
      <Contact />
    </div>
  );
};

export default Home;
