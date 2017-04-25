var React = require('react');

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';

import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import CommunicationCall from 'material-ui/svg-icons/communication/call';

export default class Contacts extends React.Component{

	get_shops(){

	}

	render(){
		return (
		          <List>
		          <Subheader>Contacts</Subheader>
		          <Divider />
		          <ListItem
		                leftIcon={<CommunicationCall color={"white"} />}
				        primaryText="0734091540"
				      />
				  <ListItem
				        leftIcon={<CommunicationCall color={"white"} />}
				        primaryText="0734091540"
				      />
		          </List>
	                
		          );

	}
}