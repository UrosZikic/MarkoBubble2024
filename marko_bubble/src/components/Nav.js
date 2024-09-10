import "../styles/Nav.css";

export default function Nav() {
  return (
    <nav className="nav">
      <NavigationMenu />
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
