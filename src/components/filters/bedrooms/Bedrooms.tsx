import { useContext, useState } from "react";
import styles from "./Bedrooms.module.scss";
import { FiltersContext } from "../../../context/filters";

const Bedrooms: React.FC = () => {
  const { setPickedFilters, pickedFilters, toggleBedroomDropdown } =
    useContext(FiltersContext);

  const [bedroomNum, setBedroomNum] = useState<number | string>(
    pickedFilters?.bedrooms ? pickedFilters?.bedrooms : 2
  );

  const handleChooseBtn = () => {
    setPickedFilters((prev: any) => ({
      ...prev,
      bedrooms: +bedroomNum,
    }));
    toggleBedroomDropdown(false);
  };

  return (
    <div className={styles.container} onClick={(e) => e.stopPropagation()}>
      <h3>საძინებლების რაოდენობა</h3>
      <input
        type="number"
        name="bedroomNum"
        id="bedroomNum"
        value={bedroomNum}
        onChange={(e) => setBedroomNum(e.target.value)}
      />
      <button className={styles.chooseBtn} onClick={handleChooseBtn}>
        არჩევა
      </button>
    </div>
  );
};

export default Bedrooms;
