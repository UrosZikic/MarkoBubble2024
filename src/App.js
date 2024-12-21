// import styles
import "./styles/App.css";
// import components
import Nav from "./components/Nav";
import MainHeader from "./components/MainHeader";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import MainProducts from "./components/MainProducts";
import ProductInfo from "./components/ProductInfo";

import { useState, useEffect } from "react";
// import misc
function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [loadAnimation, setLoadAnimation] = useState(0);

  function initiateToggle() {
    setToggleMenu((prev) => !prev);
  }

  useEffect(() => {
    const animateInterval = setInterval(() => {
      setLoadAnimation((prev) => prev + 1);
    }, 200);

    if (loadAnimation > 5) clearInterval(animateInterval);

    return () => clearInterval(animateInterval);
  }, [loadAnimation]);

  useEffect(() => {
    if (toggleMenu) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    // Cleanup when the component unmounts or scroll state changes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [toggleMenu]);

  return (
    <>
      <Nav initiateToggle={initiateToggle} loadAnimation={loadAnimation} />
      <Menu toggleMenu={toggleMenu} initiateToggle={initiateToggle} />
      <MainHeader loadAnimation={loadAnimation} />
      <MainProducts loadAnimation={loadAnimation} />
      <MainSection loadAnimation={loadAnimation} />
      <ProductInfo loadAnimation={loadAnimation} />
      <Contact loadAnimation={loadAnimation} />
      <Footer loadAnimation={loadAnimation} />
    </>
  );
}

export default App;
