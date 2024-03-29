import { alertConstants } from '../constants';

const initialState = {
  type: '',
  message: ''
};

export function alert(state = initialState, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message
      };
    case alertConstants.ERROR:
      return {
        type: 'alert-danger',
        message: action.message
      };
    case alertConstants.CLEAR:
      return initialState;
    default:
      return state;
  }
}
