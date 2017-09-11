var React = require('react');

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import CommunicationCall from 'material-ui/svg-icons/communication/call';

// import Shops from './Shops';
import Location from './Location';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


var styles = {
  logo : { width: 80, height: 50, marginLeft: 40}
}


// id="sidebar-wrapper"
export default class LeftNav extends React.Component{

    constructor(props){
        super(props)

    }

	render(){
		return (
		        <div id="sidebar-wrapper" style={{fontSize: 4}}>
            <div className="sidebar-nav">
                <List>
                <ListItem innerDivStyle={{height: 30, fontSize: 12, marginBottom: 30}} containerElement='li' className="sidebar-brand">
                    <a href="#"> <img style={styles.logo} src="./images/logo0.png"/></a>
                </ListItem>

                <ListItem innerDivStyle={{height: 10, fontSize: 12}} primaryText='Shops' nestedItems={[
                    <ListItem
                        primaryText="Switch to Brendan Lim"
                      />,
                      <ListItem
                        primaryText="Switch to Eric Hoffman"
                      />,
                      <ListItem
                        primaryText="Manage Shops"
                      />
                    ]}/>

                <ListItem innerDivStyle={{height: 10, fontSize: 12}} primaryText='Contacts' nestedItems={[
                    <ListItem
                        primaryText="0734091540"
                        leftIcon={<CommunicationCall  />}
                      />,
                      <ListItem
                        primaryText="Switch to Eric Hoffman"
                        leftIcon={<CommunicationCall  />}
                      />,
                      <ListItem
                        primaryText="Manage Contacts"
                        rightIcon={<CommunicationCall  />}
                      />
                    ]}/>
                     
                </List>
            </div>
        </div>
		        );

	}
}