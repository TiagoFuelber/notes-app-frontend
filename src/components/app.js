import React, { Component, Fragment } from "react";
import GlobalStyle from "./global-style.style";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faIgloo } from "@fortawesome/free-solid-svg-icons";
import Container from "./container.component";
import SideBar from "./sidebar.component";
import SideBarTitle from "./side-bar-title.component";
import AddNote from "./add-note.component";
import Textarea from "./textarea.component";

library.add(faIgloo);

class App extends Component {
  state = {
    Notes: []
  };

  updateTitle = ({ target }) => this.setState({ title: target.value });

  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Container style={{ display: "flex" }}>
          <SideBar>
            <SideBarTitle>
              Notes <AddNote />
            </SideBarTitle>
          </SideBar>
          <div style={{ padding: "15px", width: "100%" }}>
            <h1 style={{ textAlign: "center", textTransform: "uppercase" }}>
              My Notes App
            </h1>
            <Textarea onChange={this.updateTitle} />
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default App;
