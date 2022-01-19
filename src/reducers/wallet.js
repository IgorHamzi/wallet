// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { EXPENSES_VALUES } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  valueCoin: 0,
  brlValue: 0,
  ask: 0,
  name: '',
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
      // currencies: [...state.currencies, {
      //   exchangeRates: action.payload.responseJson,
      // }],
      valueCoin: action.payload.total,
      brlValue: action.payload.brlValue,
      ask: action.payload.ask,
      name: action.payload.name,
    };
  default:
    return state;
  }
};

export default wallet;
