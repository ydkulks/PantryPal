import AuthUser from '../AuthUser';
import React, {useState} from 'react';

const Recipes = () => {
  const [query, setQuery] = useState('');
  const [diet, setDiet] = useState(null);
  const [cuisine, setCuisine] = useState(null);
  //const [offset, setOffset] = useState(0);
  
  // Recipes Instructions
  const GetInstructions = async (ID,NAME) => {
    localStorage.setItem('RecipeID',ID);
    localStorage.setItem('RecipeNAME',NAME);
    window.location = '/Instructions';
  };
  // Get Recipes
  const getRecipes = async () => {
    const Query = {
      query: `${query}`,
      diet: `${diet}`,
      cuisine: `${cuisine}`,
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
      link.addEventListener('click', () => GetInstructions(result.id,result.title));
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
      <p className="RecipesIntro">
        Welcome to our Recipes page, where you can search for delicious and
        easy-to-make recipes using the ingredients you have on hand.
      </p>
      <p className="RecipesIntro">
        Simply enter the ingredients you want to use in the search bar below,
        and our app will provide you with a list of recipes that match your
        criteria. From classic comfort foods to healthy and exotic dishes, our
        Recipes page offers a diverse selection of recipes that will satisfy
        your cravings and impress your guests.
      </p>
      <p className="RecipesIntro">
        You can also filter your search results by cuisine, dietary
        restrictions, cooking time, and more, to find the perfect recipe for any
        occasion.
      </p>
      <p className="RecipesIntro">
        Whether you're a beginner or an experienced chef, our Recipes page is a
        great resource for discovering new and exciting dishes. So start
        exploring, and get ready to whip up some culinary magic in your kitchen!
      </p>
      <div className="form-row">
        <div className="col">
          <div id="RecipesSearchContainer">
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
            <select onChange={e => setDiet(e.target.value)} name="Diet">
              <option value="" selected disabled hidden>
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
            <select onChange={e => setCuisine(e.target.value)} name="Cuisine">
              <option value="" selected disabled hidden>
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
