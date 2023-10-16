import "./PetCard.css";
import { useState } from "react";

function PetCard({ imagen, nombre }) {
  const [meGusta, setMeGusta] = useState(false);
  return (
    <div className="pet-card">
      <div className="pet-img-container">
        <img className="img-pet" src={imagen} alt="" />
      </div>
      <p>{nombre}</p>
      {meGusta ? (
        <button onClick={() => setMeGusta(false)}>Ya no me gusta</button>
      ) : (
        <button onClick={() => setMeGusta(true)}>Me Gusta</button>
      )}
    </div>
  );
}

export default PetCard;
