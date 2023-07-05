import RecipesSearch from './Recipes_Search.js';
import AuthUser from '../AuthUser';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Paginate from 'react-paginate';

const RecomComponent = props => {
  // Recipes Instructions
  const GetInstructions = async (ID, NAME, IMG) => {
    localStorage.setItem('RecipeID', ID);
    localStorage.setItem('RecipeNAME', NAME);
    localStorage.setItem('RecipeIMG', IMG);
    window.location = '/Instructions';
  };
  return (
    <div className="col-md">
      <div id={props.divId} className="RecBgImg">
        <div className="RecTray">
          <h4>{props.name}</h4>
          <button
            onClick={() => {
              GetInstructions(props.id, props.name, props.img);
            }}
          >
            Instructions
          </button>
        </div>
      </div>
    </div>
  );
};

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
        {/*<h3>Search Results</h3>
        <div id="Circle"></div>*/}
        <div id="RecipesResult">
          <h3>Recommendations</h3>
          <div className="row">
            <RecomComponent
              img="https://spoonacular.com/recipeImages/1096057-312x231.jpg"
              id="1096057"
              name="Cheesy Beef Burrito"
              divId="recom1"
            />
            <RecomComponent
              img="https://spoonacular.com/recipeImages/511728-312x231.jpg"
              id="511728"
              name="Pasta Margherita"
              divId="recom2"
            />
            <RecomComponent
              img="https://spoonacular.com/recipeImages/648506-312x231.jpg"
              id="648506"
              name="Japanese Sushi"
              divId="recom3"
            />
          </div>
          <div className="row">
            <RecomComponent
              img="https://spoonacular.com/recipeImages/660913-312x231.jpg"
              id="660913"
              name="Special Vegetable Biryani"
              divId="recom4"
            />
            <RecomComponent
              img="https://spoonacular.com/recipeImages/654018-312x231.jpg"
              id="654018"
              name="Oreo Cake"
              divId="recom5"
            />
            <RecomComponent
              img="https://spoonacular.com/recipeImages/637761-312x231.jpg"
              id="637761"
              name="Cherry ice cream"
              divId="recom6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthUser(Recipes);
