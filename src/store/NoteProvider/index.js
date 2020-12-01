import PropTypes from 'prop-types';
import React, { createContext, useCallback, useEffect, useState } from 'react';

import { useLocalStorage } from '../../hooks';

export const Context = createContext();

const Provider = ({ children }) => {
  const storage = useLocalStorage();
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(storage.get('notes'));
  }, [storage]);

  const getAllIds = useCallback(() => {}, []);

  const get = useCallback(() => {}, []);

  const save = useCallback(() => {}, []);

  const add = useCallback(() => {}, []);

  const remove = useCallback(() => {}, []);

  const open = useCallback(() => {}, []);

  const close = useCallback(() => {}, []);

  return (
    <Context.Provider value={{ items, getAllIds, get, save, add, remove, open, close }}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
