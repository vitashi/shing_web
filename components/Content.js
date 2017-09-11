var React = require('react');

import TopBar  from './TopBar';
import Products from './Products';
import Campaigns from './Campaigns';
import ShopDetails from './ShopDetails';

import Subheader from 'material-ui/Subheader';



export default class Content extends React.Component{
	render(){
		return (
		        <div id="page-content-wrapper">
            <div className="container-fluid">
               <div className='row'>
                   <div className="col-lg-6 col-md-6" >
                        <Subheader><h2 style={{color: '#3B5998', fontWeight: 'bold'}}>Westgate Shopping Mall</h2></Subheader>
                    </div>
                     <div className="col-lg-6 col-md-6" style={{listStyleType: 'none', textAlign: 'center'}}>
                        <h3 style={{color: '#3B5998', marginTop: 25, display: 'block', float: "left"}}>Contacts </h3>
                        <p style={{color: '#3B5998', marginTop: 30, marginLeft: 10, display: 'block', float: "left"}}> 254734091540</p>
                        <p style={{color: '#3B5998', marginTop: 30, marginLeft: 10, display: 'block', float: "left"}}> 254734091540</p>
                    </div>
               </div>
                <ShopDetails />
                <div className="row">
                    <div className="col-lg-9 col-md-9" >
                        <Products />
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <Campaigns />
                    </div>
                </div>
            </div>
        </div>
		        );

	}
}