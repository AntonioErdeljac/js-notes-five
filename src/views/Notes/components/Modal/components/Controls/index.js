import PropTypes from 'prop-types';
import React, { memo, useMemo } from 'react';

import { Button } from 'react-bootstrap';

import { useNotes } from '../../../../../../store';
import { states } from '../../constants';

const Controls = ({ state, onToggle, onSave }) => {
  const notes = useNotes();

  const iconMap = useMemo(
    () => ({
      [states.VIEW]: 'edit',
      [states.EDIT]: 'save',
    }),
    [],
  );

  const clickMap = useMemo(
    () => ({
      [states.VIEW]: onToggle,
      [states.EDIT]: onSave,
    }),
    [onToggle, onSave],
  );

  return (
    <div className="d-inline-flex justify-content-between w-100 border-bottom pb-3 mb-3">
      <Button
        onClick={notes.removeSelected}
        className="d-inline-flex align-items-center"
        variant="light"
      >
        <i className="material-icons">keyboard_backspace</i>
      </Button>
      <div className="d-inline-flex">
        <Button
          onClick={clickMap[state]}
          className="mr-3 d-inline-flex align-items-center"
          variant="light"
        >
          <i className="material-icons">{iconMap[state]}</i>
        </Button>
        <Button className="d-inline-flex align-items-center" variant="light">
          <i className="material-icons">delete</i>
        </Button>
      </div>
    </div>
  );
};

Controls.propTypes = {
  state: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default memo(Controls);
