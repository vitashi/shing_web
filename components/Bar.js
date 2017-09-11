var React = require('react');

import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';

import Logo  from './Logo';
import ProductSearch  from './ProductSearch';
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

    render_shopdropdown(){
      return (<div>
                    <DropDownMenu value={3} onChange={this.handleChange}>
                      <MenuItem value={1} primaryText="All Broadcasts" />
                      <MenuItem value={2} primaryText="All Voice" />
                      <MenuItem value={3} primaryText="All Text" />
                      <MenuItem value={4} primaryText="Complete Voice" />
                      <MenuItem value={5} primaryText="Complete Text" />
                      <MenuItem value={6} primaryText="Active Voice" />
                      <MenuItem value={7} primaryText="Active Text" />
                    </DropDownMenu>
              </div>);
    }

	  render(){
      return (
              <div style={styles.appbar}>
                <Logo />
                <ProductSearch />
                <ShopName />
                <Settings />
                <User />
              </div>
		          );
  
	  }
}