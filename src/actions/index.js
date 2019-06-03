export const ADD_MESSAGE = 'ADD_MESSAGE';
export const DISPLAY_MESSAGE_DETAILS = 'DISPLAY_MESSAGE_DETAILS';

let nextMessageId = 0;

export function addMessage(text, timestamp = "unknown time", username = "Anonymous") {
    return {
        type: ADD_MESSAGE,
        id: nextMessageId++,
        text,
        timestamp,
        username
    }
}

export const displayMessageDetails = (message) => {
    console.log(message);
    return {
        type: DISPLAY_MESSAGE_DETAILS,
        isDetailsVisible: true,
        detailedMessage: message
    }
}