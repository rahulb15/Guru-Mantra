import React, { Fragment } from "react";


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      password2: "",
    };
  }

  render() {
    return (
      <Fragment>
        <h1>Register</h1>
        <form>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.onChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.onChange}
          />
          <input
            type="password"
            name="password2"
            placeholder="Confirm Password"
            value={this.state.password2}
            onChange={this.onChange}
          />
          <input type="submit" value="Register" />
        </form>
      </Fragment>
    );
  }
}

export default Register;