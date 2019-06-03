import { connect } from 'react-redux'
import MessageList from '../components/MessageList';
import { displayMessageDetails } from '../actions/index';
import { dispatch } from 'react-redux';

//todo
const mapStateToProps = state => (
    {
        messages: state.messages
    }
)

const mapDispatchToProps = dispatch => ({
    displayMessageDetails: (message) => (
        dispatch(displayMessageDetails(message))
    )
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageList)