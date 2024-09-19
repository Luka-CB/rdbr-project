import { ReactNode } from "react";
import RegionsProvider from "./regions";
import FiltersProvider from "./filters";
import TransactionTypeProvider from "./transactionTypeContext";
import FormSelectProvider from "./formSelectContext";
import ImageProvider from "./imageContext";
import AddAgentProvider from "./agentContext";
import ListingProvider from "./listingContext";

export interface childrenIFace {
  children: ReactNode;
}

const ContextProvider = ({ children }: childrenIFace) => {
  return (
    <FiltersProvider>
      <RegionsProvider>
        <TransactionTypeProvider>
          <FormSelectProvider>
            <ImageProvider>
              <AddAgentProvider>
                <ListingProvider>{children}</ListingProvider>
              </AddAgentProvider>
            </ImageProvider>
          </FormSelectProvider>
        </TransactionTypeProvider>
      </RegionsProvider>
    </FiltersProvider>
  );
};

export default ContextProvider;
