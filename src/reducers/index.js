// import { combineReducers } from 'redux';

import {
    ADD_MESSAGE, 
    DISPLAY_MESSAGE_DETAILS,
    UPDATE_USERNAME
} from '../actions'

const initialState = {
    isDetailsVisible: false,
    detailedMessage: {},
    messages: [
        // {
        //     id: 0,
        //     text: "golly",

        // },
        // {text: "this site sure is swell"},
        // {text: "totes, totes"},
        // {text: "OMG CAN ANYONE ELSE EVEN RN???"},
        {
            id: 5,
            text: "LMAOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
            timestamp: "18:21:50 GMT-0700 (Pacific Daylight Time)",
            username: "sassy_sasquatch_sastrillo"
        }
    ]
}

export default function shoutApp(state = initialState, action) {
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
            const updatedDetails = {
                ...state.detailedMessage,
                username: action.username
            }
            return ({
                ...state,
                detailedMessage: updatedDetails
            })

        default:
            return state
    }
}