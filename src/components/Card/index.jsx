import PropTypes from 'prop-types';
import React, { memo } from 'react';

const Card = ({ children }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-xl-3 d-inline-flex align-items-center justify-content-center py-5">
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(Card);
