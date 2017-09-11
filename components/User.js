var React = require('react');
import TextField from 'material-ui/TextField';
import ActionSearch from 'material-ui/svg-icons/action/search';
import FlatButton from 'material-ui/FlatButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';

import {grey400} from 'material-ui/styles/colors';

var styles = {
  content: {flex: 0},
  search_items: {
            maxWidth: 200,
            padding: 15,
            color: "white",
            borderLeft: '1px solid white',
            borderRight: '1px solid white',
            fontWeight: 'bold',
  },
  menulabels: {color: "white"},
  menu: {height: "100%",
         width: 180,}
}


export default class User extends React.Component{

    constructor(props){
        super(props)

    }

    render(){
      return (<div style={styles.content}>
                <FlatButton style={styles.menu} hoverColor={grey400} labelStyle={styles.menulabels} label={"Vitalis Shisoka"} icon={<ActionAndroid />}/>
              </div>);
    }
}