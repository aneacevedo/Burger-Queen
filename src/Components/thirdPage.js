import React from 'react';
import '../index.css';
import Table from './table.js';
import BurgerToggle from './burgerToggle';



class ThirdPage extends React.Component {
    render(){
    return ( 
    <div className = "thirdPageBackground">
        <BurgerToggle/>
        <div className='thirdPageContent'>
            <h1 className='title'>Hola TuNombrejeejjje!</h1>
            <Table/>
        </div>   
    </div>
    );
    }
}

export default ThirdPage;