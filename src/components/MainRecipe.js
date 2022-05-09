import Winecard from "./Winecard";
import LinkCards from './Linkcards';
import { useEffect, useRef } from 'react';
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function IngrTable({ recipe }) {
  const ingredients = recipe.fields.recipeIngredients;

  //Contentful rich text rendering
  const options = {
    renderNode: {
      // Rendering a table inside rich text here. Since Contentful doesn't provide a semantic html table (which we need for Bootstrap styling)
      // we have to pass the first row inside <thead> and the remainder inside <tbody>
      [BLOCKS.TABLE]: (node, children) => (
        <table className="table table-bordered table-striped">
          <thead>{children[0]}</thead>
          <tbody>{children.slice(1)}</tbody>
        </table>
      ),

      // We want three rows in this table, and all apart from the header need a checkbox inside. Since checkboxes can't be added in Contenful,
      // we have to create an extra row manually, add static content for the header row, and checkboxes for the body rows
      [BLOCKS.TABLE_ROW]: (node, children) => {
        const isHeader = children.some((child) => child.type === "th");

        return isHeader ? (
          <tr>
            <th>
              <p>Add to Shopping Cart</p>
            </th>
            {children}
          </tr>
        ) : (
          <tr>
            <td>
              <input
                type="checkbox"
                aria-label="Checkbox for following text input"
              />
            </td>
            {children}
          </tr>
        );
      },
    },
  };

  //And finally we render the table with Contentful's rich text renderer, passing the table object as the first argument
  //and our rendering setup as the second argument
  return (
      documentToReactComponents(ingredients, options)
  );
}

//Component to map a list out of the recipe description string 
function PrepSteps({ prep }) {
  const makeList = prep.split("\n");
  return (
    <ol>
      {makeList.map((eachStep, index) => {
        return <li key={index}>{eachStep}</li>;
      })}
    </ol>
  );
}

// Main recipe gets all recipes to pass to Linkcards and one recipe to populate its content
export default function MainRecipe({ allRecipes, recipe }) {
  const mainRecipeDiv = useRef()

  // Once the node is rendered, the page scrolls to center it in the screen
  useEffect(() => {
    // getNode(mainRecipeDiv.current) --> This would be used to pass the node reference for a parent component, a function prop getNode would
    // need to be passed to this component for it to be accessible in the parent component (<App />)
    mainRecipeDiv.current.scrollIntoView({behavior: "smooth"})
  }, [])

  // Rendering a card with an image, rich text table, preparation steps, a linked/fixed Winecard component, 
  // and Linkcards with the remaining recipes
  return (
    <>
      <div ref={mainRecipeDiv} className="card col-12 col-lg-6" id="main-recipe-card">
        <img
          src={recipe.fields.recipePicture[0].fields.file.url}
          className="card-img-top img-fluid main-recipe-img"
          alt={recipe.fields.recipePicture[0].fields.description}
        />
        <div className="card-body">
          <h5 className="card-title">How to make {recipe.fields.recipeName}</h5>
          <IngrTable recipe={recipe} />
          <h6>Preparation instructions</h6>
          <PrepSteps prep={recipe.fields.recipeDescription} />
        </div>
      </div>
      <Winecard wine={recipe.fields.wine.fields} />
      <LinkCards giveNode={mainRecipeDiv && mainRecipeDiv.current} recipe={allRecipes} />
    </>
  );
}
