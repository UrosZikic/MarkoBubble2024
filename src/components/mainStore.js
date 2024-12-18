import "../styles/mainStore.css";
import IonIcon from "@reacticons/ionicons";

export default function MainStore({ loadAnimation }) {
  return (
    <section
      className="width-xl margin-layout m-l main-store"
      style={{ color: "#290000" }}
    >
      <div className="default-flex flex-column gap-xxs">
        <div className="default-grid grid-t-main-support">
          <div className="default-flex flex-column gap-xxs">
            <h3 className={`transparent ${loadAnimation >= 1 && "displayed"}`}>
              Bubble Tea Zajecar
            </h3>
            <br />

            <p className={`transparent ${loadAnimation >= 2 && "displayed"}`}>
              Naša prodavnica je mesto gde ljubitelji boba čaja mogu uživati u
              svežim, kreativnim i ukusnim napicima. Sa širokim izborom aroma,
              voćnih dodataka i raznih vrsta čajeva, nudimo autentično boba
              iskustvo koje odgovara svačijem ukusu. Uvek se trudimo da
              obezbedimo najbolje sastojke i pažljivo pripremljene napitke kako
              bismo svakom kupcu pružili nezaboravan užitak.
            </p>
            <br />
            <p className={`transparent ${loadAnimation >= 3 && "displayed"}`}>
              Naša prodavnica nudi jedinstven spoj azijske i meksičke kuhinje,
              uz dodatak klasičnih sendviča i osvežavajućih napitaka. Uživajte u
              specijalitetima poput nes kafe, domaće limunade, i nezaobilaznog
              boba čaja! Bilo da ste raspoloženi za egzotične ukuse ili klasične
              zalogaje, kod nas ćete pronaći sve što vam je potrebno za savršen
              obrok.
            </p>
          </div>
          <div>
            <img
              src="../../images/store.avif"
              alt=""
              width={500}
              className={`transparent ${loadAnimation >= 4 && "displayed"}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
