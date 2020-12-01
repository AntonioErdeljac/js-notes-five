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

  useEffect(() => {
    if (isOpen) {
      setBody(notes.getSelected()?.body);
    } else {
      setState(states.VIEW);
    }
  }, [isOpen, notes]);

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
    notes.save(notes.getSelectedId(), body);
    setState(states.VIEW);
  }, [body, notes]);

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
