import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <h3 data-testid="email-field">{email}</h3>
        <h2 data-testid="header-currency-field">BRL</h2>
        <h2 data-testid="total-field">0</h2>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.func.isRequired,
};
