import { useEffect, useState } from "react";

export const useLocalStorage =
  // constraint values
  <T extends number | string | object>(key: string, initialValue: T) => {
    const [value, setValue] = useState(() => {
      // get from local storage by key
      const jsonValue = localStorage.getItem(key);
      if (jsonValue != null) return JSON.parse(jsonValue);

      return initialValue;
    });

    useEffect(() => {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        // case: storage is full, don't think this will ever happen lol
        console.error(error);
      }
    }, [key, value]);

    return [value, setValue] as const;
  };
