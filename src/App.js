import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import MainRecipe from "./components/MainRecipe";
import Introduction from "./components/Introduction";
import NavigationBar from "./components/Navbar";
import { getRecipes } from "./API/API";


function RecipeRoutes({recipes}) {
	const [recipeNode, setRecipeNode] = useState(false);
	
	const getRecipeNode = childprop => {
		// console.log(childprop)
		setRecipeNode(childprop)
	}

	return (
		<Routes>
      <Route path='/' element={<Introduction recipes={recipes} />} /> 
		  {recipes.map((recipe, index) => <Route key={index} path={recipe.fields.routePath} element={<MainRecipe allRecipes={recipes} recipe={recipe} getNode={getRecipeNode} />} /> )}
		</Routes>
	)
}

function App() {
	const [recipes, setRecipes] = useState(false);

	// While not being used, this is the way to get a prop from a child (for future reference):
	// const [recipeNode, setRecipeNode] = useState(false);
	
	// const getRecipeNode = childprop => {
	// 	console.log(childprop)
	// 	setRecipeNode(childprop)
	// }

	useEffect(() => {
		(async () => {
			setRecipes(await getRecipes());
		})();
	}, []);

	return (
		recipes && (
			<>
				<img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="bg-image" alt="Varied dishes" />
				<NavigationBar recipes={recipes} />
				<main>
					<div className="jumbotron text-center">
						<h1 className="page-title">Oma's Cookblog</h1>
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
