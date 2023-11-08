import { useContext, useRef } from "react";
import PlantsCard from "../components/PlantsCard";
import { ArrowUpCircle } from "lucide-react";

import { ApiContext } from "../context/ApiContext";
import FilterPlants from "../components/FilterPlants";

function App() {
  const [plants, , loading] = useContext(ApiContext);
  const arrowElement = useRef(null);
  const focusArrow = () => {
    arrowElement.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div
        ref={arrowElement}
        className="bg-green-200 flex justify-center items-center h-52 gap-4"
      >
        <h1 className="text-3xl font-semibold tracking-wider">
          BOTANICAL DATA FOR PLANTS
        </h1>
      </div>
      <FilterPlants></FilterPlants>
      <div className="flex gap-4 items-center justify-center p-4 flex-wrap">
        {loading ? (
          <span className="loading">Loading...</span>
        ) : (
          plants.map((plant) => {
            return (
              <PlantsCard
                key={plant.id}
                imgSrc={plant.default_image?.medium_url}
                name={plant.common_name}
                scientificname={plant.scientific_name}
                cycle={plant.cycle}
                watering={plant.watering}
                sunlight={plant.sunlight}
              ></PlantsCard>
            );
          })
        )}
        <button className="fixed right-6 bottom-8" onClick={focusArrow}>
          <ArrowUpCircle size={48} color="#4ADE80" />
        </button>
      </div>
    </>
  );
}

export default App;
