// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// CSS
import './style/App.css';
// Pages
import HeroSection from './Hero';
import NavBar from './Nav';

function App() {
  return (
    <div id="Home">
      <NavBar />
      <div className="HeroContainer">
        <HeroSection />
      </div>
      <div>
        <h1>Footer</h1>
      </div>
    </div>
  );
}

export default App;
