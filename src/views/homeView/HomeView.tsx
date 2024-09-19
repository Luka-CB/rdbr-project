import { useContext, useEffect, useState } from "react";
import { Filters, ListingCard, PickedFilters } from "../../components";
import { PlusIcon } from "../../svgs";
import styles from "./HomeView.module.scss";
import { useNavigate } from "react-router-dom";
import { ListingContext } from "../../context/listingContext";
import { AgentContext } from "../../context/agentContext";

const HomeView: React.FC = () => {
  const [plusIconColor, setPlusIconColor] = useState("#f93b1d");

  const { getListings, listings } = useContext(ListingContext);
  const { setIsModalOpen } = useContext(AgentContext);

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
            onClick={() => setIsModalOpen(true)}
          >
            <PlusIcon fill={plusIconColor} />
            <span>აგენტის დამატება</span>
          </button>
        </div>
      </header>
      <div className={styles.content}>
        {listings?.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </main>
  );
};

export default HomeView;
