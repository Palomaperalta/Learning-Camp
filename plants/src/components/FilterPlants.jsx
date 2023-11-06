import { useContext, useState } from "react";
import { ApiContext } from "../context/ApiContext";

const API_KEY = import.meta.env.VITE_PLANT_API_KEY;

function FilterPlants() {
  const [, setPlants] = useContext(ApiContext);
  const [filters, setFilters] = useState("");

  async function getPlantsByName(name) {
    const response = await fetch(
      `https://perenual.com/api/species-list?key=${API_KEY}&q=${name}`
    );
    const plantsbyname = await response.json();
    setPlants(plantsbyname.data);
  }

  const handleOnChange = (e) => {
    getPlantsByName(e.target.value);
    setFilters(e.target.value);
  };

  return (
    <div className="flex justify-end px-8 py-6">
      <input
        className="h-10 p-3 bg-green-100 border border-gray-300 rounded focus:border-gray-400 focus:outline-none focus:shadow-md"
        type="text"
        value={filters}
        placeholder="Search plants by name"
        onChange={handleOnChange}
      />
    </div>
  );
}
export default FilterPlants;
