import React from 'react';


function KitchenDone({order, selectOrder}){

        return(
                <div className='ordersKitchenDone'>
                  {selectOrder}
                </div>
        );

    
}



export default KitchenDone;