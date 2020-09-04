import React, { useState } from 'react';
import '../index.css';
import BurgerToggle from './burgerToggle.js';
import {withRouter} from 'react-router-dom';
import data from '../data/waiters.json';

class SecondPage extends React.Component {
    nextPath(path) {
        this.props.history.push(path);
      }
    const [waiters, setwaiters] = useState();
    render(){
            return ( 
            <div className = "secondPageBackground">
             <div className="containerAside">
             <div className="toggleContainer">
             <BurgerToggle/>
             </div>
             </div>
               
                <div className='secondPageContent'>
                    <div key={data[waiters].id}>
                        <p>Selecciona tu nombre en la lista:</p>
                        <select defaultValue={'DEFAULT'} className='selectNames' name='waiters' key={waiters.id} >
                            <option value='DEFAULT' disabled>Seleccione</option>
                            <option value='0' >{data[waiters].name}</option>
                           
                        </select>
                    </div> 
                    <button className='btnSecondPage'  onClick={() => this.nextPath('/thirdPage')}>Ingresar</button>
                </div>   
            </div>
        );
    }
}

export default withRouter(SecondPage);