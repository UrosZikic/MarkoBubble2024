import "../styles/Menu.css";
import IonIcon from "@reacticons/ionicons";
import { useState, useEffect } from "react";

export default function Menu({ toggleMenu, initiateToggle }) {
  const [animateMenu, setAnimateMenu] = useState(0);

  useEffect(() => {
    if (toggleMenu) {
      const animateInterval = setInterval(() => {
        setAnimateMenu((prev) => prev + 1);
      }, 200);

      if (animateMenu > 5) clearInterval(animateInterval);
      return () => clearInterval(animateInterval);
    } else setAnimateMenu(0);
  }, [toggleMenu, animateMenu]);

  return (
    <menu
      className={`pos-fixed menu-container default-flex flex-justify-start ${
        toggleMenu ? "" : "toggle-menu"
      } prevent-open`}
    >
      <ul className="navigation-menu default-flex flex-column flex-align-center flex-justify-center gap-xs">
        <li>
          <SocialMediaLinks animateMenu={animateMenu} />
        </li>

        <li className={`after-style dispatch ${animateMenu >= 1 && "recall"}`}>
          <a
            href="#"
            style={{ zIndex: "999", cursor: "pointer" }}
            onClick={() => initiateToggle(false)}
          >
            Pocetna
          </a>
        </li>
        <li className={`transparent ${animateMenu >= 1 && "displayed"}`}>
          <div className="bubble"></div>
        </li>
        {/* <li className={`after-style dispatch ${animateMenu >= 2 && "recall"}`}>
          <a href="">Nasa radnja</a>
        </li>
        <li className={`transparent ${animateMenu >= 2 && "displayed"}`}>
          <div className="bubble"></div>
        </li>
        <li className={`after-style dispatch ${animateMenu >= 3 && "recall"}`}>
          <a href="">Nasi proizvodi</a>
        </li>
        <li className={`transparent ${animateMenu >= 3 && "displayed"}`}>
          <div className="bubble"></div>
        </li> */}
        <li className={`after-style dispatch ${animateMenu >= 4 && "recall"}`}>
          <a
            href="#contact"
            style={{ zIndex: "999", cursor: "pointer" }}
            onClick={() => initiateToggle(false)}
          >
            Kontakt
          </a>
        </li>
      </ul>
    </menu>
  );
}

function SocialMediaLinks({ animateMenu }) {
  return (
    <div className="default-grid social-container">
      <div
        className={`line width-none ${animateMenu >= 2 && "width-full"}`}
      ></div>
      <div className="social-media-links default-flex flex-justify-around flex-align-center">
        <a
          href="https://www.youtube.com/@bubblezajecar"
          target="_blank"
          rel="noreferrer"
          className={`social-link transparent ${
            animateMenu >= 3 && "displayed"
          }`}
          style={{ color: "#FF0000" }}
        >
          <IonIcon name="logo-youtube" size="small" />
        </a>
        <a
          href="https://www.instagram.com/bubbleteazajecar/?locale=zh_tw&hl=ar"
          target="_blank"
          rel="noreferrer"
          className={`social-link transparent ${
            animateMenu >= 4 && "displayed"
          }`}
          style={{ color: "#833AB4" }}
        >
          <IonIcon name="logo-instagram" size="small" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100095226961393"
          target="_blank"
          rel="noreferrer"
          className={`social-link transparent ${
            animateMenu >= 5 && "displayed"
          }`}
          style={{ color: "#1877F2" }}
        >
          <IonIcon name="logo-facebook" size="small" />
        </a>
        <a
          href="https://www.tiktok.com/@bubblezajecar"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#000" }}
          className={`social-link transparent ${
            animateMenu >= 6 && "displayed"
          }`}
        >
          <IonIcon name="logo-tiktok" size="small" />
        </a>
      </div>
      <div
        className={`line flex-justify-self-end width-none ${
          animateMenu >= 2 && "width-full"
        }`}
      ></div>
    </div>
  );
}
