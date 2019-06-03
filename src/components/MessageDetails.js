import React from 'react'
import PropTypes from 'prop-types'

const MessageDetails = (props, dispatch) => {
    console.log(props);
    if (props.isDetailsVisible) return (
        <h1>VISIBLE</h1>
    ); 
    else return (
        <br></br>
    );
}

export default MessageDetails;