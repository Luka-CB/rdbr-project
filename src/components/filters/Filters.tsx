import { useContext, useEffect } from "react";
import { ChevronDown } from "../../svgs";
import styles from "./Filters.module.scss";
import { RegionsContext } from "../../context/regions";
import Region from "./region/Region";
import { FiltersContext } from "../../context/filters";
import PriceCategory from "./priceCategory/PriceCategory";
import Area from "./area/Area";
import Bedrooms from "./bedrooms/Bedrooms";

const Filters: React.FC = () => {
  const { fetchRegions } = useContext(RegionsContext);
  const {
    isRegionDropdownOpen,
    toggleRegionDropdown,
    isPriceDropdownOpen,
    togglePriceDropdown,
    isAreaDropdownOpen,
    toggleAreaDropdown,
    isbedroomDropdownOpen,
    toggleBedroomDropdown,
    activeFilter,
  } = useContext(FiltersContext);

  useEffect(() => {
    fetchRegions();
  }, []);

  return (
    <div className={styles.filters}>
      <div className={styles.btnWrapper}>
        <div
          className={activeFilter === "region" ? styles.btnActive : styles.btn}
          onClick={(e) => {
            e.stopPropagation();
            toggleRegionDropdown(!isRegionDropdownOpen);
          }}
        >
          <span>რეგიონი</span>
          <ChevronDown />
        </div>
        {isRegionDropdownOpen ? <Region /> : null}
      </div>
      <div className={styles.btnWrapper}>
        <div
          className={activeFilter === "price" ? styles.btnActive : styles.btn}
          onClick={(e) => {
            e.stopPropagation();
            togglePriceDropdown(!isPriceDropdownOpen);
          }}
        >
          <span>საფასო კატეგორია</span>
          <ChevronDown />
        </div>

        {isPriceDropdownOpen ? <PriceCategory /> : null}
      </div>
      <div className={styles.btnWrapper}>
        <div
          className={activeFilter === "area" ? styles.btnActive : styles.btn}
          onClick={(e) => {
            e.stopPropagation();
            toggleAreaDropdown(!isAreaDropdownOpen);
          }}
        >
          <span>ფართობი</span>
          <ChevronDown />
        </div>

        {isAreaDropdownOpen ? <Area /> : null}
      </div>
      <div className={styles.btnWrapper}>
        <div
          className={activeFilter === "bedroom" ? styles.btnActive : styles.btn}
          onClick={(e) => {
            e.stopPropagation();
            toggleBedroomDropdown(!isbedroomDropdownOpen);
          }}
        >
          <span>საძინებლების რაოდენობა</span>
          <ChevronDown />
        </div>

        {isbedroomDropdownOpen ? <Bedrooms /> : null}
      </div>
    </div>
  );
};

export default Filters;
