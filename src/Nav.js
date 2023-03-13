import Clock from "./Clock";

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    document.getElementById("navbar").style.top = "-115px";
  } else {
    document.getElementById("navbar").style.top = "0";
  }
}

function Nav() {
  return (
    <div className="nav-body-div" id="navbar">
     
        <div className="clock-div">
          <Clock />
        </div>

        <div className="nav-menu-div">
          <ul className="menu-list">

            <li className="menu-item">Resumé /</li>

            <li className="menu-item"> <a id="menu-link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/erik-russell-software-engineer/">Linkedin / </a></li>

            <li className="menu-item"><a id="menu-link" target="_blank" rel="noreferrer" href="https://github.com/Kaltrunner" >GitHub /</a></li>

            <li className="menu-item"><a id="menu-link" target="_blank" rel="noreferrer" href="https://medium.com/@erikrussells">Blog /</a></li>

          </ul>
        </div>
        
    </div>
  );
}

export default Nav;
