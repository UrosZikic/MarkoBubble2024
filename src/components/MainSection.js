// import styles
import "../styles/MainSection.css";
// import misc
import IonIcon from "@reacticons/ionicons";

export default function MainSection({ loadAnimation }) {
  return (
    <main className="margin-layout width-xl default-flex flex-justify-center main-section gap-xl">
      <img
        className={`main-section-image flex-align-self-center transparent ${
          loadAnimation >= 3 && "displayed"
        }`}
        src="/images/main-section-img-2.jpg"
        alt="a cup of bubble tea"
      />
      <MainSectionInfo loadAnimation={loadAnimation} />
    </main>
  );
}

function MainSectionInfo({ loadAnimation }) {
  return (
    <div className="main-section-info-container width-ms default-flex flex-column gap-l">
      <div className="main-section-info  default-flex flex-column">
        <h2 className={`transparent ${loadAnimation >= 4 && "displayed"}`}>
          Lele
        </h2>
        <h2 className={`transparent ${loadAnimation >= 5 && "displayed"}`}>
          Kolko
        </h2>
        <h2 className={`transparent ${loadAnimation >= 6 && "displayed"}`}>
          Dobro!
          <IonIcon name="happy-outline" size="small" />
        </h2>
      </div>
      <div className="default-flex flex-justify-end gap-l main-support-info-container">
        <div className="default-flex flex-column flex-justify-around main-support-info gap-s justify-shade">
          <p
            className={`flex-justify-self-center transparent ${
              loadAnimation >= 4 && "displayed"
            }`}
          >
            Dostavljamo nase <br /> proizvode maloprodajama!
          </p>
          <a
            href="#product-info-id"
            className={`product-btn transparent ${
              loadAnimation >= 5 && "displayed"
            }`}
          >
            Saznajte više
          </a>
        </div>
        <img
          className={`main-section-product transparent ${
            loadAnimation >= 6 && "displayed"
          }`}
          src="/images/main-section-small.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
