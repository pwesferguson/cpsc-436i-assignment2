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



export default connect(
    mapStateToProps
)(MessageDetails);