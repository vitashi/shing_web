var React = require('react');
import TextPost  from './TextPost';
import ImagePost  from './ImagePost';
import PostReactions  from './PostReactions';


// import Shops from './Shops';
// var injectTapEventPlugin = require("react-tap-event-plugin");
// injectTapEventPlugin();

var styles = {post: {
                     border: '1px solid #F44336', 
                     borderRadius: 5,
                     marginRight: 5,
                     marginLeft: 5,
                     marginBottom: 10,
                     padding: 10,
                     backgroundColor: 'white',
                   }}

export default class Post extends React.Component{

    constructor(props){
        super(props)

    }

  render(){
    return (
            <div style={styles.post}>
              <div style={{color: "#F44336", fontWeight: 'bold'}}> {this.props.name} </div>
              <TextPost desc={this.props.desc}/>
              <ImagePost image={this.props.image}/>
              <PostReactions likes={this.props.likes} dislikes={this.props.dislikes} price={this.props.price}/>
            </div>
            );

  }
}