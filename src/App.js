import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import Components
import DrawerMenu from './components/DrawerMenu/DrawerMenu.js';

// Material UI
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <div className="DrawerMenu">
              <DrawerMenu />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
