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


export default class MenuShops extends React.Component{

  constructor(props){
        super(props)
        this.shopSelected = this.shopSelected.bind(this)
        this.closeShops = this.closeShops.bind(this)
        this.handleTouchTap = this.handleTouchTap.bind(this)
        this.state = {openShops: false, anchorEl: null};
    }

  handleTouchTap = (event) => { 
      // This prevents ghost click.
      event.preventDefault();
      this.setState({
        openShops: true,
        anchorEl: event.currentTarget,
        });

   };


  shopSelected = (event) => {
    console.log(event.target.value)
    this.closeShops()
    };

  closeShops = () => {
    this.setState({openShops: false})
  }

  render = () => {
    let button = <FlatButton style={styles.menu} hoverColor={grey400} labelStyle={styles.menulabels} onClick={this.handleTouchTap} label={"shops"}/>
    let shops = [{name: "Westgate Shopping Mall", id: "0912"}, {name: "The Point", id: "87666"}];
    let newButton = <FlatButton style={styles.newButton} hoverColor={grey400} labelStyle={styles.menulabels} href={'#/app/shops'} label={"Manage Shops"}/>
    let menuitemsLinks = `/app/campaigns`
    return (
      <div style={styles.menuinline}>
        {button}
        <DropDown menuitems={shops} itemLinks={menuitemsLinks} openmenu={this.state.openShops} anchor={this.state.anchorEl} newButton={newButton} whenClose={this.closeShops} whenClicked={this.shopSelected}></DropDown>
      </div>
    )

  }

}
