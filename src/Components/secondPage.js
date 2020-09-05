import React from 'react';
import '../index.css';
import BurgerToggle from './burgerToggle.js';
import {withRouter} from 'react-router';
import Waiter from './waiters';


 class SecondPage extends React.Component {

    nextPath(path) {
        this.props.history.push(path);
      }
       
    render(){
            return ( 
            <div className = "secondPageBackground">
                <div className="containerAside">
                <div className="toggleContainer">
                <BurgerToggle/>
                </div>
                </div>
                <div className='secondPageContent'>
            <div>
            <p>Selecciona tu nombre en la lista:</p>
            <Waiter />

            <button className='btnSecondPage'  onClick={() => this.nextPath('/thirdPage')}>Ingresar</button>
            </div> 
            </div> 
            </div>   
            )          
} 
}

export default withRouter(SecondPage);