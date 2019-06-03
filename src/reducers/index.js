// import { combineReducers } from 'redux';

import {
    ADD_MESSAGE, DISPLAY_MESSAGE_DETAILS,
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
        // {text: "yee"}
    ]
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
            console.log('in display message reducer case');
            return ({
                ...state,
                isDetailsVisible: action.isDetailsVisible,
                detailedMessage: action.detailedMessage
            })
        default:
            return state
    }
}