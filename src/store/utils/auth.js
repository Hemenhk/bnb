export const getAuthToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

export const removeAuthToken = () => {
  const token = localStorage.removeItem("token");
  return token;
};
