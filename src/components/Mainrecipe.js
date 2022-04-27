import Plov from '../Pictures/samarkand_plov.jpeg'
import Winecard from './Winecard'

/*
 Goals:
 1. Display main recipe's image
 2. Generate table with ingredients and respective weights
 3. Generate list with preparation steps
 
 React Router?
*/

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

function PrepSteps () {
  return (
    <ol>
      <li>Heat oil in a pan.</li>
    </ol>
  )
}


export default function Mainrecipe () {
  return (
    <>
    <div className="card col-12 col-lg-6">
      <img src={Plov} className="card-img-top img-fluid main-recipe-img" alt="test" />
      <div className="card-body">
        <h5 className="card-title">How to make Uzbek plov</h5>
        <IngrTable />
        <h6>Preparation instructions</h6>
        <PrepSteps />
      </div>
    </div>
    <Winecard />
    </>
  )
}
