import { useContext } from "react";
import styles from "./PickedFilters.module.scss";
import { FiltersContext } from "../../context/filters";
import { CloseIcon, LariIcon } from "../../svgs";

const PickedFilters: React.FC = () => {
  const { pickedFilters, setPickedFilters } = useContext(FiltersContext);

  const handleRemoveRegion = (region: string) => {
    const filteredRegions = pickedFilters?.regions?.filter(
      (reg) => reg !== region
    );
    setPickedFilters((prev: any) => ({
      ...prev,
      regions: filteredRegions,
    }));
  };

  const handleRemovePrice = () => {
    setPickedFilters((prev: any) => ({
      ...prev,
      priceRange: {
        min: "",
        max: "",
      },
    }));
  };

  const handleRemoveArea = () => {
    setPickedFilters((prev: any) => ({
      ...prev,
      areaRange: {
        min: "",
        max: "",
      },
    }));
  };

  const handleRemoveBedrooms = () => {
    setPickedFilters((prev: any) => ({
      ...prev,
      bedrooms: null,
    }));
  };

  const handleClearAllPickedFilters = () => {
    setPickedFilters({});
    localStorage.removeItem("pickedFilters");
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.pills}
        style={{
          overflowX: pickedFilters?.regions?.length >= 4 ? "scroll" : "initial",
          width: pickedFilters?.regions?.length > 3 ? 800 : "auto",
        }}
      >
        <div className={styles.regions}>
          {pickedFilters?.regions?.map((region) => (
            <div className={styles.regPill} key={region}>
              <span>{region}</span>
              <div
                className={styles.closeIcon}
                onClick={() => handleRemoveRegion(region)}
              >
                <CloseIcon />
              </div>
            </div>
          ))}
        </div>

        {pickedFilters?.areaRange?.max || pickedFilters?.areaRange?.min ? (
          <div className={styles.pill}>
            <span>
              {pickedFilters?.areaRange?.min
                ? pickedFilters?.areaRange?.min
                : "0"}{" "}
              მ<sup>2</sup> -{" "}
              {pickedFilters?.areaRange?.max
                ? pickedFilters?.areaRange?.max
                : ">"}{" "}
              მ<sup>2</sup>
            </span>
            <div className={styles.closeIcon} onClick={handleRemoveArea}>
              <CloseIcon />
            </div>
          </div>
        ) : null}

        {pickedFilters?.priceRange?.max || pickedFilters?.priceRange?.min ? (
          <div className={styles.pricePill}>
            <div className={styles.price}>
              <div className={styles.min}>
                <span>
                  {pickedFilters?.priceRange?.min
                    ? pickedFilters?.priceRange?.min
                    : "0"}
                </span>
                <LariIcon />
              </div>
              <span className={styles.dash}>-</span>
              <div className={styles.max}>
                <span>
                  {pickedFilters?.priceRange?.max
                    ? pickedFilters?.priceRange?.max
                    : ">"}
                </span>
                <LariIcon />
              </div>
            </div>
            <div className={styles.closeIcon} onClick={handleRemovePrice}>
              <CloseIcon />
            </div>
          </div>
        ) : null}

        {pickedFilters?.bedrooms ? (
          <div className={styles.pill}>
            <span>{pickedFilters?.bedrooms}</span>
            <div className={styles.closeIcon} onClick={handleRemoveBedrooms}>
              <CloseIcon />
            </div>
          </div>
        ) : null}
      </div>

      {(pickedFilters?.areaRange?.max && pickedFilters?.areaRange?.min) ||
      (pickedFilters?.priceRange?.max && pickedFilters?.priceRange.min) ||
      pickedFilters?.bedrooms ||
      pickedFilters?.regions?.length ? (
        <div className={styles.clearAll} onClick={handleClearAllPickedFilters}>
          <b>გასუფთავება</b>
        </div>
      ) : null}
    </div>
  );
};

export default PickedFilters;
