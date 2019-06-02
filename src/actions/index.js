export const ADD_MESSAGE = 'ADD_MESSAGE';

export function addMessage(sentText, timeStamp = "unknown time", userName = "Anonymous") {
    return {
        type: ADD_MESSAGE,
        text: sentText,
        timestamp: timeStamp,
        username: userName
    }
}