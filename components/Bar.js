var React = require('react');

import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';

import Logo  from './Logo';
import ShingMenus  from './ShingMenus';
import ShopName  from './ShopName';
import Settings  from './Settings';
import User  from './User';


// import Shops from './Shops';
// var injectTapEventPlugin = require("react-tap-event-plugin");
// injectTapEventPlugin();


var styles = {
  appbar : { width: '100%', height: 50, background: '#F44336', display: 'flex', position: 'fixed', zIndex: 1, top: 0, left: 0},
}


// id="sidebar-wrapper"
export default class Bar extends React.Component{

    constructor(props){
        super(props)

    }

	  render(){
      return (
              <div style={styles.appbar}>
                <Logo />
                <ShingMenus />
                <ShopName />
                <Settings />
                <User />
              </div>
		          );
  
	  }
}