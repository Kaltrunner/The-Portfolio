import { Routes, Route } from "react-router-dom";
import Body from "./Body";
import Nav from "./Nav"
import Header from "./Header";
import Bio from "./Bio";
import Featured from "./Featured";
import Footer from "./Footer";
import Resume from "./Resume";
import Projects from "./Projects";
import Clock from "./Clock";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/Nav" element={<Nav />} />
      <Route path="/Header" element={<Header />} />
      <Route path="/Bio" element={<Bio />} />
      <Route path="/Featured" element={<Featured />} />
      <Route path="/Footer" element={<Footer />} />
      <Route path="/Resume" element={<Resume />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Clock" element={<Clock />} />
    </Routes>
  );
}

export default App;
