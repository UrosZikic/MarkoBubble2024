import "../styles/Nav.css";
import IonIcon from "@reacticons/ionicons";
import { useState, useEffect } from "react";

export default function Nav({ initiateToggle, loadAnimation }) {
  return (
    <nav className="default-flex flex-justify-around nav">
      <img
        className={`header-image transparent ${
          loadAnimation >= 1 && "displayed"
        }`}
        src="../../images/cropped_image.png"
        alt="bubble tea logo"
      />
      <NavigationMenu loadAnimation={loadAnimation} />
      <button onClick={initiateToggle} className="menu-btn-container">
        <IonIcon name="reorder-three-outline" className="menu-btn" />
      </button>
    </nav>
  );
}

function NavigationMenu({ loadAnimation }) {
  return (
    <ul className="navigation-menu default-flex flex-align-center flex-justify-center gap-xs">
      <li className={`transparent ${loadAnimation >= 1 && "displayed"}`}>
        <a href="/">Početna</a>
      </li>
      {/* <li className={`transparent ${loadAnimation >= 1 && "displayed"}`}>
        <div className="bubble"></div>
      </li> */}
      {/* <li className={`transparent ${loadAnimation >= 2 && "displayed"}`}>
        <a href="/Stores">Nasa radnja</a>
      </li> */}
      {/* <li className={`transparent ${loadAnimation >= 3 && "displayed"}`}>
        <div className="bubble"></div>
      </li>
      <li className={`transparent ${loadAnimation >= 4 && "displayed"}`}>
        <a href="">Nasi proizvodi</a>
      </li> */}
      <li className={`transparent ${loadAnimation >= 2 && "displayed"}`}>
        <div className="bubble"></div>
      </li>
      <li className={`transparent ${loadAnimation >= 3 && "displayed"}`}>
        <a href="#contact">Kontakt</a>
      </li>
    </ul>
  );
}
