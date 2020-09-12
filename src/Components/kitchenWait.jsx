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
                    <p>{item.product[0]}</p>
                    <p>{item.product[1]}</p>
                    <p>{item.product[2]}</p>
                    <p>{item.product[3]}</p>
                    <p>{item.product[4]}</p>
                    <p>{item.product[5]}</p>
                    <p>{item.product[6]}</p>
                    <p>{item.product[7]}</p>
                    <p>{item.product[8]}</p>
                    <p>{item.product[9]}</p>
                    <p>{item.product[10]}</p>
                    <p>{item.product[11]}</p>
                    <p>{item.product[12]}</p>
                    <p>{item.product[13]}</p>
                    <p>{item.product[14]}</p>
                    <p>{item.product[15]}</p>
                    <p>{item.product[16]}</p>
                    <p>{item.product[17]}</p>
                    <p>{item.product[18]}</p>
                    <p>{item.product[19]}</p>
                    <p>{item.product[20]}</p>
                </div>
                ))}   
              </div>  
        )
    }


export default KitchenWait;