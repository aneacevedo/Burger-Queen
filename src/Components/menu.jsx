import React, {useState} from 'react';
import ShowMenuTradi from './showMenusTradi';
import { withRouter } from 'react-router'
import ShowBreakfast from './showBreakClub';
import trash from '../media/trash.png';
import BurgerToggle from './burgerToggle';



const Ayuda = ({ola}) => {
  const [order, setOrder] = useState([])
    return ola({order, setOrder} );
};



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
      <Ayuda 
      ola={
        ({order, setOrder}) =>{
          const handleSetOrder = (order) => {
            setOrder(order)
           }
        }
      }
      />

      <div className='leftSideMenuPage'> 
        <header className='headerMenu'>
         <div className='tableAndName'>
         <BurgerToggle/> 
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
              <ShowBreakfast />
            )
            : (
              <ShowMenuTradi />
            )
          }
        
        </div>
        
      </div>
      <div className='rightSideMenuPage'> 

       <div className='orderContainer'>
         <div className='textOrder'> 
            <div className='titleAndImg'>
              <p className='titleOrder'>Pedido</p>
              <div className='imgTrashContainer'>
                <img src={trash} className='imgTrash' alt='trash'/>
              </div>
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