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

    // loop through SampleTrackData
    function PopulateTrackList() {
      for (var vessel in SampleTrackData.tracks) {
        // filter unwanted properties
        if (SampleTrackData.tracks.hasOwnProperty(vessel)) {
          var id = SampleTrackData.tracks[vessel]._id;
          console.log(id);
        }
      }
    }
    PopulateTrackList();

    // function PopulateTrackList(SampleTrackData) {
    //   return SampleTrackData.map((article, index) => (
    //       <Article key={index} article={article} />
    //   ));
    // }
    //
    // const Article = ({article}) => {
    //     return (
    //         <article key={article.id}>
    //             <a href={article.link}>{article.title}</a>
    //             <p>{article.description}</p>
    //         </article>
    //     );
    // };

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

        <Drawer docked={false} width={200} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
          <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}
