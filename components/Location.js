var React = require('react');

import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import GoogleMapReact from 'google-map-react';

import MapsPlace from 'material-ui/svg-icons/maps/place';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class Location extends React.Component{

	render(){
	  const mapStyle = {
		    width: '100%',
		    height: '200px'}

		var myLatLng = {lat: -1.2047, lng: 36.7765};
		return(
		       <div style={mapStyle} id="map">
            <GoogleMapReact
                apiKey={"AIzaSyBdttexbpF9Ww2g5G9JfM46lF4iJUrZ_oo"} // set if you need stats etc ...
                center={myLatLng}
                zoom={15}
                google={this.props.google}>

                <MapsPlace style={{ color: 'red'}} lat={-1.2047} lng={36.7765}/>

            </GoogleMapReact>
                </div>);

	}
}