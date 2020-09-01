import React, { Component } from 'react';
import InitialPage from './initialPage.js';

const activeToggle = () => document.querySelector('#contentToggle').classList.toggle('active');
function BurgerToggle() {
    return ( 
        <div className='sideBar'>
            <div id="contentToggle" onClick={activeToggle}>
                <p className="toggle">&#9776;</p>
            </div>
{/* ingresar componente thirdPage */}
          <div>
              <p>Mesas</p>
          </div>

          <div>
              <p>Pedidos</p>
          </div>
{/* ingresar componente initialpage */}
          <div onClick={InitialPage}> 
              <p>Cambiar cuenta</p>
          </div>
            
         </div>
    );
}

export default BurgerToggle;

