import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { find } from 'lodash';

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
  const [activeId, setActiveId] = useState(null);

  const syncStorage = useCallback(() => {
    setItems(get());
  }, [get]);

  useEffect(() => {
    syncStorage();
  }, [syncStorage]);

  const getAllIds = useCallback(() => {}, []);

  const save = useCallback(
    (id, options) => {
      const updatedItems = get().map((item) => {
        if (item.id === id) {
          return {
            ...item,
            body: options.body,
            touched: options.touched,
          };
        }

        return item;
      });

      set(updatedItems);
      syncStorage();
    },
    [syncStorage, set, get],
  );

  const add = useCallback(
    (body) => {
      const item = {
        id: uniqid(),
        body: body || DEFAULT_CONTENT,
        touched: false,
      };

      set([item, ...get()]);

      syncStorage();

      return item;
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

  const open = useCallback((id) => {
    setActiveId(id);
  }, []);

  const close = useCallback(() => setActiveId(null), []);

  const getSelected = useCallback(() => {
    const foundNote = find(get(), { id: activeId });

    return foundNote;
  }, [get, activeId]);

  const getSelectedId = useCallback(() => activeId, [activeId]);

  return (
    <Context.Provider
      value={{
        items,
        getAllIds,
        save,
        add,
        remove,
        open,
        close,
        getSelected,
        getSelectedId,
      }}
    >
      {children}
    </Context.Provider>
  );
};

NoteProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
