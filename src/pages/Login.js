import React, { Component } from 'react';
import { func, shape } from 'prop-types';
// importe do pacote da validação do email
import EmailValidator from 'email-validator';
import { connect } from 'react-redux';
import { actionformsPersonal } from '../actions';
import Input from '../Components/Input';
import Button from '../Components/Button';
import '../Styles/Login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabledButton: true,
    };
  }

  validLogin = () => {
    const { email, password } = this.state;
    const numberValid = 6;
    const validEmail = EmailValidator.validate(email); // true ou false
    const valueToInput = password.length >= numberValid;

    if (valueToInput && validEmail) {
      this.setState({
        disabledButton: false,
      });
    } else {
      this.setState({
        disabledButton: true,
      });
    }
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => this.validLogin());
  };

  handleClick = (event) => {
    event.preventDefault();
    const { clickProps, history } = this.props;
    const { email } = this.state;
    clickProps(email);
    this.setState({

    }, () => history.push('/'))

    this.setState({
      email: '',
      password: '',
      disabledButton: true,
    }, () => history.push('/carteira'));
  };

  render() {
    const { email, password, disabledButton } = this.state;
    // const { history } = this.props;
    console.log(this.props);
    return (

      <section className="Login">
        <header>
          <h2>Login</h2>
        </header>
        <form>

          <Input
            dataTestid="email-input"
            label="Email: "
            type="text"
            onChange={ this.handleChange }
            value={ email }
            name="email"
            id="emaildId"
            required
          />

          <Input
            dataTestid="password-input"
            label="Senha: "
            type="text"
            onChange={ this.handleChange }
            value={ password }
            name="password"
            id="passwordId"
          />
          <Button
            type="submit"
            label="Entrar"
            name="disabledButton"
            onClick={ this.handleClick }
            disabled={ disabledButton }
          />
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  clickProps: (email) => {
    dispatch(actionformsPersonal(email));
  },
});

Login.propTypes = {
  clickProps: func.isRequired,
  history: shape({
    push: func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
