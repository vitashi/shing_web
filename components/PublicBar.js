var React = require('react');

import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';


// import Shops from './Shops';
// var injectTapEventPlugin = require("react-tap-event-plugin");
// injectTapEventPlugin();


var styles = {
  appbar : { width: '100%', height: 50, background: 'white', display: 'flex', position: 'fixed', zIndex: 1, top: 0, left: 0},
}


// id="sidebar-wrapper"
export default class PublicBar extends React.Component{

    constructor(props){
        super(props)

    }

    render(){
      return (
              <div style={styles.appbar}>
              </div>
              );
  
    }
}