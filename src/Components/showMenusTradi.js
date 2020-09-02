import React,{Component} from 'react';
import showMenu from './showMenu';


class  ShowMenuTradi extends Component {
    render() {
        return this.props.showMenusTradi.map(menu => 
        <showMenu
        name={showMenu.title} 
        key = {showMenu.id}
        price ={showMenu.price}
        />);
    }
}

export default ShowMenuTradi;