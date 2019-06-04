import React from 'react';
import '../App.css';
import Navbar from './Navbar';
import MessageListContainer from '../containers/MessageListContainer';
import AddMessage from '../containers/AddMessage'
import MessageDetailsContainer from '../containers/MessageDetailsContainer';


const App = () => (
    <div className="app-text-format">
      <Navbar/>
      <header className="header">
        UBC SHOUTS!
      </header>
      <AddMessage/>
      <MessageDetailsContainer/>
      <MessageListContainer/>
    </div>
);

export default App;
