import { createContext, useState } from "react";
import { childrenIFace } from ".";
import { regionIFace } from "./regions";

interface contextIFace {
  isRegionSelectActive: boolean;
  toggleRegionSelect: (value: boolean) => void;
  pickedRegion: regionIFace;
  handlePickRegion: (region: regionIFace) => void;
  isCitySelectActive: boolean;
  pickedCity: regionIFace;
  toggleCitySelect: (value: boolean) => void;
  handlePickCity: (city: regionIFace) => void;
}

export const FormSelectContext = createContext({} as contextIFace);

const FormSelectProvider = ({ children }: childrenIFace) => {
  const [isRegionSelectActive, setIsRegionSelectActive] = useState(false);
  const [pickedRegion, setPickedRegion] = useState({} as regionIFace);
  const [isCitySelectActive, setIsCitySelectActive] = useState(false);
  const [pickedCity, setPickedCity] = useState({} as regionIFace);

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
  };
  const handlePickCity = (city: regionIFace) => {
    setPickedCity(city);
    setIsCitySelectActive(false);
  };

  const values = {
    isRegionSelectActive,
    toggleRegionSelect,
    pickedRegion,
    handlePickRegion,
    isCitySelectActive,
    pickedCity,
    toggleCitySelect,
    handlePickCity,
  };

  return (
    <FormSelectContext.Provider value={values}>
      {children}
    </FormSelectContext.Provider>
  );
};

export default FormSelectProvider;
