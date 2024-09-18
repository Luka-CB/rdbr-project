import * as yup from "yup";

const onlyNumbers = /^[0-9]*$/;
const onlyNumbersAndDecimal = /^\d+(\.\d+)?$/;
const onlyWholeNumbers = /\d+/;
const atLeastFiveWords = /^(?:\b\w+\b[\s\r\n]*){5,}$/;

export const addListingSchema = yup.object().shape({
  address: yup.string().required().min(2),
  zip_code: yup.string().required().matches(onlyNumbers),
  price: yup.string().required().matches(onlyNumbersAndDecimal),
  area: yup.string().required().matches(onlyNumbersAndDecimal),
  bedrooms: yup
    .string()
    .required()
    .matches(onlyNumbers)
    .matches(onlyWholeNumbers, "მხოლოდ მთელი რიცხვი"),
  description: yup.string().required().matches(atLeastFiveWords),
});

const emailRule = /.+@(redberry)\.ge$/;
const phoneNumberFormat = /^5\d{8}$/;

export const agentSchema = yup.object().shape({
  name: yup
    .string()
    .required("სახელი სავალდებულოა!")
    .min(2, "მინიმუმ ორი სიმბოლო"),
  surname: yup
    .string()
    .required("გვარი სავალდებულოა!")
    .min(2, "მინიმუმ ორი სიმბოლო"),
  email: yup
    .string()
    .required("ელ-ფოსტა სავალდებულოა!")
    .matches(emailRule, "უნდა მთავრდებოდეს @redberry.ge-თ"),
  phone: yup
    .string()
    .required("ტელეფონის ნომერი სავალდებულოა!")
    .matches(phoneNumberFormat, "უნდა იყოს ფორმატის 5XXXXXXXX"),
});
