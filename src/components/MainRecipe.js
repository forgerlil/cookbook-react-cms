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
      [BLOCKS.TABLE]: (node, children) => (
        <table className="table table-bordered table-striped">
          <thead>{children[0]}</thead>
          <tbody>{children.slice(1)}</tbody>
        </table>
      ),

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

  return (
      documentToReactComponents(ingredients, options)
  );
}

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

export default function MainRecipe({ allRecipes, recipe, getNode }) {
  const mainRecipeDiv = useRef()

  useEffect(() => {
    getNode(mainRecipeDiv.current)
    mainRecipeDiv.current.scrollIntoView({behavior: "smooth"})
  }, [])

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
