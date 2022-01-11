import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { emailValue } from '../actions/index';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      userEmail: '',
      userPassword: '',
      buttonDisabled: true,
    };

    this.enableDisableBtn = this.enableDisableBtn.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target: { value, name } }) {
    this.setState({ [name]: value }, () => { this.enableDisableBtn(); });
  }

  enableDisableBtn() {
    const { userEmail, userPassword } = this.state;
    const minLetter = 6;
    const emailValidate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailValidate.test(userEmail) && userPassword.length >= minLetter) {
      this.setState({ buttonDisabled: false });
    } else {
      this.setState({ buttonDisabled: true });
    }
  }

  render() {
    const {
      state: {
        userEmail,
        userPassword,
        buttonDisabled,
      },
      onInputChange,
    } = this;
    const { dispatchSetValue } = this.props;
    return (
      <div data-testid="page-login">
        <form>
          <label htmlFor="email">
            Email:
            <input
              data-testid="email-input"
              name="userEmail"
              type="text"
              value={ userEmail }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="name">
            Senha:
            <input
              data-testid="password-input"
              name="userPassword"
              type="password"
              value={ userPassword }
              onChange={ onInputChange }
            />
          </label>
          <Link to="/carteira">
            <button
              type="button"
              data-testid="login-submit-button"
              disabled={ buttonDisabled }
              onClick={ () => dispatchSetValue(userEmail) }
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (value) => dispatch(emailValue(value)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  dispatchSetValue: PropTypes.func.isRequired,
};
