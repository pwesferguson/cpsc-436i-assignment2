import { connect } from 'react-redux'
import MessageList from '../components/MessageList';
import { getMessageDetails } from '../actions/index';

//todo
const mapStateToProps = state => (
    {
        messages: state.messages
    }
)

const mapDispatchToProps = dispatch => (
    {
        getMessageDetails: getMessageDetails
    }
)
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageList)