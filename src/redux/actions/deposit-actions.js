import {
  DEPOSIT_AMOUNT
} from '../constants/deposit-constants';

export function depositAmount(value) {
  return {
    type: DEPOSIT_AMOUNT,
    value
  }
}
