import WineLogo from '../Pictures/FoodWine.jpeg'

export default function NavigationBar () {
  return (
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
        <div>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Recipe Name" aria-label="Search" />
            <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </header>
  )
}