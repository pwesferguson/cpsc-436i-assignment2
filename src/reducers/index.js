// import { combineReducers } from 'redux';

import {
    ADD_MESSAGE, 
    DISPLAY_MESSAGE_DETAILS,
    UPDATE_USERNAME,
    SET_INITIAL_STATE
} from '../actions'

const initialState = {
    isDetailsVisible: false,
    currentUsername: "Anonymous",
    detailedMessage: {},
    messages: []
}

export default function shoutApp(state = initialState, action) {
    console.log("in reducer");
    switch(action.type) {
        case ADD_MESSAGE:
            return ({
                ...state,
                messages: state.messages.concat({
                    id: action.id,
                    text: action.text,
                    timestamp: action.timestamp,
                    username: action.username
                })
            });

        case DISPLAY_MESSAGE_DETAILS:
            return ({
                ...state,
                isDetailsVisible: action.isDetailsVisible,
                detailedMessage: action.detailedMessage
            })

        case UPDATE_USERNAME:
            return ({
                ...state,
                currentUsername: action.username
            })

        case SET_INITIAL_STATE:
            console.log("in SET_INITIAL_STATE reducer case");
            return {
                ...state,
                messages: action.initialState
            }

        default:
            return state
    }
}