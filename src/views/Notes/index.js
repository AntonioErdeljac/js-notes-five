import React, { memo } from 'react';

import { useNotes } from '../../store';

const Notes = () => {
  useNotes();

  return <p>Hello Notes</p>;
};

export default memo(Notes);
