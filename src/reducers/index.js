import {
    ADD_MESSAGE, 
    DISPLAY_MESSAGE_DETAILS,
    UPDATE_USERNAME,
    SET_INITIAL_STATE,
    DELETE_MESSAGE
} from '../actions' 

const initialState = {
    isDetailsVisible: false,
    currentUsername: "Anonymous",
    detailedMessage: {},
    messages: []
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

        case SET_INITIAL_STATE:
            return {
                ...state,
                messages: action.initialMessages
            }
        
        case DELETE_MESSAGE:
            const prevMessages = state.messages;
            return {
                ...state,
                isDetailsVisible: false,
                messages: prevMessages.filter( (message) => (
                    message.id !== action.messageID
                ))
            }

        default:
            return state
    }
}