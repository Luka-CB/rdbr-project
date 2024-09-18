import { useContext } from "react";
import { PlusCircleIcon, TrashIcon } from "../../svgs";
import styles from "./UploadImage.module.scss";
import { ImageContext } from "../../context/imageContext";

const UploadImage: React.FC = () => {
  const { image, imageError, setImageError, setImage, handleRemoveImage } =
    useContext(ImageContext);

  const handleChooseFile = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (file.size > 1000000) {
        return setImageError("სურათი არ უნდა აღებმატებოდეს 1mb-ს ზომაში!");
      }
      setImage({
        size: file.size,
        url: reader.result as string,
      });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={styles.container}>
      <b>ატვირთეთ ფოტო *</b>
      <div className={imageError ? styles.uploadBoxError : styles.uploadBox}>
        {image?.url ? (
          <div className={styles.image}>
            <img src={image?.url} alt="image" />
            <div className={styles.removeIcon} onClick={handleRemoveImage}>
              <TrashIcon />
            </div>
          </div>
        ) : (
          <label htmlFor="file">
            <PlusCircleIcon />
            {imageError ? <small>{imageError}</small> : null}
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
  );
};

export default UploadImage;
