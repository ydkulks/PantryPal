// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// CSS
import './style/About.css';
import './style/App.css';
import './style/Footer.css';
import './style/Hero.css';
import './style/Nav.css';
// Pages
import HeroSection from './Hero';
import NavBar from './Nav';
import About from './About';
import FooterSection from './Footer';

function App() {
  return (
    <div id="Home">
      <NavBar />
      <HeroSection />
      <About />
      <FooterSection />
    </div>
  );
}

export default App;
