import React, {useEffect, useState} from "react"
import './App.css';
import Recipe from './Recipe'
import {Input, Form, Button, Page, Grid} from './Style-Appp'

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
console.log(data.hits);
}

const getSearch = event => {
  event.preventDefault(); 
  setQuery(search);
  setSearch('')
}

return (
  <Page>
<Form  className="search-form" onSubmit={getSearch} >
  <p>Search from an ingredient and get a Recipe! </p>
  <Input type ='text' value={search} onChange={(e) => setSearch(e.target.value)}/>
  <Button type='submit' className='button-search' >Search</Button>
  </Form>  
  <Grid>{recipes.map(recipe => (
   <Recipe 
   title={recipe.recipe.label} 
   calories={recipe.recipe.calories}
   ingredients={recipe.recipe.ingredientLines}
   image={recipe.recipe.image}/>
 ))}</Grid>
 
  </Page>
)
}

export default App;
