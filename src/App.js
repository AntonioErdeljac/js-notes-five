import React, { lazy, Suspense } from 'react';

import { NoteProvider } from './store';

import './scss/index.scss';

const Notes = lazy(() => import('./views/Notes'));

const App = () => {
  return (
    <NoteProvider>
      <Suspense fallback={<p>Loading...</p>}>
        <Notes />
      </Suspense>
    </NoteProvider>
  );
};

export default App;
