export default function Winecard ({wine}) {
  console.log(wine)
  const wineFields = wine.fields

  return (
    <div className="col-12 col-lg-6 mb-4 wine-card">
      <div className="card wine-card-style">
        <img className="card-img-top img-fluid" src={wineFields.winePairingImage.fields.file.url} alt="Wine suggestion" />
          <div className="card-body">
            <h5 className="card-title">{wineFields.winePairingName}</h5> 
              <p className="card-text winecard-text">{wineFields.winePairingDescription}</p>
              <a href="https://www.amazon.de/-/en/dp/B0867WY225/ref=sr_1_7?crid=OWBYDWIWUT8R&keywords=kindsmarauli+rotwein&qid=1648593595&sprefix=kingsmaraul%2Caps%2C92&sr=8-7"  className="btn btn-primary btn-block">Order our wine suggestion</a>                 
          </div>
      </div>
    </div>
  )
}