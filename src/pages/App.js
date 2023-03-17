// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// CSS
import './style/App.css';
// Pages
import HeroSection from './Hero';

function App() {
  return (
    <div>
      <div className="App">
        <HeroSection />
      </div>
      <div>
        <h1>Footer</h1>
      </div>
    </div>
  );
}

export default App;
