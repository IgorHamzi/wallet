import React, { Component } from 'react';
// // // import { connect } from 'react-redux';
// // // import PropTypes from 'prop-types';

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
    return (
      <div>
        <table>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </table>
      </div>
    );
  }
}

// // // const mapStateToProps = (state) => ({
// // //   description: state.user.email,
// // //   tag: state.wallet.tag,
// // //   method: state.wallet.method,
// // //   value: state.wallet.value,
// // //   currency: state.wallet.name,
// // //   valueCurrency: state.wallet.ask,
// // //   brlValue: state.wallet.brlValue,
// // // });
export default TableExpenses;
// // export default connect(mapStateToProps)(tableExpenses);

// // tableExpenses.propTypes = {
// //   description: PropTypes.string.isRequired,
// //   tag: PropTypes.string.isRequired,
// //   method: PropTypes.string.isRequired,
// //   value: PropTypes.number.isRequired,
// //   currency: PropTypes.string.isRequired,
// //   valueCurrency: PropTypes.number.isRequired,
// //   brlValue: PropTypes.number.isRequired,
// // };
