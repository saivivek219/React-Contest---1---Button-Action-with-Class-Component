import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    check: false
  };

  handleClick = () => {
    this.setState({
      check: true
    });
  };

  render() {
    return (
      <div id="main">
        <button onClick={this.handleClick}>Click</button>
        {this.state.check && (
          <p id="para">
            "Hello, I've learnt to use the full-stack evaluation tool. This
            makes me so happy"
          </p>
        )}
      </div>
    );
  }
}

export default App;
