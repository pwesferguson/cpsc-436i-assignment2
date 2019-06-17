import React from 'react'

const MessageDetails = (props, dispatch) => {
    if (props.isDetailsVisible) {
        const message = props.detailedMessage;
        let input;
        return (
            <div className="message-details">
                <p>
                    <strong>{message.text}</strong> was posted at
                <br />
                    <strong>{message.timestamp}</strong>
                    <br />
                    by <strong>{message.username}</strong>.
                <br />
                    It was message number <strong>{message.id}!</strong>
                </p>

                <form onSubmit={(event) => {
                    event.preventDefault()
                    if (!input.value.trim()) return;
                    props.editMessage(message, input.value);
                }}>
                    <input
                        // todo defaultValue={message.text}
                        ref={(node) => {
                            input = node;
                        }}
                    />
                    <button type="submit">Edit Message</button>
                </form>

                <button onClick={() => (props.deleteMessage(message.id))}>Delete Message</button>

            </div>
        );
    }
    else return (
        <div />
    );
}

export default MessageDetails;