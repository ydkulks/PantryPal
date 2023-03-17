// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// CSS
import './style/App.css';
// Pages
import HeroSection from './Hero';
import NavBar from './Nav';
import FooterSection from './Footer';

function App() {
  return (
    <div id="Home">
      <NavBar />
      <div className="HeroContainer">
        <HeroSection />
      </div>
      <h2>hello</h2>
      <FooterSection />
    </div>
  );
}

export default App;
