var React = require('react');

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import {indigo500} from 'material-ui/styles/colors';

import Location from './Location';

var mui = require('material-ui'),
   FlatButton = mui.FlatButton,
   IconButton = mui.IconButton,
   RaisedButton = mui.RaisedButton,
   Badge = mui.Badge,
   IconMenu = mui.IconMenu,
   MenuItem = mui.MenuItem,
   DropDownMenu = mui.DropDownMenu,
   Dialog = mui.Dialog;




import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';


export default class ShopDetails extends React.Component{


	render(){
		return (
		        <div className='row'>
		         <div className="col-lg-9 col-md-9" >
                        <img height='200' width='100%' src={"./images/Westaget-Mall.jpeg"}/>
                    </div>
                 <div className="col-lg-3 col-md-3" >
                        <Location />
                    </div>
			      </div>
		          );

	}
}