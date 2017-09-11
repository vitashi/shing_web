var React = require('react');

import CommunicationPhone from 'material-ui/svg-icons/communication/phone';

import Location  from './Location';

var styles = {
  content: {flex: 1, height: 600},
  about: {border: '1px solid #F44336', 
          borderRadius: 5,
          marginRight: 2,
          marginBottom: 20,
          padding: 5,
          backgroundColor: '#F44336',
          color: 'white'

        },
  shopImage: {borderRadius: 5,
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


// id="sidebar-wrapper"
export default class Profile extends React.Component{

    constructor(props){
        super(props)

    }

  render(){
    return (
            <div style={styles.content}>
              <div style={styles.about}>
                About
                <div>
                  <span>Westgate Shopping Mall</span>
                </div>
  
                <div>
                  <span><CommunicationPhone /></span>
                </div>
  
                Edit
              </div>

              <div style={styles.shopImage}>
                <img height='200' width='100%' src={"./images/Westaget-Mall.jpeg"}/>
              </div>
  
              <div style={styles.about}>
                <Location/>
              </div>


            </div>
            );

  }
}