import { useState } from "react";

const isBrowser = typeof window !== "undefined";

const useLocalStorage = (key, initialValue) => {
  if (!isBrowser) {
    return [initialValue, () => {}, () => {}];
  }

  if (!key) {
    throw new Error("KEY is not passed");
  }

  const storedValue = localStorage.getItem(key);
  const [value, setValue] = useState(
    storedValue ? JSON.parse(storedValue) : initialValue
  );

  const set = (newValue) => {
    try {
      const valueToStore =
        newValue instanceof Function ? newValue(value) : newValue;
      setValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error.message);
    }
  };

  const remove = () => {
    try {
      localStorage.removeItem(key);
      setValue(undefined);
    } catch (error) {
      console.error(error.message);
    }
  };

  return [value, set, remove];
};

export default useLocalStorage;
