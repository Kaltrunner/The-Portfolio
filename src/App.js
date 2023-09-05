import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Body from "./Body";
import Featured1 from "./Featured-1";
import Featured2 from "./Featured-2";
import Hidden from "./Hidden";
import Projects from "./Projects";
import Mouse from "./Mouse";
import LoadingScreen from "./loading-screen/LoadingScreen";
import "./index.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    setTimeout(() => {
      setIsLoaded(true);
    }, 3700);
  }, []);

  return isLoading ? (
    <LoadingScreen />
  ) : (
    <>
      <div className={`app-content ${isLoaded ? "fade-in" : ""}`}>
        <Mouse />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/Featured-1" element={<Featured1 />} />
          <Route path="/Featured-2" element={<Featured2 />} />
          <Route path="/Hidden" element={<Hidden />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
