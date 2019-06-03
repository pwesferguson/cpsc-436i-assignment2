import React from 'react';
import { connect } from 'react-redux';
import { displayMessageDetails } from '../actions/index';
import MessageDetails from '../components/MessageDetails';

//todo
const mapStateToProps = state => (
    {
        ...state
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
)(MessageDetails);