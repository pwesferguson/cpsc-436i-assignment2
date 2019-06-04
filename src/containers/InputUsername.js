import { connect } from 'react-redux';
import React from 'react';
import { updateUsername } from '../actions';


const InputUsername = ({dispatch}) => {
    let input;
    return (
        <div>
            <form onSubmit={ (event) => {
                event.preventDefault()
                if (!input.value.trim()) return;
                dispatch(updateUsername(input.value));
                input.value = '';
            }}>
                <input defaultValue="Enter Username" ref={(node) => {
                    input = node;
                }}
                />
                <button type="submit">Choose a username</button>
            </form>
        </div>
    )
}

// const mapStateToProps = (state) => (
//     state
// )

// const mapDispatchToProps = (dispatch) => ({
//     updateUsername
// })

export default connect(
    // mapStateToProps,
    // mapDispatchToProps
)(InputUsername);