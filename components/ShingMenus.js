var React = require('react');


import MenuShops  from './Menus/MenuShops';
import MenuCampaigns  from './Menus/MenuCampaigns';
import MenuProducts  from './Menus/MenuProducts';

var styles = {
  content: {flex: 3},
}


export default class ShingMenus extends React.Component{

    constructor(props){
        super(props)

    }

    render = () => {
      return (
              <div style={styles.content}>
                <MenuShops/>
                <MenuCampaigns/>
                <MenuProducts/>
              </div>
              )

    }
}

