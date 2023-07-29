import Nav from "./Nav";
import Header from "./Header";
import Bio from "./Bio";
import Featured from "./Featured";
import Footer from "./Footer";

function Body() {
  return (
    <>
      <Nav />
      <Header />
      <div>
        <Bio />
      </div>
      <div>
        <Featured />
      </div>
      <Footer />
    </>
  );
}

export default Body;
