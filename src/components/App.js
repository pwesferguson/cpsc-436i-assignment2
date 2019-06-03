import React from 'react';
import '../App.css';
import Navbar from './Navbar';
import VisibleMessageList from '../containers/VisibleMessageList';
import AddMessage from '../containers/AddMessage'
import VisibleMessageDetails from '../containers/VisibleMessageDetails';


const App = () => (
    <div className="app-text-format">
      <Navbar/>
      <header className="header">
        UBC SHOUTS!
      </header>
      <AddMessage/>
      <VisibleMessageList/>
      <VisibleMessageDetails/>
    </div>
);

export default App;
