import { connect } from 'react-redux';
import MessageDetails from '../components/MessageDetails';

const mapStateToProps = state => (
    {
        ...state
    }
)



export default connect(
    mapStateToProps
)(MessageDetails);