import Winecard from './Winecard'
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


function IngrTable () {
  return (
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th scope="col">Add to shopping list</th>
          <th scope="col">Amount</th>
          <th scope="col">Ingredients</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">
            <input type="checkbox" aria-label="Checkbox for following text input" />
          </th>
          <td>750 g</td>
          <td>beef or mutton</td>
        </tr>
      </tbody>
    </table>
  )
}

function PrepSteps ({ prep }) {
  const makeList = prep.split('\n')
  // console.log(makeList)
  return (
    <ol>
      {makeList.map((eachStep, index) => {
        return <li key={index}>{eachStep}</li>
      })}
    </ol>
  )
}


export default function MainRecipe ({ recipe }) {
  console.log(recipe)
  
  return (
    <>
    <div className="card col-12 col-lg-6">
      <img src={recipe.fields.recipePicture[0].fields.file.url} className="card-img-top img-fluid main-recipe-img" alt={recipe.fields.recipePicture[0].fields.description} />
      <div className="card-body">
        <h5 className="card-title">How to make {recipe.fields.recipeName}</h5>
        <IngrTable />
        <h6>Preparation instructions</h6>
        <PrepSteps prep={recipe.fields.recipeDescription} />
      </div>
    </div>
    <Winecard wine={recipe.fields.wine.fields}/>
    </>
  )
}
