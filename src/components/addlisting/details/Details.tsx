import { CheckIcon } from "../../../svgs";
import styles from "./Details.module.scss";

const Details = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>ბინის დეტალები</h2>
      <div className={styles.inputs}>
        <div className={styles.row1}>
          <div className={styles.inputBox}>
            <label htmlFor="price">ფასი *</label>
            <input type="number" name="price" id="price" />
            <div className={styles.msg}>
              <CheckIcon />
              <small>მხოლოდ რიცხვები</small>
            </div>
          </div>
          <div className={styles.inputBox}>
            <label htmlFor="area">ფართობი *</label>
            <input type="number" name="area" id="area" />
            <div className={styles.msg}>
              <CheckIcon />
              <small>მხოლოდ რიცხვები</small>
            </div>
          </div>
        </div>
        <div className={styles.row2}>
          <label htmlFor="bedrooms">საძინებლების რაოდენობა *</label>
          <input type="number" name="bedrooms" id="bedrooms" />
          <div className={styles.msg}>
            <CheckIcon />
            <small>მხოლოდ რიცხვები</small>
          </div>
        </div>
        <div className={styles.row3}>
          <label htmlFor="description">აღწერა *</label>
          <textarea name="description" id="description"></textarea>
          <div className={styles.msg}>
            <CheckIcon />
            <small>მინიმუმ ხუთი სიტყვა</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
