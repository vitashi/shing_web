var React = require('react');

// import Shops from './Shops';
// var injectTapEventPlugin = require("react-tap-event-plugin");
// injectTapEventPlugin();

var styles = {textarea: {padding: 5, wordWrap: "break-word", fontSize: 12}}

export default class TextPost extends React.Component{

    constructor(props){
        super(props)

    }

  render(){
    return (
            <div style={styles.textarea}>
              <span>{this.props.desc}</span>
            </div>
            );

  }
}