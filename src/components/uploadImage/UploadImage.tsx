import { PlusCircleIcon } from "../../svgs";
import styles from "./UploadImage.module.scss";

const UploadImage: React.FC = () => {
  return (
    <div className={styles.container}>
      <b>ატვირთეთ ფოტო *</b>
      <label htmlFor="file">
        <div className={styles.uploadBox}>
          <PlusCircleIcon />
        </div>
      </label>
      <input type="file" name="file" id="file" accept="image/*" hidden />
    </div>
  );
};

export default UploadImage;
