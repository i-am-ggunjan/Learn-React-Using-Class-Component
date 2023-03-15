import React, { Component } from "react";

export class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit}
        className="bg-slate-200 p-[100px] h-[92vh] flex flex-col gap-2"
      >
        <h2>Login Form</h2>
        <div className="flex justify-between items-center">
          <input
            onChange={this.props.handleFName}
            type="text"
            placeholder="First name"
            className="px-1 rounded-[3px]"
          />
          <input
            onChange={this.props.handleLName}
            type="text"
            placeholder="Last name"
            className="px-1 rounded-[3px]"
          />
        </div>
        <input
          onChange={this.props.handleMobile}
          type="tel"
          placeholder="Mobile number"
          className="px-1 rounded-[3px]"
        />
        <input
          onChange={this.props.handleEmail}
          type="email"
          placeholder="Enter your email"
          className="px-1 rounded-[3px]"
        />
        <input
          onChange={this.props.handlePassword}
          type="password"
          placeholder="Enter your password"
          className="px-1 rounded-[3px]"
        />

        <button className="bg-teal-700 py-[5px] px-[30px] rounded-lg text-slate-50">
          Login
        </button>
      </form>
    );
  }
}

export default Login;
