var React = require('react');

// import Shops from './Shops';
// var injectTapEventPlugin = require("react-tap-event-plugin");
// injectTapEventPlugin();
import Post  from './Post';


var styles = {
  center: {  
            flex: 2,
            width: "40%",
            overflowY: 'scroll',
            overflowX: 'hidden',
            marginRight: 5,
            height: 'auto',
            maxHeight: '700'
          },
}





// id="sidebar-wrapper"
export default class Center extends React.Component{

    constructor(props){
        super(props)

    }

  render_posts(){
    let posts = []
    let {products} = this.props;
    for (let x in products){
      let prod = products[x]
      posts.push(<Post image={prod.productImage} desc={prod.productDesc} likes={prod.likes} dislikes={prod.dislikes} price={prod.productPrice} name={prod.productName} id={prod.productId}/>)
    }
    return posts
  }

  render(){
    let posts = this.render_posts();
    return (
            <div style={styles.center}>
              <div style={{height: 30}}>
                {posts}
              </div>
            </div>
            );

  }
}