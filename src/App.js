import React from 'react';

import { Notes } from './views';
import { NoteProvider } from './store';

const App = () => {
  return (
    <NoteProvider>
      <Notes />
    </NoteProvider>
  );
};

export default App;
