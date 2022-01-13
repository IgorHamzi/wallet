// Coloque aqui suas action

export const EMAIL_VALUE = 'EMAIL_VALUE';

export const emailValue = (payload) => (
  {
    type: EMAIL_VALUE, payload,
  }
);

export const EXPENSES_VALUES = 'EXPENSES_VALUES';

export const expensesValues = (payload) => (
  {
    type: EXPENSES_VALUES, payload,
  }
);
