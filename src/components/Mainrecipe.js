import Plov from '../Pictures/samarkand_plov.jpeg'

export default function Mainrecipe () {
  return (
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
  )
}
