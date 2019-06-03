// import { combineReducers } from 'redux';

import {
    ADD_MESSAGE,
} from '../actions'

const initialState = {
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
    switch(action.type) {
        case ADD_MESSAGE:
            return ({
                messages: state.messages.concat({
                    id: action.id,
                    text: action.text,
                    timestamp: action.timestamp,
                    username: action.username
                })
            });

        default:
            return state
    }
}