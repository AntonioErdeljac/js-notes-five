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

  const remove = useCallback(
    (id) => {
      storage.set([...storage.get().filter((item) => item.id !== id)]);

      syncStorage();
    },
    [storage, syncStorage],
  );

  const open = useCallback(() => {}, []);

  const close = useCallback(() => {}, []);

  return (
    <Context.Provider value={{ items, getAllIds, save, add, remove, open, close }}>
      {children}
    </Context.Provider>
  );
};

NoteProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
