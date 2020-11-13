import './App.css';
import React, { Component } from 'react';
import RegisterForm from './components/RegisterForm';
import { registerUser } from './services/api_helper';

class App extends Component {
  constructor(props) {
    super(props);
  }

handleRegister = async (e, registerData) => {
  e.preventDefault();
  const currentUser = await registerUser(registerData);
  console.log('Trying to show currentUser below')
  console.log(currentUser)
}


  render(){
   return (
    <div className="App">
      <h1>Hello World</h1>
      <RegisterForm handleRegister={this.handleRegister} />
    </div>
  ); 
  }
}

export default App;
