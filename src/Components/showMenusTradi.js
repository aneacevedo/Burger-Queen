import React,{Component} from 'react';
// import showMenu from './showMenu';
import menuLunch from './menuLunch.json'


class  ShowMenuTradi extends Component {
    render() {
        return this.props.menuLunch.map(menu => 
        <showMenu
        name={menu.title} 
        key = {menu.id}
        price ={menu.price}
        />);
    }
}

export default ShowMenuTradi;