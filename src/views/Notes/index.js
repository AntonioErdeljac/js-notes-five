import React, { memo } from 'react';

import { NewCard, Items } from './components';

import './index.scss';

const Notes = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <NewCard />
        <Items />
      </div>
    </div>
  );
};

export default memo(Notes);
