import * as yup from "yup";

export const registerSchema = yup.object({
  firstName: yup
    .string()
    .trim()
    .min(2, "First name must be at least 2 characters")
    .required("First name is required"),

  lastName: yup
    .string()
    .trim()
    .min(2, "Last name must be at least 2 characters")
    .required("Last name is required"),

  email: yup
    .string()
    .trim()
    .lowercase()
    .email("Enter a valid email")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.(com|net|org|edu)$/i,
      "Email must end with .com, .net, .org, or .edu"
    )
    .required("Email is required"),

  number: yup
    .string()
    .trim()
    .matches(/^[0-9]{7,15}$/, "Enter a valid phone number")
    .required("Phone number is required"),

  nearestOffice: yup
    .string()
    .notOneOf([""], "Please select nearest office")
    .required(),

  questionRegarding: yup
    .string()
    .notOneOf([""], "Please select a topic")
    .required(),

  destinationCountry: yup
    .string()
    .notOneOf([""], "Please select destination country")
    .required(),

  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password must not exceed 32 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[@$!%*?&#]/, "Password must contain at least one special character")
    .matches(/^\S*$/, "Password must not contain spaces")
    .required("Password is required"),

  confirm: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Confirm password is required"),

  terms: yup
    .boolean()
    .oneOf([true], "You must agree to the terms and conditions")
    .required(),

});

export const loginSchema=yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
  
});

