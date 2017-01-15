import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/svg-icons/navigation/menu';
import MapsDirectionsBoat from 'material-ui/svg-icons/maps/directions-boat';
import IconButton from 'material-ui/IconButton';
import {blue500} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';

// import Sample Track Data
import SampleTrackData from '../../../server/data/SampleTrackData.json';

export default class DrawerMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    this.vessels = [];

    // parse SampleTrackData to populate MenuItems with vessel ids
    for (var vessel in SampleTrackData.tracks) {
      // filter unwanted properties
      if (SampleTrackData.tracks.hasOwnProperty(vessel)) {
        var id = SampleTrackData.tracks[vessel]._id;
        this.vessels.push(<MenuItem onTouchTap={this.handleClose} leftIcon={<MapsDirectionsBoat />}>{id}</MenuItem>);
      }
    }
  }

  // handle drawer state
  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <IconButton onTouchTap={this.handleToggle}>
          <Menu color={blue500}/>
        </IconButton>

        <Drawer docked={false} width={350} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
          <AppBar title="Track List" showMenuIconButton={false}/>
          {this.vessels}
        </Drawer>
      </div>
    );
  }
}
