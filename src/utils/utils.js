/**
 * To store any thing with a specified key to the local storage
 * @param {String} key
 * @param {*} data
 */
export const saveToSession = (key, data) => {
  sessionStorage.setItem(key, JSON.stringify(data));
};

/**
 * Gets item from local storage with specified key
 * @param {String} key
 * @returns {*}
 */
export const getFromSession = (key) => {
  if (typeof window !== "undefined") {
    return JSON.parse(sessionStorage?.getItem(key));
  }
};

export const formatDate = (stringDate) => {
  if (typeof stringDate === "string") {
    const datePart = stringDate.split("T")[0];
    const dateSplit = datePart.split("-");
    return `${dateSplit[2]}-${dateSplit[1]}-${dateSplit[0]}`;
  } else {
    return stringDate;
  }
};

/**
 * Check if admin token exist
 * @returns {boolean}
 */
export const isAdminLoggedIn = () => {
  const adminToken = getFromSession("adminToken");
  return adminToken?.length > 0 ? true : false;
};

export const contractAddress = "0x90C1B3C77b9668c36F0032fbcFdF2875b0Aa3c90";
