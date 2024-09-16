import { useContext } from "react";
import { PlusCircleIcon, TrashIcon } from "../../svgs";
import styles from "./UploadImage.module.scss";
import { ImageContext } from "../../context/imageContext";

const UploadImage: React.FC = () => {
  const { image, setImage, handleRemoveImage } = useContext(ImageContext);

  const handleChooseFile = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
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
      <div className={styles.uploadBox}>
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
