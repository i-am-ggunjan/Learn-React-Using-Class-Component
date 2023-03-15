import React, { Component } from "react";
import Login from "./Login";
import Signup from "./Signup";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: true,
      fname: "No first name",
      lname: "No last name",
      mobile: "No number",
      email: "No email",
      password: "No password",
      birthdate: "No birthdate",
      gender: "No gender",
    };
  }

  handleFName = (e) => {
    this.setState({ fname: e.target.value });
  };

  handleLName = (e) => {
    this.setState({ lname: e.target.value });
  };

  handleMobile = (e) => {
    this.setState({ mobile: e.target.value });
  };

  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  handleBirthdate = (e) => {
    this.setState({ birthdate: e.target.value });
  };
  handleGender = (e) => {
    this.setState({ gender: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("First Name : " + this.state.fname);
    console.log("Last Name : " + this.state.lname);
    console.log("Mobile : " + this.state.mobile);
    console.log("Email : " + this.state.email);
    console.log("Password : " + this.state.password);
    console.log("Birthdate : " + this.state.birthdate);
    console.log("Gender : " + this.state.gender);
  };

  render() {
    return (
      <section>
        <article>
          <nav className="flex items-center justify-around bg-teal-700 text-slate-50 py-4">
            <h2
              onClick={() => {
                this.setState({ login: true });
              }}
            >
              Login
            </h2>
            <h2
              onClick={() => {
                this.setState({ login: false });
              }}
            >
              Signup
            </h2>
          </nav>

          <main>
            {this.state.login ? (
              <Login
                handleFName={this.handleFName}
                handleLName={this.handleLName}
                handleMobile={this.handleMobile}
                handleEmail={this.handleEmail}
                handlePassword={this.handlePassword}
                handleSubmit={this.handleSubmit}
              />
            ) : (
              <Signup
                handleFName={this.handleFName}
                handleLName={this.handleLName}
                handleMobile={this.handleMobile}
                handleEmail={this.handleEmail}
                handlePassword={this.handlePassword}
                handleBirthdate={this.handleBirthdate}
                handleGender={this.handleGender}
                handleSubmit={this.handleSubmit}
              />
            )}
          </main>
        </article>
      </section>
    );
  }
}

export default Form;
