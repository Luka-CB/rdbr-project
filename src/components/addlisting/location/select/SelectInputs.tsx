import { useContext } from "react";
import { ChevronDown, ChevronUp } from "../../../../svgs";
import Dropdown from "./Dropdown";
import styles from "./SelectInputs.module.scss";
import { RegionsContext } from "../../../../context/regions";
import { FormSelectContext } from "../../../../context/formSelectContext";

const SelectInputs: React.FC = () => {
  const { fetchRegions, regions, fetchCities, cities } =
    useContext(RegionsContext);
  const {
    isRegionSelectActive,
    toggleRegionSelect,
    pickedRegion,
    regionError,
    isCitySelectActive,
    toggleCitySelect,
    pickedCity,
    cityError,
  } = useContext(FormSelectContext);

  const handleOpenRegions = () => {
    toggleRegionSelect(!isRegionSelectActive);

    if (regions?.length) return;
    fetchRegions();
  };

  const handleOpenCities = () => {
    toggleCitySelect(!isCitySelectActive);

    if (cities?.length) return;
    fetchCities();
  };

  return (
    <>
      <div className={styles.inputBox}>
        <label>რეგიონი *</label>
        <div
          className={
            regionError
              ? styles.selectInputError
              : isRegionSelectActive
              ? styles.selectInputActive
              : styles.selectInput
          }
          onClick={(e) => {
            e.stopPropagation();
            handleOpenRegions();
          }}
        >
          <span
            className={pickedRegion?.id ? styles.valueActive : styles.value}
          >
            {pickedRegion?.id ? pickedRegion?.name : "აირჩიე რეგიონი"}
          </span>
          {isRegionSelectActive ? <ChevronUp /> : <ChevronDown />}
        </div>

        {isRegionSelectActive ? (
          <Dropdown data={regions} type="regions" />
        ) : null}

        {regionError ? <small>{regionError}</small> : null}
      </div>

      {pickedRegion?.id ? (
        <div className={styles.inputBox}>
          <label>ქალაქი *</label>
          <div
            className={
              cityError
                ? styles.selectInputError
                : isCitySelectActive
                ? styles.selectInputActive
                : styles.selectInput
            }
            onClick={(e) => {
              e.stopPropagation();
              handleOpenCities();
            }}
          >
            <span
              className={pickedCity?.id ? styles.valueActive : styles.value}
            >
              {pickedCity?.id ? pickedCity?.name : "აირჩიე ქალაქი"}
            </span>
            {isCitySelectActive ? <ChevronUp /> : <ChevronDown />}
          </div>
          {isCitySelectActive ? (
            <Dropdown
              data={cities?.filter(
                (city) => city.region_id === pickedRegion.id
              )}
              type="cities"
            />
          ) : null}

          {cityError ? <small>{cityError}</small> : null}
        </div>
      ) : null}
    </>
  );
};

export default SelectInputs;
