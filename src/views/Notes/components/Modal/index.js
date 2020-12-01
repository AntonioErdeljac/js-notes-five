import React, { memo, useCallback, useState, useEffect, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import { FormControl } from 'react-bootstrap';

import { states } from './constants';
import { Controls } from './components';

import { Dialog } from '../../../../components';
import { useNotes } from '../../../../store';

import './index.scss';

const Modal = () => {
  const notes = useNotes();
  const [state, setState] = useState(states.VIEW);
  const [body, setBody] = useState(null);

  const isOpen = useMemo(() => !!notes.getSelectedId(), [notes]);
  const selectedNote = useMemo(() => notes.getSelected(), [notes]);

  useEffect(() => {
    if (selectedNote && !selectedNote?.touched) {
      setState(states.EDIT);
      notes.save(selectedNote?.id, { ...selectedNote, touched: true });
    }
  }, [selectedNote, notes]);

  useEffect(() => {
    if (isOpen) {
      setBody(selectedNote?.body);
    } else {
      setState(states.VIEW);
    }
  }, [isOpen, selectedNote]);

  const onToggle = useCallback(() => {
    setState((oldState) => {
      const toggleMap = {
        [states.EDIT]: states.VIEW,
        [states.VIEW]: states.EDIT,
      };

      return toggleMap[oldState];
    });
  }, []);

  const onChange = useCallback((event) => {
    setBody(event.target.value);
  }, []);

  const onSave = useCallback(() => {
    notes.save(notes.getSelectedId(), { ...selectedNote, body });
    setState(states.VIEW);
  }, [body, notes, selectedNote]);

  const onDelete = useCallback(() => {
    notes.remove(notes.getSelectedId());
    notes.close();
  }, [notes]);

  return (
    <Dialog onClose={notes.close} isOpen={isOpen}>
      <Controls onDelete={onDelete} onSave={onSave} state={state} onToggle={onToggle} />
      {state === states.EDIT ? (
        <FormControl value={body} onChange={onChange} className="edit" rows={25} as="textarea">
          {body}
        </FormControl>
      ) : (
        <ReactMarkdown>{body}</ReactMarkdown>
      )}
    </Dialog>
  );
};

export default memo(Modal);
