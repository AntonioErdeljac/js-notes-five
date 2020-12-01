import React, { memo } from 'react';
import { Button } from 'react-bootstrap';

import { useNotes } from '../../../../../../store';

const Controls = () => {
  const notes = useNotes();

  return (
    <div className="d-inline-flex justify-content-between w-100 border-bottom pb-3 mb-3">
      <Button className="d-inline-flex align-items-center" variant="light">
        <i className="material-icons" onClick={notes.removeSelected}>
          keyboard_backspace
        </i>
      </Button>
      <div className="d-inline-flex">
        <Button className="mr-3 d-inline-flex align-items-center" variant="light">
          <i className="material-icons">edit</i>
        </Button>
        <Button className="d-inline-flex align-items-center" variant="light">
          <i className="material-icons">delete</i>
        </Button>
      </div>
    </div>
  );
};

export default memo(Controls);
