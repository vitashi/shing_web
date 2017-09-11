var React = require('react');
import TextField from 'material-ui/TextField';
import ActionSearch from 'material-ui/svg-icons/action/search';
import FlatButton from 'material-ui/FlatButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import {grey400} from 'material-ui/styles/colors';

var styles = {
  content: {flex: 2},
  search_items: {
            maxWidth: 100,
            padding: 15,
            color: "white",
            borderLeft: '1px solid white',
            borderRight: '1px solid white',
            fontWeight: 'bold',
  },
  menulabels: {color: "white"},
  menu: {height: "100%"}
}


export default class ProductSearch extends React.Component{

    constructor(props){
        super(props)
        this.state = {openCampains: false};
        this.handleCampaignClick = this.handleCampaignClick.bind(this)

    }

    handleChange = (event, index, value) => this.setState({value});

    handleRequestClose = () => { this.setState({open: false, }); };

    handleTouchTap = (event) => { 
      // This prevents ghost click.
      console.log('Clicked')
      event.preventDefault();
      this.setState({
        open: true,
        anchorEl: event.currentTarget,
        });
    };

    handleCampaignClick = (e) => {
      console.log("hey");
    };

    renderCampaigns = () => {
      return (
              <Popover
                open={this.state.open}
                anchorEl={this.state.anchorEl}
                anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                onRequestClose={this.handleRequestClose}
              >
                <Menu>
                  <MenuItem value={0} primaryText="Manage Campaigns" />
                  <MenuItem value={1} primaryText="Never" />
                  <MenuItem value={2} primaryText="Every Night" />
                  <MenuItem value={3} primaryText="Weeknights" />
                  <MenuItem value={4} primaryText="Weekends" />
                  <MenuItem value={5} primaryText="Weekly" />
                </Menu>
              </Popover>
              )

    };

    render(){
                <FlatButton style={styles.menu} hoverColor={grey400} labelStyle={styles.menulabels} onClick={this.handleCampaignClick} label={"campaigns"}/>
      return (<div style={styles.content}>
                <FlatButton style={styles.menu} hoverColor={grey400} labelStyle={styles.menulabels} href={'#/shops'} label={"shops"}/>
                <FlatButton style={styles.menu} hoverColor={grey400} labelStyle={styles.menulabels} href={'#/products'} label={"products"}/>
                <FlatButton style={styles.menu} hoverColor={grey400} labelStyle={styles.menulabels} href={'#/campaigns'} label={"campaigns"}/>
                <FlatButton style={styles.menu} hoverColor={grey400} labelStyle={styles.menulabels} href={'products'} label={"search"}/>
              </div>);
    }
}


