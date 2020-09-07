import React, { Component } from 'react';
// import InitialPage from './initialPage.js';
//import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

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

    closeMenu(event) {
        if (!event.target.closest('.menu')) {
          
          this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
          });  
          
        }
      }
nextPath(path) {
    this.props.history.push(path);
  }
    render() {  
         
        return ( 
            <div className='sideBar'
            ref={(element)=> {
                this.dropdownMenu = element;
            }}>
            
                    <button className="toggle" onClick = {this.showMenu}>
                    &#9776;
                    </button>

                {
                this.state.showMenu
                ? (

               <div className="containerAside" key="asideView" display="none"  >
                <a className="itemMenu" href="/thirdPage"> Mesas </a>
                <a className="itemMenu" href="/menu"> Pedidos</a>
                <a className="itemMenu" href="/">Cambiar cuenta</a>
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


export default withRouter(BurgerToggle);

