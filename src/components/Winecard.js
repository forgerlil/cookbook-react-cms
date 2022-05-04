export default function Winecard ({wine}) {

  return (
    <div className="col-12 col-lg-6 mb-4 wine-card">
      <div className="card wine-card-style">
        <img className="card-img-top img-fluid" src={wine.winePairingImage.fields.file.url} alt="Wine suggestion" />
          <div className="card-body">
            <h5 className="card-title">{wine.winePairingName}</h5> 
              <p className="card-text winecard-text">{wine.winePairingDescription}</p>
              <a href="https://www.amazon.de/-/en/dp/B0867WY225/ref=sr_1_7?crid=OWBYDWIWUT8R&keywords=kindsmarauli+rotwein&qid=1648593595&sprefix=kingsmaraul%2Caps%2C92&sr=8-7"  className="btn btn-primary btn-block">Order our wine suggestion</a>                 
          </div>
      </div>
    </div>
  )
}