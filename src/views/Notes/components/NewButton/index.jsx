import React, { memo } from 'react';

import { Card } from '../../../../components';
import { useNotes } from '../../../../store';

const NewCard = () => {
  const notes = useNotes();

  return (
    <Card>
      <div
        onClick={() => {
          const item = notes.add();
          notes.open(item.id);
        }}
        className="shadow list-card list-card--primary"
      >
        +
      </div>
    </Card>
  );
};

export default memo(NewCard);
