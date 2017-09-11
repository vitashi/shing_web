var React = require('react');

// import Shops from './Shops';
// var injectTapEventPlugin = require("react-tap-event-plugin");
// injectTapEventPlugin();


var styles = {
  footer : { width: '100%', height: 300, background: '#F44336', zIndex:10, clear: 'both', position: "absolute", bottom: -420},
}


// id="sidebar-wrapper"
export default class Footer extends React.Component{

    constructor(props){
        super(props)

    }

  render(){
    return (
            <div style={styles.footer}>
              <span>
              </span>
            </div>
            );

  }
}