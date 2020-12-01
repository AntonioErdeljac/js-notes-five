const { useCallback } = require('react');

const useLocalStorage = ({ key }) => {
  const set = useCallback(
    (value) => {
      window.localStorage.setItem(key, JSON.stringify(value));
    },
    [key],
  );

  const get = useCallback(() => {
    const item = window.localStorage.getItem(key);

    return JSON.parse(item);
  }, [key]);

  return { set, get };
};

export default useLocalStorage;
