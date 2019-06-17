import { messagesPath } from '../apis'

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const DISPLAY_MESSAGE_DETAILS = 'DISPLAY_MESSAGE_DETAILS';
export const UPDATE_USERNAME = 'UPDATE_USERNAME';
export const SET_INITIAL_STATE = 'SET_INITIAL_STATE';
export const DELETE_MESSAGE = 'DELETE_MESSSAGE';

let nextMessageId = 0;
const date = new Date();

export function addMessage(text, username = "Anonymous") {
    const timestamp = date.toTimeString();
    const message = {
        type: ADD_MESSAGE,
        id: nextMessageId++,
        text,
        timestamp,
        username
    }
    fetch(messagesPath, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache', 
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow', 
        referrer: 'no-referrer', 
        body: JSON.stringify(message),
    })
    return message;
}

export const updateUsername = (username) => {
    return {
        type: UPDATE_USERNAME,
        username: username
    }
}

export const displayMessageDetails = (message) => {
    return {
        type: DISPLAY_MESSAGE_DETAILS,
        isDetailsVisible: true,
        detailedMessage: message
    }
}

export const setInitialMessagesState = (initialMessages) => {
    nextMessageId = initialMessages.length + 1;
    return {
        type: SET_INITIAL_STATE,
        initialMessages
    }
}

export const deleteMessage = (messageID) => {
    fetch(messagesPath + "/" + messageID, {
        method: 'DELETE',
        mode: 'cors',
        cache: 'no-cache', 
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow', 
        referrer: 'no-referrer'
    })
    return {
        type: DELETE_MESSAGE,
        messageID
    }
}
