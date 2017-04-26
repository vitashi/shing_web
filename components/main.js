var React = require('react');
var ReactDOM = require('react-dom');

import LeftNav  from './LeftNav';
import Content  from './Content';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';


class Layout extends React.Component{
	render(){
		return(
		       <MuiThemeProvider>
		       <div>
			       <LeftNav/>
			       <Content/>
		        </div>
			  </MuiThemeProvider>
		       );
	}
	
}
const app = document.getElementById('wrapper');
ReactDOM.render(<Layout/>, app);