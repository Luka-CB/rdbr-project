import { useContext } from "react";
import { ChevronDown, ChevronUp, PlusCircleIcon } from "../../../svgs";
import styles from "./Agent.module.scss";
import { AgentContext } from "../../../context/agentContext";

const Agent: React.FC = () => {
  const {
    agents,
    handlePickAgent,
    pickedAgent,
    agentError,
    isAgentDropdownOpen,
    toggleAgentDropdown,
    setIsModalOpen,
  } = useContext(AgentContext);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>აგენტი</h2>
      <div className={styles.inputBox}>
        <label>აირჩიე *</label>
        <div
          className={
            agentError
              ? styles.selectInputError
              : isAgentDropdownOpen
              ? styles.selectInputActive
              : styles.selectInput
          }
          onClick={() => toggleAgentDropdown(!isAgentDropdownOpen)}
        >
          <span className={pickedAgent?.id ? styles.valueActive : styles.value}>
            {pickedAgent?.id
              ? `${pickedAgent?.name} ${pickedAgent?.surname}`
              : "აირჩიე აგენტი"}
          </span>
          {isAgentDropdownOpen ? <ChevronUp /> : <ChevronDown />}
        </div>
        {agentError ? <small>{agentError}</small> : null}
      </div>

      {isAgentDropdownOpen ? (
        <div className={styles.dropdown} onClick={(e) => e.stopPropagation()}>
          {agents?.map((agent) => (
            <div className={styles.agentWrapper} key={agent.id}>
              {agent?.name === "default" ? (
                <div
                  className={styles.addAgent}
                  onClick={() => setIsModalOpen(true)}
                >
                  <PlusCircleIcon />
                  <span>დაამატე აგენტი</span>
                </div>
              ) : (
                <div
                  className={styles.agent}
                  onClick={() => handlePickAgent(agent)}
                >
                  <span>
                    {agent?.name} {agent?.surname}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Agent;
