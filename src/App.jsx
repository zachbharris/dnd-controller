import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

// routes
import Routes from "./routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <Routes />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
