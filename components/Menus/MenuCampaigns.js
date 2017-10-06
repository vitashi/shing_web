var React = require('react');
import FlatButton from 'material-ui/FlatButton';
import {grey400} from 'material-ui/styles/colors';

import DropDown from './DropDown';


var styles = {
  menulabels: {color: "white", fontWeight: "bold"},
  menu: {height: "100%", width: "20%"},
  newButton: {height: "100%", width: "100%"},
  menuinline: {display: "inline", whiteSpace: "nowrap"},
}

export default class MenuCampaigns extends React.Component{

  constructor(props){
        super(props)
        this.campaignSelected = this.campaignSelected.bind(this)
        this.closeCampaigns = this.closeCampaigns.bind(this)
        this.handleTouchTap = this.handleTouchTap.bind(this)
        this.state = {openCampaigns: false, anchorEl: null};
    }

  handleTouchTap = (event) => { 
      // This prevents ghost click.
      event.preventDefault();
      this.setState({
        openShops: true,
        anchorEl: event.currentTarget,
        });

   };


  createCampaign = (event) => { 
      event.preventDefault();
      console.log("New campaign")
   };

  campaignSelected = (event) => {
    console.log(event.target.value)
    this.closeCampaigns()
    };

  closeCampaigns = () => {
    this.setState({openShops: false})
  }

  render = () => {
    let button = <FlatButton style={styles.menu} hoverColor={grey400} labelStyle={styles.menulabels} onClick={this.handleTouchTap} label={"campaigns"}/>
    let campaigns = [{name: "Rush Hour", id: "0912"}, {name: "Dresses", id: "87666"}];
    let newButton = <FlatButton style={styles.newButton} hoverColor={grey400} labelStyle={styles.menulabels} onClick={this.createCampaign} label={"Manage Campaigns"}/>
    let menuitemsLinks = `/app/shopdetails`
    return (
      <div style={styles.menuinline}>
        {button}
        <DropDown menuitems={campaigns} itemLinks={menuitemsLinks} openmenu={this.state.openCampaigns} anchor={this.state.anchorEl} newButton={newButton} whenClose={this.closeCampaigns} whenClicked={this.campaignSelected}></DropDown>
      </div>
    )

  }

}