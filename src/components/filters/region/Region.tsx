import { useContext } from "react";
import { RegionsContext } from "../../../context/regions";
import styles from "./Region.module.scss";

const Region: React.FC = () => {
  const { regions } = useContext(RegionsContext);

  return (
    <div className={styles.container} onClick={(e) => e.stopPropagation()}>
      <h3>რეგიონის მიხედვით</h3>
      <div className={styles.regions}>
        {regions?.map((region) => (
          <div className={styles.region} key={region.id}>
            <input type="checkbox" name={region.name} value={region.name} />
            <label htmlFor={region.name}>{region.name}</label>
          </div>
        ))}
      </div>
      <button className={styles.chooseBtn}>არჩევა</button>
    </div>
  );
};

export default Region;
