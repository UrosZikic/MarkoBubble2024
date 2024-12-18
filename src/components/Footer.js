import IonIcon from "@reacticons/ionicons";
import "../styles/Footer.css";

export default function Footer({ loadAnimation }) {
  return (
    <footer className="default-width default-flex flex-justify-center gap-l footer">
      <div className="default-flex gap-s footer-div-main">
        <div className="default-flex flex-column gap-xxs">
          <p className={`transparent ${loadAnimation >= 1 && "displayed"}`}>
            Bubble Zajecar
          </p>
          <address
            className={`transparent ${loadAnimation >= 2 && "displayed"}`}
          >
            Timočke bune 17-15, Zaječar 19000
          </address>
          <p className={`transparent ${loadAnimation >= 3 && "displayed"}`}>
            Copyright © 2024 Bubble Zajecar
          </p>
        </div>
        <div className="default-flex flex-column gap-xxs">
          <p className={`transparent ${loadAnimation >= 2 && "displayed"}`}>
            Kontakt
          </p>
          <address
            className={`transparent ${loadAnimation >= 3 && "displayed"}`}
          >
            Timočke bune 17-15, Zaječar
          </address>
          <a
            href="tel:+4733378901"
            className={`transparent ${loadAnimation >= 4 && "displayed"}`}
          >
            tel: 123455788
          </a>
          <a
            href="mailto:mail@gmial.com"
            className={`transparent ${loadAnimation >= 5 && "displayed"}`}
          >
            mail@gmail.com
          </a>
        </div>
      </div>
      <div className="default-flex gap-s footer-div-main">
        <div className="default-flex flex-column gap-xxs">
          <p className={`transparent ${loadAnimation >= 4 && "displayed"}`}>
            Otvoreno:
          </p>
          <p className={`transparent ${loadAnimation >= 5 && "displayed"}`}>
            Pon-Sub 08:00 - 22:00
          </p>
        </div>
        <div className="default-flex flex-column gap-xxs">
          <p
            className={`transparent ${
              loadAnimation >= 3 && "displayed"
            } text-center text-reset`}
          >
            Pratite nas
          </p>
          <div className="default-flex flex-justify-between">
            <a
              href="https://www.instagram.com/bubblezajecar/"
              rel="noreferrer"
              target="_blank"
            >
              <IonIcon
                name="logo-instagram"
                size="large"
                className={`transparent ${loadAnimation >= 4 && "displayed"}`}
              />
            </a>
            <a
              href="https://www.youtube.com/@bubblezajecar"
              rel="noreferrer"
              target="_blank"
            >
              <IonIcon
                name="logo-youtube"
                size="large"
                className={`transparent ${loadAnimation >= 5 && "displayed"}`}
              />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100095226961393"
              rel="noreferrer"
              target="_blank"
            >
              <IonIcon
                name="logo-facebook"
                size="large"
                className={`transparent ${loadAnimation >= 6 && "displayed"}`}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
