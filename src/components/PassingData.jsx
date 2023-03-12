import { Component } from "react";
import Types from "prop-types";

class PassingData extends Component {
  constructor(props) {
    super();
    console.log(props);
    // this.state = {
    //     name : 'chombus'
    // }
  }

  render() {
    console.log(this.props.login);
    return (
      <>
        I am also class based Passing Data component
        <br />
        {/* {this.state.name} */}
        <br />
        {this.props.name}
        <br />
        {this.props.age}
        <br />
        {this.props.gender}
        <br />
        {this.props.login}
        <br />
        {this.props.na}
        <br />
        {this.props.children[1]}
      </>
    );
  }
}

PassingData.defaultProps = {
  //   name: "No name passed",
  age: 10,
  gender: "No sex passed",
};

PassingData.propTypes = {
  age: Types.number.isRequired,
  // Here we don't get warning even we not pass data, because we get it from defaultProps
  gender: Types.string,
  name: Types.string.isRequired,
  // Here we get warning even because we not pass data as well as we don.t get it from defaultProps
};

export default PassingData;
