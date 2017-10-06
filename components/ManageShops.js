var React = require('react');
import {Link} from 'react-router';

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
            minHeight: 600,
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
           marginLeft: 200,
           marginRight: 200,
           },
  tableSpace: {maxHeight: 500,
               overflow: "auto",
               marginTop: 10,
               border: '1px solid #F44336'
          },
}

const PRODUCTS = [{id: 1,
                   name: "Westgate Shopping Mall",
                   location: "-1.00088 0.98787",
                   phone: '254734091540',
                   desc: ("Wait a minute. Wait a minute, Doc. Uhhh...Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy"),
                   image: './images/ab35d3516e3df52135896e70a4fdf32c.jpg',
                   likes: 12, 
                   dislikes: 4,
                   duration: '11h'},
                  ]

export default class ManageShops extends React.Component{

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

  renderProducts(shops){
    let rows = shops.map((shop)=>{
      return (
              <TableRow selected={this.isSelected(0)}>
                <TableRowColumn><Link to="/app/campaigns">{shop.name}</Link></TableRowColumn>
                <TableRowColumn>{shop.desc}</TableRowColumn>
                <TableRowColumn>{shop.phone}</TableRowColumn>
                <TableRowColumn>{shop.location}</TableRowColumn>
              </TableRow>
              )
    })

    return rows;

  }

  renderToolbar = () => {
    return (
            <Toolbar style={{border: '1px solid #F44336'}}>
              <ToolbarGroup>
                <ToolbarTitle text="Manage Shops" />
                <ToolbarSeparator />
              </ToolbarGroup>
              <ToolbarGroup lastChild={true}>
                <RaisedButton backgroundColor="#F44336" labelColor="white" label="Open " />
                <RaisedButton backgroundColor="#F44336" labelColor="white" label="Close" />
              </ToolbarGroup>
            </Toolbar>
            )
  }

  render(){
    return (
            <div style={styles.content}>
              <div style={styles.center}>
                {this.renderToolbar()}
                <div style={styles.tableSpace}>
                  <Table onRowSelection={this.handleRowSelection}>
                    <TableHeader>
                      <TableRow>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Description</TableHeaderColumn>
                        <TableHeaderColumn>Phone</TableHeaderColumn>
                        <TableHeaderColumn>Location</TableHeaderColumn>
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