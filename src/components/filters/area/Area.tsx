import { useContext, useEffect, useState } from "react";
import styles from "./Area.module.scss";
import { FiltersContext } from "../../../context/filters";

const areas = [
  { id: 1, value: "50" },
  { id: 2, value: "100" },
  { id: 3, value: "150" },
  { id: 4, value: "200" },
  { id: 5, value: "300" },
];

const Area: React.FC = () => {
  const { setPickedFilters, pickedFilters, toggleAreaDropdown } =
    useContext(FiltersContext);

  const [pickedMinValue, setPickedMinValue] = useState(
    pickedFilters?.areaRange?.min ? pickedFilters?.areaRange?.min : ""
  );
  const [pickedMaxValue, setPickedMaxValue] = useState(
    pickedFilters?.areaRange?.max ? pickedFilters?.areaRange?.max : ""
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
      if (+pickedMinValue > +pickedMaxValue) return;
      setPickedFilters((prev: any) => ({
        ...prev,
        areaRange: { min: +pickedMinValue, max: +pickedMaxValue },
      }));
      toggleAreaDropdown(false);
    }
  };

  return (
    <div className={styles.container} onClick={(e) => e.stopPropagation()}>
      <h3>ფართობის მიხედვით</h3>
      {errorMsg ? <small>{errorMsg}</small> : null}
      <div className={styles.inputs}>
        <div className={styles.col}>
          <div className={errorMsg ? styles.inputBoxError : styles.inputBox}>
            <input
              type="number"
              placeholder="დან"
              value={pickedMinValue}
              onChange={(e) => setPickedMinValue(e.target.value)}
            />
            <p>
              მ<sup>2</sup>
            </p>
          </div>
          <div className={styles.options}>
            <b>
              მინ. მ<sup>2</sup>
            </b>
            <div className={styles.prices}>
              {areas.map((area) => (
                <div
                  className={styles.price}
                  key={area.id}
                  onClick={() => setPickedMinValue(area.value)}
                >
                  <span>{area.value}</span>
                  <p>
                    მ<sup>2</sup>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.col}>
          <div className={errorMsg ? styles.inputBoxError : styles.inputBox}>
            <input
              type="number"
              placeholder="მდე"
              value={pickedMaxValue}
              onChange={(e) => setPickedMaxValue(e.target.value)}
            />
            <p>
              მ<sup>2</sup>
            </p>
          </div>
          <div className={styles.options}>
            <b>
              მაქს. მ<sup>2</sup>
            </b>
            <div className={styles.prices}>
              {areas.map((area) => (
                <div
                  className={styles.price}
                  key={area.id}
                  onClick={() => setPickedMaxValue(area.value)}
                >
                  <span>{area.value}</span>
                  <p>
                    მ<sup>2</sup>
                  </p>
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

export default Area;
