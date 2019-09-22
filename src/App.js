import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { PrivateRoute } from './PrivateRoute.js';
import { history } from './helpers';
// import { alertActions } from './actions';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

export class App extends React.Component {
  constructor(props) {
    super(props);

    // const { dispatch } = this.props;
    history.listen((location, action) => {});
  }

  render() {
    const { alert } = this.props;
    console.log(alert, '====');
    return (
      <Router history={history}>
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
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
            <Switch>
              <PrivateRoute exact path="/" component={HomePage} />
              <Route path="/register" component={RegisterPage} />
              <Route path="/login" component={LoginPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ alert }) => ({
  alert
});

export default connect(mapStateToProps)(App);
