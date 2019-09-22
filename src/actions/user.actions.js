import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from './';
import { history } from '../helpers';

const login = (username, password) => {
  const user = { username, password };
  // return the promise using fetch which adds to localstorage on resolve
  const request = user => ({ type: userConstants.LOGIN_REQUEST, user });
  const success = user => ({ type: userConstants.LOGIN_SUCCESS, user });
  const failure = error => ({ type: userConstants.LOGIN_FAILURE, error });
  return dispatch => {
    dispatch(request(user));
    return new Promise((resolve, reject) => {
      userService
        .login(username, password)
        .then(user => {
          dispatch(success(user));
          history.push('/');
          resolve();
        })
        .catch(error => {
          dispatch(alertActions.error(error));
          dispatch(failure(error));
          reject();
        });
    });
  };
};

const logout = () => {
  // complete this function
  const success = () => ({ type: userConstants.LOGOUT });
  userService.logout();
  return success();
};

const register = user => {
  // return the promise using fetch which dispatches appropriately
  const request = user => ({ type: userConstants.REGISTER_REQUEST, user });
  const success = user => ({ type: userConstants.REGISTER_SUCCESS, user });
  const failure = error => ({ type: userConstants.REGISTER_FAILURE, error });

  return dispatch => {
    dispatch(request(user));
    return new Promise((resolve, reject) => {
      userService
        .register(user)
        .then(user => {
          dispatch(alertActions.success('Registration successful'));
          dispatch(success(user));
          history.push('/login');
          resolve();
        })
        .catch(error => {
          dispatch(alertActions.error(error));
          dispatch(failure(error));
          reject();
        });
    });
  };
};

export const userActions = {
  login,
  logout,
  register
};
