import React from 'react';
import { withRouter } from 'react-router'
import bqtrans from '../media/BQ-trans.png';

class InitialPage extends React.Component {
    //Path para routing
    nextPath(path) {
        this.props.history.push(path);
      }
      render(){
    return ( 
    <div className = "initialPageBackground">
        <div className='initialPageCard'>
            <div className='initialPageContent'>
            <img src={bqtrans} className="imgLogo1" alt="logo"/>
                <p>¡Bienvenido a Burger Kingdom!</p>
                <p>¿Quién eres?</p>
                <div className="btnContent">
                    <button className='btnInitialPage' onClick={() => this.nextPath('/kitchenPage')}>Cocinero</button>
                    <button className='btnInitialPage' onClick={() => this.nextPath('/authPage') }>Mesero</button>
                </div>
            </div>
        </div>   
    </div>
    );
}

}

export default withRouter(InitialPage);