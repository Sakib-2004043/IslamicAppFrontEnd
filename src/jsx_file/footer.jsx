import prfileLogo from '/images/profile.png'
import gmailLogo from '/images/gmail.png'
import whatsappLogo from '/images/whatsapp.png'

function Footer(){


  return(<>
    <div className="footer-container">
      <h3>Contact Us</h3>
      <div className="grid-container">

        <div className="first-grid">
          <span className="inline-div">
            <img src={prfileLogo} className="footer-logo" />
            Sakibul Hasan
          </span>
          <span className="inline-div">
            <img src={gmailLogo} className="footer-logo" />
            <a href="mailto:u2004043@student.cuet.ac.bd" className="link-holder">
              u2004043@student.cuet.ac.bd
            </a>
          </span>
          <span className="inline-div">
            <img src={whatsappLogo} className="footer-logo" />
            <a href="https://wa.me/8801993634837" className="link-holder">
              +880 1993 634837
            </a>
          </span>
        </div>

        <div className="second-grid">
          
          <span className="inline-div">
            <img src={prfileLogo} className="footer-logo"/>
            Md Tasin Abdullah
          </span>
          <span className="inline-div">
            <img src={gmailLogo} className="footer-logo"/>
            <a href="mailto:u2004059@student.cuet.ac.bd" className="link-holder">
              u2004059@student.cuet.ac.bd
            </a>
          </span>
          <span className="inline-div">
            <img src={whatsappLogo} className="footer-logo"/>
            <a href="https://wa.me/8801788640498" className="link-holder">
             +880 1788 640498
            </a>
          </span>

        </div>

        <div className="third-grid">
          
          <span className="inline-div">
            <img src={prfileLogo} className="footer-logo"/>
            Abdullah Mahmud
          </span>
          <span className="inline-div">
            <img src={gmailLogo} className="footer-logo"/>
            <a href="mailto:u2004057@student.cuet.ac.bd" className="link-holder">
              u2004057@student.cuet.ac.bd
            </a>
          </span>
          <span className="inline-div">
            <img src={whatsappLogo} className="footer-logo"/>
            <a href="https://wa.me/8801881651683" className="link-holder">
              +880 1881 651683
            </a>
          </span>
        </div>
      </div>
      <footer>
        <span> &copy; {new Date().getFullYear()} Day To Day Islam</span>
        <br /><br />
        <br /><br />
        --★★★--
      </footer>
    </div>
  </>)
}

export default Footer;