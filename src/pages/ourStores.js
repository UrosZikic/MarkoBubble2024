import "../styles/App.css";
// import components
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Menu from "../components/Menu";
import { useState, useEffect } from "react";
import MainStore from "../components/mainStore";
import MainStoreMenu from "../components/MainStoreMenu";

export default function OurStores() {
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
      <Menu toggleMenu={toggleMenu} />
      <main>
        <MainStore loadAnimation={loadAnimation} />
        {/* <MainStoreMenu loadAnimation={loadAnimation} /> */}
        <Opened />
        <Contact loadAnimation={loadAnimation} />
      </main>
      <Footer loadAnimation={loadAnimation} />
    </>
  );
}

function Opened() {
  return (
    <div className="width-xl margin-layout m-xl default-flex flex-column flex-align-center gap-xxs">
      <h4>Otvoreni smo svakog dana</h4>
      <p>08:00 - 22:00</p>
      <p>Na adresi - Timocke Bune 17-15 u Zajecaru</p>
      <br />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d854.7012150127281!2d22.275207540670817!3d43.90015066362008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475473d0fff36783%3A0x94cde6752005fead!2sBubble%20Zaje%C4%8Dar!5e0!3m2!1sen!2srs!4v1728282235820!5m2!1sen!2srs"
        style={{ border: "0" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="prodavnica-main"
      ></iframe>
    </div>
  );
}
