import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ onClick, text }) => (
    <li className="message" onClick={onClick}>
        {text}
    </li>
);

Message.PropTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
};

export default Message;