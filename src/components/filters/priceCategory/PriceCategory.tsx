import { useContext, useEffect, useState } from "react";
import LariIcon from "../../../svgs/LariIcon";
import styles from "./PriceCategory.module.scss";
import { FiltersContext } from "../../../context/filters";

const prices = [
  { id: 1, value: "50000" },
  { id: 2, value: "100000" },
  { id: 3, value: "150000" },
  { id: 4, value: "200000" },
  { id: 5, value: "300000" },
];

const PriceCategory: React.FC = () => {
  const { setPickedFilters, pickedFilters, togglePriceDropdown } =
    useContext(FiltersContext);

  const [pickedMinValue, setPickedMinValue] = useState(
    pickedFilters?.priceRange?.min ? pickedFilters?.priceRange?.min : ""
  );
  const [pickedMaxValue, setPickedMaxValue] = useState(
    pickedFilters?.priceRange?.max ? pickedFilters?.priceRange?.max : ""
  );
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (pickedMaxValue && pickedMinValue) {
      if (+pickedMinValue > +pickedMaxValue) {
        setErrorMsg("გთხოვთ შეიყვანოთ ვალიდური რიცხვები");
      } else {
        setErrorMsg("");
      }
    }
  }, [pickedMaxValue, pickedMinValue]);

  const handleChooseBtn = () => {
    if (pickedMaxValue && pickedMinValue) {
      if (pickedMaxValue && pickedMinValue) {
        if (+pickedMinValue > +pickedMaxValue) return;
      }
      setPickedFilters((prev: any) => ({
        ...prev,
        priceRange: {
          min: +pickedMinValue,
          max: +pickedMaxValue,
        },
      }));
      togglePriceDropdown(false);
    }
  };

  return (
    <div className={styles.container} onClick={(e) => e.stopPropagation()}>
      <h3>ფასის მიხედვით</h3>
      {errorMsg ? <small>{errorMsg}</small> : null}
      <div className={styles.inputs}>
        <div className={styles.col}>
          <div className={errorMsg ? styles.inputBoxError : styles.inputBox}>
            <input
              type="number"
              name="min"
              id="min"
              placeholder="დან"
              value={pickedMinValue}
              onChange={(e) => setPickedMinValue(e.target.value)}
            />
            <LariIcon />
          </div>
          <div className={styles.options}>
            <b>მინ. ფასი</b>
            <div className={styles.prices}>
              {prices.map((price) => (
                <div
                  className={styles.price}
                  key={price.id}
                  onClick={() => setPickedMinValue(price.value)}
                >
                  <span>{price.value}</span>
                  <LariIcon />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.col}>
          <div className={errorMsg ? styles.inputBoxError : styles.inputBox}>
            <input
              type="number"
              name="max"
              id="max"
              placeholder="მდე"
              value={pickedMaxValue}
              onChange={(e) => setPickedMaxValue(e.target.value)}
            />
            <LariIcon />
          </div>
          <div className={styles.options}>
            <b>მაქს. ფასი</b>
            <div className={styles.prices}>
              {prices.map((price) => (
                <div
                  className={styles.price}
                  key={price.id}
                  onClick={() => setPickedMaxValue(price.value)}
                >
                  <span>{price.value}</span>
                  <LariIcon />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <button className={styles.chooseBtn} onClick={handleChooseBtn}>
        არჩევა
      </button>
    </div>
  );
};

export default PriceCategory;
