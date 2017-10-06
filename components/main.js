var React = require('react');
var ReactDOM = require('react-dom');
import {Router, Route, IndexRoute, hashHistory } from "react-router"

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {grey100} from 'material-ui/styles/colors';

import Bar  from './Bar';
import Footer  from './Footer';
import ManageProducts  from './ManageProducts';
import ShopDetails  from './ShopDetails';
import ManageShops  from './ManageShops';
import ManageCampaigns  from './ManageCampaigns';

import PublicBar  from './PublicBar';
import Home  from './Home';


class Private extends React.Component{
		           // <Footer/>
	render(){
		return(<MuiThemeProvider>
		         <div style={{backgroundColor: grey100, left: 0, top: 0, margin: 0, padding: 0}}>
		           <Bar/>
		           {this.props.children}
		         </div>
		       </MuiThemeProvider>
		       )
	}
}

class Public extends React.Component{
               // <Footer/>
  render(){
    return(<MuiThemeProvider>
             <div style={{backgroundColor: grey100, left: 0, top: 0, margin: 0, padding: 0}}>
               <PublicBar/>
               {this.props.children}
             </div>
           </MuiThemeProvider>
           )
  }
}



const app = document.getElementById('wrapper');
ReactDOM.render(
                <Router history={hashHistory}>
                  <Route path="/" component={Public}>
                    <IndexRoute component={Home}></IndexRoute>
                  </Route>
                  <Route path="/app" component={Private}>
                    <IndexRoute component={ManageShops}></IndexRoute>
                    <Route path="products" component={ManageProducts}></Route>
                    <Route path="shops" component={ManageShops}></Route>
                    <Route path="campaigns" component={ManageCampaigns}></Route>
                    <Route path="ShopDetails" component={ShopDetails}></Route>
                  </Route>
                </Router>, app);