import { useContext } from "react";
import { CheckIcon } from "../../svgs";
import UploadImage from "../uploadImage/UploadImage";
import styles from "./AddAgentModal.module.scss";
import { AgentContext } from "../../context/agentContext";
import { useFormik } from "formik";
import { agentSchema } from "../../utils/inputValidationSchemas";
import { ImageContext } from "../../context/imageContext";

const AddAgentModal: React.FC = () => {
  const { setIsModalOpen } = useContext(AgentContext);
  const { agentImage, setAgentImageError, handleRemoveAgentImage } =
    useContext(ImageContext);

  const onSubmit = () => {
    if (!agentImage.url) {
      return setAgentImageError("გთხოვთ აირჩიოთ სურათი!");
    }

    console.log({ ...values, image: agentImage.url });
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      phone: "",
    },
    validationSchema: agentSchema,
    onSubmit,
  });

  const handleCancelBtn = () => {
    resetForm();
    handleRemoveAgentImage();
    setIsModalOpen(false);
  };

  return (
    <div className={styles.modalBg} onClick={() => setIsModalOpen(false)}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h1 className={styles.title}>აგენტის დამატება</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <div className={styles.inputBox}>
              <label htmlFor="name">სახელი *</label>
              <input
                type="text"
                name="name"
                id="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.name && touched.name ? styles.inputError : undefined
                }
              />
              <div
                className={
                  errors.name && touched.name
                    ? styles.msgError
                    : !errors.name && touched.name
                    ? styles.msgSuccess
                    : styles.msg
                }
              >
                <CheckIcon
                  color={
                    !errors.name && touched.name
                      ? "#45a849"
                      : errors.name && touched.name
                      ? "#f93b1d"
                      : undefined
                  }
                />
                <small>მინიმუმ ორი სიმბოლო</small>
              </div>
            </div>
            <div className={styles.inputBox}>
              <label htmlFor="surname">გვარი *</label>
              <input
                type="text"
                name="surname"
                id="surname"
                value={values.surname}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.surname && touched.surname
                    ? styles.inputError
                    : undefined
                }
              />
              <div
                className={
                  errors.surname && touched.surname
                    ? styles.msgError
                    : !errors.surname && touched.surname
                    ? styles.msgSuccess
                    : styles.msg
                }
              >
                <CheckIcon
                  color={
                    !errors.surname && touched.surname
                      ? "#45a849"
                      : errors.surname && touched.surname
                      ? "#f93b1d"
                      : undefined
                  }
                />
                <small>მინიმუმ ორი სიმბოლო</small>
              </div>
            </div>
          </div>
          <div className={styles.inputGroup}>
            <div className={styles.inputBox}>
              <label htmlFor="email">ელ-ფოსტა *</label>
              <input
                type="text"
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.email && touched.email ? styles.inputError : undefined
                }
              />
              <div
                className={
                  errors.email && touched.email
                    ? styles.msgError
                    : !errors.email && touched.email
                    ? styles.msgSuccess
                    : styles.msg
                }
              >
                <CheckIcon
                  color={
                    !errors.email && touched.email
                      ? "#45a849"
                      : errors.email && touched.email
                      ? "#f93b1d"
                      : undefined
                  }
                />
                <small>გამოიყენეთ @redberry.ge ფოსტა</small>
              </div>
            </div>
            <div className={styles.inputBox}>
              <label htmlFor="phoneNumber">ტელეფონის ნომერი</label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.phone && touched.phone ? styles.inputError : undefined
                }
              />
              <div
                className={
                  errors.phone && touched.phone
                    ? styles.msgError
                    : !errors.phone && touched.phone
                    ? styles.msgSuccess
                    : styles.msg
                }
              >
                <CheckIcon
                  color={
                    !errors.phone && touched.phone
                      ? "#45a849"
                      : errors.phone && touched.phone
                      ? "#f93b1d"
                      : undefined
                  }
                />
                <small>უნდა იყოს ფორმატის 5XXXXXXXX</small>
              </div>
            </div>
          </div>
          <UploadImage isAgent />
          <div className={styles.btns}>
            <button
              type="button"
              className={styles.cancelBtn}
              onClick={handleCancelBtn}
            >
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
