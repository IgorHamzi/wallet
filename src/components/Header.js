import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, valueCoin } = this.props;

    return (
      <header>
        <h3 data-testid="email-field">{email}</h3>
        <h2 data-testid="header-currency-field">BRL</h2>
        <h2 data-testid="total-field">{ valueCoin }</h2>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  valueCoin: state.wallet.valueCoin,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  valueCoin: PropTypes.number.isRequired,
};
