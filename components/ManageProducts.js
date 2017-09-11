var React = require('react');

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Profile  from './Profile';
import Center  from './Center';

var styles = {
  content: {marginLeft: 10, 
            marginTop: 60, 
            width: '99%',
            align: 'center',
            display: 'flex',
            zIndex: 0,
            position: 'relative',
            overflow: "hidden"
          },
  filter: {flex: 0, 
           border: '1px solid #F44336', 
           borderRadius: 5,
           marginRight: 2,
           marginBottom: 20,
           padding: 5,
           backgroundColor: '#F44336',
           color: 'white'
          },
  center: {flex: 3,
           marginLeft: 10,
           marginRight: 10,
           },
  tableSpace: {maxHeight: 500,
               overflow: "auto",
               marginTop: 10,
               border: '1px solid #F44336'
          },
}

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
                   productImage: './images/samsung.jpg',
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
                   productImage: './images/samsung.jpg',
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
                   productImage: './images/samsung.jpg',
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
                   productImage: './images/samsung.jpg',
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

export default class ManageProducts extends React.Component{

    state = { selected: [1]};

    constructor(props){
        super(props)
    }

  isSelected = (index) => {
    return this.state.selected.indexOf(index) !== -1;
  };

  handleRowSelection = (selectedRows) => {
    this.setState({
      selected: selectedRows,
    });
  };

  renderProducts(prods){
    let rows = prods.map((prod)=>{
      return (
              <TableRow selected={this.isSelected(0)}>
                <TableRowColumn>{prod.productName}</TableRowColumn>
                <TableRowColumn>{prod.productDesc}</TableRowColumn>
                <TableRowColumn>{"hello"}</TableRowColumn>
                <TableRowColumn>{prod.productPrice}</TableRowColumn>
              </TableRow>
              )
    })

    return rows;

  }

  renderToolbar = () => {
    return (
            <Toolbar style={{border: '1px solid #F44336'}}>
              <ToolbarGroup>
                <ToolbarTitle text="Manage Products" />
                <ToolbarSeparator />
              </ToolbarGroup>
              <ToolbarGroup lastChild={true}>
                <RaisedButton backgroundColor="#F44336" labelColor="white" label="Create " />
                <RaisedButton backgroundColor="#F44336" labelColor="white" label="Delete" />
              </ToolbarGroup>
            </Toolbar>
            )
  }

  render(){
    return (
            <div style={styles.content}>
              <Profile />
              <div style={styles.center}>
                {this.renderToolbar()}
                <div style={styles.tableSpace}>
                  <Table onRowSelection={this.handleRowSelection}>
                    <TableHeader>
                      <TableRow>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Description</TableHeaderColumn>
                        <TableHeaderColumn>Category</TableHeaderColumn>
                        <TableHeaderColumn>Price</TableHeaderColumn>
                      </TableRow>
                    </TableHeader>
                    <TableBody showRowHover={true}>
                      {this.renderProducts(PRODUCTS)}
                    </TableBody>
                      }
                  </Table>
                </div>
              </div>
            </div>
            );
  }
}