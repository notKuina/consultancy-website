import * as yup from "yup";

export const registerSchema = yup.object({
  username: yup
    .string()
    .trim()
    .min(4, "Username must be at least 4 characters")
    .max(20, "Username must not exceed 20 characters")
    .matches(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores"
    )
    .required("Username is required"),

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


  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password must not exceed 32 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[@$!%*?&#]/,
      "Password must contain at least one special character"
    )
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

