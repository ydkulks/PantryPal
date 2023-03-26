// Images
import Bowl from '../../assets/bowl_herosection.png';

function HeroSection() {
  return (
    <div className="HeroContainer">
      <div className="row">
        <div className="col-lg">
          <h1 className="Title">Pantry Pal</h1>
          <br />
          <p className="Tagline">
            Unlock endless meal possibilities with <br />
            Pantry Pal, your ultimate kitchen companion
          </p>
          <div className="col text-center">
            <a href="/Recipes">
              <button className="HeroBtn">Recipes</button>
            </a>
          </div>
        </div>
        <div className="col-lg">
          <img className="HeroBowl" src={Bowl} alt="Hero" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
