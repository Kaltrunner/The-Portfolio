import { Link } from "react-router-dom";

function Featured() {
  return (
    <div className="featured-body-div">
      <h1 className="header-text" id="featured-h1">
        Featured Work
      </h1>
      <div className="line-div"></div>
      <div className="sample-body" id="section-1">
        <div className="sample">
          <div className="sample-img-div">
            <Link to="Featured-1" id="sample-link">
              <img className="sample-img" src="test asset.png" alt="" />
            </Link>
          </div>

          <div className="sample-text-div">
            <Link to="Featured-1" id="sample-link">
              <h4 className="sample-name-text">New Matter</h4>
            </Link>
            <p className="sample-text">
              where you can explore the latest findings on extraterrestrial
              analysis and delve into the world of Betelgeuse's
              stellar evolution and its mysterious dimming phenomenon.
            </p>
          </div>
        </div>

        <div className="sample">
          <div className="sample-img-div">
            <Link to="Featured-2" id="sample-link">
              <img
                className="sample-img"
                src="Nútímasafn-home.png"
                alt="Nútímasafn"
              />
            </Link>
          </div>
          <div className="sample-text-div">
            <Link to="Featured-2" id="sample-link">
              <h4 className="sample-name-text">Nútímasafn</h4>
            </Link>
            <p className="sample-text">
              Nútímasafn is a front end only web site modled to have the
              appearance and feel of exploring a mordern museum website.
            </p>
          </div>
        </div>

        {/* <div className="sample">
          <div className="sample-img-div">
            <Link to="Featured-3" id="sample-link">
              <img
                className="sample-img"
                id="coming-soon"
                src=""
                alt=""
              />
            </Link>
          </div>
          <div className="sample-text-div">
            <Link to="Featured-3" id="sample-link">
              <h4 className="sample-name-text" id="coming-soon-text" >Coming Soon</h4>
            </Link>
            <p className="sample-text" id="coming-soon-text" >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Featured;
