export const checkValidateData = (email, password, username) => {
  const isValidEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isvalidPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/.test(password);

  const isValidName = /^[A-Za-z][A-Za-z0-9_]{3,29}$/.test(username);

  if (!isValidName) return "Username is not valid";
  if (!isValidEmail) return "Email is not valid";
  if (!isvalidPassword) return "Password is not valid";

  return null;
};
