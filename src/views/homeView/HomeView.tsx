import { useState } from "react";
import { Filters } from "../../components";
import { PlusIcon } from "../../svgs";
import styles from "./HomeView.module.scss";

const HomeView: React.FC = () => {
  const [plusIconColor, setPlusIconColor] = useState("#f93b1d");

  return (
    <main className={styles.container}>
      <header>
        <Filters />
        <div className={styles.addBtns}>
          <button className={styles.addListingBtn}>
            <PlusIcon />
            <span>ლისტინგის დამატება</span>
          </button>
          <button
            className={styles.addAgentBtn}
            onMouseOver={() => setPlusIconColor("white")}
            onMouseOut={() => setPlusIconColor("#f93b1d")}
          >
            <PlusIcon fill={plusIconColor} />
            <span>აგენტის დამატება</span>
          </button>
        </div>
      </header>
    </main>
  );
};

export default HomeView;
