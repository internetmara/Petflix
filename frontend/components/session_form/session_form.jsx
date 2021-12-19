import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  guestLogin(e) {
    e.preventDefault();
    const guest = { username: "guest", email: "guest@email.com", password: "password" };
    let { username, email, password } = guest;
    let interval = 100;
    let login = () => {
      this.props.processForm(this.state);
      this.props.history.push("/")
    };
    if (this.state.username !== username) {
      let inputUsername = setInterval(() => {
        if (this.state.username !== username) {
          let tempUsername = username.slice(0, this.state.username.length + 1);
          this.setState({ username: tempUsername });
        } else {
          clearInterval(inputUsername);
          fillPassword()
        }
      }, interval);
    }
    let fillPassword = () => {
      let inputPassword = setInterval(() => {
        if (this.state.password !== password) {
          let tempPassword = password.slice(0, this.state.password.length + 1);
          this.setState({ password: tempPassword });
        } else {
          clearInterval(inputPassword);
          login();
        }
      }, interval);
    };
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }
    

}

export default SessionForm;