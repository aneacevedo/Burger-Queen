import React, {useState} from 'react';
import ShowMenuTradi from './showMenusTradi';
import { withRouter } from 'react-router'
import ShowBreakfast from './showBreakClub';
import BurgerToggle from './burgerToggle';
import OrderList from './orderList';

function MenuPage() {
   const[order, setOrder]= useState([]);
 
   const handleSetOrder = (order) =>{
     setOrder(order);
   }

  const [showMenuClub, setShowMenuClub] = useState(false);
  const clickShowMenu = (e) => {
    e.preventDefault();
    setShowMenuClub(!showMenuClub);
  }

  return(
    <div className='containerMenuPage'>
      <div className='leftSideMenuPage'> 
        <header className='headerMenu'>
        <BurgerToggle/> 
         <div className='tableAndName'>
           <p className='titleM'>Nombre:</p>
           <input type='text' className='nameComensal' placeholder='Ingresar nombre'/>
           <div className='containerBtnsMenus'>
             <button className='tMenu' onClick={clickShowMenu}>Menú Tradicional</button>
             <button className='tMenu' onClick={clickShowMenu}>Breakfast Club</button>
          </div>
          </div>
        </header>
        <div className="containerShowMenu"> 
          {
            showMenuClub
            ? (
              <ShowBreakfast order={order}  handleSetOrder={handleSetOrder} />
            )
            : (
              <ShowMenuTradi order={order}  handleSetOrder={handleSetOrder}/>
            )
          }
        
        </div>
        
      </div>
      <div className='rightSideMenuPage'> 
      <OrderList order={order} handleSetOrder={handleSetOrder}/>
       </div>    
    </div>

  );
}
export default withRouter(MenuPage);






 



