import React, { Component } from 'react';
import '../App.css';
import Navbar from './Navbar';
import MessageListContainer from '../containers/MessageListContainer';
import AddMessage from '../containers/AddMessage'
import MessageDetailsContainer from '../containers/MessageDetailsContainer';
import { setInitialMessagesState } from '../actions/index';
import { connect } from 'react-redux';
import { messagesPath } from '../apis';

class App extends Component {

  getInitialMessages(dispatch) {
    fetch(messagesPath)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log("initial response = " + res);
        dispatch(setInitialMessagesState(res)); 
      })
  }

  componentWillMount() {
    this.getInitialMessages(this.props.dispatch);
  }

  render() {
    return (
      <div className="app-text-format">
        <Navbar />
        <h1 className="header">
          UBC SHOUTS!
        </h1>
        <AddMessage />
        <MessageDetailsContainer />
        <MessageListContainer />
      </div>
    );
  }
}

export default connect()(App);
