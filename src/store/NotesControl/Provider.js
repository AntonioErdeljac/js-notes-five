import PropTypes from 'prop-types';
import React from 'react';

import Context from './Context';

const Provider = ({ children }) => {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
