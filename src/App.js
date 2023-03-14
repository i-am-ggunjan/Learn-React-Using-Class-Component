import { Component } from "react";
import FormHandling from "./components/FormHandling";
// import PassingData from "./components/PassingData";

class App extends Component {
  constructor() {
    super();
    this.age = 50;
    this.name = "Gunjan";
  }

  render() {
    return (
      <>
        I am class based App component
        <br></br><br/>
        <FormHandling />
        <br></br>
        {/* <PassingData
          // name={this.name}
          // age={this.age}
          // gender = {gender}
          login={true}
          na={NaN}
        >
          <p>I am child</p>
          <p>i am 2nd child</p>
        </PassingData> */}
      </>
    );
  }
}

export default App;
