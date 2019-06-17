import { messagesPath } from '../apis'

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const DISPLAY_MESSAGE_DETAILS = 'DISPLAY_MESSAGE_DETAILS';
export const UPDATE_USERNAME = 'UPDATE_USERNAME';
export const SET_INITIAL_STATE = 'SET_INITIAL_STATE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';
export const EDIT_MESSAGE = 'EDIT_MESSAGE'

let nextMessageID = 0;
const date = new Date();

export function addMessage(text, username = "Anonymous") {
    const timestamp = date.toTimeString();
    const message = {
        id: nextMessageID++,
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
    return {
        ...message,
        type: ADD_MESSAGE,
    };
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
    nextMessageID = initialMessages.nextMessageID;
    return {
        type: SET_INITIAL_STATE,
        initialMessages: initialMessages.messages
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

export const editMessage = (oldMessage, newMessageText) => {
    const editedMessage = {
        ...oldMessage,
        text: newMessageText
    }
    fetch(messagesPath + "/edit/" + oldMessage.id, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache', 
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow', 
        referrer: 'no-referrer',
        body: JSON.stringify(editedMessage)
    });
    return {
        type: EDIT_MESSAGE,
        editedMessage
    }
}
