import React from 'react';
import 'firebase/firestore';


    function KitchenWait (props) {
        const {orders, handleSetOrders} = props;

        
        const selectOrder = (item) =>{
            const newSelect = [
              ...orders,
              {
                id: item.id,
                time: item.time,
                title:item.product,
              },
            ];
            handleSetOrders(newSelect);
          };

        return(
           <div>
            { orders.map((item) => (
                <div key={item.id} className='ordersKitchen' onClick={() => selectOrder(item)}>
                    <p>{item.time}</p>
                    <p>{item.product}</p>
                </div>
                ))}   
              </div>  
        )
    }


export default KitchenWait;