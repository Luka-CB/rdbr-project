import { Agent, Details, Location, Type, UploadImage } from "../../components";
import styles from "./AddlistingView.module.scss";

const AddListingView: React.FC = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>ლისტინგის დამატება</h1>
      <form>
        <Type />
        <Location />
        <Details />
        <UploadImage />
        <Agent />
        <div className={styles.btns}>
          <button type="button" className={styles.cancelBtn}>
            გაუქმება
          </button>
          <button type="submit" className={styles.addListingBtn}>
            დაამატე ლისტინგი
          </button>
        </div>
      </form>
    </main>
  );
};

export default AddListingView;
