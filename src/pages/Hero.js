// CSS
import './style/Hero.css';
// Images
import Bowl from '../assets/bowl_herosection.png';

function Try() {
  alert('Hello');
}

function HeroSection() {
  return (
    <div className="row">
      <div className="col-md">
        <h1 className="Title">Pantry Pal</h1>
        <br />
        <p className="Tagline">
          Unlock endless meal possibilities with <br />
          Pantry Pal, your ultimate kitchen companion
        </p>
        <div className="col text-center">
          <button className="TryBtn" onClick={Try}>
            Try Now
          </button>
        </div>
      </div>
      <div className="col-md">
        <img className="HeroBowl" src={Bowl} alt="Hero" />
      </div>
    </div>
  );
}

export default HeroSection;
