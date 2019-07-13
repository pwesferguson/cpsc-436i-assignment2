import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ text, onClick }) => (
    <li className="message" onClick={onClick}>
        {text}
    </li>
);

Message.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
};

export default Message;