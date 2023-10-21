import { useState } from "react";

function PetCard({ imagen, nombre, origen }) {
  const [meGusta, setMeGusta] = useState(false);
  return (
    <div className="flex flex-col bg-emerald-400 justify-center items-center gap-8 min-w-[400px] max-w-fit p-24 rounded">
      <div className="flex justify-center">
        <img
          className="w-full h-[35vh] rounded block object-fill hover:bg-emerald-700"
          src={imagen}
          alt=""
        />
      </div>
      <p className="text-lg leading-10 tracking-wide">{nombre}</p>
      <p className="text-sm text-blue-950">{origen}</p>
      {meGusta ? (
        <button
          className="py-3 px-6 hover:bg-sky-700 bg-cyan-800 text-white rounded cursor-pointer"
          onClick={() => setMeGusta(false)}
        >
          Ya no me gusta
        </button>
      ) : (
        <button
          className="py-3 px-6 hover:bg-sky-700 bg-cyan-800 text-white rounded cursor-pointer"
          onClick={() => setMeGusta(true)}
        >
          Me Gusta
        </button>
      )}
    </div>
  );
}

export default PetCard;
