import { CheckIcon } from "../../../svgs";
import styles from "./Location.module.scss";
import SelectInputs from "./select/SelectInputs";

interface propsIFace {
  values: {
    address: string;
    zipCode: string;
  };
  touched: {
    address: boolean | undefined;
    zipCode: boolean | undefined;
  };
  errors: {
    address: string | undefined;
    zipCode: string | undefined;
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
            <label htmlFor="zipCode">საფოსტო ინდექსი *</label>
            <input
              type="text"
              name="zipCode"
              id="zipCode"
              value={values.zipCode}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.zipCode && touched.zipCode
                  ? styles.inputError
                  : undefined
              }
            />
            <div
              className={
                errors.zipCode && touched.zipCode
                  ? styles.msgError
                  : !errors.zipCode && values.zipCode
                  ? styles.msgSuccess
                  : styles.msg
              }
            >
              <CheckIcon
                color={
                  !errors.zipCode && values.zipCode
                    ? "#45a849"
                    : errors.zipCode && touched.zipCode
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
