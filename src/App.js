import './App.css';
import Asparagus from './Pictures/asparagus-starter.jpg'
import Bowl from './Pictures/cauliflower-bowl.jpeg'
import Plov from './Pictures/samarkand_plov.jpeg'
import WineLogo from './Pictures/FoodWine.jpeg'
import GitHub from './Pictures/github.svg'
import Facebook from './Pictures/facebook.svg'
import Google from './Pictures/google.svg'
import Instagram from './Pictures/instagram.svg'
import Linkedin from './Pictures/linkedin.svg'
import Twitter from './Pictures/twitter.svg'
import Lemon from './Pictures/lemon.png'
import {Link, NavLink, Routes, Route, useParams } from 'react-router-dom'

function App() {
  return (
    <>
      <img className="bg-image" alt="Varied dishes" />
      <header>
        <a class="navbar-brand" href="#"><img width="50px" height="50px" src={WineLogo} alt="Logo" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#"> About <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"> Wine <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" data-toggle="dropdown" aria-expanded="false">Recipes
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="bowl.html">Cauliflower Rice Burrito</a>
                <a className="dropdown-item" href="zestyasparagus.html">Zesty Asparagus</a>
                <a className="dropdown-item" href="lemondrizzle.html">Lemon Drizzle Cake</a>
              </div>
            </li>
          </ul>
          <div className="">
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Recipe Name" aria-label="Search" />
              <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </div>
      </header>
      <main>
        <div className="jumbotron text-center">
          <h1 className="page-title">Oma's Cookblog</h1>
        </div>             
        <div className="container jumbotron-container">
          <div className="row jumbotron-row">
            <div className="card col-12 col-lg-6">
              <img src={Plov} className="card-img-top img-fluid main-recipe-img" alt="test" />
              <div className="card-body">
                <h5 className="card-title">How to make Uzbek plov</h5>
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Add to shopping list</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Ingredients</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <input type="checkbox" aria-label="Checkbox for following text input" />
                      </th>
                      <td>750 g</td>
                      <td>beef or mutton</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <input type="checkbox" aria-label="Checkbox for following text input" />
                      </th>
                      <td>900 g</td>
                      <td>uncooked rice</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <input type="checkbox" aria-label="Checkbox for following text input" />
                      </th>
                      <td>600 g</td>
                      <td>onions</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <input type="checkbox" aria-label="Checkbox for following text input" />
                      </th>
                      <td>750 g</td>
                      <td>beef or mutton</td>
                    </tr>
                  </tbody>
                </table>
                <h6>Preparation instructions</h6>
                <ol>
                  <li>Heat oil in a pan.</li>
                  <li> Fry sliced onions until golden.</li>
                  <li> Cut meat into large cubes, add to oil and cook until meat is brown.</li>
                  <li> Slice carrots longways and add to meat and onion salt, pepper and spices to pan.</li>
                  <li> Pour water just to cover the ingredients, heat until water bubbles, then simmer on very low heat until carrots and meat is cooked. Do not stir.</li>
                  <li> Wash and drain rice and layer it on top of the carrots in the plan. Season generously with salt.</li>
                  <li> Pour boiling water over pan until it just covers the rice (around 2 cm).</li>
                  <li> Increase the heat until boiling and water boils away and rice is cooked al dente.</li>
                  <li> Reduce heat to very low, cover pan with lid and let it steam for 20 minutes.</li>
                  <li> To serve, place rice on the bottom of the plate, followed by sliced carrots and chunks of meat.</li>
                  <li> Makes 5-6 portions.</li>
                </ol>
              </div>
            </div>
            <div className="col-12 col-lg-6 mb-4 wine-card">
              <div className="card wine-card-style">
                <img className="card-img-top img-fluid" src="https://www.suhl-shop.de/media/catalog/product/cache/1/image/1800x/6b6381004f8ead6b6959b746082e54e0/k/i/kindzmarsuli_004.jpg" alt="Wine suggestion" />
                <div className="card-body">
                  <h5 className="card-title">Our Wine pairing suggestion</h5> 
                  <p className="card-text winecard-text"> “A hands-on tasting experience in a winery’s Barrel Room is the perfect way to get up-close and personal with the winemaker.  Tasting wine from a barrel also gives you some understanding, and appreciation, for the transformation it will go through before making it to the bottle!” ~ Bruce and Pam Boring, Founders, The California Wine Club</p>
                  <a href="https://www.amazon.de/-/en/dp/B0867WY225/ref=sr_1_7?crid=OWBYDWIWUT8R&keywords=kindsmarauli+rotwein&qid=1648593595&sprefix=kingsmaraul%2Caps%2C92&sr=8-7"  className="btn btn-primary btn-block">Order our wine suggestion</a>                 
                </div>
              </div>
            </div>
          </div>
          <div className="row card-section">
            <div className="col-lg-4 diff-recipe">
              <div className="card recipe-card">
                <img src={Asparagus} className="card-img-top diff-recipe-img" alt="..." />
                <div className="card-body">
                  <h6 className="card-title">Zesty Asparagus</h6>
                  <p className="card-text">Sweet spring asparagus needs only lemon, butter and parmesan in this classic and classy recipe.</p>
                  <a href="zestyasparagus.html" className="btn btn-success btn-block">Asparagus Starter</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 diff-recipe">
              <div className="card recipe-card">
                <img src={Bowl} className="card-img-top diff-recipe-img" alt="burrito bowl" />
                <div className="card-body">
                  <h6 className="card-title">Cauliflower Rice Bowl</h6>
                  <p className="card-text">If you love burrito bowls then this homemade burrito bowl is going to be a total game changer!</p>
                  <a href="bowl.html" className="btn btn-primary btn-block">Burrito Bowl</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 diff-recipe">
              <div className="card recipe-card">
                <img src={Lemon} className="card-img-top diff-recipe-img" alt="lemon cake" />
                <div className="card-body">
                  <h6 className="card-title">Lemon Drizzle Cake</h6>
                  <p className="card-text">This wonderfully simple lemon drizzle cake recipe is super-quick to prepare.<br /> Healthy and amazingly tasty.</p>
                  <a href="lemondrizzle.html" className="btn btn-warning btn-block">Lemon Drizzle Cake</a>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </main>
      <footer className="text-center text-white">
        <div className="container pt-4" >
          <section className="mb-4">
            <p className="text-center text-dark">Share this recipe on:</p>
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#"
              role="button"
              data-mdb-ripple-color="dark"
              ><img src={Facebook} alt="Facebook logo" />
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href=""
              role="button"
              data-mdb-ripple-color="dark"
              ><img src={Twitter} alt="Facebook logo" />
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href=""
              role="button"
              data-mdb-ripple-color="dark"
              ><img src={Google} alt="Facebook logo" />
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href=""
              role="button"
              data-mdb-ripple-color="dark"
              ><img src={Instagram} alt="Facebook logo" />
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href=""
              role="button"
              data-mdb-ripple-color="dark"
              ><img src={Linkedin} alt="Facebook logo" />
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://github.com/forgerlil/cookbook-react-cms"
              role="button"
              data-mdb-ripple-color="dark"
              ><img src={GitHub} alt="Facebook logo" />
            </a>
          </section>
        </div>
        <div className="text-center text-dark p-3 copyright">
            © 2022 Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
      </footer>
    </>
  );
}

export default App;
