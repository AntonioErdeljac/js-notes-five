import React, { memo } from 'react';

import { useNotes } from '../../../../store';

const Items = () => {
  const notes = useNotes();

  return (
    <>
      {notes.items.map((item) => (
        <div onClick={() => notes.remove(item.id)} className="col-3 p-5">
          <div className="shadow-sm list-card">{item.id}</div>
        </div>
      ))}
    </>
  );
};

export default memo(Items);
