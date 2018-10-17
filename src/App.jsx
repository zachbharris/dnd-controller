import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// routes
import Routes from './routes';
// global components
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <Navbar />
            <Routes />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
