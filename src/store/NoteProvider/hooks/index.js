import { useContext } from 'react';

import { Context } from '../index';

export const useNotes = () => {
  const notesContext = useContext(Context);

  if (notesContext === undefined) {
    throw new Error('useNotes must be used within a NoteProvider');
  }

  return notesContext;
};
