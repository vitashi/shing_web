var React = require('react');
import FlatButton from 'material-ui/FlatButton';
import {grey400} from 'material-ui/styles/colors';



var styles = {
  menulabels: {color: "white", fontWeight: "bold"},
  menu: {height: "100%", width: "20%"},
  newButton: {height: "100%", width: "100%"},
  menuinline: {display: "inline", whiteSpace: "nowrap"},
}


export default class MenuProducts extends React.Component{

  constructor(props){
        super(props)
        this.go_to_products = this.go_to_products.bind(this)
    }

  go_to_products(){
    console.log('Heheheheheheh')
    window.location=`#/products`
  }

  render = () => {
    let button = <FlatButton style={styles.menu} hoverColor={grey400} labelStyle={styles.menulabels} onClick={this.go_to_products} label={"Products"}/>
    return (
      <div style={styles.menuinline}>
        {button}
      </div>
    )

  }

}
