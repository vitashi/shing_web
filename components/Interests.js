var React = require('react');

import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';
import MapsDirectionsWalk from 'material-ui/svg-icons/maps/directions-walk';

import {red500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';

var styles = {
  content: {flex: 1, height: 'auto', marginBottom: 10},
  interests: {border: '1px solid #F44336', 
          borderRadius: 5,
          marginRight: 2,
          marginBottom: 20,
          padding: 20,
          backgroundColor: 'white',

        },
  about: {borderRadius: 5,
          marginRight: 2,
          marginBottom: 20,
          padding: 20,
          backgroundColor: '#F44336',
          color: 'white'

        },
  bordered: {borderRadius: 5,
          marginRight: 2,
          marginBottom: 20,
          padding: 5,
          border: '1px solid #F44336',
          backgroundColor: 'white',
        },
  shopData: {color: 'grey',
             marginLeft: 40,

             },
  shopName: {color: 'grey',
             textAlign: 'center',
            }
}


export default class Interests extends React.Component{

    constructor(props){
        super(props)

    }

  get_liked(){
    let {products} = this.props;
    return (<img src={products[0]['productImage']} style={{maxWidth: 200}}/>);
  }

  get_visited(){
    let {products} = this.props;
    return (<img src={products[1]['productImage']} style={{maxWidth: 200}}/>);
  }

  render(){
    let liked_products = this.get_liked();
    let get_visited = this.get_visited();
    return (
            <div style={styles.content}>
              <div style={styles.about}>
              <span>You are on the <small>basic </small> Plan. <FlatButton backgroundColor={"white"}label={"I want more"}/></span>
              </div>
              <div style={styles.bordered}>
                <div style={styles.about}>
                  Shop Performance
                </div>
  
                <div>
                  <span><ActionThumbUp style={styles.interest} color={red500}/>5 Likes</span>
                </div>

                <div>
                  <span><MapsDirectionsWalk style={styles.interest} color={red500}/>100 Visits</span>
                </div>
              </div>
              <div style={styles.bordered}>
                <div style={styles.about}>
                  Product Performance
                </div>
                <span>{liked_products}Most liked product</span><br/>
                <span>{get_visited} Most visited product</span>
              </div>

            </div>
            );

  }
}