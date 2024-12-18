export default function ProductInfo() {
  return (
    <div
      className="width-x margin-layout m-l product-info"
      id="product-info-id"
    >
      <h2 className="text-center">O sokovima</h2>
      <ul className="product-info-list">
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
      </ul>
    </div>
  );
}
