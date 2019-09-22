import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../actions';
import CircularProgress from '@material-ui/core/CircularProgress';

export class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: '',
        password: ''
      },
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { name, value } }) {
    // handle input change and dispatch register
    this.setState(prevState => ({
      user: { ...prevState.user, [name]: value }
    }));
  }

  handleSubmit(event) {
    // handle button click and dispatch register
    event.preventDefault();
    const {
      user: { username, password }
    } = this.state;
    const { dispatch } = this.props;
    this.setState({ submitted: true });
    if (!username || !password) return;
    dispatch(userActions.register({ username, password }));
  }

  render() {
    const { user, submitted } = this.state;
    const { registering } = this.props;
    return (
      <div className="col-md-6 col-md-offset-3">
        <h2>Register</h2>
        <form name="form" onSubmit={this.handleSubmit}>
          <div
            className={
              'form-group' + (submitted && !user.username ? ' has-error' : '')
            }
          >
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control username"
              name="username"
              onChange={this.handleChange}
            />
            {submitted && !user.username && (
              <div className="help-block">Username is required</div>
            )}
          </div>
          <div
            className={
              'form-group' + (submitted && !user.password ? ' has-error' : '')
            }
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.handleChange}
            />
            {submitted && !user.password && (
              <div className="help-block">Password is required</div>
            )}
          </div>
          <div className="form-group">
            <button
              className="btn btn-primary loading"
              onClick={this.handleSubmit}
            >
              Register
            </button>
            {registering && <CircularProgress size={20} color="secondary" />}
            <Link to="/login" className="btn btn-link">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

// complete the below function
const mapStateToProps = ({
  registration: { registering },
  alert: { type, message }
}) => ({
  registering,
  message,
  type
});

export { RegisterPage as TestRegisterPage };

export default connect(mapStateToProps)(RegisterPage);
