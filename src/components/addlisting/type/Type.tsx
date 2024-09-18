import { useContext } from "react";
import styles from "./Type.module.scss";
import { AddListingFormContext } from "../../../context/addListingFormContext";

const Type: React.FC = () => {
  const { handleSetIsRental, isRental } = useContext(AddListingFormContext);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>გარიგების ტიპი</h2>
      <div className={styles.inputs}>
        <div className={styles.radio}>
          <input
            type="radio"
            name="isRental"
            id="forSale"
            checked={isRental === "0"}
            value={0}
            onChange={(e) => handleSetIsRental(e.target.value)}
          />
          <label htmlFor="forSale">იყიდება</label>
        </div>
        <div className={styles.radio}>
          <input
            type="radio"
            name="isRental"
            id="forRant"
            checked={isRental === "1"}
            value={1}
            onChange={(e) => handleSetIsRental(e.target.value)}
          />
          <label htmlFor="forRant">ქირავდება</label>
        </div>
      </div>
    </div>
  );
};

export default Type;
