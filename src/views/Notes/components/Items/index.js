import React, { memo } from 'react';

import { Card } from '../../../../components';
import { useNotes } from '../../../../store';

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
