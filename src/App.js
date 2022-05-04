import "./App.css";
import { useState, useEffect } from "react";
import { Link, NavLink, Routes, Route, useParams } from "react-router-dom";
import Footer from "./components/Footer";
import MainRecipe from "./components/MainRecipe";
import NavigationBar from "./components/Navbar";
import Linkcards from "./components/Linkcards";
import { getAllData, getRecipes } from "./API/API";


/*
  1. Creating a root component that will be rendered on the root path (by using React Router)
	2. Set <Link> components from React Router in each card to set the path to the relevant recipe, and add 
	      classes to the link so Bootstrap will style the Link component adequately
*/

function RecipeRoutes({recipes}) {
	return (
		<Routes>
		{recipes.map((recipe, index) => <Route key={index} path={recipe.fields.routePath} element={<MainRecipe recipe={recipe} />} /> )}
		</Routes>
	)
}


function App() {
	const [recipes, setRecipes] = useState(false);

	useEffect(() => {
		(async () => {
			setRecipes(await getRecipes());
		})();
	}, []);

	return (
		recipes && (
			<>
				<img className="bg-image" alt="Varied dishes" />
				<NavigationBar />
				<main>
					<div>
						{/* {recipes && console.log(recipes)} */}
					</div>
					<div className="jumbotron text-center">
						<h1 className="page-title">Oma's Cookblog</h1>
					</div>
					<div className="container jumbotron-container">
						<div className="row jumbotron-row">
							<RecipeRoutes recipes={recipes}/>
						</div>
						<div className="row card-section">
							<Linkcards recipe={recipes} />
						</div>
					</div>
				</main>
				<Footer />
			</>
		)
	);
}

export default App;
