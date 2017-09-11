var React = require('react');


// import Shops from './Shops';
// var injectTapEventPlugin = require("react-tap-event-plugin");
// injectTapEventPlugin();

var styles = {image: {minWidth: 400, maxWidth: 600, maxHeight: 300, width: 'auto', height: "auto", objectFit: 'contain', display: 'block', margin: '0 auto'}}

export default class ImagePost extends React.Component{

    constructor(props){
        super(props)

    }

  render(){
    return (
            <div >
              <img style={styles.image} src={this.props.image} />
            </div>
            );

  }
}