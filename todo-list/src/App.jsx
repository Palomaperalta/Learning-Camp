import { useState } from "react";

function App() {
  const [valorInput, setValorInput] = useState("");
  const [listaDeTareas, setListaDeTareas] = useState([]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    let tarea = {
      textoDeTarea: valorInput,
      id: listaDeTareas.length + 1,
    };
    setListaDeTareas([...listaDeTareas, tarea]);
    setValorInput("");
  };

  const handleOnClick = (idTarea) => {
    const listaDeTareasFiltrada = listaDeTareas.filter(
      (tarea) => tarea.id !== idTarea
    );
    setListaDeTareas(listaDeTareasFiltrada);
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <div className=" flex justify-center w-3/12 gap-8 flex-col">
        <form
          className="border-solid rounded-sm border-4 border-fuchsia-500 flex justify-between gap-8 p-4 shadow-[-15px_15px_0_0] shadow-fuchsia-500"
          onSubmit={(e) => handleOnSubmit(e)}
        >
          <input
            type="text"
            placeholder="What is your task?"
            value={valorInput}
            onChange={(event) => {
              setValorInput(event.target.value);
            }}
          />

          <button type="submit">+</button>
        </form>
        <div className="flex gap-8 flex-col justify-center">
          {listaDeTareas.map((tarea) => {
            return (
              <div
                className="border-solid
                  rounded-sm
                  border-4
                  border-fuchsia-500 p-4 shadow-[-15px_15px_0_0] shadow-fuchsia-500
                  flex justify-between"
                key={tarea.id}
              >
                {tarea.textoDeTarea}
                <button onClick={() => handleOnClick(tarea.id)}>-</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
