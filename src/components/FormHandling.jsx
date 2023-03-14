import React, { Component } from "react";

class FormHandling extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uname: "No Username",
      upass: "No Password",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username : " + this.state.uname);
    console.log("Password : " + this.state.upass);
  };

  handleName = (e) => {
    // console.log(e.target.value);
    this.setState({ uname: e.target.value });
  };

  handlePass = (e) => {
    this.setState({ upass: e.target.value });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="Username">Username : </label>
        <input type="text" id="Username" onChange={this.handleName} />
        <br />
        <br />

        <label htmlFor="Password">Password : </label>
        <input type="password" id="Password" onChange={this.handlePass} />
        <br />
        <br />

        <button>Submit</button>
      </form>
    );
  }
}

export default FormHandling;
