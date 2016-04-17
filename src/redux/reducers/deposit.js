import {
  DEPOSIT_AMOUNT,
} from '../constants/deposit-constants';

function basicReducer(state = {}, action) {
  switch (action.type) {

  case DEPOSIT_AMOUNT:
    return {
      ...state,
      amount: action.value
    };

    default:
      return state;
  }
}

export default basicReducer;
