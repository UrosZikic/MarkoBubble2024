import "../styles/Nav.css";
import IonIcon from "@reacticons/ionicons";
import { useState, useEffect } from "react";

export default function Nav({ initiateToggle }) {
  return (
    <nav className="default-flex flex-justify-center nav">
      <NavigationMenu />
      <button onClick={initiateToggle} className="menu-btn-container">
        <IonIcon name="reorder-three-outline" className="menu-btn" />
      </button>
    </nav>
  );
}

function NavigationMenu() {
  return (
    <ul className="navigation-menu default-flex flex-align-center flex-justify-center gap-xs">
      <li>
        <a href="">Pocetna</a>
      </li>
      <li>
        <div className="bubble"></div>
      </li>
      <li>
        <a href="">Nasa radnja</a>
      </li>
      <li>
        <div className="bubble"></div>
      </li>
      <li>
        <a href="">Nasi proizvodi</a>
      </li>
      <li>
        <div className="bubble"></div>
      </li>
      <li>
        <a href="">Kontakt</a>
      </li>
    </ul>
  );
}
