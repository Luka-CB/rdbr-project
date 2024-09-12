import { createContext, useState } from "react";
import { childrenIFace } from ".";

interface contextIFace {
  isRegionDropdownOpen: boolean;
  toggleRegionDropdown: (value: boolean) => void;
  activeFilter: string;
  setActiveFilter: any;
  isPriceDropdownOpen: boolean;
  togglePriceDropdown: (value: boolean) => void;
  isAreaDropdownOpen: boolean;
  toggleAreaDropdown: (value: boolean) => void;
  isbedroomDropdownOpen: boolean;
  toggleBedroomDropdown: (value: boolean) => void;
}

export const FiltersContext = createContext({} as contextIFace);

const FiltersProvider = ({ children }: childrenIFace) => {
  const [activeFilter, setActiveFilter] = useState("");

  const [isRegionDropdownOpen, setIsRegionDropdownOpen] = useState(false);
  const [isPriceDropdownOpen, setIsPriceDropdownOpen] = useState(false);
  const [isAreaDropdownOpen, setIsAreaDropdownOpen] = useState(false);
  const [isbedroomDropdownOpen, setIsBedroomDropdownOpen] = useState(false);

  const toggleRegionDropdown = (value: boolean) => {
    setIsRegionDropdownOpen(value);
    setIsPriceDropdownOpen(false);
    setIsAreaDropdownOpen(false);
    setIsBedroomDropdownOpen(false);
    setActiveFilter(value ? "region" : "");
  };

  const togglePriceDropdown = (value: boolean) => {
    setIsPriceDropdownOpen(value);
    setIsRegionDropdownOpen(false);
    setIsAreaDropdownOpen(false);
    setIsBedroomDropdownOpen(false);
    setActiveFilter(value ? "price" : "");
  };

  const toggleAreaDropdown = (value: boolean) => {
    setIsAreaDropdownOpen(value);
    setIsPriceDropdownOpen(false);
    setIsRegionDropdownOpen(false);
    setIsBedroomDropdownOpen(false);
    setActiveFilter(value ? "area" : "");
  };

  const toggleBedroomDropdown = (value: boolean) => {
    setIsBedroomDropdownOpen(value);
    setIsAreaDropdownOpen(false);
    setIsPriceDropdownOpen(false);
    setIsRegionDropdownOpen(false);
    setActiveFilter(value ? "bedroom" : "");
  };

  const values = {
    isRegionDropdownOpen,
    toggleRegionDropdown,
    activeFilter,
    setActiveFilter,
    isPriceDropdownOpen,
    togglePriceDropdown,
    isAreaDropdownOpen,
    toggleAreaDropdown,
    isbedroomDropdownOpen,
    toggleBedroomDropdown,
  };

  return (
    <FiltersContext.Provider value={values}>{children}</FiltersContext.Provider>
  );
};

export default FiltersProvider;
