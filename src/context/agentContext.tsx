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
  pickedAgent: agentIFace;
  agentError: string;
  setAgentError: any;
  handlePickAgent: (agent: agentIFace) => void;
}

export const AgentContext = createContext({} as contextIFace);

const agentFromStorage = localStorage.getItem("agent")
  ? JSON.parse(localStorage.getItem("agent") || "")
  : {};

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
  const [pickedAgent, setPickedAgent] = useState(
    agentFromStorage as agentIFace
  );
  const [agentError, setAgentError] = useState("");

  const toggleAgentDropdown = (value: boolean) => {
    setIsAgentDropdownOpen(value);
  };

  const handlePickAgent = (agent: agentIFace) => {
    setPickedAgent(agent);
    setIsAgentDropdownOpen(false);
    setAgentError("");
    localStorage.setItem("agent", JSON.stringify(agent));
  };

  const values = {
    isModalOpen,
    setIsModalOpen,
    agents,
    isAgentDropdownOpen,
    toggleAgentDropdown,
    pickedAgent,
    agentError,
    setAgentError,
    handlePickAgent,
  };

  return (
    <AgentContext.Provider value={values}>{children}</AgentContext.Provider>
  );
};

export default AgentProvider;
