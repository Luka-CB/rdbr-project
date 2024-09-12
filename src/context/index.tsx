import { ReactNode } from "react";
import RegionsProvider from "./regions";
import FiltersProvider from "./filters";

export interface childrenIFace {
  children: ReactNode;
}

const ContextProvider = ({ children }: childrenIFace) => {
  return (
    <FiltersProvider>
      <RegionsProvider>{children}</RegionsProvider>
    </FiltersProvider>
  );
};

export default ContextProvider;
