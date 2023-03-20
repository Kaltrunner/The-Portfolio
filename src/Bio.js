
function Bio() {
  return (
    <div className="bio-body-div">

      <div className="bio-content-div">

        <div className="bio-img-div">
          <img src="image0.jpeg" alt="erik bio" />
        </div>

        <div className="bio-text-div">
          
            <h2 className="bio-text" > Hello! I am a frontend web engineer, I am currently expanding my knowledge of software
          languages and building a body of work to express my skill set, styles,
          and compassion for engineering.</h2>

          <p className="link">
        Reach out
        <br />
        <a className="tag" id="reach-out-link" href="mailto:erikrussells@gmail.com?subject=Hello!">
          erikrussells@gmail.com
        </a>
      </p>
          
        </div>

        

      </div>
      {/* <div className="line-div" ></div> */}
    </div>
    
  );
}

export default Bio;
