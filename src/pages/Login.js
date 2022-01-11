import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import Wallet from '../pages/Wallet';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      userEmail: '',
      userPassword: '',
      buttonDisabled: true,
    };

    this.enableDisableBtn = this.enableDisableBtn.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onClickButton = this.onClickButton.bind(this);
  }

  onInputChange({ target: { value, name } }) {
    this.setState({ [name]: value }, () => { this.enableDisableBtn(); });
  }

  onClickButton() {
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
      onClickButton,
    } = this;
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
              type=""
              value={ userPassword }
              onChange={ onInputChange }
            />
          </label>
          <Link to="/wallet">
            <button
              type="button"
              data-testid="login-submit-button"
              disabled={ buttonDisabled }
              onClick={ onClickButton }
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}
