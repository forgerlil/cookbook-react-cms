import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import MainRecipe from "./components/MainRecipe";
import Introduction from "./components/Introduction";
import NavigationBar from "./components/Navbar";
import Linkcards from "./components/Linkcards";
import { getRecipes } from "./API/API";


/*
  1. Creating a root component that will be rendered on the root path (by using React Router)
	2. Set <Link> components from React Router in each card to set the path to the relevant recipe, and add 
	      classes to the link so Bootstrap will style the Link component adequately
*/

function RecipeRoutes({recipes, getNode}) {
	return (
		<Routes>
      <Route path='/' element={<Introduction recipes={recipes} />} /> 
		  {recipes.map((recipe, index) => <Route key={index} path={recipe.fields.routePath} element={<MainRecipe allRecipes={recipes} recipe={recipe} getRecipeNode={getNode} />} /> )}
		</Routes>
	)
}

function App() {
	const [recipes, setRecipes] = useState(false);
	const [recipeNode, setRecipeNode] = useState(false);

	// recipeNode has the main recipe div for scrolling up to when clicking on the linkcard recipe link
	
	const getRecipeNode = childprop => {
		console.log(childprop)
		setRecipeNode(childprop)
	}

	useEffect(() => {
		(async () => {
			setRecipes(await getRecipes());
		})();
	}, []);

	return (
		recipes && (
			<>
				<img className="bg-image" alt="Varied dishes" />
				<NavigationBar recipes={recipes} />
				<main>
					<div>
						{/* {recipes && console.log(recipes)} */}
					</div>
					<div className="jumbotron text-center">
						<h1 className="page-title">Oma's Cookblog</h1>
					</div>
					<div className="container jumbotron-container">
						<div className="row jumbotron-row">
							<RecipeRoutes recipes={recipes} getNode={getRecipeNode} />
						</div>
					</div>
				</main>
				<Footer />
			</>
		)
	);
}

export default App;
