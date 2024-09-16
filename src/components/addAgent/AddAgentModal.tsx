import { useContext } from "react";
import { CheckIcon } from "../../svgs";
import UploadImage from "../uploadImage/UploadImage";
import styles from "./AddAgentModal.module.scss";
import { AgentContext } from "../../context/agentContext";

const AddAgentModal: React.FC = () => {
  const { setIsModalOpen } = useContext(AgentContext);

  return (
    <div className={styles.modalBg} onClick={() => setIsModalOpen(false)}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h1 className={styles.title}>აგენტის დამატება</h1>
        <form>
          <div className={styles.inputGroup}>
            <div className={styles.inputBox}>
              <label htmlFor="name">სახელი *</label>
              <input type="text" name="name" id="name" />
              <div className={styles.msg}>
                <CheckIcon />
                <small>მინიმუმ ორი სიმბოლო</small>
              </div>
            </div>
            <div className={styles.inputBox}>
              <label htmlFor="surname">გვარი *</label>
              <input type="text" name="surname" id="surname" />
              <div className={styles.msg}>
                <CheckIcon />
                <small>მინიმუმ ორი სიმბოლო</small>
              </div>
            </div>
          </div>
          <div className={styles.inputGroup}>
            <div className={styles.inputBox}>
              <label htmlFor="email">ელ-ფოსტა *</label>
              <input type="text" name="email" id="email" />
              <div className={styles.msg}>
                <CheckIcon />
                <small>გამოიყენეთ @redberry.ge ფოსტა</small>
              </div>
            </div>
            <div className={styles.inputBox}>
              <label htmlFor="phoneNumber">ტელეფონის ნომერი</label>
              <input type="text" name="phoneNumber" id="phoneNumber" />
              <div className={styles.msg}>
                <CheckIcon />
                <small>მხოლოდ რიცხვები</small>
              </div>
            </div>
          </div>
          <UploadImage />
          <div className={styles.btns}>
            <button type="button" className={styles.cancelBtn}>
              გაუქმება
            </button>
            <button type="submit" className={styles.addBtn}>
              დაამატე აგენტი
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAgentModal;
