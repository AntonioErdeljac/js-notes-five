import React from 'react';

import { Notes } from './views';
import { NoteProvider } from './store';

import './scss/index.scss';

const App = () => {
  return (
    <NoteProvider>
      <Notes />
    </NoteProvider>
  );
};

export default App;
