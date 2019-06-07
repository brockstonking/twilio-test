import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      message: '',
      number: ''
    }

    this.updateMes = this.updateMes.bind( this );
    this.updateNum = this.updateNum.bind( this );
    this.sendMessage = this.sendMessage.bind( this );
  }

  updateNum(val){
    this.setState({
      number: val
    })
  }

  updateMes(val){
    this.setState({
      message: val
    })
  }

  sendMessage(){
    axios.post('http://localhost:3003/api/sendtext', { message: this.state.message, number: this.state.number })
    .then( () => {
      console.log('Done!')
    })
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <input onChange={ e => this.updateNum( e.target.value )} placeHolder='Phone Number' />
          <input onChange={ e => this.updateMes( e.target.value )} placeHolder='Message' />
          <button onClick={ this.sendMessage }>Send Message</button>
        </header>
        
      </div>
    );
  }
}

export default App;
