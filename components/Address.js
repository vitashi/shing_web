var React = require('react');

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

export default class Shops extends React.Component{

	get_shops(){

	}

	render(){
		return (
		        <Paper zDepth={3} rounded={false}>
	                <List>
				      <Subheader>My Shops</Subheader>
				      <Divider />
				      <ListItem
				        primaryText="Brendan Lim"
				        leftAvatar={<Avatar src="" />}
				        rightIcon={<CommunicationChatBubble />}
				      />
				      <ListItem
				        primaryText="Eric Hoffman"
				        leftAvatar={<Avatar src="images/kolage-128.jpg" />}
				        rightIcon={<CommunicationChatBubble />}
				      />
				      </List>
			      </Paper>
		          );

	}
}