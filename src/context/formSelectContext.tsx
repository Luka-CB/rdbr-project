import { createContext, useState } from "react";
import { childrenIFace } from ".";
import { regionIFace } from "./regions";

interface contextIFace {
  isRegionSelectActive: boolean;
  toggleRegionSelect: (value: boolean) => void;
  pickedRegion: regionIFace;
  handlePickRegion: (region: regionIFace) => void;
  regionError: string;
  setRegionError: any;
  isCitySelectActive: boolean;
  pickedCity: regionIFace;
  toggleCitySelect: (value: boolean) => void;
  handlePickCity: (city: regionIFace) => void;
  cityError: string;
  setCityError: any;
}

const regionFromStorage = localStorage.getItem("region")
  ? JSON.parse(localStorage.getItem("region") || "")
  : {};
const cityFromStorage = localStorage.getItem("city")
  ? JSON.parse(localStorage.getItem("city") || "")
  : {};

export const FormSelectContext = createContext({} as contextIFace);

const FormSelectProvider = ({ children }: childrenIFace) => {
  const [isRegionSelectActive, setIsRegionSelectActive] = useState(false);
  const [pickedRegion, setPickedRegion] = useState(
    regionFromStorage as regionIFace
  );
  const [regionError, setRegionError] = useState("");

  const [isCitySelectActive, setIsCitySelectActive] = useState(false);
  const [pickedCity, setPickedCity] = useState(cityFromStorage as regionIFace);
  const [cityError, setCityError] = useState("");

  const toggleRegionSelect = (value: boolean) => {
    setIsRegionSelectActive(value);
    setIsCitySelectActive(false);
  };
  const toggleCitySelect = (value: boolean) => {
    setIsCitySelectActive(value);
    setIsRegionSelectActive(false);
  };

  const handlePickRegion = (region: regionIFace) => {
    setPickedRegion(region);
    setIsRegionSelectActive(false);
    setPickedCity({} as regionIFace);
    setRegionError("");
    localStorage.setItem("region", JSON.stringify(region));
  };
  const handlePickCity = (city: regionIFace) => {
    setPickedCity(city);
    setIsCitySelectActive(false);
    setCityError("");
    localStorage.setItem("city", JSON.stringify(city));
  };

  const values = {
    isRegionSelectActive,
    toggleRegionSelect,
    pickedRegion,
    handlePickRegion,
    regionError,
    setRegionError,
    isCitySelectActive,
    pickedCity,
    toggleCitySelect,
    handlePickCity,
    cityError,
    setCityError,
  };

  return (
    <FormSelectContext.Provider value={values}>
      {children}
    </FormSelectContext.Provider>
  );
};

export default FormSelectProvider;
