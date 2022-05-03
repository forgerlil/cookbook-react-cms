import './App.css';
import { useState, useEffect } from 'react';
import {Link, NavLink, Routes, Route, useParams } from 'react-router-dom'
import Footer from './components/Footer'
import OrzoRecipe from './components/Orzo';
import AsparagusRecipe from './components/Asparagus';
import BurritoBowl from './components/BurritoBowl';
import LemonDrizzle from './components/LemonDrizzle';
import NavigationBar from './components/Navbar'
import Linkcards from './components/Linkcards';
import { getRecipes, getWines } from './API/API'

/*
 React Router?
  Paths: "/plov", "/zesty_asparagus", "/lemon_drizzle", "/cauliflower_burrito_bowl"
  Each path fetches only their relevant info and displays into screen, OR each different path has the fetch return different chunks of info?
   VS
  No React Router and have the components fetch all different recipes and display them differently? How to?
*/


function App() {
  const [recipes, setRecipes] = useState(false)
  const [wines, setWines] = useState(false)

  useEffect(() => {
    (async () => {
      setRecipes(await getRecipes());
      setWines(await getWines());
    })();
  }, []);

  return (
    recipes &&
    <>
      <img className="bg-image" alt="Varied dishes" />
      <NavigationBar />
      <main>
        <div>
          {/* {allData && allData.map(eachEntry => console.log(eachEntry.fields))} */}
          {/* {recipes && console.log(recipes)} */}
          {/* {recipes && console.log(recipes.map(eachRecipe => console.log(eachRecipe.fields.recipePicture[0].fields.file.url)))} */}
          {/* {wines && console.log(wines)} */}
        </div>
        <div className="jumbotron text-center">
          <h1 className="page-title">Oma's Cookblog</h1>
        </div>             
        <div className="container jumbotron-container">
          <div className="row jumbotron-row">
            {/*Contentful changes fetched array's order depending on publish order. How to work around this?*/}
            <Routes>
              <Route path="/orzo" element={<OrzoRecipe recipe={recipes[0]} wine={wines && wines} />} />
              <Route path="/burritobowl" element={<BurritoBowl recipe={recipes[1]} wine={wines && wines} />} />
              <Route path="/lemondrizzle" element={<LemonDrizzle recipe={recipes[2]} wine={wines && wines} />} />
              <Route path="/asparagus" element={<AsparagusRecipe recipe={recipes[3]} wine={wines && wines} />} />
            </Routes>
          </div>
          <div className="row card-section">
            <Linkcards recipe={recipes} />
          </div>
        </div> 
      </main>
      <Footer />
    </>
  );
}

export default App;


/*
  Instead of creating each component:
   render 1 root component (with a list of recipe card ie. with a preview)
   inside recipe list, map a array for each object to render the recipe card
  idea - can have the latest published recipe inside <LatestRecipe />
*/