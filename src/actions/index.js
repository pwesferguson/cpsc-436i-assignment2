export const ADD_MESSAGE = 'ADD_MESSAGE';
export const DISPLAY_MESSAGE_DETAILS = 'DISPLAY_MESSAGE_DETAILS';
export const UPDATE_USERNAME = 'UPDATE_USERNAME'

let nextMessageId = 1;

export function addMessage(text, timestamp = "unknown time", username = "Anonymous") {
    return {
        type: ADD_MESSAGE,
        id: nextMessageId++,
        text,
        timestamp,
        username
    }
}

export const updateUsername = (username) => {
    return {
        type: UPDATE_USERNAME,
        username
    }
}

export const displayMessageDetails = (message) => {
    return {
        type: DISPLAY_MESSAGE_DETAILS,
        isDetailsVisible: true,
        detailedMessage: message
    }
}