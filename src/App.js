import './App.css';
import {Link, NavLink, Routes, Route, useParams } from 'react-router-dom'
import Footer from './components/Footer'
import Mainrecipe from './components/Mainrecipe';
import Winecard from './components/Winecard';
import NavigationBar from './components/Navbar'
import Linkcards from './components/Linkcards';

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
            <Mainrecipe />
            <Winecard />
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
