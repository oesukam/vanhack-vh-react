import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { history } from './helpers';
// import { alertActions } from './actions';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import NotFoundPage from './components/NotFoundPage';
import { authentication } from './reducers/authentication.reducer';

class App extends React.Component {
  constructor(props) {
    super(props);

    // const { dispatch } = this.props;
    history.listen((location, action) => {});
  }

  render() {
    const { alert, loggedIn } = this.props;
    return (
      <Router history={history}>
        <div className="container">
          <div className="col-sm-8 coßl-sm-offset-2">
            {alert.type === 'alert-danger' && (
              <div className="alert alert-danger">
                <p>{alert.message}</p>
              </div>
            )}

            {alert.type === 'alert-success' && (
              <div className="alert alert-success">
                <p>{alert.message}</p>
              </div>
            )}
            <PrivateRoute exact path="/" component={HomePage} />
            <PublicRoute
              exact
              path="/register"
              loggedIn={loggedIn}
              component={RegisterPage}
            />
            <PublicRoute
              exact
              path="/login"
              loggedIn={loggedIn}
              component={LoginPage}
            />
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ alert, authentication: { loggedIn } }) => ({
  alert,
  loggedIn
});

App.defaultProps = {
  alert: {
    type: '',
    message: ''
  },
  loggedIn: false
};

const AppConnected = connect(mapStateToProps)(App);

export { AppConnected as App };
