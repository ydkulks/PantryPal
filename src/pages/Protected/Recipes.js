import RecipesSearch from './Recipes_Search.js';
import AuthUser from '../AuthUser';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Paginate from 'react-paginate';
/*
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/pizza.jpg';
import img2 from '../../assets/biryani.jpg';
import img3 from '../../assets/burger.jpg';
import img4 from '../../assets/cake.jpg';
import img5 from '../../assets/noodles.jpg';
import img6 from '../../assets/ice_cream.jpg';
import usa_cuisine from '../../assets/USA-Cuisine.jpg';
import british_cuisine from '../../assets/British-Cuisine.jpg';
import chinese_cuisine from '../../assets/Chinese-Cuisine.jpg';
import french_cuisine from '../../assets/French-Cuisine.jpg';
import indian_cuisine from '../../assets/Indian-Cuisine.jpg';
import italy_cuisine from '../../assets/Italian-Cuisine.jpg';
import japan_cuisine from '../../assets/Japanese-Cuisine.jpg';
import mexico_cuisine from '../../assets/Mexican-Cuisine.jpg';
*/

const Recipes = () => {
  return (
    <div className="RecipesContainer">
      <div id="RecipesIntroDiv">
        <div className="RecipesIntroDiv">
          <div className="RecipesIntro">
            <h2 id="RecipesTitle">Recipes</h2>
            <p>
              Enter your ingredients in the search bar below and filter your
              results by cuisine, dietary restrictions, and cooking time to find
              the perfect recipe for any occasion.
            </p>
            <RecipesSearch />
          </div>
        </div>
      </div>
      <div className="SearchResultContainer">
        <h3>Search Results</h3>
        <div id="Circle"></div>
        <div id="RecipesResult">
          <div className="row">
            <div className="col-md">
    {/*<div id="CarouselContainer">
                <div className="row">
                  <div className="col-lg">
                    <h3 className="CarouselHead">
                      Inspiration for your search
                    </h3>
                    <Carousel id="Carousel" indicators={false} variant="dark">
                      <Carousel.Item className="CarouselItem">
                        <img
                          style={{height: '300px', display: 'block'}}
                          className="d-block w-100"
                          alt="Pizza"
                          src={img1}
                        />
                        <Carousel.Caption>
                          <h3 className="CarouselName">Pizza</h3>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item className="CarouselItem">
                        <img
                          style={{height: '300px', display: 'block'}}
                          className="d-block w-100"
                          alt="Biryani"
                          src={img2}
                        />
                        <Carousel.Caption>
                          <h3 className="CarouselName">Biryani</h3>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item className="CarouselItem">
                        <img
                          style={{height: '300px', display: 'block'}}
                          className="d-block w-100"
                          alt="Burger"
                          src={img3}
                        />
                        <Carousel.Caption>
                          <h3 className="CarouselName">Burger</h3>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item className="CarouselItem">
                        <img
                          style={{height: '300px', display: 'block'}}
                          className="d-block w-100"
                          alt="Cake"
                          src={img4}
                        />
                        <Carousel.Caption>
                          <h3 className="CarouselName">Cake</h3>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item className="CarouselItem">
                        <img
                          style={{height: '300px', display: 'block'}}
                          className="d-block w-100"
                          alt="Noodles"
                          src={img5}
                        />
                        <Carousel.Caption>
                          <h3 className="CarouselName">Noodles</h3>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item className="CarouselItem">
                        <img
                          style={{height: '300px', display: 'block'}}
                          className="d-block w-100"
                          alt="Ice cream"
                          src={img6}
                        />
                        <Carousel.Caption>
                          <h3 className="CarouselName">Ice cream</h3>
                        </Carousel.Caption>
                      </Carousel.Item>
                    </Carousel>
                  </div>
                  <div className="col-lg">
                    <h3 className="CarouselHead">Cuisine</h3>
                    <Carousel id="Carousel" indicators={false} variant="dark">
                      <Carousel.Item className="CarouselItem">
                        <img
                          style={{height: '300px', display: 'block'}}
                          className="d-block w-100"
                          alt="American"
                          src={usa_cuisine}
                        />
                        <Carousel.Caption>
                          <h3 className="CarouselName">American</h3>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item className="CarouselItem">
                        <img
                          style={{height: '300px', display: 'block'}}
                          className="d-block w-100"
                          alt="British"
                          src={british_cuisine}
                        />
                        <Carousel.Caption>
                          <h3 className="CarouselName">British</h3>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item className="CarouselItem">
                        <img
                          style={{height: '300px', display: 'block'}}
                          className="d-block w-100"
                          alt="Chinese"
                          src={chinese_cuisine}
                        />
                        <Carousel.Caption>
                          <h3 className="CarouselName">Chinese</h3>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item className="CarouselItem">
                        <img
                          style={{height: '300px', display: 'block'}}
                          className="d-block w-100"
                          alt="French"
                          src={french_cuisine}
                        />
                        <Carousel.Caption>
                          <h3 className="CarouselName">French</h3>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item className="CarouselItem">
                        <img
                          style={{height: '300px', display: 'block'}}
                          className="d-block w-100"
                          alt="Indian"
                          src={indian_cuisine}
                        />
                        <Carousel.Caption>
                          <h3 className="CarouselName">Indian</h3>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item className="CarouselItem">
                        <img
                          style={{height: '300px', display: 'block'}}
                          className="d-block w-100"
                          alt="Italian"
                          src={italy_cuisine}
                        />
                        <Carousel.Caption>
                          <h3 className="CarouselName">Italian</h3>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item className="CarouselItem">
                        <img
                          style={{height: '300px', display: 'block'}}
                          className="d-block w-100"
                          alt="Japanese"
                          src={japan_cuisine}
                        />
                        <Carousel.Caption>
                          <h3 className="CarouselName">Japanese</h3>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item className="CarouselItem">
                        <img
                          style={{height: '300px', display: 'block'}}
                          className="d-block w-100"
                          alt="Mexican"
                          src={mexico_cuisine}
                        />
                        <Carousel.Caption>
                          <h3 className="CarouselName">Mexican</h3>
                        </Carousel.Caption>
                      </Carousel.Item>
                    </Carousel>
                  </div>
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthUser(Recipes);
