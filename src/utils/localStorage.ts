export const getTokenAcess = () => {
  return JSON.parse(localStorage.getItem("token") || "null");
};

export const removeToken = () => {
  return localStorage.removeItem("token");
};

export const getUserAcess = () => {
  return JSON.parse(localStorage.getItem("user") || "null");
};
export const getUserRole = () => {
  return JSON.parse(localStorage.getItem("userRole") || "null");
};
export const removeUser = () => {
  return localStorage.removeItem("user");
};
export const setUser = (userID: number) => {
  localStorage.setItem("user", JSON.stringify(userID));
};
export const setUserRole = (userRole: string) => {
  localStorage.setItem("userRole", JSON.stringify(userRole));
};
export const setPath = (path: string) => {
  sessionStorage.setItem("path", JSON.stringify(path));
};

export const getPath = () => {
  return JSON.parse(sessionStorage.getItem("path") || "null");
};
