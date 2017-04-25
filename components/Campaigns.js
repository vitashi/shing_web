var React = require('react');

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import {indigo500} from 'material-ui/styles/colors';
import {GridList, GridTile} from 'material-ui/GridList';

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

const PRODUCTS = [{shop:'GeekyAnts',
            productId: 1,
            productName: "Nikes Air Force",
            productPrice: '2500',
            productDesc: ("Wait a minute. Wait a minute, Doc. Uhhh...Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy"),
            productImage: './images/ab35d3516e3df52135896e70a4fdf32c.jpg',
            likes: 12, 
            dislikes: 4,
            duration: '11h'},
            {shop:'GeekyAnts',
            productId: 2,
            productName: "Iphone 6",
            productPrice: '58000',
            productDesc: ('The most significant changes to the iPhone 6 and iPhone 6 Plus are its displays; both branded as "Retina HD Display" and "ion-strengthened", the iPhone 6 display is 4.7 inches in size with a 16:9 resolution of 1334x750 (326 ppi, minus one row of pixels), while the iPhone 6 Plus includes a 5.5-inch 1920x1080 (1080p) ...'),
            productImage: './images/apple-iphone-6-1.jpg',
            likes: 12, 
            dislikes: 4,
            duration: '11h'},
            {shop:'GeekyAnts',
            productId: 3,
            productName: "Dresses",
            productPrice: '3000',
            productDesc: ("Girl's Dresses"),
            productImage: './images/dzz55666_white_xl.jpg',
            likes: 12, 
            dislikes: 4,
            duration: '11h'},
            {shop:'GeekyAnts',
            productId: 2,
            productName: "Iphone 6",
            productPrice: '58000',
            productDesc: ('The most significant changes to the iPhone 6 and iPhone 6 Plus are its displays; both branded as "Retina HD Display" and "ion-strengthened", the iPhone 6 display is 4.7 inches in size with a 16:9 resolution of 1334x750 (326 ppi, minus one row of pixels), while the iPhone 6 Plus includes a 5.5-inch 1920x1080 (1080p) ...'),
            productImage: './images/3d.jpg',
            likes: 12, 
            dislikes: 4,
            duration: '11h'},
            {shop:'GeekyAnts',
            productId: 2,
            productName: "Iphone 6",
            productPrice: '58000',
            productDesc: ('The most significant changes to the iPhone 6 and iPhone 6 Plus are its displays; both branded as "Retina HD Display" and "ion-strengthened", the iPhone 6 display is 4.7 inches in size with a 16:9 resolution of 1334x750 (326 ppi, minus one row of pixels), while the iPhone 6 Plus includes a 5.5-inch 1920x1080 (1080p) ...'),
            productImage: './images/xbox.jpg',
            likes: 12, 
            dislikes: 4,
            duration: '11h'},
            {shop:'GeekyAnts',
            productId: 2,
            productName: "Iphone 6",
            productPrice: '58000',
            productDesc: ('The most significant changes to the iPhone 6 and iPhone 6 Plus are its displays; both branded as "Retina HD Display" and "ion-strengthened", the iPhone 6 display is 4.7 inches in size with a 16:9 resolution of 1334x750 (326 ppi, minus one row of pixels), while the iPhone 6 Plus includes a 5.5-inch 1920x1080 (1080p) ...'),
            productImage: './images/samsung.jpg',
            likes: 12, 
            dislikes: 4,
            duration: '11h'},
            {shop:'GeekyAnts',
            productId: 2,
            productName: "Iphone 6",
            productPrice: '58000',
            productDesc: ('The most significant changes to the iPhone 6 and iPhone 6 Plus are its displays; both branded as "Retina HD Display" and "ion-strengthened", the iPhone 6 display is 4.7 inches in size with a 16:9 resolution of 1334x750 (326 ppi, minus one row of pixels), while the iPhone 6 Plus includes a 5.5-inch 1920x1080 (1080p) ...'),
            productImage: './images/maxresdefault.jpg',
            likes: 12, 
            dislikes: 4,
            duration: '11h'},
            {shop:'GeekyAnts',
            productId: 2,
            productName: "Iphone 6",
            productPrice: '58000',
            productDesc: ('The most significant changes to the iPhone 6 and iPhone 6 Plus are its displays; both branded as "Retina HD Display" and "ion-strengthened", the iPhone 6 display is 4.7 inches in size with a 16:9 resolution of 1334x750 (326 ppi, minus one row of pixels), while the iPhone 6 Plus includes a 5.5-inch 1920x1080 (1080p) ...'),
            productImage: './images/washing.jpg',
            likes: 12, 
            dislikes: 4,
            duration: '11h'},
            {shop:'GeekyAnts',
            productId: 2,
            productName: "Iphone 6",
            productPrice: '58000',
            productDesc: ('The most significant changes to the iPhone 6 and iPhone 6 Plus are its displays; both branded as "Retina HD Display" and "ion-strengthened", the iPhone 6 display is 4.7 inches in size with a 16:9 resolution of 1334x750 (326 ppi, minus one row of pixels), while the iPhone 6 Plus includes a 5.5-inch 1920x1080 (1080p) ...'),
            productImage: './images/led.jpg',
            likes: 12, 
            dislikes: 4,
            duration: '11h'},
           ]

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    height: 450,
    overflowY: 'auto',
  },
  gridTile: {margin: 5}
};

export default class Campaigns extends React.Component{

   get_products(){
      return PRODUCTS;

   }

   render_product(product){
      return(
               <GridTile title={product.productName} subtitle={<span> at <b>{product.productPrice}</b></span>} style={styles.gridTile}>
                <img src={product.productImage} />
              </GridTile>
            );
   }

   render(){
      let products = this.get_products();
      let that = this;
      let products_markup = products.map( 
                                function(i){
                                 console.log(i)
                                 return (that.render_product(i)) 
                                });
      return (
              <div style={{marginTop: 5 }}>
              <Subheader style={{backgroundColor: '#3B5998', color: 'white', border: '2px solid', marginBottom: 5}} inset={true} >My Campaigns</Subheader>
                   <GridList cols={1} cellHeight={100} padding={10} style={styles.gridList}>
                 
                     {products_markup}

                     </GridList>
			      </div>
		          );

	}
}