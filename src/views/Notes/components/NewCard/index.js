import React, { memo } from 'react';

import { useNotes } from '../../../../store';

const NewCard = () => {
  const notes = useNotes();

  return (
    <div onClick={() => notes.add('test')} className="col-3 p-5">
      <div className="shadow list-card list-card--primary">+</div>
    </div>
  );
};

export default memo(NewCard);
