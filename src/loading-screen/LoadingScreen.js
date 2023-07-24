import "./loadingScreen.css";
import CountUp from "react-countup";

function loadingScreen() {
  return (
    <>
      <div className="loading-body-div">
        <CountUp className="loading-text" end={100} duration={2.95} />
        <p className="loading-text">%</p>
      </div>
    </>
  );
}

export default loadingScreen;
