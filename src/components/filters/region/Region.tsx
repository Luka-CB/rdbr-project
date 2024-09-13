import { useContext, useState } from "react";
import { RegionsContext } from "../../../context/regions";
import styles from "./Region.module.scss";
import { FiltersContext } from "../../../context/filters";

const Region: React.FC = () => {
  const { regions } = useContext(RegionsContext);
  const { setPickedFilters, pickedFilters, toggleRegionDropdown } =
    useContext(FiltersContext);

  const [pickedRegions, setPickedRegions] = useState<string[]>(
    pickedFilters?.regions?.length ? pickedFilters?.regions : []
  );

  const handlePickRegion = (region: string) => {
    if (pickedRegions.includes(region)) {
      const newArr = pickedRegions.filter((pr) => pr !== region);
      setPickedRegions(newArr);
    } else {
      setPickedRegions((prev) => [...prev, region]);
    }
  };

  const handleChooseBtn = () => {
    setPickedFilters((prev: any) => ({
      ...prev,
      regions: pickedRegions,
    }));
    toggleRegionDropdown(false);
  };

  return (
    <div className={styles.container} onClick={(e) => e.stopPropagation()}>
      <h3>რეგიონის მიხედვით</h3>
      <div className={styles.regions}>
        {regions?.map((region) => (
          <div className={styles.region} key={region.id}>
            <input
              type="checkbox"
              name={region.name}
              id={region.name}
              checked={pickedRegions?.includes(region.name)}
              onChange={() => handlePickRegion(region.name)}
            />
            <label htmlFor={region.name}>{region.name}</label>
          </div>
        ))}
      </div>
      <button
        className={styles.chooseBtn}
        onClick={handleChooseBtn}
        disabled={!pickedRegions.length}
      >
        არჩევა
      </button>
    </div>
  );
};

export default Region;
