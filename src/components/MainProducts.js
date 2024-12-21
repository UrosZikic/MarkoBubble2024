export default function MainProducts({ loadAnimation }) {
  const products = [
    {
      src: "../images/jabuka_kivi.jpg",
    },
    {
      src: "../images/lubenica_borovnica.jpg",
    },
    {
      src: "../images/blue_tropical.jpg",
    },
  ];
  // return <ProductsVOne products={products} />;
  return <ProductsVTwo products={products} loadAnimation={loadAnimation} />;
}

function Product({ src }) {
  return <img src={src} alt={src} className="special-product" />;
}

function ProductsVOne({ products }) {
  return (
    <>
      <div className="width-x margin-layout m-l default-flex flex-justify-center">
        {products.map((item) => (
          <Product src={item.src} />
        ))}
      </div>
      <div className="width-x margin-layout m-l default-flex flex-justify-center gap-xs product-overview">
        <div>
          <ul>
            <li>Bubble Tea- Jabuka i Kivi 300ml</li>
            <li>Cena: 249,99RSD</li>
            <li>
              Opis: Bezalkoholni osvežavajući napitak sa ukusom jabuke i
              bobicama od kivija
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Bubble Tea- Lubenica i Borovnica 300ml</li>
            <li>Cena: 249,99RSD</li>
            <li>
              Opis: Bezalkoholni osvežavajući napitak sa ukusom lubenice i
              bobicama od borovnice
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Bubble Tea- Blue Tropical 300ml</li>
            <li>Cena: 249,99RSD</li>
            <li>
              Opis: Bezalkoholni osvežavajući napitak sa ukusom maline i
              bobicama od jagode
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

function ProductsVTwo({ products, loadAnimation }) {
  return (
    <>
      <div className="width-m margin-layout products-main-v2 background-white">
        <div className="default-grid grid-t-products products-grid">
          <img
            src={products[2].src}
            alt="bubble tea - blue tropical"
            className={`transparent ${loadAnimation >= 1 && "displayed"}`}
          />
          <div
            className={`default-flex background-white transparent ${
              loadAnimation >= 2 && "displayed"
            }`}
          >
            <ul className="flex-align-self-center">
              <li>Bubble Tea- Blue Tropical 300ml</li>
              <li>Cena: 249,99RSD</li>
              <li>
                Opis: Bezalkoholni osvežavajući napitak sa ukusom maline i
                bobicama od jagode
              </li>
            </ul>
          </div>
        </div>

        <div className="default-grid grid-t-products products-grid">
          <div
            className={`default-flex background-white transparent ${
              loadAnimation >= 3 && "displayed"
            }`}
          >
            <ul className="flex-align-self-center">
              <li>Bubble Tea- Lubenica Borovnica 300ml</li>
              <li>Cena: 249,99RSD</li>
              <li>
                Opis: Bezalkoholni osvežavajući napitak sa ukusom lubenice i
                bobicama od borovnice
              </li>
            </ul>
          </div>
          <img
            src={products[1].src}
            alt="bubble tea - lubenica borovnica"
            className={`transparent ${loadAnimation >= 4 && "displayed"}`}
          />
        </div>

        <div className="default-grid grid-t-products products-grid">
          <img
            src={products[0].src}
            alt="bubble tea - jabuka kivi"
            className={`transparent ${loadAnimation >= 5 && "displayed"}`}
          />
          <div
            className={`default-flex background-white transparent ${
              loadAnimation >= 6 && "displayed"
            }`}
          >
            <ul className="flex-align-self-center">
              <li>Bubble Tea- Jabuka Kivi 300ml</li>
              <li>Cena: 249,99RSD</li>
              <li>
                Opis: Bezalkoholni osvežavajući napitak sa ukusom jabuke i
                bobicama od kivija
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="disclaimer text-center">
        <span>NAPOMENA:</span> Ovo su cene samo za pojedinačne proizvode.
        Ukoliko želite da poručite veće količine za vašu firmu, mogući su
        dodatni popusti. Kontaktirajte nas za više informacija, hvala.
      </p>
    </>
  );
}
