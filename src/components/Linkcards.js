import { NavLink, useLocation } from 'react-router-dom';
import { useEffect } from 'react';


export default function LinkCards({ recipe }) {
  return(
    <>
      {recipe.map((oneRecipe, index) => <Recipe key={index} recipes={oneRecipe} />)}
    </>
  )
}

export function ScrollOnClick() {
  // e.document.getElementById('main-recipe-card').scrollIntoView({
  //   behavior: 'smooth'
  // });
  //window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Recipe ({ recipes }) {
  console.log(recipes);
  const recipeType = recipes.fields.recipeType;

  const recipeTypeCheck = recipeType => {
    if (recipeType === 'Main') {
      return 'btn btn-primary btn-block'
    } 
    if (recipeType === 'Starter') {
      return 'btn btn-success btn-block'
    }
    if (recipeType === 'Dessert') {
      return 'btn btn-warning btn-block'
    }
  }

  return (
    <> 
    <div className="col-lg-4 diff-recipe">
      <div className="card recipe-card">
        <img src={recipes.fields.recipePicture[0].fields.file.url} className="card-img-top diff-recipe-img" alt="..." />
        <div className="card-body">
          <h6 className="card-title">{recipes.fields.recipeName}</h6>
          <p className="card-text">{recipes.fields.recipeShortDescription}</p>
          <NavLink to={recipes.fields.routePath} className={recipeTypeCheck(recipeType)} onClick={ScrollOnClick} >{recipes.fields.recipeName}</NavLink> 
        </div>
      </div>
    </div>
    </> 
  )
}
