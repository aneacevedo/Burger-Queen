import React from 'react';
import '../index.css';
import BurgerToggle from './burgerToggle';
import {withRouter} from 'react-router';
import Waiter from './waiters';


 class SecondPage extends React.Component {

    nextPath(path) {
        this.props.history.push(path);
      }
       
      
    render(){
            return ( 
            <div className = "secondPageBackground">
                {/* <div className="toggleContainer"> */}
                <BurgerToggle/>
                
            <div className='secondPageContent'>
            <div className="secondPageContainer">
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