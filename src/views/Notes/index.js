import React, { memo } from 'react';

import { NewButton, Items } from './components';

import './index.scss';

const Notes = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <NewButton />
        <Items />
      </div>
    </div>
  );
};

export default memo(Notes);
