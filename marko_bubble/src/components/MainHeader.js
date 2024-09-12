// import styles
import "../styles/MainHeader.css";
// import misc
import IonIcon from "@reacticons/ionicons";

export default function MainHeader() {
  return (
    <header className="margin-layout width-xl default-flex flex-justify-around main-header gap-s">
      <HeaderContent />
    </header>
  );
}

function HeaderContent() {
  return (
    <>
      <img
        className="header-image"
        src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
        alt="bubble tea logo"
      />
      <div className="header-info default-flex flex-column gap-s">
        <h1>bubble zajecar</h1>
        <ul className="default-flex flex-justify-center gap-l">
          <li>
            <a href="" style={{ color: "#FF0000" }}>
              <IonIcon name="logo-youtube" size="large" />
            </a>
          </li>
          <li>
            <a href="" style={{ color: "#833AB4" }}>
              <IonIcon name="logo-instagram" size="large" />
            </a>
          </li>
          <li>
            <a href="" style={{ color: "#1877F2" }}>
              <IonIcon name="logo-facebook" size="large" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
