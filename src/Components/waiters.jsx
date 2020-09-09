import React, { useState, Fragment } from 'react'
import waiters from '../data/waiters.json'


//export const nameContext = React.createContext(Wname);

function Waiter () {
   
    const [Waiters] = useState(waiters);
    const [Wname, setWaiter] = useState({
        nombre:''
    })
   const  nameWaiter = (e) => {
       console.log(e.target.value)
       setWaiter({
           ...Wname, [e.target.name] : e.target.value
       })
   }

    return ( 
        <Fragment>
           
            <select className='selectNames' name='Waiter' required onChange={nameWaiter}>
            <option value disabled selected>Seleccione</option>
            {
            Waiters.map((item, index)=> <option key={index.id} name="nombre">{item.name}</option>)
            }
            
            </select>
        </Fragment>
       
        );
}
 
export default Waiter;