import React, {useState} from 'react';

function OrderList({order,  handleSetOrder}){


    const [sum, setSum]= useState(1);
   
     function handleRemove(id){
         const newSum = order.filter((item) => item.id !== id);
         handleSetOrder(newSum);
     }
    

    return (
        <div>
                {order.map((item) =>
                    <div className="containerPick" key={item.id} item={item} >
                    <p className='textOrder'>{item.title}</p>
                    <p className='textOrder'>${item.price}</p>
                    <div>
                        <div className='btnSum' onClick={() => setSum(sum + 1)}>
                            <p className='textSum'>+</p>
                        </div>
                          <p className="textTotalOrder">{sum}</p>
                        <div className='btnLess' onClick={() => setSum(sum - 1)}>
                            <p className='textLess'>-</p>
                        </div>
                    </div>
                    
                    <p className='textOrder'
                     onClick={() => handleRemove(item.id)}>X</p>
                    </div>
                )}
        </div>
    );
}

export default OrderList;