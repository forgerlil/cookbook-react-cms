import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function LinkCards({ recipe, giveNode }) {
  // console.log(giveNode)
  return recipe.map((oneRecipe, index) => <Recipe key={index} recipes={oneRecipe} recipeNode={giveNode} />)
}

function Recipe ({ recipes, recipeNode }) {
  const recipeCard = recipeNode;
  const [recipeType, setRecipeType] = useState(recipes.fields.recipeType)

  const recipeTypeCheck = recipeType => {
    if (recipeType === 'Main') {
      setRecipeType('btn btn-primary btn-block')
    } 
    if (recipeType === 'Starter') {
      setRecipeType('btn btn-success btn-block')
    }
    if (recipeType === 'Dessert') {
      setRecipeType('btn btn-warning btn-block')
    }
  }

  useEffect(() => {

  }, [])

  const handleClick = (recipeCard) => {
    recipeCard.scrollIntoView()
  }

  return (
    <> 
    <div className="col-lg-4 diff-recipe">
      <div className="card recipe-card">
        <img src={recipes.fields.recipePicture[0].fields.file.url} className="card-img-top diff-recipe-img" alt="..." />
        <div className="card-body">
          <h6 className="card-title">{recipes.fields.recipeName}</h6>
          <p className="card-text">{recipes.fields.recipeShortDescription}</p>
          <NavLink to={recipes.fields.routePath}><button type="button" className={recipeTypeCheck(recipeType)} onClick={() => {handleClick(recipeCard)}}>{recipes.fields.recipeName}</button></NavLink> 
        </div>
      </div>
    </div>
    </> 
  )
}
