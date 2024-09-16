import { useContext } from "react";
import styles from "./Dropdown.module.scss";
import { FormSelectContext } from "../../../../context/formSelectContext";

interface propsIFace {
  data: { id: number; name: string }[];
  type: string;
}

const Dropdown: React.FC<propsIFace> = ({ data, type }) => {
  const { handlePickRegion, handlePickCity } = useContext(FormSelectContext);

  return (
    <div className={styles.container} onClick={(e) => e.stopPropagation()}>
      {data?.map((x) => (
        <div
          className={styles.item}
          key={x.id}
          onClick={() => {
            if (type === "regions") {
              handlePickRegion(x);
            } else {
              handlePickCity(x);
            }
          }}
        >
          <span>{x.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
