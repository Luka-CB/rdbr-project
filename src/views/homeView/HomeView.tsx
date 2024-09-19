import { useContext, useEffect, useState } from "react";
import { Filters, PickedFilters } from "../../components";
import { PlusIcon } from "../../svgs";
import styles from "./HomeView.module.scss";
import { useNavigate } from "react-router-dom";
import { ListingContext } from "../../context/listingContext";

const HomeView: React.FC = () => {
  const [plusIconColor, setPlusIconColor] = useState("#f93b1d");

  const { getListings } = useContext(ListingContext);

  const navigate = useNavigate();

  useEffect(() => {
    getListings();
  }, []);

  return (
    <main className={styles.container}>
      <header>
        <div className="filters">
          <Filters />
          <PickedFilters />
        </div>
        <div className={styles.addBtns}>
          <button
            className={styles.addListingBtn}
            onClick={() => navigate({ pathname: "/add" })}
          >
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
