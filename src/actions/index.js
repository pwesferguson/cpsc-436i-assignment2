export const ADD_MESSAGE = 'ADD_MESSAGE';
export const GET_MESSAGE_DETAILS = 'GET_MESSAGE_DETAILS';
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

export function getMessageDetails(id) {
    console.log(id);
}

export const displayMessageDetails = message => {
    console.log(message);
}