import React from 'react';
import '../App.css';
import Navbar from './Navbar';
import VisibleMessageList from '../containers/VisibleMessageList';
import AddMessage from '../containers/AddMessage'


const App = () => (
    <div className="App">
      <Navbar/>
      <header className="header">
        UBC SHOUTS!
      </header>
      <AddMessage/>
      <VisibleMessageList/>
    </div>
);

export default App;
