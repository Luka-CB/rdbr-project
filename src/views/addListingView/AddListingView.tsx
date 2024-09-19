import { useFormik } from "formik";
import { Agent, Details, Location, Type, UploadImage } from "../../components";
import { addListingSchema } from "../../utils/inputValidationSchemas";
import styles from "./AddlistingView.module.scss";
import { useContext, useEffect } from "react";
import { TransactionTypeContext } from "../../context/transactionTypeContext";
import { FormSelectContext } from "../../context/formSelectContext";
import { ImageContext } from "../../context/imageContext";
import { AgentContext } from "../../context/agentContext";
import { ListingContext } from "../../context/listingContext";
import { useNavigate } from "react-router-dom";

const AddListingView: React.FC = () => {
  const { listingImage, setListingImageError, handleRemoveListingImage } =
    useContext(ImageContext);
  const { pickedAgent, setAgentError, resetAgent } = useContext(AgentContext);
  const { isRental, resetTransactionType } = useContext(TransactionTypeContext);
  const {
    addListing,
    addListingSuccess,
    setAddListingSuccess,
    addListingLoading,
  } = useContext(ListingContext);
  const {
    pickedRegion,
    pickedCity,
    setRegionError,
    setCityError,
    resetLocationSelect,
  } = useContext(FormSelectContext);

  const scrollToTop = (top = 0) => {
    window.scrollTo({ top, left: 0, behavior: "smooth" });
  };

  const navigate = useNavigate();

  const onSubmit = () => {
    if (!pickedRegion?.id) {
      scrollToTop(200);
      setRegionError("გთხოვთ აირჩიოთ რეგიონი!");
      return;
    }

    if (!pickedCity?.id) {
      scrollToTop(200);
      setCityError("გთხოვთ აირჩიოთ ქალაქი!");
      return;
    }

    if (!listingImage?.url) {
      setListingImageError("გთხოვთ აირჩიოთ სურათი!");
      return;
    }

    if (!pickedAgent?.id) {
      setAgentError("გთხოვთ აირჩიოთ აგენტი!");
      return;
    }

    const base64 = listingImage.url?.split("base64,")[1];
    let arrayBuffer;
    if (base64) {
      const binary = atob(base64);
      const len = binary.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) bytes[i] = binary.charCodeAt(i);
      arrayBuffer = bytes.buffer;
    }

    const data = {
      address: values?.address,
      image: arrayBuffer,
      region_id: pickedRegion?.id,
      description: values?.description,
      city_id: pickedCity?.id,
      zip_code: values?.zip_code,
      price: +values?.price,
      area: +values?.area,
      bedrooms: +values?.bedrooms,
      is_rental: +isRental,
      agent_id: +pickedAgent?.id,
    };

    addListing(data);
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

  useEffect(() => {
    if (addListingSuccess) {
      resetForm();
      resetAgent();
      resetLocationSelect();
      resetTransactionType();
      handleRemoveListingImage();
      localStorage.removeItem("inputData");
      setAddListingSuccess(false);
      navigate({ pathname: "/" });
    }
  }, [addListingSuccess]);

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
          <button
            type="button"
            className={styles.cancelBtn}
            disabled={addListingLoading}
          >
            გაუქმება
          </button>
          <button
            type="submit"
            className={styles.addListingBtn}
            disabled={addListingLoading}
          >
            {addListingLoading ? "..." : "დაამატე ლისტინგი"}
          </button>
        </div>
      </form>
    </main>
  );
};

export default AddListingView;
