const setItem = (key, value) => {
  sessionStorage.setItem(key, value);
};
const getItem = (key, defaultValue) => {
  return sessionStorage.getItem(key) || defaultValue; 
};

export {
  setItem,
  getItem,
};