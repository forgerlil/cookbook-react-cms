import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import MainRecipe from "./components/MainRecipe";
import Introduction from "./components/Introduction";
import NavigationBar from "./components/Navbar";
import { getRecipes } from "./API/API";

// This component renders all routes for the page
function RecipeRoutes({recipes}) {
	// While not being used anymore due to refactoring, this is the way to get a prop from a child (for future reference)
	// const [recipeNode, setRecipeNode] = useState(false);
	
	// const getRecipeNode = childprop => {
	// 	console.log(childprop)
	// 	setRecipeNode(childprop)
	// }
	// The <MainRecipe /> component would need to receive a prop to pass this function (not calling!) so this component has access to that node
	// like <MainRecipe getNode={getRecipeNode} />

	return (
		<Routes>
      <Route path='/' element={<Introduction recipes={recipes} />} /> 
		  {recipes.map((recipe, index) => <Route key={index} path={recipe.fields.routePath} element={<MainRecipe allRecipes={recipes} recipe={recipe} />} /> )}
		</Routes>
	)
}

function App() {
	const [recipes, setRecipes] = useState(false);

	// Contentful data fetch here, and storing it in a variable
	useEffect(() => {
		(async () => {
			setRecipes(await getRecipes());
		})();
	}, []);

	// Waiting for the data to be fetched before rendering components and passing down data 
	return (
		recipes && (
			<>
				<img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="bg-image" alt="Varied dishes" />
				<NavigationBar recipes={recipes} />
				<main>
					<div className="jumbotron text-center">
						<h1 className="page-title">Smart Cuisine</h1>
					</div>
					<div className="container jumbotron-container">
						<div className="row jumbotron-row">
							<RecipeRoutes recipes={recipes} />
						</div>
					</div>
				</main>
				<Footer />
			</>
		)
	);
}

export default App;
