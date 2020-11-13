import './App.css';
import React, { Component } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import { registerUser, loginUser } from './services/api_helper';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }

  }

  handleRegister = async (e, registerData) => {
    e.preventDefault();
    const currentUser = await registerUser(registerData);
    this.setState({ currentUser });
  }

  handleLogin = async (e, loginData) => {
    e.preventDefault();
    const currentUser = await loginUser(loginData);
    this.setState({ currentUser });
  }

  handleLogout = () => {
    localStorage.removeItem('authToken');
    this.setState({ currentUser: null });
    this.props.history.push('/login');
  }


  render() {
    return (
      <div className="App">
        {this.state.currentUser ?
            <div>
              <p>Hello {this.state.currentUser.username}</p>
              <button onClick={this.handleLogout}>Logout</button>
            </div>
          :
            <h1>Admin Login</h1>
          }
        <Route path="/login" render={() => (
          <LoginForm handleLogin={this.handleLogin} />
        )} />
        {/* <Route path="/register" render={() => (
          <RegisterForm handleRegister={this.handleRegister} />
        )} /> */}
      </div>
    );
  }
}

export default withRouter(App);
