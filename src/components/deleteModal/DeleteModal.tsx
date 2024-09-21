import { useContext, useEffect } from "react";
import { CloseIcon } from "../../svgs";
import styles from "./DeleteModal.module.scss";
import { ListingContext } from "../../context/listingContext";
import { useNavigate } from "react-router-dom";

interface propsIFace {
  listing_id: number;
}

const DeleteModal: React.FC<propsIFace> = ({ listing_id }) => {
  const {
    setIsDelModalOpen,
    isDelListingLoading,
    isDelListingSuccess,
    setIsDelListingSuccess,
    deleteListing,
  } = useContext(ListingContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (isDelListingSuccess) {
      setIsDelModalOpen(false);
      setIsDelListingSuccess(false);
      navigate({ pathname: "/" });
    }
  }, [isDelListingSuccess]);

  return (
    <div className={styles.modalBg} onClick={() => setIsDelModalOpen(false)}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div
          className={styles.closeIcon}
          onClick={() => setIsDelModalOpen(false)}
        >
          <CloseIcon size="22" />
        </div>
        <p>გსურთ წაშალოთ ლისტინგი?</p>
        <div className={styles.btns}>
          <button
            className={styles.abortBtn}
            onClick={() => setIsDelModalOpen(false)}
            disabled={isDelListingLoading}
          >
            გაუქმება
          </button>
          <button
            className={styles.submitBtn}
            onClick={() => deleteListing(listing_id)}
            disabled={isDelListingLoading}
          >
            {isDelListingLoading ? "..." : "დადასტურება"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
