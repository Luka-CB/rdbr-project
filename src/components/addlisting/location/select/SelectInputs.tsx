import { ChevronDown } from "../../../../svgs";
import styles from "./SelectInputs.module.scss";

const SelectInputs: React.FC = () => {
  return (
    <>
      <div className={styles.inputBox}>
        <label>რეგიონი *</label>
        <div className={styles.selectInput}>
          <span>აირჩიე რეგიონი</span>
          <ChevronDown />
        </div>
      </div>
      <div className={styles.inputBox}>
        <label>ქალაქი *</label>
        <div className={styles.selectInput}>
          <span>აირჩიე ქალაქი</span>
          <ChevronDown />
        </div>
      </div>
    </>
  );
};

export default SelectInputs;
