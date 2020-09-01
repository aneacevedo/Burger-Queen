import React from 'react';
import BurgerToggle from './burgerToggle.js';
// import InitialPage from './initialPage.js';

function AsideToggle(props) {
    return ( 
         <div className='sideBar'>
            <BurgerToggle/>
               <div key="asideView" display="none">
                 <p>Mesas</p>
               </div>

               <div>
                 <p>Pedidos</p>
               </div>

               <div> 
                 <p>Cambiar cuenta</p>
               </div>
               {/* <div onClick = {this.closeBurgerMenu}> </div> */}
         </div>
    );
}


export default AsideToggle;
