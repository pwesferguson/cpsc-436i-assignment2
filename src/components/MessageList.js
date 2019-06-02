import React from 'react'
import PropTypes from 'prop-types'
import Message from './Message'

const MessageList = ({ messages, onMessageClick }) => (
    <ul className = "message-list">
        messages.map( (message, index) => {
            <Message key={index} {...message} onClick={() => onMessageClick(index)} />
        })
    </ul>
)

MessageList.PropTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onMessageClick: PropTypes.func.isRequired
}

export default MessageList;
