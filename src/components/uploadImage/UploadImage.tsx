import { useContext } from "react";
import { PlusCircleIcon, TrashIcon } from "../../svgs";
import styles from "./UploadImage.module.scss";
import { ImageContext } from "../../context/imageContext";

interface propsIFace {
  isAgent?: boolean;
}

const UploadImage: React.FC<propsIFace> = ({ isAgent = false }) => {
  const {
    listingImage,
    listingImageError,
    setListingImageError,
    setListingImage,
    handleRemoveListingImage,
    agentImage,
    agentImageError,
    setAgentImageError,
    setAgentImage,
    handleRemoveAgentImage,
  } = useContext(ImageContext);

  const handleChooseFile = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (isAgent) {
        if (file.size > 1000000) {
          return setAgentImageError(
            "სურათი არ უნდა აღებმატებოდეს 1mb-ს ზომაში!"
          );
        }
        setAgentImage({
          size: file.size,
          url: reader.result as string,
        });
      } else {
        if (file.size > 1000000) {
          return setListingImageError(
            "სურათი არ უნდა აღებმატებოდეს 1mb-ს ზომაში!"
          );
        }
        setListingImage({
          size: file.size,
          url: reader.result as string,
        });
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      {isAgent ? (
        <div className={styles.container}>
          <b>ატვირთეთ ფოტო *</b>
          <div
            className={
              agentImageError ? styles.uploadBoxError : styles.uploadBox
            }
          >
            {agentImage?.url ? (
              <div className={styles.image}>
                <img src={agentImage?.url} alt="image" />
                <div
                  className={styles.removeIcon}
                  onClick={handleRemoveAgentImage}
                >
                  <TrashIcon />
                </div>
              </div>
            ) : (
              <label htmlFor="file">
                <PlusCircleIcon />
                {agentImageError ? <small>{agentImageError}</small> : null}
              </label>
            )}
          </div>
          <input
            type="file"
            name="file"
            id="file"
            accept="image/*"
            hidden
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              e.target.files !== null && handleChooseFile(e.target.files[0])
            }
          />
        </div>
      ) : (
        <div className={styles.container}>
          <b>ატვირთეთ ფოტო *</b>
          <div
            className={
              listingImageError ? styles.uploadBoxError : styles.uploadBox
            }
          >
            {listingImage?.url ? (
              <div className={styles.image}>
                <img src={listingImage?.url} alt="image" />
                <div
                  className={styles.removeIcon}
                  onClick={handleRemoveListingImage}
                >
                  <TrashIcon />
                </div>
              </div>
            ) : (
              <label htmlFor="file">
                <PlusCircleIcon />
                {listingImageError ? <small>{listingImageError}</small> : null}
              </label>
            )}
          </div>
          <input
            type="file"
            name="file"
            id="file"
            accept="image/*"
            hidden
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              e.target.files !== null && handleChooseFile(e.target.files[0])
            }
          />
        </div>
      )}
    </>
  );
};

export default UploadImage;
