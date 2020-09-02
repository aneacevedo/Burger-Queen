import React from 'react';
import '../index.css';
import Table from './table.js';

function ThirdPage() {
    return ( 
    <div className = "thirdPageBackground">
        {/* <aside className="toggleContainer">
        </aside> */}

        <div className='thirdPageContent'>
            <h1 className='title'>Hola TuNombrejeejjje!</h1>
            <Table/>
        </div>   
    </div>
    );
}

export default ThirdPage;