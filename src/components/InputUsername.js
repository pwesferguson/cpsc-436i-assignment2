import React, { Component } from 'react';
import { dispatch } from 'react-redux';
import { updateUsername } from '../actions';

class InputUsername extends Component {
    render() {
        let input;

        return (
            <form onChange={
                (event) => {
                    console.log(this);
                    // updateUsername(input.value);
                }
            } onSubmit={
                (event) => event.preventDefault()
            }>
                <input defaultValue="Username" ref={(node) => {
                    input = node;
                }}
                />
            </form>
        )
    }
}
// const InputUsername = ({updateUsername}) => {

// }

export default InputUsername;