import LariIcon from "../../../svgs/LariIcon";
import styles from "./PriceCategory.module.scss";

const prices = [
  { id: 1, value: 50.0 },
  { id: 2, value: 100.0 },
  { id: 3, value: 150.0 },
  { id: 4, value: 200.0 },
  { id: 5, value: 300.0 },
];

const PriceCategory: React.FC = () => {
  return (
    <div className={styles.container} onClick={(e) => e.stopPropagation()}>
      <h3>ფასის მიხედვით</h3>
      <div className={styles.inputs}>
        <div className={styles.col}>
          <div className={styles.inputBox}>
            <span>დან</span>
            <LariIcon />
          </div>
          <div className={styles.options}>
            <b>მინ. ფასი</b>
            <div className={styles.prices}>
              {prices.map((price) => (
                <div className={styles.price} key={price.id}>
                  <span>{price.value?.toFixed(3)}</span>
                  <LariIcon />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.inputBox}>
            <span>მდე</span>
            <LariIcon />
          </div>
          <div className={styles.options}>
            <b>მაქს. ფასი</b>
            <div className={styles.prices}>
              {prices.map((price) => (
                <div className={styles.price} key={price.id}>
                  <span>{price.value?.toFixed(3)}</span>
                  <LariIcon />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <button className={styles.chooseBtn}>არჩევა</button>
    </div>
  );
};

export default PriceCategory;
