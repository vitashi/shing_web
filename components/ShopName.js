var React = require('react');
import TextField from 'material-ui/TextField';
import ActionSearch from 'material-ui/svg-icons/action/search';
import FlatButton from 'material-ui/FlatButton';

import {grey400} from 'material-ui/styles/colors';

var styles = {
  content: {flex: 2},
  span: {color: "white", fontWeight: "bold", fontSize: 30, padding: 5},
}


export default class ShopName extends React.Component{

    constructor(props){
        super(props)

    }

    render(){
      return (<div style={styles.content}>
                <div style={styles.span}>Westgate Shopping Mall</div>
              </div>);
    }
}