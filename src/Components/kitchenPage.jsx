import React from 'react';
import {withRouter, useHistory} from 'react-router-dom';

function KitchenPage(){


    let history = useHistory();
    function handleClick(){
        history.push('/');
    }

    return(
        <div className="kitchen">
            <div className="titleKitchen">
                <h1>Hola cocineros!!!</h1>
            </div>
            <div className="contentKitchen">
            <div className="containerWaiting">
                <nav className="headerKitchen">En espera</nav>
                <div className="contentWaiting">
             
                </div>

            </div>
            <div className="containerDone">
                <nav className="headerKitchen">Listos para servir</nav>
                <div className="contentDone">
                  
                </div>
            </div>
            </div>
            <button className="btnKitchen" onClick={() => handleClick()}>Cambiar de cuenta</button>
        </div>
    )
}

export default withRouter(KitchenPage);
