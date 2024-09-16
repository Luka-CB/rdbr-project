import { createContext, ReactNode, useState } from "react";
import api from "../utils/axios";
import { childrenIFace } from ".";

export interface regionIFace {
  id: number;
  name: string;
}

export interface cityIFace {
  id: number;
  name: string;
  region_id: number;
}

interface contextIFace {
  regions: regionIFace[];
  fetchRegions: () => void;
  cities: cityIFace[];
  fetchCities: () => void;
}

export const RegionsContext = createContext({} as contextIFace);

const RegionsProvider = ({ children }: childrenIFace) => {
  const [regions, setRegions] = useState<regionIFace[]>([]);
  const [cities, setCities] = useState<cityIFace[]>([]);

  const fetchRegions = async () => {
    try {
      const { data } = await api.get("/regions");

      if (data) setRegions(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCities = async () => {
    try {
      const { data } = await api.get("/cities");

      if (data) setCities(data);
    } catch (error) {
      console.error(error);
    }
  };

  const values = {
    regions,
    fetchRegions,
    cities,
    fetchCities,
  };

  return (
    <RegionsContext.Provider value={values}>{children}</RegionsContext.Provider>
  );
};

export default RegionsProvider;
