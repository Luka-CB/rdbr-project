import { createContext, useState } from "react";
import { childrenIFace } from ".";

interface contextIFace {
  isRental: string;
  handleSetIsRental: (value: string) => void;
  isRentalError: string;
  setIsRentalError: any;
}

const isRentalFromStorage = localStorage.getItem("isRental")
  ? JSON.parse(localStorage.getItem("isRental") || "")
  : "";

export const AddListingFormContext = createContext({} as contextIFace);

const AddListingFormProvider = ({ children }: childrenIFace) => {
  const [isRental, setIsRental] = useState(isRentalFromStorage);
  const [isRentalError, setIsRentalError] = useState("");

  const handleSetIsRental = (value: string) => {
    setIsRental(value);
    setIsRentalError("");
    localStorage.setItem("isRental", JSON.stringify(value));
  };

  const values = {
    isRental,
    handleSetIsRental,
    isRentalError,
    setIsRentalError,
  };

  return (
    <AddListingFormContext.Provider value={values}>
      {children}
    </AddListingFormContext.Provider>
  );
};

export default AddListingFormProvider;
