import styles from "./Slider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { LeftArrowIcon, RightArrowIcon } from "../../svgs";
import { useContext, useEffect, useRef } from "react";
import { ListingContext, listingIFace } from "../../context/listingContext";
import ListingCard from "../listingCard/ListingCard";

interface propsIFace {
  region_id: number;
  listing_id: number | string;
}

const Slider: React.FC<propsIFace> = ({ region_id, listing_id }) => {
  const swiperRef = useRef<any>();

  const { getListings, listings } = useContext(ListingContext);

  useEffect(() => {
    if (listings?.length) {
      return;
    } else {
      getListings();
    }
  }, []);

  let similarListings: listingIFace[] = [];

  if (listings?.length) {
    similarListings = listings?.filter(
      (listing) =>
        listing?.city?.region_id === region_id && listing?.id !== listing_id
    );
  }

  return (
    <div className={styles.slider}>
      <div
        className={styles.leftArrow}
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <LeftArrowIcon />
      </div>
      <Swiper
        className={styles.swiper}
        spaceBetween={50}
        slidesPerView={4}
        loop={true}
        cssMode={true}
        initialSlide={0}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {similarListings?.map((sl) => (
          <SwiperSlide key={sl.id} className={styles.slide}>
            <ListingCard listing={sl} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={styles.rightArrow}
        onClick={() => swiperRef.current?.slideNext()}
      >
        <RightArrowIcon />
      </div>
    </div>
  );
};

export default Slider;
