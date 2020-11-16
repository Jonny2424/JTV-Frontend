import './App.css';
import React, { Component } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Requests from './components/RequestsContainer';
import { registerUser, loginUser, verifyUser } from './services/auth_api_helper';
import Homepage from './components/webpageComponents/Homepage';
import Detailing from './components/webpageComponents/Detailing';
import AboutUs from './components/webpageComponents/AboutUs';
import ContactUs from './components/webpageComponents/ContactUs';


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
    this.props.history.push('/requests')
  }

  handleLogout = () => {
    localStorage.removeItem('authToken');
    this.setState({ currentUser: null });
    this.props.history.push('/admin');
  }

  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser });
    }
  }


  componentDidMount() {
    this.handleVerify();
  }


  render() {
    return (
      <div className="App">
        {this.state.currentUser ?
          <div>
            <h1>Welcome Back {this.state.currentUser.username}!</h1>
            <Route path="/requests" render={() => { return <Requests /> }} />
            <br></br>
            <button onClick={this.handleLogout}>Logout</button>
          </div>
          :
          <>
            <Route exact path="/" render={() => { return <Homepage /> }} />
            <Route path="/detailing" render={() => { return <Detailing /> }} />
            <Route path="/aboutus" render={() => { return <AboutUs /> }} />
            <Route path="/contact" render={() => { return <ContactUs /> }} />
            <Route path="/admin" render={() => { return <LoginForm handleLogin={this.handleLogin} /> }} />
            {/* <RegisterForm handleRegister={this.handleRegister}/> */}
          </>
        }

      </div>
    );
  }
}

export default withRouter(App);
