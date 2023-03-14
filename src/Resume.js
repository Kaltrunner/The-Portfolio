import Footer from "./Footer";
import { Link } from "react-router-dom";
import { ScrollToTop } from 'react-router-scroll-to-top';



function Resume() {

    // const location = useLocation();
    // console.log(location);

  return (
    <>
    <div className="resume-bodu-div">

        <ul  className="sub-menu-list">
            <li className="sub-menu-item" id="disabled" >/ Erik Russell</li>
            <Link to="/" className="nav-resume-link"  ><li className="menu-item" >/ Home</li></Link>
        </ul>

      <div className="resume-header-text-div">
        <h1 className="header-text">Resume</h1>
      </div>

      <div className="line-div"></div>
<div className="resume-container" >
      <div className="resume-div">
            <div><img id="resume-img" src="Screenshot 2023-03-13 at 10.29.54 PM.png" alt="resume" /></div>
      </div>
      </div>
     
    </div>
    <Footer />
    <ScrollToTop />
    </>
  );
}

export default Resume;
