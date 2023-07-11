// import React, { useEffect } from "react";
import Nav from "./Nav";
import Header from "./Header";
import Bio from "./Bio";
import Featured from "./Featured";
import Footer from "./Footer";

function Body() {
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("show");
  //       } else {
  //         entry.target.classList.remove("show");
  //       }
  //     });
  //   });

  //   const hiddenElements = document.querySelectorAll(".hidden");
  //   hiddenElements.forEach((element) => observer.observe(element));

  //   return () => {
  //     hiddenElements.forEach((element) => observer.unobserve(element));
  //   };
  // }, []);

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
