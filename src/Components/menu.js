import React from 'react';
import ShowMenuTradi from './showMenusTradi';
import { withRouter } from 'react-router'
import ShowBreakfast from './showBreakClub';


class MenuPage extends React.Component {

 constructor(){
   super();

   this.state ={
    showMenuClub: false,
  }
  this.showMenuClub = this.showMenuClub.bind(this);
 }
 showMenuClub(event){
   event.preventDefault();

   this.setState({
     showMenuClub: !this.state.showMenuClub,
   });
 }

 render () {
  return ( 
    <div className='containerMenuPage'> 
      <div className='leftSideMenuPage'>  
        <header className='headerMenu'>
      
         <div className='tableAndName'>
           <p className='titleM'>Nombredemesa</p>
           <input type='text' className='nameComensal' placeholder='Ingresar nombre'/>
          </div>
          <div className='containerBtnsMenus'>
             <button className='tMenu' onClick={this.showMenuClub}>Menú Tradicional</button>
             <button className='tMenu' onClick={this.showMenuClub}>Breakfast Club</button>
          </div>
        </header>
        <div className="containerShowMenu"> 
          {
            this.state.showMenuClub
            ? (
              <ShowBreakfast/>
            )
            : (
              <ShowMenuTradi/>
            )
          }
        
        </div>
        
      </div>
      <div className='rightSideMenuPage'> 

       <div className='orderContainer'>
         <div className='textOrder'> 
            <div className='titleAndImg'>
              <p className='titleOrder'>Pedido</p>
              <img src='../media/trash.png' alt='trash'/>
            </div>
            <div className='orderPicksContainer'>
              <p>ordenes</p>
            </div>  
         </div>
        </div>


        <div className='containerTipsAndBtn'>
          <div>
            <textarea placeholder='Añadir notas al chef'></textarea>
          </div>
          <div className='containerTips'>
            <p className='titleTips'>Propina</p>
            <button className='btnTips'>$500</button>
            <button className='btnTips'>$1000</button>
            <button className='btnTips'>$1500</button>
            <button className='btnTips'>$2000</button>
          </div>
          <div className='containerPriceBtn'>
            <p className='totalPrice'>Total $</p>
            <button className='aceptBtn'>CONFIRMAR PEDIDO</button>
          </div>
         </div>

       </div>    
    </div>

  );
 }
   
}

export default withRouter(MenuPage);