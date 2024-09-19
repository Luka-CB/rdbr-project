import { createContext, useState } from "react";
import { childrenIFace } from ".";

interface contextIFace {
  isRental: string;
  handleSetIsRental: (value: string) => void;
  resetTransactionType: () => void;
}

const isRentalFromStorage = localStorage.getItem("isRental")
  ? JSON.parse(localStorage.getItem("isRental") || "")
  : "0";

export const TransactionTypeContext = createContext({} as contextIFace);

const TransactionTypeProvider = ({ children }: childrenIFace) => {
  const [isRental, setIsRental] = useState(isRentalFromStorage);

  const handleSetIsRental = (value: string) => {
    setIsRental(value);
    localStorage.setItem("isRental", JSON.stringify(value));
  };

  const resetTransactionType = () => {
    localStorage.removeItem("isRental");
    setIsRental("0");
  };

  const values = {
    isRental,
    handleSetIsRental,
    resetTransactionType,
  };

  return (
    <TransactionTypeContext.Provider value={values}>
      {children}
    </TransactionTypeContext.Provider>
  );
};

export default TransactionTypeProvider;
