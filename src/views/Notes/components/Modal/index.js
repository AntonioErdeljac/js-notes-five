import React, { memo, useCallback } from 'react';

import ReactMarkdown from 'react-markdown';

import { Controls } from './components';

import { Dialog } from '../../../../components';
import { useNotes } from '../../../../store';

const Modal = () => {
  const notes = useNotes();

  const onClose = useCallback(() => {
    notes.removeSelected();
  }, [notes]);

  return (
    <Dialog onClose={onClose} isOpen={!!notes.getSelectedId()}>
      <Controls />
      <ReactMarkdown>{notes.getSelected()?.body}</ReactMarkdown>
    </Dialog>
  );
};

export default memo(Modal);
