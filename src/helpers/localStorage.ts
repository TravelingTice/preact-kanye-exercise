export const setInStorage = (key: string, val: any) => {
  localStorage.setItem(key, JSON.stringify(val));
};

export const getFromStorage = (key: string) => {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key) as string);
  }

  return null;
};
