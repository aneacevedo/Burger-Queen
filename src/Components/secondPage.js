import React from 'react';
import '../index.css';
import BurgerToggle from './burgerToggle.js';


class SecondPage extends React.Component {
    render(){
        return ( 
            <div className = "secondPageBackground">
             <div className="containerAside">
             <div className="toggleContainer">
             <BurgerToggle/>
             </div>
             </div>
               
                <div className='secondPageContent'>
                    <p>Selecciona tu nombre en la lista:</p>
                    <select className='selectNames' name='waiters'>
                        <option value disabled selected>Seleccione</option>
                        <option value='0'>Diego</option>
                        <option value='1'>Pedro</option>
                        <option value='2'>Juan</option>
                     
                    </select>
                    <button className='btnSecondPage'>Ingresar</button>
                </div>   
            </div>
            );
    }
    
}

export default SecondPage;