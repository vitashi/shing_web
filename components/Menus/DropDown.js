var React = require('react');
import {Link} from 'react-router'
import Popover from 'material-ui/Popover';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import {grey400} from 'material-ui/styles/colors';


var styles = {
  listitemsContainer: {maxHeight: 300, padding: 5, marginLeft: 5, marginRight: 5},
}


export default class DropDown extends React.Component{

  constructor(props){
        super(props)
    }

  render(){
    let { newButton, menuitems, openmenu, anchor, whenClose, whenClicked, itemLinks } = this.props;
    let listitems = menuitems.map((menu) => {
      return (<Link to={itemLinks}>
                <ListItem style={{color: "white"}} hoverColor={grey400} onClick={whenClicked} value={menu.id}>
                  <span>{menu.name}</span>
                </ListItem>
              </Link>
              )
    });

    return (
            <Popover
              open={openmenu}
              anchorEl={anchor}
              anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
              onRequestClose={whenClose}
              style={{backgroundColor: '#F44336'}}
            >
              <div style={styles.listitemsContainer}>
                <List >
                  {listitems}
                </List>
                {newButton}
              </div>
            </Popover>
            )
  };

}