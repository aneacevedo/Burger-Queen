import React, { Component } from 'react';
// import InitialPage from './initialPage.js';
//import PropTypes from 'prop-types';
import AsideToggle from './asideToggle.js';


class BurgerToggle extends Component {
    state = {
        burgerMenuVisible:false
    }
    openBurgerMenu = () => {
        console.log("escucho");
        this.setState({burgerMenuVisible:true})

    }
    closeBurgerMenu = ()=> {
        console.log("me cierro");
        this.setState({burgerMenuVisible:false})}

    render() {  
         
        return ( 
        <AsideToggle>
            <div onClick={this.openBurgerMenu}>
                <p className="toggle">&#9776;</p>
           </div>
        </AsideToggle>
        
        
        )
    }
}


export default BurgerToggle;

