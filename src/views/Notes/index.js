/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { memo } from 'react';

import { useNotes } from '../../store';

const Notes = () => {
  const notes = useNotes();

  return (
    <div>
      <button type="button" onClick={() => notes.add('test')}>
        add note
      </button>
      {notes.items.map((item) => (
        <p onClick={() => notes.remove(item.id)} key={item.id}>
          {item.id}
        </p>
      ))}
    </div>
  );
};

export default memo(Notes);
