import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../actions';

export class LoginPage extends Component {
  constructor(props) {
    super(props);

    // reset login status

    this.state = {
      username: '',
      password: '',
      submitted: false
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const { dispatch } = this.props;
    this.setState({ submitted: true });
    if (!username || !password) return;
    dispatch(userActions.login(username, password));
  };

  render() {
    const { username, password, submitted } = this.state;
    return (
      <div className="col-md-6 col-md-offset-3">
        <h2>Login</h2>
        <form name="form" onSubmit={this.handleSubmit}>
          <div
            className={
              'form-group' + (submitted && !username ? ' has-error' : '')
            }
          >
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control username"
              name="username"
              onChange={this.handleChange}
            />
            {submitted && !username && (
              <div className="help-block">Username is required</div>
            )}
          </div>
          <div
            className={
              'form-group' + (submitted && !password ? ' has-error' : '')
            }
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control password"
              name="password"
              onChange={this.handleChange}
            />
            {submitted && !password && (
              <div className="help-block">Password is required</div>
            )}
          </div>
          <div className="form-group">
            <button className="btn btn-primary" onClick={this.handleSubmit}>
              Login
            </button>
            <Link to={'/register'} className="btn btn-link">
              Register
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

const LoginPageConnected = connect()(LoginPage);

export { LoginPageConnected as TestLoginPage };

export default LoginPageConnected;
