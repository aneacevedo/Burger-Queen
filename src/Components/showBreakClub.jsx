import React, {useState, Fragment} from 'react';
import menuBreakfast from '../data/menuBreakfast.json';

function ShowBreakfast (props) {
    const [MenuBreakfast ] = useState(menuBreakfast);
    const { order, handleSetOrder} = props;

    const selectFood = (item) =>{
      const newSelect = [
        ...order,
        {
          id: item.id,
          title:item.title,
          price: item.price,
          total:1
        },
      ];
      handleSetOrder(newSelect);
    };

    return ( 
      <Fragment>
        {MenuBreakfast.map((item)=> 
                <label className="containerFood" key={item.id}>
                <div className='textImgBox'>
                   <div className='textContainer'>
                     <p>{item.title}</p>
                     <p>{item.time}</p>
                     <p>${item.price}</p>
                    </div>
                    <div className='containerImgFood'>
                      <img className='imgFood' src="../media/burger-doble-pollo.jpg" alt="pollodoble"/>
                    </div>
                 </div>
                <input type='checkbox' id={item.id} onChange={() => selectFood(item)}/>
                <span className='checkmark'></span>
              </label>)}
        </Fragment>
        );
  }
  
  export default ShowBreakfast;