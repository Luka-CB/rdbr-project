import styles from "./Bedrooms.module.scss";

const bedrooms = [
  { id: 1, value: 1 },
  { id: 2, value: 2 },
  { id: 3, value: 3 },
  { id: 4, value: 4 },
  { id: 5, value: 5 },
];

const Bedrooms: React.FC = () => {
  return (
    <div className={styles.container} onClick={(e) => e.stopPropagation()}>
      <h3>საძინებლების რაოდენობა</h3>
      <div className={styles.bedrooms}>
        {bedrooms.map((bedroom) => (
          <div className={styles.boxWrapper} key={bedroom.id}>
            <div className={styles.box}>
              <span>{bedroom.value}</span>
            </div>
          </div>
        ))}
      </div>
      <button className={styles.chooseBtn}>არჩევა</button>
    </div>
  );
};

export default Bedrooms;
