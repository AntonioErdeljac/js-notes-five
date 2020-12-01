import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

import { DEFAULT_CONTENT } from './constants';

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
  const { get, set } = useLocalStorage({ key: 'items', getFallback: [] });
  const [items, setItems] = useState([]);

  const syncStorage = useCallback(() => {
    setItems(get());
  }, [get]);

  useEffect(() => {
    syncStorage();
  }, [syncStorage]);

  const getAllIds = useCallback(() => {}, []);

  const save = useCallback(() => {}, []);

  const add = useCallback(
    (body) => {
      const item = {
        id: uniqid(),
        body: body || DEFAULT_CONTENT,
      };

      set([item, ...get()]);

      syncStorage();
    },
    [get, set, syncStorage],
  );

  const remove = useCallback(
    (id) => {
      set([...get([]).filter((item) => item.id !== id)]);

      syncStorage();
    },
    [get, set, syncStorage],
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
