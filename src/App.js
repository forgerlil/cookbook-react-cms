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
  // client.getEntries().then(response => console.log(response));

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
          {recipes && console.log(recipes)}
          {wines && console.log(wines)}
        </div>
        <div className="jumbotron text-center">
          <h1 className="page-title">Oma's Cookblog</h1>
        </div>             
        <div className="container jumbotron-container">
          <div className="row jumbotron-row">
            {/*Contentful changes fetched array's order depending on publish order. How to work around this?*/}
            <Routes>
              <Route path="/" element={<OrzoRecipe recipe={recipes && recipes[0]} wine={wines && wines} />} />
              <Route path="/burritobowl" element={<BurritoBowl recipe={recipes && recipes[1]} wine={wines && wines} />} />
              <Route path="/lemondrizzle" element={<LemonDrizzle recipe={recipes && recipes[2]} wine={wines && wines} />} />
              <Route path="/asparagus" element={<AsparagusRecipe recipe={recipes && recipes[3]} wine={wines && wines} />} />
            </Routes>
          </div>
          <div className="row card-section">
            <Linkcards />
          </div>
        </div> 
      </main>
      <Footer />
    </>
  );
}

export default App;
