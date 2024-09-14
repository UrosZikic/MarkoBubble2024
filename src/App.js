// import styles
import "./styles/App.css";
// import components
import Nav from "./components/Nav";
import MainHeader from "./components/MainHeader";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Menu from "./components/Menu";

import { useState, useEffect } from "react";
// import misc
function App() {
  const [toggleMenu, setToggleMenu] = useState(false);

  function initiateToggle() {
    setToggleMenu((prev) => !prev);
  }

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
      <Nav initiateToggle={initiateToggle} />
      <Menu toggleMenu={toggleMenu} />
      <MainHeader />
      <MainSection />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
