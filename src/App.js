import { Routes, Route } from "react-router-dom";
import Body from "./Body";
import Nav from "./Nav";
import Header from "./Header";
import Bio from "./Bio";
import Featured from "./Featured";
import Featured1 from "./Featured-1";
import Featured2 from "./Featured-2";
import Hidden from "./Hidden";
import Footer from "./Footer";
import Projects from "./Projects";
import Clock from "./Clock";
import Mouse from "./Mouse";
import "./index.css";

function App() {
  return (
    <>
      <Mouse />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/Nav" element={<Nav />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/Bio" element={<Bio />} />
        <Route path="/Featured" element={<Featured />} />
        <Route path="/Featured-1" element={<Featured1 />} />
        <Route path="/Featured-2" element={<Featured2 />} />
        <Route path="/Hidden" element={<Hidden />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Clock" element={<Clock />} />
      </Routes>
    </>
  );
}

export default App;
