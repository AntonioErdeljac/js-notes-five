import React, { memo } from 'react';
import ReactMarkdown from 'react-markdown';

import { Card } from '../../../../components';
import { useNotes } from '../../../../store';

const Items = () => {
  const notes = useNotes();

  return (
    <>
      {notes.items.map((item) => (
        <Card onClick={() => notes.remove(item.id)}>
          <div className="shadow-sm list-card list-card--regular">
            <div className="list-card list-card--regular list-card--regular-wrapper">
              <ReactMarkdown>{item.body}</ReactMarkdown>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};

export default memo(Items);
