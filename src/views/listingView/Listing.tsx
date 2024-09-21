import { useContext, useEffect } from "react";
import { DeleteModal, Slider } from "../../components";
import {
  AreaIcon,
  BedIcon,
  EmailIcon,
  LeftArrowIcon,
  LocationIcon,
  PhoneIcon,
  ZipCodeIcon,
} from "../../svgs";
import { formatPrice } from "../../utils/misc";
import styles from "./Listing.module.scss";
import { ListingContext } from "../../context/listingContext";
import { useNavigate, useParams } from "react-router-dom";
import { format, parseISO } from "date-fns";

const Listing: React.FC = () => {
  const { getListing, listing, isDelModalOpen, setIsDelModalOpen } =
    useContext(ListingContext);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getListing(parseInt(id as string));
  }, [id]);

  return (
    <main className={styles.container}>
      <div
        className={styles.backBtn}
        onClick={() => navigate({ pathname: "/" })}
      >
        <LeftArrowIcon />
      </div>
      <section className={styles.details}>
        <div className={styles.col1}>
          <div className={styles.image}>
            <img src={listing?.image} alt="image" />
            <div className={styles.transactionType}>
              <span>{listing?.is_rental === 0 ? "იყიდება" : "ქირავდება"}</span>
            </div>
          </div>
          <div className={styles.date}>
            <span>
              გამოქვეყნების თარიღი{" "}
              {listing?.created_at &&
                format(new Date(parseISO(listing?.created_at)), "MM/dd/yy")}
            </span>
          </div>
        </div>
        <div className={styles.col2}>
          <h1>{formatPrice(listing?.price)} ₾</h1>
          <div className={styles.locationInfo}>
            <div className={styles.item}>
              <div className={styles.icon}>
                <LocationIcon />
              </div>
              <span>
                {listing?.city?.name}, {listing?.address}
              </span>
            </div>
            <div className={styles.item}>
              <div className={styles.icon}>
                <AreaIcon />
              </div>
              <span>
                ფართი {listing?.area} მ<sup>2</sup>
              </span>
            </div>
            <div className={styles.item}>
              <div className={styles.icon}>
                <BedIcon />
              </div>
              <span>საძინებელი {listing?.bedrooms}</span>
            </div>
            <div className={styles.item}>
              <div className={styles.icon}>
                <ZipCodeIcon />
              </div>
              <span>საფოსტო ინდექსი {listing?.zip_code}</span>
            </div>
          </div>
          <p className={styles.description}>{listing?.description}</p>
          <div className={styles.agent}>
            <div className={styles.person}>
              <div className={styles.avatar}>
                <img src={listing?.agent?.avatar} alt="avatar" />
              </div>
              <div className={styles.personInfo}>
                <h5>
                  {listing?.agent?.name} {listing?.agent?.surname}
                </h5>
                <small>აგენტი</small>
              </div>
            </div>
            <div className={styles.contact}>
              <div className={styles.item}>
                <EmailIcon />
                <span>{listing?.agent?.email}</span>
              </div>
              <div className={styles.item}>
                <PhoneIcon />
                <span>{listing?.agent?.phone?.replace(/(.{3})/g, "$1 ")}</span>
              </div>
            </div>
          </div>
          <button
            className={styles.deleteBtn}
            onClick={() => setIsDelModalOpen(true)}
          >
            ლისტინგის წაშლა
          </button>
        </div>
      </section>
      <section className={styles.similarLocations}>
        <h2 className={styles.title}>ბინები მსგავს ლოკაციაზე</h2>
        <Slider region_id={listing?.city?.region_id} listing_id={listing?.id} />
      </section>

      {isDelModalOpen ? <DeleteModal listing_id={+listing?.id} /> : null}
    </main>
  );
};

export default Listing;
