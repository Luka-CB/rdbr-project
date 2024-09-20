import { useContext, useEffect, useState } from "react";
import { Filters, ListingCard, PickedFilters } from "../../components";
import { PlusIcon } from "../../svgs";
import styles from "./HomeView.module.scss";
import { useNavigate } from "react-router-dom";
import { ListingContext } from "../../context/listingContext";
import { AgentContext } from "../../context/agentContext";
import { FiltersContext } from "../../context/filters";

const HomeView: React.FC = () => {
  const [plusIconColor, setPlusIconColor] = useState("#f93b1d");

  const { getListings, listings } = useContext(ListingContext);
  const { setIsModalOpen } = useContext(AgentContext);
  const { pickedFilters } = useContext(FiltersContext);

  const navigate = useNavigate();

  useEffect(() => {
    getListings();
  }, []);

  const filteredListings = listings?.filter(
    (listing) =>
      (listing.area >= pickedFilters?.areaRange?.min &&
        listing.area <= pickedFilters?.areaRange?.max) ||
      (listing.price >= pickedFilters?.priceRange?.min &&
        listing.price <= pickedFilters?.priceRange?.max) ||
      listing.bedrooms === pickedFilters?.bedrooms ||
      pickedFilters?.regions?.includes(listing?.city?.region?.name)
  );

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
        {((pickedFilters?.areaRange?.max && pickedFilters?.areaRange?.min) ||
          (pickedFilters?.priceRange?.max && pickedFilters?.priceRange.min) ||
          pickedFilters?.bedrooms ||
          pickedFilters?.regions?.length) &&
        filteredListings?.length === 0 ? (
          <p className={styles.msg}>
            აღნიშნული მონაცემებით განცხადება არ იძებნება
          </p>
        ) : filteredListings?.length ? (
          <>
            {filteredListings?.map((fl) => (
              <ListingCard key={fl.id} listing={fl} />
            ))}
          </>
        ) : (
          <>
            {listings?.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </>
        )}
      </div>
    </main>
  );
};

export default HomeView;
