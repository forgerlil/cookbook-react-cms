import {Link} from 'react-router-dom'


export default function LinkCards({ recipe }) {
  return(
    <>
      {recipe.map((oneRecipe) => <Recipe recipes={oneRecipe} />)}
    </>
  )
}
 function Recipe ({ recipes }) {
  //  console.log(recipes)
  return (
    <> 
    <div className="col-lg-4 diff-recipe">
      <div className="card recipe-card">
        <img src={recipes.fields.recipePicture[0].fields.file.url} className="card-img-top diff-recipe-img" alt="..." />
        <div className="card-body">
          <h6 className="card-title">{recipes.fields.recipeName}</h6>
          <p className="card-text">{recipes.fields.recipeShortDescription}</p>
          {/* <Link />*/}<a href="zestyasparagus.html" className="btn btn-success btn-block">{recipes.fields.recipeName}</a>
        </div>
      </div>
    </div>
    </> 
  )
}
