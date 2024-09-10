// import styles
import "../styles/MainSection.css";
// import misc
import IonIcon from "@reacticons/ionicons";

export default function MainSection() {
  return (
    <main className="margin-layout width-xl default-flex flex-justify-center main-section gap-xl">
      <img
        className="main-section-image flex-align-self-center"
        src="/images/main-section-img.jpg"
        alt="a cup of bubble tea"
      />
      <MainSectionInfo />
    </main>
  );
}

function MainSectionInfo() {
  return (
    <div className="main-section-info-container width-ms default-flex flex-column gap-l">
      <div className="main-section-info  default-flex flex-column">
        <h2>Lele</h2>
        <h2>Kolko</h2>
        <h2>
          Dobro!
          <IonIcon name="happy-outline" size="small" />
        </h2>
      </div>
      <div className="default-flex flex-justify-end gap-l">
        <div className="default-flex flex-column flex-justify-around">
          <p className="flex-justify-self-center">
            Dostavljamo nase <br /> proizvode maloprodajama!
          </p>
          <a href="" className="product-btn">
            Nasi proizvodi
          </a>
        </div>
        <img
          className="main-section-product"
          src="https://media.cnn.com/api/v1/images/stellar/prod/200424172117-bubbleology-fruit-and-milk-teas-2.jpg?q=w_1600,h_900,x_0,y_0,c_fill/h_447"
          alt=""
        />
      </div>
    </div>
  );
}
