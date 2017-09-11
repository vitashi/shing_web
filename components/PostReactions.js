var React = require('react');
import Badge from 'material-ui/Badge';
import Price  from './Price';
import IconButton from 'material-ui/IconButton';
import ActionLabel from 'material-ui/svg-icons/action/label';
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';

import {red500} from 'material-ui/styles/colors';

// import Shops from './Shops';
// var injectTapEventPlugin = require("react-tap-event-plugin");
// injectTapEventPlugin();

var styles = {
  icons: {marginLeft: 20, marginRight: 20, color: red500},
  price: {marginLeft: 20, marginRight: 20, color: red500, fontSize: 25, float: 'right'},
  reactions: {marginTop: 10}
}

export default class PostReactions extends React.Component{

    constructor(props){
        super(props)

    }

  render(){
    return (
            <div style={styles.reactions}>
              <span style={styles.icons} > <ActionThumbUp color={red500}/> {this.props.likes} Likes </span>
              <span style={styles.price} > <ActionLabel color={red500}/> KES {this.props.price} </span>
            </div>
            );

  }
}