import { connect } from 'react-redux'
import MessageList from '../components/MessageList';
import { displayMessageDetails } from '../actions/index';

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