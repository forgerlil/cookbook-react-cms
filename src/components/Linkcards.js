import Asparagus from '../Pictures/asparagus-starter.jpg'
import Bowl from '../Pictures/cauliflower-bowl.jpeg'
import Lemon from '../Pictures/lemon.png'

export default function Linkcards () {
  return (
    <> 
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
    </> 
  )
}