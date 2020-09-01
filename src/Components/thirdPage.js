import React, { Component } from 'react';
import '../index.css';
import BurgerToggle from './burgerToggle.js';

function ThirdPage() {
    return ( 
    <div className = "thirdPageBackground">
        <aside className="toggleContainer">
        <BurgerToggle/>
        </aside>

        <div className='thirdPageContent'>
            <h1 className='title'>Hola TuNombrejeejjje!</h1>
            <div className='contentTables'>
                <div className='tableStyle'>Mesa Nemo</div>
                <div className='tableStyle'>Mesa Mérida</div>
                <div className='tableStyle'>Mesa Remi</div>
                <div className='tableStyle'>Mesa Russel</div>
                <div className='tableStyle'>Mesa Arlo</div>
                <div className='tableStyle'>Mesa Coco</div>
            </div>
  
        </div>   
    </div>
    );
}

export default ThirdPage;