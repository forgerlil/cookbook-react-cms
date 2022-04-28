import './App.css';
import {Link, NavLink, Routes, Route, useParams } from 'react-router-dom'
import Footer from './components/Footer'
import Mainrecipe from './components/Mainrecipe';
import NavigationBar from './components/Navbar'
import Linkcards from './components/Linkcards';
import API from './API/API'

/*
 React Router?
  Paths: "/plov", "/zesty_asparagus", "/lemon_drizzle", "/cauliflower_burrito_bowl"
  Each path fetches only their relevant info and displays into screen, OR each different path has the fetch return different chunks of info?
   VS
  No React Router and have the components fetch all different recipes and display them differently? How to?
*/

function App() {
  return (
    <>
      <img className="bg-image" alt="Varied dishes" />
      <NavigationBar />
      <main>
        <div className="jumbotron text-center">
          <h1 className="page-title">Oma's Cookblog</h1>
        </div>             
        <div className="container jumbotron-container">
          <div className="row jumbotron-row">
            <Mainrecipe data={fetchedData}/>
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
