import { CheckIcon } from "../../../svgs";
import styles from "./Location.module.scss";
import SelectInputs from "./select/SelectInputs";

const Location: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>მდებარეობა</h2>
      <div className={styles.inputs}>
        <div className={styles.row1}>
          <div className={styles.inputBox}>
            <label htmlFor="address">მისამართი *</label>
            <input type="text" name="address" id="address" />
            <div className={styles.msg}>
              <CheckIcon />
              <small>მინიმუმ ორი სიმბოლო</small>
            </div>
          </div>
          <div className={styles.inputBox}>
            <label htmlFor="zipCode">საფოსტო ინდექსი *</label>
            <input type="number" name="zipCode" id="zipCode" />
            <div className={styles.msg}>
              <CheckIcon />
              <small>მხოლოდ რიცხვები</small>
            </div>
          </div>
        </div>
        <div className={styles.row2}>
          <SelectInputs />
        </div>
      </div>
    </div>
  );
};

export default Location;
