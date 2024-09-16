import { useContext } from "react";
import styles from "./Type.module.scss";
import { AddListingFormContext } from "../../../context/addListingFormContext";

const Type: React.FC = () => {
  const { setIsRental, isRentalError } = useContext(AddListingFormContext);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>გარიგების ტიპი</h2>
      <div className={styles.inputs}>
        <div className={styles.radio}>
          <input
            type="radio"
            name="isRental"
            id="forSale"
            value={0}
            onChange={(e) => setIsRental(e.target.value)}
          />
          <label htmlFor="forSale">იყიდება</label>
        </div>
        <div className={styles.radio}>
          <input
            type="radio"
            name="isRental"
            id="forRant"
            value={1}
            onChange={(e) => setIsRental(e.target.value)}
          />
          <label htmlFor="forRant">ქირავდება</label>
        </div>
      </div>
      {isRentalError ? <small>{isRentalError}</small> : null}
    </div>
  );
};

export default Type;
