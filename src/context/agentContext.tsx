import { createContext, useState } from "react";
import { childrenIFace } from ".";

interface agentIFace {
  id: number | string;
  name: string;
  surname: string;
  avatar: string;
}

interface contextIFace {
  isModalOpen: boolean;
  setIsModalOpen: any;
  agents: agentIFace[];
  isAgentDropdownOpen: boolean;
  toggleAgentDropdown: (value: boolean) => void;
}

export const AgentContext = createContext({} as contextIFace);

const AgentProvider = ({ children }: childrenIFace) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAgentDropdownOpen, setIsAgentDropdownOpen] = useState(false);
  const [agents, setAgents] = useState<agentIFace[]>([
    { id: "default", name: "default", surname: "default", avatar: "default" },
    { id: 0, name: "john", surname: "doe", avatar: "" },
    { id: 1, name: "jane", surname: "doeson", avatar: "" },
    { id: 2, name: "brian", surname: "o'connel", avatar: "" },
    { id: 3, name: "neccl", surname: "bordoc", avatar: "" },
  ]);

  const toggleAgentDropdown = (value: boolean) => {
    setIsAgentDropdownOpen(value);
  };

  const values = {
    isModalOpen,
    setIsModalOpen,
    agents,
    isAgentDropdownOpen,
    toggleAgentDropdown,
  };

  return (
    <AgentContext.Provider value={values}>{children}</AgentContext.Provider>
  );
};

export default AgentProvider;
