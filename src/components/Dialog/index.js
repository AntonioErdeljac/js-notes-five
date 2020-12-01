import Modal from 'react-modal';
import PropTypes from 'prop-types';
import React, { memo } from 'react';

import './index.scss';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '90vh',
    width: '40vw',
    border: 'none',
    padding: 30,
    boxShadow: '0px 0px 10px rgba(0,0,0,0.07)',
  },
};

const Dialog = ({ isOpen, onClose, children }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      {children}
    </Modal>
  );
};

Dialog.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Dialog.defaultProps = {
  isOpen: false,
  onClose: null,
};

export default memo(Dialog);
