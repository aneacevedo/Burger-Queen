import React from 'react';
//import ShowBreakClub from './showBreakClub.js';
import MenuLunch  from './showMenusTradi.js';




function MenuPage() {
    
    
    const showT= (e) => { 
      

        console.log(MenuLunch);
        
        
    }



    // const showB = (e) => { 
    
    //     console.log(ShowBreakClub);
    // }
      
    return ( 

        <div className='containerMenuPage'> 
            <div className='tableAndName'>
                <p className='title'>nombredemesa</p>
                <input type='text' className='nameComensal' placeholder='Ingresar nombre'/>
            </div>
            <div>
                <button className='tMenu' onClick={showT()}>Menú Tradicional</button>
                {/* <button className='tMenu' onClick={showB()}>Breakfast Club</button> */}

                <MenuLunch  display="none" />
            </div>
        </div>

    );
}

export default MenuPage;