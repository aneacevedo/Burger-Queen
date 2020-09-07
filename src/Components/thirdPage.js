import React from 'react';
import '../index.css';
import Table from './table.js';
import BurgerToggle from './burgerToggle';
import { withRouter } from 'react-router'


class ThirdPage extends React.Component {
    render(){
    return ( 
    <div className = "thirdPageBackground">
        <div className="containerAside">
             <div className="toggleContainer">
             <BurgerToggle/>
             </div>
             </div>
        <div className='thirdPageContent'>
            <h1 className='title'>Hola TuNombrejeejjje!</h1>
            <Table/>
        </div>   
    </div>
    );
    }
}

export default withRouter(ThirdPage);