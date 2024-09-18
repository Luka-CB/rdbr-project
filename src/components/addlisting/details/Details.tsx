import { FormikErrors, FormikTouched } from "formik";
import { CheckIcon } from "../../../svgs";
import styles from "./Details.module.scss";

interface propsIFace {
  values: {
    price: string;
    area: string;
    bedrooms: string;
    description: string;
  };
  touched: {
    price: boolean | FormikTouched<any> | FormikTouched<any>[] | undefined;
    area: boolean | FormikTouched<any> | FormikTouched<any>[] | undefined;
    bedrooms: boolean | FormikTouched<any> | FormikTouched<any>[] | undefined;
    description:
      | boolean
      | FormikTouched<any>
      | FormikTouched<any>[]
      | undefined;
  };
  errors: {
    price:
      | string
      | string[]
      | FormikErrors<any>
      | FormikErrors<any>[]
      | undefined;
    area:
      | string
      | string[]
      | FormikErrors<any>
      | FormikErrors<any>[]
      | undefined;
    bedrooms:
      | string
      | string[]
      | FormikErrors<any>
      | FormikErrors<any>[]
      | undefined;
    description:
      | string
      | string[]
      | FormikErrors<any>
      | FormikErrors<any>[]
      | undefined;
  };
  handleChange: any;
  handleBlur: any;
}

const Details: React.FC<propsIFace> = ({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>ბინის დეტალები</h2>
      <div className={styles.inputs}>
        <div className={styles.row1}>
          <div className={styles.inputBox}>
            <label htmlFor="price">ფასი *</label>
            <input
              type="text"
              name="price"
              id="price"
              value={values.price}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.price && touched.price ? styles.inputError : undefined
              }
            />
            <div
              className={
                errors.price && touched.price
                  ? styles.msgError
                  : !errors.price && touched.price
                  ? styles.msgSuccess
                  : styles.msg
              }
            >
              <CheckIcon
                color={
                  !errors.price && touched.price
                    ? "#45a849"
                    : errors.price && touched.price
                    ? "#f93b1d"
                    : undefined
                }
              />
              <small>მხოლოდ რიცხვები</small>
            </div>
          </div>
          <div className={styles.inputBox}>
            <label htmlFor="area">ფართობი *</label>
            <input
              type="text"
              name="area"
              id="area"
              value={values.area}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.area && touched.area ? styles.inputError : undefined
              }
            />
            <div
              className={
                errors.area && touched.area
                  ? styles.msgError
                  : !errors.area && touched.area
                  ? styles.msgSuccess
                  : styles.msg
              }
            >
              <CheckIcon
                color={
                  !errors.area && touched.area
                    ? "#45a849"
                    : errors.area && touched.area
                    ? "#f93b1d"
                    : undefined
                }
              />
              <small>მხოლოდ რიცხვები</small>
            </div>
          </div>
        </div>
        <div className={styles.row2}>
          <label htmlFor="bedrooms">საძინებლების რაოდენობა *</label>
          <input
            type="text"
            name="bedrooms"
            id="bedrooms"
            value={values.bedrooms}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.bedrooms && touched.bedrooms
                ? styles.inputError
                : undefined
            }
          />
          <div
            className={
              errors.bedrooms && touched.bedrooms
                ? styles.msgError
                : !errors.bedrooms && touched.bedrooms
                ? styles.msgSuccess
                : styles.msg
            }
          >
            <CheckIcon
              color={
                !errors.bedrooms && touched.bedrooms
                  ? "#45a849"
                  : errors.bedrooms && touched.bedrooms
                  ? "#f93b1d"
                  : undefined
              }
            />
            <small>მხოლოდ რიცხვები</small>
          </div>
        </div>
        <div className={styles.row3}>
          <label htmlFor="description">აღწერა *</label>
          <textarea
            name="description"
            id="description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.description && touched.description
                ? styles.inputError
                : undefined
            }
          ></textarea>
          <div
            className={
              errors.description && touched.description
                ? styles.msgError
                : !errors.description && touched.description
                ? styles.msgSuccess
                : styles.msg
            }
          >
            <CheckIcon
              color={
                !errors.description && touched.description
                  ? "#45a849"
                  : errors.description && touched.description
                  ? "#f93b1d"
                  : undefined
              }
            />
            <small>მინიმუმ ხუთი სიტყვა</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
