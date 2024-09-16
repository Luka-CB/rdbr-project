import { ReactNode } from "react";
import RegionsProvider from "./regions";
import FiltersProvider from "./filters";
import AddListingFormProvider from "./addListingFormContext";
import FormSelectProvider from "./formSelectContext";
import ImageProvider from "./imageContext";
import AddAgentProvider from "./agentContext";

export interface childrenIFace {
  children: ReactNode;
}

const ContextProvider = ({ children }: childrenIFace) => {
  return (
    <FiltersProvider>
      <RegionsProvider>
        <AddListingFormProvider>
          <FormSelectProvider>
            <ImageProvider>
              <AddAgentProvider>{children}</AddAgentProvider>
            </ImageProvider>
          </FormSelectProvider>
        </AddListingFormProvider>
      </RegionsProvider>
    </FiltersProvider>
  );
};

export default ContextProvider;
