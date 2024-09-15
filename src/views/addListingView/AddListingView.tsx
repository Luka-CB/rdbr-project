import { useFormik } from "formik";
import { Agent, Details, Location, Type, UploadImage } from "../../components";
import { addListingSchema } from "../../utils/inputValidationSchemas";
import styles from "./AddlistingView.module.scss";

const AddListingView: React.FC = () => {
  const onSubmit = () => {
    console.log("so");
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
  } = useFormik({
    initialValues: {
      address: "",
      zipCode: "",
      price: "",
      area: "",
      bedrooms: "",
      description: "",
    },
    validationSchema: addListingSchema,
    onSubmit,
  });

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>ლისტინგის დამატება</h1>
      <form onSubmit={handleSubmit}>
        <Type />
        <Location
          values={{ address: values.address, zipCode: values.zipCode }}
          touched={{ address: touched.address, zipCode: touched.zipCode }}
          errors={{ address: errors.address, zipCode: errors.zipCode }}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <Details
          values={{
            price: values.price,
            area: values.area,
            bedrooms: values.bedrooms,
            description: values.description,
          }}
          touched={{
            price: touched.price,
            area: touched.area,
            bedrooms: touched.bedrooms,
            description: touched.description,
          }}
          errors={{
            price: errors.price,
            area: errors.area,
            bedrooms: errors.bedrooms,
            description: errors.description,
          }}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
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
