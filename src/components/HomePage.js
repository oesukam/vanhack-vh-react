import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../actions';
import { alertActions } from '../actions/alert.actions';

export class HomePage extends Component {
  logout = e => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(alertActions.clear());
    dispatch(userActions.logout());
  };
  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
        <h2 align="center">Welcome! You have successfully logged in.</h2>
        <p align="center">
          <Link to={'/login'} onClick={e => this.logout(e)}>
            Logout
          </Link>
        </p>
      </div>
    );
  }
}

export default connect()(HomePage);
