import "../styles/MainStoreMenu.css";

export default function MainStoreMenu({ loadAnimation }) {
  const menu = [
    { name: "Azijska hrana" },
    { name: "Meksicka Hrana" },
    { name: "Sendvici" },
    { name: "Pica" },
  ];
  return (
    <section className="width-xl margin-layout m-xl default-flex flex-justify-around main-store-main">
      {menu.map((item, id) => (
        <Menu
          content={item}
          loadAnimation={loadAnimation}
          id={id}
          key={item.name}
        />
      ))}
    </section>
  );
}

function Menu({ content, loadAnimation, id }) {
  return (
    <div
      style={{ color: "#290000" }}
      className={`menu-content ${loadAnimation > 2 + id && "displayed"}`}
    >
      <h4>{content.name}</h4>
      <ul>
        {Array.from({ length: 5 }, (_, i) => i + 1).map((num) => (
          <li
            key={num}
            className={`un-list`}
            style={{ fontSize: "1.7rem", margin: "2rem 1rem" }}
          >{`item ${num}`}</li>
        ))}
      </ul>
    </div>
  );
}
