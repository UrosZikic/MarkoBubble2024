import "../styles/Menu.css";

export default function Menu() {
  return (
    <menu className="pos-absolute menu-container">
      <ul className="navigation-menu default-flex flex-column flex-align-center flex-justify-center gap-xs">
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
    </menu>
  );
}
