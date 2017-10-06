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

const CAMPAIGNS = [{id: 1,
                   name: "Nikes Air Force",
                   notes: ("Wait a minute. Wait a minute, Doc. Uhhh...Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy"),
                   active: true,
                   totalProducts: 12},
                  ]

export default class ManageCampaigns extends React.Component{

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

  renderCampaigns(campaigns){
    let rows = campaigns.map((campaign)=>{
      return (
              <TableRow selected={this.isSelected(0)}>
                <TableRowColumn><Link to="/app/shopdetails">{campaign.name}</Link></TableRowColumn>
                <TableRowColumn>{campaign.notes}</TableRowColumn>
                <TableRowColumn>{"hello"}</TableRowColumn>
                <TableRowColumn>{campaign.notes}</TableRowColumn>
              </TableRow>
              )
    })

    return rows;

  }

  renderToolbar = () => {
    return (
            <Toolbar style={{border: '1px solid #F44336'}}>
              <ToolbarGroup>
                <ToolbarTitle text="Manage Campaigns" />
                <ToolbarSeparator />
              </ToolbarGroup>

              <ToolbarGroup lastChild={true}>
                <RaisedButton backgroundColor="#F44336" labelColor="white" label="Create " />
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
                        <TableHeaderColumn>Notes</TableHeaderColumn>
                        <TableHeaderColumn>No of Products</TableHeaderColumn>
                        <TableHeaderColumn>Status</TableHeaderColumn>
                      </TableRow>
                    </TableHeader>
                    <TableBody showRowHover={true}>
                      {this.renderCampaigns(CAMPAIGNS)}
                    </TableBody>
                      }
                  </Table>
                </div>
              </div>
            </div>
            );
  }
}