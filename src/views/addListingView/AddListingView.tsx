import { useFormik } from "formik";
import { Agent, Details, Location, Type, UploadImage } from "../../components";
import { addListingSchema } from "../../utils/inputValidationSchemas";
import styles from "./AddlistingView.module.scss";
import { useContext, useEffect } from "react";
import { AddListingFormContext } from "../../context/addListingFormContext";

const AddListingView: React.FC = () => {
  const { isRental, setIsRentalError } = useContext(AddListingFormContext);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const onSubmit = () => {
    if (!isRental) {
      scrollToTop();
      setIsRentalError("ქთხოვთ აირჩიოთ გარიგების ტიპი!");
      return;
    }

    console.log("so");
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        address: localStorage.getItem("inputData")
          ? JSON.parse(localStorage.getItem("inputData") || "").address
          : "",
        zip_code: localStorage.getItem("inputData")
          ? JSON.parse(localStorage.getItem("inputData") || "").zip_code
          : "",
        price: localStorage.getItem("inputData")
          ? JSON.parse(localStorage.getItem("inputData") || "").price
          : "",
        area: localStorage.getItem("inputData")
          ? JSON.parse(localStorage.getItem("inputData") || "").area
          : "",
        bedrooms: localStorage.getItem("inputData")
          ? JSON.parse(localStorage.getItem("inputData") || "").bedrooms
          : "",
        description: localStorage.getItem("inputData")
          ? JSON.parse(localStorage.getItem("inputData") || "").description
          : "",
      },
      validationSchema: addListingSchema,
      onSubmit,
    });

  useEffect(() => {
    if (values) {
      localStorage.setItem("inputData", JSON.stringify(values));
    }
  }, [values]);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>ლისტინგის დამატება</h1>
      <form onSubmit={handleSubmit}>
        <Type />
        <Location
          values={{ address: values.address, zip_code: values.zip_code }}
          touched={{ address: touched.address, zip_code: touched.zip_code }}
          errors={{ address: errors.address, zip_code: errors.zip_code }}
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
