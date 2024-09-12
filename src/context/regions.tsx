import { createContext, ReactNode, useState } from "react";
import api from "../utils/axios";
import { childrenIFace } from ".";

interface regionIFace {
  id: number;
  name: string;
}

interface contextIFace {
  regions: regionIFace[];
  fetchRegions: () => void;
}

export const RegionsContext = createContext({} as contextIFace);

const RegionsProvider = ({ children }: childrenIFace) => {
  const [regions, setRegions] = useState<regionIFace[]>([]);

  const fetchRegions = async () => {
    try {
      const { data } = await api.get("/regions");

      if (data) setRegions(data);
    } catch (error) {
      console.error(error);
    }
  };

  const values = {
    regions,
    fetchRegions,
  };

  return (
    <RegionsContext.Provider value={values}>{children}</RegionsContext.Provider>
  );
};

export default RegionsProvider;
