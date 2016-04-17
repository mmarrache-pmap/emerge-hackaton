import {
  DEPOSIT_AMOUNT
} from '../constants/deposit-constants';

export function setDepositAmount(value) {
  return {
    type: DEPOSIT_AMOUNT,
    value
  }
}
