var React = require('react');

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

export default class TopBar extends React.Component{
	render(){
		return (
                <AppBar title={<span>Title</span>}
                  // onTitleTouchTap={handleTouchTap}
                  iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                  iconElementRight={<FlatButton label="Save" />}
                />
		          );

	}
}