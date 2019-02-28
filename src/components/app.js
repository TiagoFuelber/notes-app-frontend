import React, { Component, Fragment } from "react";
import GlobalStyle from "./global-style.style";
class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <h1>My React App</h1>
      </Fragment>
    );
  }
}

export default App;
