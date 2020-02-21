import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  state = {
    email: '',
    password: '',
    isAuth: false,
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const user = {
      username: 'harold',
      email: this.state.email,
    };
    this.props.doSetCurrentUser(user);
    this.setState({
      isAuth: true,
    });
  };

  render() {
    const { email, password, isAuth } = this.state;
    if (isAuth) {
      return <Redirect to='/' />;
    }
    return (
      <>
        <h1>Login</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input
            name='email'
            onChange={this.handleChange}
            value={email}
            placeholder='email'
          />
          <input
            name='password'
            onChange={this.handleChange}
            value={password}
            placeholder='password'
          />
          <button type='submit'>Login</button>
        </form>
      </>
    );
  }
}

export default Login;