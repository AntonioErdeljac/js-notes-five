import React, { memo } from 'react';

import { Card } from '../../../../components';

import { useNotes } from '../../../../store';

const NewCard = () => {
  const notes = useNotes();

  return (
    <Card onClick={() => notes.add('test')}>
      <div className="shadow list-card list-card--primary">+</div>
    </Card>
  );
};

export default memo(NewCard);
