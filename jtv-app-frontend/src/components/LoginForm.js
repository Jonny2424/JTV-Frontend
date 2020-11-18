import React, { Component } from 'react';
// Form for logging into the admin side

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <>
      <h1>Admin Login</h1>
      <form onSubmit={(e) => this.props.handleLogin(e, this.state)}>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <input type="submit" value="Login" />
      </form>
      </>
    )
  }
}

export default LoginForm;