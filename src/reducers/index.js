// import { combineReducers } from 'redux';

import {
    ADD_MESSAGE, 
    DISPLAY_MESSAGE_DETAILS,
    UPDATE_USERNAME
} from '../actions'

const initialState = {
    isDetailsVisible: false,
    currentUsername: "Anonymous",
    detailedMessage: {},
    messages: [
        {
            id: 1,
            text: "golly",
            timestamp: "07:20:50 GMT-0700 (Pacific Daylight Time)",
            username: "paidActor"

        },
        {
            id: 2,
            text: "this site sure is swell",
            timestamp: "07:20:59 GMT-0700 (Pacific Daylight Time)",
            username: "paidActor"
        },
        {
            id: 3,
            text: "happy birthday john",
            timestamp: "07:21:50 GMT-0700 (Pacific Daylight Time)",
            username: "HailinOnUrMom"
        },
        {
            id: 4,
            text: "YIKESSSSSSSSSSSSSSSSSS",
            timestamp: "11:11:34 GMT-0700 (Pacific Daylight Time)",
            username: "WU-DYNASTY"},
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
            return ({
                ...state,
                currentUsername: action.username
            })

        default:
            return state
    }
}