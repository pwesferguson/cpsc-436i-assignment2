import { connect } from 'react-redux';
import MessageDetails from '../components/MessageDetails';
import { deleteMessage } from '../actions/index';

const mapStateToProps = (state) => (
    {
        ...state
    }
)

const mapDispatchToProps = (dispatch) => ({
    deleteMessage: (message) => (
        dispatch(deleteMessage(message))
    )
})



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageDetails);