import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer-body-div" >

<div>
          <p className="footer-text" id="all-pro" >./Projects</p>
      </div>

      <div>
        <ul>
          <Link to="/Resume" className="nav-resume-link" ><p className="footer-text">Resume /</p></Link>

          <p className="footer-text"><a className="tag" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/erik-russell-software-engineer/">LinkedIn /</a></p>

          <p className="footer-text"><a className="tag" target="_blank" rel="noreferrer" href="https://github.com/Kaltrunner" >GitHub /</a></p>

          <p className="footer-text"><a className="tag" target="_blank" rel="noreferrer" href="https://medium.com/@erikrussells">Blog/</a></p>
          
          
        </ul>
      </div>

      <div className="">
        <ul>
          <p className="footer-text" >
            <a 
              className="tag"
              href="mailto:erikrussells@gmail.com?subject=Hello!"
            >
              erikrussells@gmail.com
            </a>
          </p>

          <p className="footer-text"><a  className="tag"  target="_blank" rel="noreferrer" href="https://www.instagram.com/russellerik/?hl=en" >Instagram /</a></p>

          <p className="footer-text"><a className="tag" target="_blank" rel="noreferrer" href="https://open.spotify.com/artist/55PSX5vztaOftFhmVG3Q2D" >Music /</a></p>

          <p className="footer-logo">© 2023 Erik Russell<br/>all rights resurved</p>
        </ul>
        
      </div>

        </div>
    )
}

export default Footer