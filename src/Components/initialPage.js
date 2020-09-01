import React from 'react';


function InitialPage() {
    return ( 
    <div className = "initialPageBackground">
        <div className='initialPageCard'>
            <div className='initialPageContent'>
                <p>¡Bienvenido a Burger Kingdom!</p>
                <p>¿Quién eres?</p>
                <div className="btnContent">
                    <button className='btnInitialPage'>Cocinero</button>
                    <button className='btnInitialPage'>Mesero</button>
                </div>
            </div>
        </div>   
    </div>
    );
}

export default InitialPage;