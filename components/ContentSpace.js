var React = require('react');

import ShopDetails  from './ShopDetails';
import ManageProducts  from './ManageProducts';



export default class ContentSpace extends React.Component{

    constructor(props){
        super(props)

    }

  render(){
    return (
            <div>
              <ManageProducts />
            </div>
            );

  }
}