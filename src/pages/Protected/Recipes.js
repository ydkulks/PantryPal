import AuthUser from '../AuthUser';
import React, {useState} from 'react';

const Recipes = () => {
  const [query, setQuery] = useState('burger');
  //var data;
  const getRecipes = async () => {
    const Query = {query: `${query}`};
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
    data.results.forEach(result => {
      const div = document.createElement('div');
      const title = document.createElement('h3');
      const instruction = document.createElement('p');

      title.textContent = result.title;
      instruction.textContent = result.instruction;

      div.appendChild(title);
      div.appendChild(instruction);
      resultsContainer.appendChild(div);
    });
  };
  return (
    <div className="RecipesContainer">
      <h2 className="RecipesTitle">Recipes</h2>
    <div id="RecipesSearchContainer">
      <input
        id="RecipesSearchBar"
        type="text"
        placeholder="Search"
        onChange={e => setQuery(e.target.value)}
      />
      <button id="RecipesSearchBtn" onClick={getRecipes}>
        <i className="bi bi-search"></i>
      </button>
    </div>
      <div>
        <div id="RecipesResult"></div>
      </div>
    </div>
  );
};

export default AuthUser(Recipes);
