import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';

class App extends Component {  
  render() {
    return (
      <div className="container">
      	<img src="https://cdn-images-1.medium.com/max/1600/1*A1uNin7zP4SkqPXZ5QdZ2w.png" width="20%" />
      	<div className="App">
        	<Login />
        </div>
      </div>
    );
  }
}

export default App;
