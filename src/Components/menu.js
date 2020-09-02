import React from 'react';
import ShowBreakClub from './showBreakClub.js';


// const showB = (e) => { 
//     e.preventDefault();
//     console.log(ShowBreakClub);
// }

function MenuPage() {
    return ( 

        <div className='containerMenuPage'> 
            <div className='tableAndName'>
                <p className='title'>nombredemesa</p>
                <input type='text' className='nameComensal' placeholder='Ingresar nombre'/>
            </div>
            <div>
                <button className='tMenu'>Menú Tradicional</button>
                {/* <button className='tMenu' onClick={showB()}>Breakfast Club</button> */}
            </div>
        </div>

    );
}

export default MenuPage;