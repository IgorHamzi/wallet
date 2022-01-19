import React from 'react';
import Header from '../components/Header';
import FormExpense from '../components/FormExpense';
import TableExpenses from '../components/TableExpenses';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <FormExpense />
        <TableExpenses />
      </div>
    );
  }
}

export default Wallet;
