var React = require('react');

var styles = {
  logo: {width: 50, marginLeft: 30, marginTop: 5, flex: 2, marginRight: 30}
}


export default class Logo extends React.Component{

    constructor(props){
        super(props)

    }

    render(){
      return (<span> 
                <a href="#/app"> <img style={styles.logo} src="./images/logo0.png"/></a> 
              </span>
              );
  
    }
}