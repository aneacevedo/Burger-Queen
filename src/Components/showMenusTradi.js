import React,{ Fragment,useState} from 'react';
// import showMenu from './showMenu';
import menuLunch from '../data/menuLunch.json';
const MenuLunch = () => {
    const [Lunch] = useState(menuLunch);
    const styleCompleted = {
        
        fontSize:'10px',
        color: 'red',
        textDecoration:'none',
        border: '1px solid grey',
        padding: '10px 15px',
        width: '50vw',
        marginLeft: '1vw'
    }
   
    return ( 
        <Fragment>
            <div >
            {
            Lunch.map((item, index)=> 
            <p   style= {styleCompleted} key={index.id}>{item.title}  {item.time} {item.price}</p> 
            )
            }
            </div>
        </Fragment>
 
 );
}
 
export default MenuLunch;