var React = require('react');

// import Shops from './Shops';
// var injectTapEventPlugin = require("react-tap-event-plugin");
// injectTapEventPlugin();


var styles = {
  home: {height: 700, width: '100%', backgroundColor: '#F44336',  color: 'white', marginTop: 5, backgroundImage: "url(" + "./images/customers.png" + ")", 
         backgroundPosition: "right bottom, left top",
         backgroundRepeat: "no-repeat, repeat",
       },
  about: {height: 400, width: '100%', backgroundColor: '#F44336',  color: 'white', marginTop: 5}
}


// id="sidebar-wrapper"
export default class PublicBar extends React.Component{

    constructor(props){
        super(props)

    }

    render(){
      return (
              <div>
                <div>
                  <section style={styles.home}>
                    <div >
                      <img style={{height: 100, width: 150, marginLeft: 200, marginTop: 100}} src="./images/logo0.png"/>
                      <div style={{marginTop: 30, backgroundColor:"#F44336", marginLeft: 250, fontSize: 20, width: 300, padding: 10, borderRadius: 25, border: "2px solid "}}>
                        <big>Discover | Be discovered</big>
                      </div>
                    </div>
                  </section>
                </div>

                <div>
                  <section style={styles.about}>
                  Hey
                  </section>
                </div>


                <div>
                  <section style={styles.about}>
                  Hey
                  </section>
                </div>

                <div>
                  <section style={styles.about}>
                  Hey
                  </section>
                </div>

                

              </div>
              );
  
    }
}