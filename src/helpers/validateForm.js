import * as yup from "yup";

export const validationSchema = yup
  .object({
    name: yup
      .string()
      .required("First name is required")
      .min(2, "Name must be at least 2 characters")
      .max(20, "Name must be less than 20 characters"),

    /*     lastName: yup
      .string()
      .required("Last name is required")
      .min(2, "Name must be at least 2 characters")
      .max(20, "Name must be less than 20 characters"), */

    email: yup
      .string()
      .email()
      .required("Email is required")
      .min(2, "Email must be at least 5 characters"),

    message: yup
      .string()
      .required("Message is required")
      .min(2, "Message must be at least 5 characters")
      .max(20, "Message must be less than 255 characters"),

    /*     password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, and One Number"
      )
      .max(20, "Password must be less than 20 characters"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Password is required"), */
  })
  .required();
