function Bio() {
  return (
    <div className="bio-body-div">
      <div className="bio-content-div">
        <div className="bio-img-div">
          {/* <img src="image0.jpeg" alt="erik bio" /> */}
        </div>

        <div className="bio-text-div">
          <h2 className="bio-text">
            {" "}
            I'm, a{" "}
            <a
              id="bio-link"
              target="_blank"
              rel="noreferrer"
              href="https://flatironschool.com/courses/coding-bootcamp/"
            >
              Flatiron School
            </a>{" "}
            grad and front end engineer with a background in screen printing.
            With a sharp eye for design and a passion for both art and
            technology, I build, user-friendly interfaces that are easy & fun to navigate.
          </h2>

          <p className="link">
            Reach out
            <br />
        <a className="tag" id="reach-out-link" href="mailto:erikrussells@gmail.com?subject=Hello!">
          erikrussells@gmail.com
        </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Bio;
