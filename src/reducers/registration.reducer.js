import { userConstants } from '../constants';

export function registration(state = {}, { type, payload }) {
  switch (type) {
    case userConstants.REGISTER_REQUEST:
      return { registering: true };
    case userConstants.REGISTER_SUCCESS:
      return {
        ...state,
        registering: false,
        user: payload
      };
    case userConstants.REGISTER_FAILURE:
      return {
        ...state,
        error: payload,
        registering: false
      };
    default:
      return state;
  }
}
