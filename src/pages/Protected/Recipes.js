import AuthUser from '../AuthUser';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../../assets/pizza.jpg';
import img2 from '../../assets/biryani.jpg';
import img3 from '../../assets/burger.jpg';
import img4 from '../../assets/cake.jpg';
import img5 from '../../assets/noodles.jpg';
import img6 from '../../assets/ice_cream.jpg';
import React, {useState} from 'react';

const Recipes = () => {
  const [query, setQuery] = useState('');
  const [diet, setDiet] = useState(null);
  const [cuisine, setCuisine] = useState(null);
  const [ingredients, setIngredients] = useState(null);
  //const [offset, setOffset] = useState(0);

  // Advanced search
  const AdvSearch = () => {
    const advContent = document.getElementById('RecipesAdvDropContent');
    if (advContent.style.display === 'block') {
      advContent.style.display = 'none';
    } else {
      advContent.style.display = 'block';
    }
  };
  // Recipes Instructions
  const GetInstructions = async (ID, NAME, IMG) => {
    localStorage.setItem('RecipeID', ID);
    localStorage.setItem('RecipeNAME', NAME);
    localStorage.setItem('RecipeIMG', IMG);
    window.location = '/Instructions';
  };
  // Get Recipes
  const getRecipes = async () => {
    const Query = {
      query: `${query}`,
      diet: `${diet}`,
      cuisine: `${cuisine}`,
      ingredients: `${ingredients}`,
      //offset: `${offset}`,
    };
    const url = 'http://localhost:5000/api/recipes';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Query),
    };
    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data);
    const resultsContainer = document.getElementById('RecipesResult');
    resultsContainer.innerHTML = ' ';
    if (data.results.length === 0) {
      const noResult = () => {
        const div = document.createElement('div');
        div.className = 'row';
        const div1 = document.createElement('div');
        div1.className = 'col-lg';
        const title = document.createElement('h3');
        title.textContent = 'No resuls found!';
        div1.appendChild(title);
        div.appendChild(div1);
        resultsContainer.appendChild(div);
      };
      return noResult();
    }
    const SearchCount = document.createElement('p');
    SearchCount.className = 'SearchCount';
    SearchCount.textContent = `Total search results: ${data.totalResults}`;
    resultsContainer.appendChild(SearchCount);
    // Dynamically displaying results
    data.results.forEach(result => {
      const divR = document.createElement('div');
      divR.className = 'row';
      const div1 = document.createElement('div');
      div1.className = 'col-lg';
      const title = document.createElement('h3');
      const img = document.createElement('img');
      const div2 = document.createElement('div');
      div2.className = 'col-lg';
      const para = document.createElement('p');
      const link = document.createElement('a');

      title.textContent = result.title;
      link.className = 'RecipesLink';
      link.addEventListener('click', () =>
        GetInstructions(result.id, result.title, result.image),
      );
      link.textContent = 'Instructions';
      para.textContent = `ID: ${result.id}`;
      img.src = result.image;

      div1.appendChild(title);
      div1.appendChild(para);
      div1.appendChild(link);
      div2.appendChild(img);

      divR.appendChild(div1);
      divR.appendChild(div2);
      resultsContainer.appendChild(divR);
    });
  };

  return (
    <div className="RecipesContainer">
      <h2 className="RecipesTitle">Recipes</h2>
      <div id="RecipesIntroDiv">
        <div className="RecipesIntroDiv">
          <div className="row">
            <div className="col-lg">
              <p className="RecipesIntro">
                Enter your ingredients in the search bar below and filter your
                results by cuisine, dietary restrictions, and cooking time to
                find the perfect recipe for any occasion.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="CarouselContainer">
        <h3 className="CarouselHead">Inspiration for your search</h3>
        <Carousel id="Carousel" variant="dark">
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
      <div id="RecipesSearchContainer">
        <div className="form-row">
          <div className="col">
            <input
              id="RecipesSearchBar"
              type="text"
              className="form-control-md"
              placeholder="Search"
              onChange={e => setQuery(e.target.value)}
            />
            <button id="RecipesSearchBtn" onClick={getRecipes}>
              <i className="bi bi-search"></i>
            </button>
            <div id="RecipesAdvDrop">
              <button id="RecipesAdvSearch" onClick={AdvSearch}>
                <i className="bi bi-sliders2"></i>
              </button>
              <div id="RecipesAdvDropContent">
                <select
                  onChange={e => setDiet(e.target.value)}
                  defaultValue={'DEFAULT'}
                >
                  <option value="DEFAULT" disabled>
                    Diet
                  </option>
                  <option value="GlutenFree">Gluten Free</option>
                  <option value="Ketogenic">Ketogenic</option>
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Lacto-Vegetarian">Lacto-Vegetarian</option>
                  <option value="Ovo-Vegetarian">Ovo-Vegetarian</option>
                  <option value="Vegan">Vegan</option>
                  <option value="Pescetarian">Pescetarian</option>
                  <option value="Paleo">Paleo</option>
                  <option value="Primal">Primal</option>
                  <option value="LowFODMAP">LowFODMAP</option>
                  <option value="Whole30">Whole30</option>
                </select>
                <select
                  onChange={e => setCuisine(e.target.value)}
                  defaultValue={'DEFAULT'}
                >
                  <option value="DEFAULT" disabled>
                    Cuisine
                  </option>
                  <option value="Ameriacn">Ameriacn</option>
                  <option value="British">British</option>
                  <option value="Chinese">Chinese</option>
                  <option value="European">European</option>
                  <option value="French">French</option>
                  <option value="Indian">Indian</option>
                  <option value="Italian">Italian</option>
                  <option value="Japanese">Japanese</option>
                  <option value="Mexican">Mexican</option>
                  <option value="MiddleEastern">MiddleEastern</option>
                </select>
                <br />
                <label htmlFor="ingInput">Ingredients</label>
                <br />
                <textarea
                  id="ingInput"
                  onChange={e => setIngredients(e.target.value)}
                  placeholder="Ex: tomato,potato"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div id="RecipesResult">
          <div className="row">
            <div className="col-md">
              <h3>Search for recipes...</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthUser(Recipes);
