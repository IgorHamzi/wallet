// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { EXPENSES_VALUES } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  valueCoin: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EXPENSES_VALUES:
    return {
      ...state,
      expenses: [...state.expenses, {
        id: state.expenses.length,
        value: action.payload.value,
        description: action.payload.description,
        tag: action.payload.tag,
        method: action.payload.method,
        currency: action.payload.currency,
        exchangeRates: action.payload.responseJson,
      }],
      currencies: [...state.currencies, {
        exchangeRates: action.payload.responseJson,
      }],
      valueCoin: action.payload.total,
    };
  default:
    return state;
  }
};

export default wallet;
