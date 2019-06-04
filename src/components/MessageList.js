import React from 'react'
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


export default MessageList;
