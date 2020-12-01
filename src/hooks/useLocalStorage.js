const { useCallback, useRef } = require('react');

const useLocalStorage = ({ key, getFallback }) => {
  const fallback = useRef(getFallback);

  const set = useCallback(
    (value) => {
      window.localStorage.setItem(key, JSON.stringify(value));
    },
    [key],
  );

  const get = useCallback(() => {
    const item = window.localStorage.getItem(key);

    return JSON.parse(item) || fallback.current;
  }, [key]);

  return { set, get };
};

export default useLocalStorage;
