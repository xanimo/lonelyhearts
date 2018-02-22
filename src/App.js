import React, { Component } from 'react';
import { UserList } from './components/UserList/UserList';
// import Filter from './components/Filter/Filter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="header">Lonely Hearts Dating Service</h1>
			   <div className="container text-center">	
        	<UserList />
        	</div>
      </div>
    )
  }
}

export default App;
