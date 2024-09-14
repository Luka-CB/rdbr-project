import { ChevronDown } from "../../../svgs";
import styles from "./Agent.module.scss";

const Agent: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>აგენტი</h2>
      <div className={styles.inputBox}>
        <label>აირჩიე *</label>
        <div className={styles.selectInput}>
          <span>აირჩიე აგენტი</span>
          <ChevronDown />
        </div>
      </div>
    </div>
  );
};

export default Agent;
