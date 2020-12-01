import React, { memo } from 'react';

import { NewCard } from './components';

import { useNotes } from '../../store';

import './index.scss';

const Notes = () => {
  const notes = useNotes();

  return (
    <div className="list">
      <NewCard />
      {notes.items.map((item) => (
        <p>{item.id}</p>
      ))}
    </div>
  );
};

export default memo(Notes);
