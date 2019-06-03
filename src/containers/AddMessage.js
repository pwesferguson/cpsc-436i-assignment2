import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../actions';

const AddMessage = ({dispatch}) => {
    let input;

    return (
        <div>
            <form defaultValue="Type something!" onSubmit={ (event) => {
                event.preventDefault()
                if (!input.value.trim()) return;
                dispatch(addMessage(input.value));
                input.value = '';
            }}>
                <input ref={(node) => {
                    input = node;
                }}
                />
                <button type="submit">Shout!</button>
            </form>
        </div>
    )
}

export default connect()(AddMessage)