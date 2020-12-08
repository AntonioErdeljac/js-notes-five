const { useCallback, useRef, useMemo } = require('react');

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

  const value = useMemo(() => ({ get, set }), [get, set]);

  return value;
};

export default useLocalStorage;
