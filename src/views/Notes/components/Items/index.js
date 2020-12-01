import React, { memo } from 'react';

import { useNotes } from '../../../../store';
import Card from '../Card';

const Items = () => {
  const notes = useNotes();

  return (
    <>
      {notes.items.map((item) => (
        <Card onClick={() => notes.remove(item.id)}>
          <div className="shadow-sm list-card">{item.id}</div>
        </Card>
      ))}
    </>
  );
};

export default memo(Items);
