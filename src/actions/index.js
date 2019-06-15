export const ADD_MESSAGE = 'ADD_MESSAGE';
export const DISPLAY_MESSAGE_DETAILS = 'DISPLAY_MESSAGE_DETAILS';
export const UPDATE_USERNAME = 'UPDATE_USERNAME';
export const SET_INITIAL_STATE = 'SET_INITIAL_STATE';

let nextMessageId = 6;
const date = new Date();

export function addMessage(text, username = "Anonymous") {
    const timestamp = date.toTimeString();
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

export const setInitialState = (initialState) => {
    console.log("in setInitialState action");
    return {
        type: SET_INITIAL_STATE,
        initialState
    }
}
