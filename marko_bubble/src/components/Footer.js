import IonIcon from "@reacticons/ionicons";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="default-width default-flex flex-justify-center gap-l footer">
      <div className="default-flex gap-s footer-div-main">
        <div className="default-flex flex-column gap-xxs">
          <p>Bubble Zajecar</p>
          <address>Timočke bune 17-15, Zaječar 19000</address>
          <p>Copyright © 2024 Bubble Zajecar</p>
        </div>
        <div className="default-flex flex-column gap-xxs">
          <p>Kontakt</p>
          <address>Timočke bune 17-15, Zaječar</address>
          <a href="tel:+4733378901">tel: 123455788</a>
          <a href="mailto:mail@gmial.com">mail@gmail.com</a>
        </div>
      </div>
      <div className="default-flex gap-s footer-div-main">
        <div className="default-flex flex-column gap-xxs">
          <p>Otvoreno:</p>
          <p>Pon-Sub 08:00 - 22:00</p>
        </div>
        <div className="default-flex flex-column gap-xxs">
          <p>Pratite nas</p>
          <div className="default-flex flex-justify-between">
            <IonIcon name="logo-instagram" size="large" />
            <IonIcon name="logo-youtube" size="large" />
            <IonIcon name="logo-facebook" size="large" />
          </div>
        </div>
      </div>
    </footer>
  );
}
