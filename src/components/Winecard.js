export default function Winecard () {
  return (
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
  )
}