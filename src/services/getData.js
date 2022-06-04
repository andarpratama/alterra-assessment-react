export const getData = key => {
  let data = localStorage.getItem(key);
  if (!data) {
    localStorage.setItem(key, []);
  }
};
