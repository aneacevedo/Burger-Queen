import React, { Component } from 'react';
// import InitialPage from './initialPage.js';
//import PropTypes from 'prop-types';

class BurgerToggle extends Component {
    constructor() {
        super();
        this.state = {
            showMenu: false,
        }
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }
    showMenu(e){
        e.preventDefault();

        this.setState({ showMenu : true}, () =>{
            document.addEventListener('click', this.closeMenu); 
        });
    }

    closeMenu (e){
      if(!this.dropdownMenu.contains(e.target)){
        this.setState({showMenu: false}, () =>{
            document.removeEventListener('click', this.closeMenu);
        });
    }
}


    render() {  
         
        return ( 
            <div className='sideBar'
            ref={(element)=> {
                this.dropdownMenu = element;
            }}>
                <div id='contentToggle'>
                    <button className="toggle" onClick = {this.showMenu}>
                        &#9776;
                    </button>
                    
                </div>
                {
                this.state.showMenu
                ? (

               <div key="asideView" display="none">
                 <button className="menuItem" type='button'> Mesas</button>
                 <button className="menuItem"type='button'> Pedidos</button>
                 <button className="menuItem"type='button'>Cambiar cuenta</button>
               </div>
                )
                : (
                    null
                )
                }
           </div>
        )
    }
}


export default BurgerToggle;

