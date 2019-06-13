import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../actions';
import InputUsername from './InputUsername';


const AddMessage = ({currentUsername, dispatch}) => {
    let input;
    return (
        <div>
            <InputUsername/>
            <form onSubmit={ (event) => {
                event.preventDefault()
                if (!input.value.trim()) return;
                dispatch(addMessage(input.value, currentUsername));
                input.value = '';
            }}>
                <input placeholder="Type something!" ref={(node) => {
                    input = node;
                }}
                />
                <button type="submit">Shout!</button>
            </form>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        currentUsername: state.currentUsername
    }
}

export default connect(mapStateToProps)(AddMessage)