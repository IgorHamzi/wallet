import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { expensesValues } from '../actions/index';

class FormExpense extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: [],
      totalValue: 0,
    };

    this.enableDisableBtn = this.requestApi.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.requestApi();
  }

  onInputChange({ target: { value, name } }) {
    this.setState({ [name]: value });
  }

  async requestApi() {
    const url = await fetch('https://economia.awesomeapi.com.br/json/all');
    const responseJson = await url.json();
    delete responseJson.USDT;
    this.setState({ exchangeRates: responseJson });
  }

  async handleClick() {
    const { dispatchSetValue } = this.props;
    const { value, description, currency, method, tag, totalValue } = this.state;
    const url = await fetch('https://economia.awesomeapi.com.br/json/all');
    const responseJson = await url.json();
    delete responseJson.USDT;
    const objSome = Object.values(responseJson).filter((coin) => (
      coin.code === currency
    ));
    const some = Number(objSome[0].ask) * Number(value);
    const sum = totalValue + some;
    this.setState({ totalValue: sum });
    const objExpenses = {
      value,
      description,
      currency,
      method,
      tag,
      responseJson,
      total: sum,
    };
    dispatchSetValue(objExpenses);
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
    });
  }

  render() {
    const {
      state: {
        value,
        description,
        currency,
        method,
        tag,
        exchangeRates,
      },
      onInputChange,
      handleClick,
    } = this;
    return (
      <div>
        <form>
          <label htmlFor="email">
            Valor:
            <input
              data-testid="value-input"
              name="value"
              type="text"
              value={ value }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="description">
            Descrição:
            <input
              data-testid="description-input"
              name="description"
              type="text"
              value={ description }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="currency">
            Moeda:
            <select
              name="currency"
              value={ currency }
              onChange={ onInputChange }
              data-testid="currency-input"
              id="currency"
            >
              {Object.keys(exchangeRates).map((coin) => (
                <option
                  value={ coin }
                  key={ coin }
                  data-testid={ coin }
                >
                  { coin }
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="method">
            Método de pagamento:
            <select
              name="method"
              value={ method }
              onChange={ onInputChange }
              data-testid="method-input"
              id="method"
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="tag">
            Categoria:
            <select
              name="tag"
              value={ tag }
              onChange={ onInputChange }
              data-testid="tag-input"
              id="tag"
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>

          <button
            type="button"
            onClick={ handleClick }
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (value) => dispatch(expensesValues(value)),
});

export default connect(null, mapDispatchToProps)(FormExpense);

FormExpense.propTypes = {
  dispatchSetValue: PropTypes.func.isRequired,
};
