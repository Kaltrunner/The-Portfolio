import Clock from "./Clock";

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
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
            <li className="menu-item">Linkedin /</li>
            <li className="menu-item">Github /</li>
            <li className="menu-item">Blog /</li>
          </ul>
        </div>
        
    </div>
  );
}

export default Nav;
