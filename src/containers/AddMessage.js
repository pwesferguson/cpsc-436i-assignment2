import React from 'react';
import { connect } from 'react-redux';
import { addMessage, updateUsername } from '../actions';
import InputUsername from '../components/InputUsername';

const AddMessage = ({dispatch}) => {
    let input;
    return (
        <div>
            <InputUsername/>
            <form onSubmit={ (event) => {
                event.preventDefault()
                if (!input.value.trim()) return;
                dispatch(addMessage(input.value));
                input.value = '';
            }}>
                <input defaultValue="Type something!" ref={(node) => {
                    input = node;
                }}
                />
                <button type="submit">Shout!</button>
            </form>
        </div>
    )
}

export default connect()(AddMessage)