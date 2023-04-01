import "./styles.scss";

export const ShoesCard = ({ shoes }) => {
  return (
    <>
      <div className="grid">
        {shoes.map((shoe) => (
          <div className="shoeCard" key={shoe.name}>
            <img src={shoe.image} alt={shoe.name} className="shoeImage" />
          </div>
        ))}
      </div>
    </>
  );
};
