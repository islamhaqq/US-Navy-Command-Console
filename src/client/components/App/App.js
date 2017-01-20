import React, { Component } from 'react';
import './App.css';

// import Components
import DrawerMenu from '../DrawerMenu/DrawerMenu.js';

// Material UI
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="Menu">
            <DrawerMenu />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
