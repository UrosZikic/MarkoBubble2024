// import styles
import "../styles/MainHeader.css";
// import misc
import IonIcon from "@reacticons/ionicons";

export default function MainHeader({ loadAnimation }) {
  return (
    <header className="margin-layout width-xl default-flex flex-justify-around main-header gap-s">
      <HeaderContent loadAnimation={loadAnimation} />
    </header>
  );
}

function HeaderContent({ loadAnimation }) {
  return (
    <>
      <div className="header-info default-flex flex-column gap-s">
        <ul className="default-flex flex-justify-center gap-l">
          <li className={`transparent ${loadAnimation >= 3 && "displayed"}`}>
            <a
              href="https://www.youtube.com/@bubblezajecar"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#FF0000" }}
            >
              <IonIcon name="logo-youtube" size="large" />
            </a>
          </li>
          <li className={`transparent ${loadAnimation >= 4 && "displayed"}`}>
            <a
              href=" https://www.instagram.com/bubblezajecar/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#833AB4" }}
            >
              <IonIcon name="logo-instagram" size="large" />
            </a>
          </li>
          <li className={`transparent ${loadAnimation >= 5 && "displayed"}`}>
            <a
              href="https://www.facebook.com/profile.php?id=100095226961393"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#1877F2" }}
            >
              <IonIcon name="logo-facebook" size="large" />
            </a>
          </li>
        </ul>
        <h1 className={`transparent ${loadAnimation >= 2 && "displayed"}`}>
          bubble tea zaječar
        </h1>
      </div>
    </>
  );
}
