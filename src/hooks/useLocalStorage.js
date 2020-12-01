const { useCallback } = require('react');

const useLocalStorage = ({ key, value }) => {
  const set = useCallback(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const get = useCallback(() => {
    return window.localStorage.getItem(key);
  }, [key]);

  return { set, get };
};

export default useLocalStorage;
