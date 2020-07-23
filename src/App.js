import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";
import Header from "./Header";
import { id, key } from "./assets/stuff";

const App = () => {
  const APP_ID = id;
  const APP_key = key;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  document.title = "Recipe App";

  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_key}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <Header />
      <form className="search-form" onSubmit={getSearch}>
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={updateSearch}
          placeholder="Search for recipes"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="recipe">
        {recipes.map((recipes) => (
          <Recipe
            key={recipes.recipe.label}
            title={recipes.recipe.label}
            calories={recipes.recipe.calories}
            image={recipes.recipe.image}
            ingredients={recipes.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
