export const validateForm = (values) => {
  const errors = {};

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  //user name validation

  if (!values.userName) {
    errors.userName = "name is required";
  } else if (values.userName.length < 2) {
    errors.userName = "name must be at least 2 characters";
  }

  // email validation

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!regex.test(values.email)) {
    errors.email = "Email is not valid";
  }

  //password validation

  if (!values.message) {
    errors.message = "Message is required";
  } else if (values.message.length < 10) {
    errors.message = "Message must be at least 10 characters";
  } else if (values.message.length > 250) {
    errors.message = "Message must be less than 250 characters";
  }

  return errors;
};
