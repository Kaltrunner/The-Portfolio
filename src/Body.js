import Nav from "./Nav";
import Header from "./Header";
import Bio from "./Bio";
import Featured from "./Featured";
import Footer from "./Footer";

function Body() {
  return (
    <div className="body-container">
      <Nav />
      <Header />
      <Bio />
      <Featured />
      <Footer />
    </div>
  );
}

export default Body;
