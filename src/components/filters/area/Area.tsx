import styles from "./Area.module.scss";

const areas = [
  { id: 1, value: 50.0 },
  { id: 2, value: 100.0 },
  { id: 3, value: 150.0 },
  { id: 4, value: 200.0 },
  { id: 5, value: 300.0 },
];

const Area: React.FC = () => {
  return (
    <div className={styles.container} onClick={(e) => e.stopPropagation()}>
      <h3>ფართობის მიხედვით</h3>
      <div className={styles.inputs}>
        <div className={styles.col}>
          <div className={styles.inputBox}>
            <span>დან</span>
            <p>
              მ<sup>2</sup>
            </p>
          </div>
          <div className={styles.options}>
            <b>
              მინ. მ<sup>2</sup>
            </b>
            <div className={styles.prices}>
              {areas.map((area) => (
                <div className={styles.price} key={area.id}>
                  <span>{area.value?.toFixed(3)}</span>
                  <p>
                    მ<sup>2</sup>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.inputBox}>
            <span>მდე</span>
            <p>
              მ<sup>2</sup>
            </p>
          </div>
          <div className={styles.options}>
            <b>
              მაქს. მ<sup>2</sup>
            </b>
            <div className={styles.prices}>
              {areas.map((area) => (
                <div className={styles.price} key={area.id}>
                  <span>{area.value?.toFixed(3)}</span>
                  <p>
                    მ<sup>2</sup>
                  </p>
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

export default Area;
