import {
  DEPOSIT_AMOUNT,
} from '../constants/deposit-constants';

function depositReducer(state={}, action) {
  switch (action.type) {

    case DEPOSIT_AMOUNT:
      return {
        ...state,
        amount: action.value
      };
  }
}

export default depositReducer;
