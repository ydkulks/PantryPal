// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// CSS
import '../style/About.css';
import '../style/App.css';
import '../style/Contact.css';
import '../style/Footer.css';
import '../style/Hero.css';
import '../style/Nav.css';
// Pages
import NavBar from './Nav';
import HeroSection from './Hero';
import About from './About';
import Contact from './Contact';
import FooterSection from './Footer';

function App() {
  return (
    <div id="Home">
      <NavBar />
      <HeroSection />
      <About />
      <Contact />
      <FooterSection />
    </div>
  );
}

export default App;
