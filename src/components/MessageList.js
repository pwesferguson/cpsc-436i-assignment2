import React from 'react'
import PropTypes from 'prop-types'
import Message from './Message'

const MessageList = ({ messages, displayMessageDetails }) => (
    <ul id = "shout-box-list">
        {
            messages.map( (message) => 
            <Message key={message.id} {...message} onClick={() => displayMessageDetails(message)} />
            )
        }
    </ul>
)

// MessageList.propTypes = {
//     messages: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             text: PropTypes.string.isRequired
//         }).isRequired
//     ).isRequired,
//     onMessageClick: PropTypes.func.isRequired
// }

export default MessageList;
