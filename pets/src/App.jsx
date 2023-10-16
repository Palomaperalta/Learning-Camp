import "./App.css";
import PetCard from "./components/PetCard";

const data = [
  {
    nombre: "Abyssinian",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Gustav_chocolate.jpg/800px-Gustav_chocolate.jpg",
    origen: "Egipto",
    id: 1,
  },
  {
    nombre: "Spangle",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Spangled_Cat.jpg",
    origen: "US",
    id: 2,
  },
  {
    nombre: "Cyprus cat",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/b/b9/CyprusShorthair.jpg",
    origen: "Cyprius",
    id: 3,
  },
  {
    nombre: "Savannah",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/c/c4/Savannah_Cat_portrait.jpg",
    origen: "United States",
    id: 4,
  },
  {
    nombre: "Burmese",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/5/5c/British_burmese_-_Andel_Alois_at_Cat_show.JPG",
    origen: "Burma",
    id: 5,
  },
];

function App() {
  return (
    <div className="main-container">
      {data.map((cat) => {
        return (
          <PetCard
            key={cat.id}
            nombre={cat.nombre}
            imagen={cat.imagen}
          ></PetCard>
        );
      })}
    </div>
  );
}

export default App;
