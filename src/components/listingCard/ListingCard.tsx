import { listingIFace } from "../../context/listingContext";
import { AreaIcon, BedIcon, LocationIcon, ZipCodeIcon } from "../../svgs";
import styles from "./ListingCard.module.scss";

interface propsIFace {
  listing: listingIFace;
}

const ListingCard: React.FC<propsIFace> = ({ listing }) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString("en-US").replace(/,/g, " ");
  };

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={listing?.image} alt="image" />
      </div>
      <div className={styles.info}>
        <b>{formatPrice(listing?.price)} ₾</b>
        <div className={styles.location}>
          <LocationIcon />
          <span>
            {listing?.city?.name}, {listing?.address}
          </span>
        </div>
        <div className={styles.details}>
          <div className={styles.item}>
            <BedIcon />
            <span>{listing?.bedrooms}</span>
          </div>
          <div className={styles.item}>
            <AreaIcon />
            <span>
              {listing?.area} მ<sup>2</sup>
            </span>
          </div>
          <div className={styles.item}>
            <ZipCodeIcon />
            <span>{listing?.zip_code}</span>
          </div>
        </div>
      </div>

      <div className={styles.transactionType}>
        <span>{listing?.is_rental === 0 ? "იყიდება" : "ქირავდება"}</span>
      </div>
    </div>
  );
};

export default ListingCard;
