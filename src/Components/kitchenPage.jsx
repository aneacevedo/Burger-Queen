import React from 'react';
import BurgerToggle from './burgerToggle';
import {withRouter} from 'react-router-dom';

function KitchenPage(){
    return(
        <div className="kitchen">
            <BurgerToggle/>
            <div className="titleKitchen">
                <h1>Hola cocineros!!!</h1>
            </div>
            <div className="contentKitchen">
            <div className="containerWaiting">
                <nav className="headerKitchen">En espera</nav>
                <div className="contentWaiting">
                    holamundo
                    ola
                    noseveniunaweaaaaaaaaaaaaaaa
                </div>

            </div>
            <div className="containerDone">
                <nav className="headerKitchen">Listos para servir</nav>
                <div className="contentDone">
                    chaomundo
                    ola
                </div>
            </div>
            </div>
        </div>
    )
}

export default withRouter(KitchenPage);