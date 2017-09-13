var React = require('react');
import {Link} from 'react-router';
import TextField from 'material-ui/TextField';
import ActionSearch from 'material-ui/svg-icons/action/search';
import FlatButton from 'material-ui/FlatButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import Popover from 'material-ui/Popover';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import {grey400} from 'material-ui/styles/colors';

var styles = {
  content: {flex: 2, display: "block"},
  search_items: {
            maxWidth: 100,
            padding: 15,
            color: "white",
            borderLeft: '1px solid white',
            borderRight: '1px solid white',
            fontWeight: 'bold',
  },
  menulabels: {color: "white", fontWeight: "bold"},
  menu: {height: "100%", width: "100%"},
  listitemsContainer: {maxHeight: 300, padding: 5, marginLeft: 5, marginRight: 5},
}


export default class ProductSearch extends React.Component{

    constructor(props){
        super(props)

    }

    render = () => {
      return (
              <div>
                <MenuShops/>
                <MenuShops/>
              </div>
              )

    }

    



    // render(){
    //             // <FlatButton style={styles.menu} hoverColor={grey400} labelStyle={styles.menulabels} href={'#/campaigns'} label={"campaigns"}/>
    //   let popover = this.renderCampaigns()
    //   return (<div style={styles.content}>
    //             <FlatButton style={styles.menu} hoverColor={grey400} labelStyle={styles.menulabels} href={'#/shops'} label={"shops"}/>
    //             <FlatButton style={styles.menu} hoverColor={grey400} labelStyle={styles.menulabels} href={'#/products'} label={"products"}/>
    //             <FlatButton style={styles.menu} hoverColor={grey400} labelStyle={styles.menulabels} onClick={this.handleTouchTap} label={"campaigns"}/>
    //             <FlatButton style={styles.menu} hoverColor={grey400} labelStyle={styles.menulabels} href={'products'} label={"search"}/>
    //             {popover}
    //           </div>);
    // }
}


class Dropdown extends React.Component{

  constructor(props){
        super(props)
    }

  render(){
    let { newButton, menuitems, openmenu, anchor, whenClose, whenClicked, itemLinks } = this.props;
    console.log(newButton);
    let listitems = menuitems.map((menu) => {
      return (<Link to={itemLinks}>
                <ListItem style={{color: "white"}} hoverColor={grey400} onClick={whenClicked} value={menu.id}>
                  <span>{menu.name}</span>
                </ListItem>
              </Link>
              )
    });

    return (
            <Popover
              open={openmenu}
              anchorEl={anchor}
              anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
              onRequestClose={whenClose}
              style={{backgroundColor: '#F44336'}}
            >
              <div style={styles.listitemsContainer}>
                <List >
                  {listitems}
                </List>
                {newButton}
              </div>
            </Popover>
            )
  };

}


class MenuShops extends React.Component{

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


  createShop = (event) => { 
      event.preventDefault();
      console.log("New shop")
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
    let newButton = <FlatButton style={styles.menu} hoverColor={grey400} labelStyle={styles.menulabels} onClick={this.createShop} label={"Manage Shops"}/>
    let menuitemsLinks = `/campaigns`
    return (
      <div>
        {button}
        <Dropdown menuitems={shops} itemLinks={menuitemsLinks} openmenu={this.state.openShops} anchor={this.state.anchorEl} newButton={newButton} whenClose={this.closeShops} whenClicked={this.shopSelected}></Dropdown>
      </div>
    )

  }

}


class MenuCampaigns extends React.Component{

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
    let newButton = <FlatButton style={styles.menu} hoverColor={grey400} labelStyle={styles.menulabels} onClick={this.createCampaign} label={"Manage Campaigns"}/>
    let menuitemsLinks = `/shopdetails`
    return (
      <div>
        {button}
        <Dropdown menuitems={shops} itemLinks={menuitemsLinks} openmenu={this.state.openCampaigns} anchor={this.state.anchorEl} newButton={newButton} whenClose={this.closeCampaigns} whenClicked={this.campaignSelected}></Dropdown>
      </div>
    )

  }

}