import { createContext, useState } from "react";
import { childrenIFace } from ".";

interface contextIFace {
  isRental: string;
  handleSetIsRental: (value: string) => void;
}

const isRentalFromStorage = localStorage.getItem("isRental")
  ? JSON.parse(localStorage.getItem("isRental") || "")
  : "0";

export const AddListingFormContext = createContext({} as contextIFace);

const AddListingFormProvider = ({ children }: childrenIFace) => {
  const [isRental, setIsRental] = useState(isRentalFromStorage);

  const handleSetIsRental = (value: string) => {
    setIsRental(value);
    localStorage.setItem("isRental", JSON.stringify(value));
  };

  const values = {
    isRental,
    handleSetIsRental,
  };

  return (
    <AddListingFormContext.Provider value={values}>
      {children}
    </AddListingFormContext.Provider>
  );
};

export default AddListingFormProvider;
