//CSS
import '../style/Hero.css';
import '../style/About.css';
import '../style/Services.css';
import '../style/Contact.css';
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
