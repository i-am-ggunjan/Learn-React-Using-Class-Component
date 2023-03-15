import React, { Component } from "react";

export class Signup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit}
        className="bg-slate-200 p-[100px] h-[92vh] flex flex-col gap-2"
      >
        <h2>Signup Form</h2>
        <div className="flex justify-between items-center">
          <input
            onChange={this.props.handleFName}
            className="px-1 rounded-[3px]"
            type="text"
            placeholder="First name"
          />
          <input
            onChange={this.props.handleLName}
            className="px-1 rounded-[3px]"
            type="text"
            placeholder="Last name"
          />
        </div>
        <input
          onChange={this.props.handleMobile}
          className="px-1 rounded-[3px]"
          type="tel"
          placeholder="Mobile number"
        />
        <input
          onChange={this.props.handleMobile}
          className="px-1 rounded-[3px]"
          type="tel"
          placeholder="Re-enter mobile number"
        />
        <input
          onChange={this.props.handleEmail}
          className="px-1 rounded-[3px]"
          type="email"
          placeholder="Email"
        />
        <input
          onChange={this.props.handlePassword}
          className="px-1 rounded-[3px]"
          type="password"
          placeholder="New Password"
        />

        <div>
          <h3>Birthday</h3>
          <input
            onChange={this.props.handleBirthdate}
            className="px-1 rounded-[3px]"
            type="date"
          />
        </div>

        <div className="flex gap-4">
          <div className="flex items-center justify-between gap-2">
            <input
              onChange={this.props.handleGender}
              className="px-1 rounded-[3px]"
              type="radio"
              name="gender"
            />
            <p>Male</p>
          </div>

          <div className="flex items-center justify-between gap-2">
            <input
              onChange={this.props.handleGender}
              className="px-1 rounded-[3px]"
              type="radio"
              name="gender"
            />
            <p>Female</p>
          </div>
          <div className="flex items-center justify-between gap-2">
            <input
              onChange={this.props.handleGender}
              className="px-1 rounded-[3px]"
              type="radio"
              name="gender"
            />
            <p>Other</p>
          </div>
        </div>
        <button className="bg-teal-700 py-[5px] px-[30px] rounded-lg text-slate-50">
          Sign up
        </button>
      </form>
    );
  }
}

export default Signup;
