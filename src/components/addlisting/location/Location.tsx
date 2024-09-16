import { CheckIcon } from "../../../svgs";
import styles from "./Location.module.scss";
import SelectInputs from "./select/SelectInputs";

interface propsIFace {
  values: {
    address: string;
    zip_code: string;
  };
  touched: {
    address: boolean | undefined;
    zip_code: boolean | undefined;
  };
  errors: {
    address: string | undefined;
    zip_code: string | undefined;
  };
  handleChange: any;
  handleBlur: any;
}

const Location: React.FC<propsIFace> = ({
  values,
  touched,
  errors,
  handleBlur,
  handleChange,
}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>მდებარეობა</h2>
      <div className={styles.inputs}>
        <div className={styles.row1}>
          <div className={styles.inputBox}>
            <label htmlFor="address">მისამართი *</label>
            <input
              type="text"
              name="address"
              id="address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.address && touched.address
                  ? styles.inputError
                  : undefined
              }
            />
            <div
              className={
                errors.address && touched.address
                  ? styles.msgError
                  : !errors.address && values.address.length >= 2
                  ? styles.msgSuccess
                  : styles.msg
              }
            >
              <CheckIcon
                color={
                  !errors.address && values.address.length >= 2
                    ? "#45a849"
                    : errors.address && touched.address
                    ? "#f93b1d"
                    : undefined
                }
              />
              <small>მინიმუმ ორი სიმბოლო</small>
            </div>
          </div>
          <div className={styles.inputBox}>
            <label htmlFor="zip_code">საფოსტო ინდექსი *</label>
            <input
              type="text"
              name="zip_code"
              id="zip_code"
              value={values.zip_code}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.zip_code && touched.zip_code
                  ? styles.inputError
                  : undefined
              }
            />
            <div
              className={
                errors.zip_code && touched.zip_code
                  ? styles.msgError
                  : !errors.zip_code && values.zip_code
                  ? styles.msgSuccess
                  : styles.msg
              }
            >
              <CheckIcon
                color={
                  !errors.zip_code && values.zip_code
                    ? "#45a849"
                    : errors.zip_code && touched.zip_code
                    ? "#f93b1d"
                    : undefined
                }
              />
              <small>მხოლოდ რიცხვები</small>
            </div>
          </div>
        </div>
        <div className={styles.row2}>
          <SelectInputs />
        </div>
      </div>
    </div>
  );
};

export default Location;
