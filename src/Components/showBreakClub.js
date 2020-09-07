import React, {useState, Fragment} from 'react';
import menuBreakfast from '../data/menuBreakfast.json';

function ShowBreakfast () {
    const [MenuBreakfast ] = useState(menuBreakfast);
    return ( 
      <Fragment>
        {MenuBreakfast.map((item, index)=> 
          <div className="containerFood" key={index.id}> 
           <div className='textImgBox'>
              <div className='textContainer'>
                <p>{item.title}</p>
                <p>{item.time}</p>
                <p>${item.price}</p>
              </div>
            
             <div className='containerImgFood'>
               {/* <img className='imgFood' 
               src={item.img}/> */}
             </div>
           </div>
          </div>)}
        </Fragment>
        );
  }
  
  export default ShowBreakfast;