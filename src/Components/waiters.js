import React, { useState, Fragment } from 'react'
import waiters from '../data/waiters.json'

function Waiter () {
     
    
    const [Waiters ] = useState(waiters);

    
    return ( 
        <Fragment>
           
            <select className='selectNames' name='waiters'>
            <option value disabled selected>Seleccione</option>
            {
            Waiters.map((item, index)=> <option key={index.id}>{item.name}</option>)
            }
            </select>
        </Fragment>
        
        );
}
 
export default Waiter;