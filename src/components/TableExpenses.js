import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class TableExpenses extends Component {
  render() {
    // const {
    //   description,
    //   tag,
    //   method,
    //   value,
    //   currency,
    //   valueCurrency,
    //   brlValue } = this.props;
    const { expenses } = this.props;
    return (
      <section>
        <table>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
          <tr>
            {expenses.map((expense) => (
              <>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{expense.value}</td>
                <td>{expense.exchangeRates[expense.currency].name.split('/')[0]}</td>
                <td>
                  {Number((expense.exchangeRates[expense.currency].ask)).toFixed(2)}
                </td>
                <td>
                  {Number(
                    (expense.exchangeRates[expense.currency].ask * expense.value),
                  ).toFixed(2)}
                </td>
                <td>Real</td>
                <button type="button">
                  Editar/Excluir
                </button>
              </>
            ))}
          </tr>
        </table>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

TableExpenses.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

export default connect(mapStateToProps)(TableExpenses);
