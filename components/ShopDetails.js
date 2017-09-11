var React = require('react');

import Profile  from './Profile';
import Center  from './Center';
import Interests  from './Interests';

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

var styles = {
  content: {marginLeft: 10, 
            marginTop: 60, 
            width: '99%',
            align: 'center',
            display: 'flex',
            zIndex: 0,
            position: 'relative',
            overflow: "hidden"
          }
}

export default class ShopDetails extends React.Component{

    constructor(props){
        super(props)

    }

  render(){
    return (
            <div style={styles.content}>
              <Profile/>
              <Center products={PRODUCTS}/>
              <Interests products={PRODUCTS}/>
            </div>
            );

  }
}