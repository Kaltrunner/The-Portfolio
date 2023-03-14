function Featured() {
  return (
    <div className="featured-body-div">
      <div className="line-div"></div>

      <h1 className="header-text" id="featured-h1">
        Featured Work /
      </h1>

      <div className="sample-body" id="section-1">
        <div className="sample">
          <div className="sample-img-div">
            <img
              className="sample-img"
              src="Screenshot 2023-03-13 at 2.42.06 PM.png"
              alt="Rudy"
            />
          </div>

          <div className="sample-text-div">
            <a
              id="sample-link"
              target="_blank"
              rel="noreferrer"
              href="/"
            >
              <h4 className="sample-name-text">.Rudy</h4>
            </a>
            <p className="sample-text">
              .Rudy is a fully functional design system, consisting of buttons,
              toggles, sliders, color grids and many more.
            </p>
          </div>
        </div>

        <div className="sample" id="sample-2">
          <div className="sample-img-div">
            <img
              className="sample-img"
              src="Screenshot 2023-03-13 at 2.30.32 PM.png"
              alt="Nútímasafn"
            />
          </div>

          <div className="sample-text-div">
            <a
              id="sample-link"
              target="_blank"
              rel="noreferrer"
              href="/"
            >
              <h4 className="sample-name-text">Nútímasafn</h4>
            </a>
            <p className="sample-text">
              Nútímasafn is a front end only web site modled to have the
              appearance and feel of exploring a mordern museum website.
            </p>
          </div>
        </div>
        </div>

        {/* <div className="sample-body" id="section-1">
        <div className="sample">
          <div className="sample-img-div">
            <img
              className="sample-img"
              src="Screenshot 2023-03-13 at 5.38.58 PM.png"
              alt="Rudy"
            />
          </div>

          <div className="sample-text-div">
            <a
              id="sample-link"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Kaltrunner/Rudy"
            >
              <h4 className="sample-name-text">Placeholder</h4>
            </a>
            <p className="sample-text">
              ...
            </p>
          </div>
        </div>

        <div className="sample" id="sample-2">
          <div className="sample-img-div">
            <img
              className="sample-img"
              src="Screenshot 2023-03-13 at 5.46.13 PM.png"
              alt="Nútímasafn"
            />
          </div>

          <div className="sample-text-div">
            <a
              id="sample-link"
              target="_blank"
              rel="noreferrer"
              href="sample"
            >
              <h4 className="sample-name-text">Placeholder</h4>
            </a>
            <p className="sample-text">
              ...
            </p>
          </div>
        </div>
        </div> */}
    </div>
  );
}

export default Featured;
