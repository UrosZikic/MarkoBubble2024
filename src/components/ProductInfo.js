export default function ProductInfo({ loadAnimation }) {
  return (
    <div
      className={`width-x margin-layout m-l product-info transparent ${
        loadAnimation >= 1 && "displayed"
      }`}
      id="product-info-id"
    >
      <h2 className="text-center">O BUBBLE TEA</h2>
      <p>
        Naš Bubble tea je pripremljen u ambalaži od 300 ml. Rok trajanja je 60
        dana od dana proizvodnje i utisnut je na ambalaži. Čuvati na mračnom i
        hladnom mestu. Za sve naše proizvode su odradjene sve potrebne analize i
        provere. Jedno pakovanje se sastoji od 24 komada istog ukusa.
      </p>
      <br />
      <p>
        U zavisnosti od porudžbine dostavljamo naše proizvode maloprodajama.
        Kontaktirajte nas za više informacija.
      </p>
      {/* <ul className="product-info-list">
        <li>Sokovi se prodaju u flašicama od 300ml.</li>
        <li>Cena po proizvodu je 249,99 RSD.</li>
        <li>
          Naši Ukusi:
          <ul>
            <li>Blue Tropical (Malina i Jagoda)</li>
            <li>Jabuka Kivi</li>
            <li>Lubenica Borovnica</li>
          </ul>
        </li>
        <li>
          želite da naručite? - Jedna porudžbina sadrži pakovanje od 24 flašica.
        </li>
        <li>Za veće narudžbine su mogući dodatni popusti.</li>
      </ul> */}
    </div>
  );
}
