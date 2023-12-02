export const ckeckValidData = (email, password) => {
  const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );
  if (!isEmailValid)
    return "Please enter a valid email address or phone number.";
  if (!isPasswordValid)
    return "Password must be more than 8 character, contains one numeric, special, and uppercase character.";
  return null;
};
