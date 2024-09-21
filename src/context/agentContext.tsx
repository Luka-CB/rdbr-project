import { createContext, useState } from "react";
import { childrenIFace } from ".";
import api from "../utils/axios";

export interface agentIFace {
  id?: number | string;
  name: string;
  surname: string;
  email?: string;
  phone?: string;
  avatar: string | any;
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
  addAgent: (agent: agentIFace) => void;
  addAgentSuccess: boolean;
  setAddAgentSuccess: any;
  getAgents: () => void;
  resetAgent: () => void;
}

export const AgentContext = createContext({} as contextIFace);

const agentFromStorage = localStorage.getItem("agent")
  ? JSON.parse(localStorage.getItem("agent") || "")
  : {};

const AgentProvider = ({ children }: childrenIFace) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAgentDropdownOpen, setIsAgentDropdownOpen] = useState(false);
  const [agents, setAgents] = useState<agentIFace[]>([]);
  const [pickedAgent, setPickedAgent] = useState(
    agentFromStorage as agentIFace
  );
  const [agentError, setAgentError] = useState("");
  const [addAgentSuccess, setAddAgentSuccess] = useState(false);

  const toggleAgentDropdown = (value: boolean) => {
    setIsAgentDropdownOpen(value);
  };

  const handlePickAgent = (agent: agentIFace) => {
    setPickedAgent(agent);
    setIsAgentDropdownOpen(false);
    setAgentError("");
    localStorage.setItem("agent", JSON.stringify(agent));
  };

  const resetAgent = () => {
    setPickedAgent({} as agentIFace);
    localStorage.removeItem("agent");
  };

  const addAgent = async (agent: agentIFace) => {
    try {
      const { data } = await api.post("/agents", agent, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (data) {
        setAddAgentSuccess(true);
        setPickedAgent(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getAgents = async () => {
    try {
      const { data } = await api.get("/agents");

      if (data) {
        setAgents(data);
      }
    } catch (error) {
      console.error(error);
    }
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
    addAgent,
    addAgentSuccess,
    setAddAgentSuccess,
    getAgents,
    resetAgent,
  };

  return (
    <AgentContext.Provider value={values}>{children}</AgentContext.Provider>
  );
};

export default AgentProvider;
