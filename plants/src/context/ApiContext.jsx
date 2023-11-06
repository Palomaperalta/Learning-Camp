import { createContext, useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_PLANT_API_KEY;

export const ApiContext = createContext();

export function ApiProvider({ children }) {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getPlants() {
    setLoading(true);
    const response = await fetch(
      `https://perenual.com/api/species-list?key=${API_KEY}`
    );
    const responseplants = await response.json();
    setApiData(responseplants.data);
    setLoading(false);
  }

  useEffect(() => {
    getPlants();
  }, []);

  return (
    <ApiContext.Provider value={[apiData, setApiData, loading]}>
      {children}
    </ApiContext.Provider>
  );
}
