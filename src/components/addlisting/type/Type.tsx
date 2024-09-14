import styles from "./Type.module.scss";

const Type: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>გარიგების ტიპი</h2>
      <div className={styles.inputs}>
        <div className={styles.radio}>
          <input type="radio" name="type" id="forSale" />
          <label htmlFor="forSale">იყიდება</label>
        </div>
        <div className={styles.radio}>
          <input type="radio" name="type" id="forRant" />
          <label htmlFor="forRant">ქირავდება</label>
        </div>
      </div>
    </div>
  );
};

export default Type;
