import PropTypes from 'prop-types';
import uniqid from 'uniqid';
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
  const storage = useLocalStorage({ key: 'items' });
  const [items, setItems] = useState([]);

  const syncStorage = useCallback(() => {
    setItems(storage.get());
  }, [storage]);

  useEffect(() => {
    syncStorage();
  }, [syncStorage]);

  const getAllIds = useCallback(() => {}, []);

  const get = useCallback(() => {}, []);

  const save = useCallback(() => {}, []);

  const add = useCallback(
    (body) => {
      const item = {
        id: uniqid(),
        body,
      };

      storage.set([item, ...storage.get()]);

      syncStorage();
    },
    [storage, syncStorage],
  );

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
