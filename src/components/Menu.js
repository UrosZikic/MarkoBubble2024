import "../styles/Menu.css";
import IonIcon from "@reacticons/ionicons";

export default function Menu({ toggleMenu }) {
  return (
    <menu
      className={`pos-fixed menu-container default-flex flex-justify-start ${
        toggleMenu ? "" : "toggle-menu"
      } prevent-open`}
    >
      <ul className="navigation-menu default-flex flex-column flex-align-center flex-justify-center gap-xs">
        <li>
          <SocialMediaLinks />
        </li>

        <li className="after-style">
          <a href="">Pocetna</a>
        </li>
        <li>
          <div className="bubble"></div>
        </li>
        <li className="after-style">
          <a href="">Nasa radnja</a>
        </li>
        <li>
          <div className="bubble"></div>
        </li>
        <li className="after-style">
          <a href="">Nasi proizvodi</a>
        </li>
        <li>
          <div className="bubble"></div>
        </li>
        <li className="after-style">
          <a href="">Kontakt</a>
        </li>
      </ul>
    </menu>
  );
}

function SocialMediaLinks() {
  return (
    <div className="default-grid social-container">
      <div className="line"></div>
      <div className="social-media-links default-flex flex-justify-around flex-align-center">
        <a className="social-link" href="" style={{ color: "#FF0000" }}>
          <IonIcon name="logo-youtube" size="small" />
        </a>
        <a className="social-link" style={{ color: "#833AB4" }}>
          <IonIcon name="logo-instagram" size="small" />
        </a>
        <a className="social-link" style={{ color: "#1877F2" }}>
          <IonIcon name="logo-facebook" size="small" />
        </a>
      </div>
      <div className="line flex-justify-self-end"></div>
    </div>
  );
}
