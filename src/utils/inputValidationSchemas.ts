import * as yup from "yup";

const onlyNumbers = /^[0-9]*$/;
const onlyWholeNumbers = /\d+/;
const atLeastFiveWords = /^(?:\b\w+\b[\s\r\n]*){5,}$/;

export const addListingSchema = yup.object().shape({
  address: yup.string().required().min(2),
  zip_code: yup.string().required().matches(onlyNumbers),
  price: yup.string().required().matches(onlyNumbers),
  area: yup.string().required().matches(onlyNumbers),
  bedrooms: yup
    .string()
    .required()
    .matches(onlyNumbers)
    .matches(onlyWholeNumbers, "მხოლოდ მთელი რიცხვი"),
  description: yup.string().required().matches(atLeastFiveWords),
});
