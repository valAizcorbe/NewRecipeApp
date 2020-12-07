import React, {useEffect, useState} from "react"
import './App.css';
import Recipe from './Recipe'

const App = () => {

  const APP_ID = '407bd9a8';
  const APP_KEY = '7680065f6d54f399eb2563c5a183f072'

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState ('chicken')

useEffect(() => {
  getRecipes();
}, [query]);

const getRecipes = async () => {
const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
const data = await response.json();
setRecipes(data.hits);
}

const getSearch = event => {
  event.preventDefault(); 
  setQuery(search);
  setSearch('')
}

return (
  <div className='App'>
<form  className="search-form" onSubmit={getSearch} >
  <input className='input-text' type ='text' value={search} onChange={(e) => setSearch(e.target.value)}/>
  <button type='submit' className='button-search' >Search</button>
  </form>  
 {recipes.map(recipe => (
   <Recipe 
   title={recipe.recipe.label} 
   calories={recipe.recipe.calories}
   image={recipe.recipe.image}/>
 ))}
  </div>
)
}

export default App;
