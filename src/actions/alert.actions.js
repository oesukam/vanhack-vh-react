import { alertConstants } from '../constants';

const success = message => ({
  type: alertConstants.SUCCESS,
  payload: message
});

const error = message => ({
  type: alertConstants.ERROR,
  payload: message
});

const clear = () => ({
  type: alertConstants.CLEAR
});

export const alertActions = {
  success,
  error,
  clear
};
