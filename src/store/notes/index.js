import PropTypes from 'prop-types';
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

import { useLocalStorage } from '../../hooks';

export const Context = createContext();

export const useNotes = () => {
  const notesContext = useContext(Context);

  if (notesContext === undefined) {
    throw new Error('useNotes must be used within a NoteProvider');
  }

  return notesContext;
};

export const NoteProvider = ({ children }) => {
  const storage = useLocalStorage({ key: 'notes' });
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(storage.get());
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

NoteProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
