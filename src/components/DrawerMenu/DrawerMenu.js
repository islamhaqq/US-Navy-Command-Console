import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';
import {blue500} from 'material-ui/styles/colors';

// import Sample Track Data
import SampleTrackData from '../../data/SampleTrackData.json';

export default class DrawerMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  // handle drawer state
  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  render() {
    var vessels = [];
    for (var vessel in SampleTrackData.tracks) {
      // filter unwanted properties
      if (SampleTrackData.tracks.hasOwnProperty(vessel)) {
        var id = SampleTrackData.tracks[vessel]._id;
        vessels.push(<MenuItem onTouchTap={this.handleClose}>{id}</MenuItem>);
      }
    }
    return (
      <div>
        <IconButton onTouchTap={this.handleToggle}>
          <Menu color={blue500}/>
        </IconButton>

        <Drawer docked={false} width={300} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
          {vessels}
        </Drawer>
      </div>
    );
  }
}
