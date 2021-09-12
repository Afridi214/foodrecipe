import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Recipes from './Components/Recipes';
import Axios from 'axios';


function App() {



  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const APP_ID = "f7058977";
  const APP_KEY = "2b683495d0d94c67e4869b408d070874";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    setRecipes(res.data.hits);
  }



  const onInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="App">

      <Header search={search} onInputChange={onInputChange} />
      <div className="container">
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
}

export default App;
