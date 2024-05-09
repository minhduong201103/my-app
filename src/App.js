import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponents';
import React from 'react';
class App extends React.Component {
  render() {
    return (
      <div>
        Hello World with MinhBo
        <MyComponent></MyComponent>
      </div>
    );
  }
}

export default App;
