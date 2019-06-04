import React from 'react'

const MessageDetails = (props, dispatch) => {
    if (props.isDetailsVisible) {
        const message = props.detailedMessage;
        return (
        <div className="message-details">
            <p>
                <strong>{message.text}</strong> was posted at 
                <br/>
                <strong>{message.timestamp}</strong>
                <br/>
                by <strong>{message.username}</strong>.
                <br/>
                It was message number <strong>{message.id}!</strong>
            </p>
            
        </div>
        );
    }
    else return (
        <div/>
    );
}

export default MessageDetails;