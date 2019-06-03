import { connect } from 'react-redux'
import MessageList from '../components/MessageList';
import { getMessageDetails, displayMessageDetails } from '../actions/index';

//todo
const mapStateToProps = state => (
    {
        messages: state.messages
    }
)

const mapDispatchToProps = dispatch => (
    {
        displayMessageDetails: displayMessageDetails
    }
)
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageList)