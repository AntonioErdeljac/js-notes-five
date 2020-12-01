import PropTypes from 'prop-types';
import React from 'react';

const Card = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="col-12 col-sm-6 col-md-4 col-xl-2  d-inline-flex align-items-center justify-content-center px-3 py-5"
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Card.defaultProps = {
  onClick: null,
};

export default Card;
