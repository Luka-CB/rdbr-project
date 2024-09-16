import { createContext, useState } from "react";
import { childrenIFace } from ".";

interface contextIFace {
  isRental: string;
  setIsRental: any;
  isRentalError: string;
  setIsRentalError: any;
}

export const AddListingFormContext = createContext({} as contextIFace);

const AddListingFormProvider = ({ children }: childrenIFace) => {
  const [isRental, setIsRental] = useState("");
  const [isRentalError, setIsRentalError] = useState("");

  const values = {
    isRental,
    setIsRental,
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
