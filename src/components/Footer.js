import GitHub from '../Pictures/github.svg'
import Facebook from '../Pictures/facebook.svg'
import Google from '../Pictures/google.svg'
import Instagram from '../Pictures/instagram.svg'
import Linkedin from '../Pictures/linkedin.svg'
import Twitter from '../Pictures/twitter.svg'

function Footer () {
  return (
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
    )
}

export default Footer;