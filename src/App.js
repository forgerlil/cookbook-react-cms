import "./App.css";
import { useState, useEffect } from "react";
import { Link, NavLink, Routes, Route, useParams } from "react-router-dom";
import Footer from "./components/Footer";
import MainRecipe from "./components/MainRecipe";
import NavigationBar from "./components/Navbar";
import Linkcards from "./components/Linkcards";
import { getAllData, getRecipes } from "./API/API";

/*
 React Router?
	Paths: "/plov", "/zesty_asparagus", "/lemon_drizzle", "/cauliflower_burrito_bowl"
	Each path fetches only their relevant info and displays into screen, OR each different path has the fetch return different chunks of info?
	 VS
	No React Router and have the components fetch all different recipes and display them differently? How to?
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
	// const [allData, setAllData] = useState(false);

	useEffect(() => {
		(async () => {
			setRecipes(await getRecipes());
			// setAllData(await getAllData());
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
						{/* {allData && console.log(allData)} */}
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

/*
	Instead of creating each component:
	 render 1 root component (with a list of recipe card ie. with a preview)
	 inside recipe list, map a array for each object to render the recipe card
	 idea - can have the latest published recipe inside <LatestRecipe />

*/
