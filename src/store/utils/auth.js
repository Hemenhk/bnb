export const getAuthToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

export const removeAuthToken = () => {
  const token = localStorage.removeItem("token");
  return token;
};

export const getAuthUser = () => {
  const user = localStorage.getItem("user");
  return user;
};

export const removeAuthUser = () => {
  const user = localStorage.removeItem("user");
  return user;
};
