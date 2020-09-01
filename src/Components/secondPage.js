import React from 'react';
import '../index.css';
import BurgerToggle from './burgerToggle.js';


function SecondPage() {
    return ( 
    <div className = "secondPageBackground">
     <aside className="toggleContainer">
     <BurgerToggle/>
     </aside>
       
        <div className='secondPageContent'>
            <p>Selecciona tu nombre en la lista:</p>
            <select className='selectNames' name='waiters'>
                <option value='default'>Seleccione</option>
                <option value='value1'>Diego</option>
                <option value='value2'>Pedro</option>
                <option value='value3'>Juan</option>
            </select>
            <button className='btnSecondPage'>Ingresar</button>
        </div>   
    </div>
    );
}

export default SecondPage;