import { connect } from 'react-redux';
import MessageDetails from '../components/MessageDetails';
import { deleteMessage, editMessage } from '../actions/index';

const mapStateToProps = (state) => (
    {
        ...state
    }
)

const mapDispatchToProps = (dispatch) => ({
    deleteMessage: (message) => (
        dispatch(deleteMessage(message))
    ),
    editMessage: (oldMessage, newMessageText) => (
        dispatch(editMessage(oldMessage, newMessageText))
    )
})



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageDetails);