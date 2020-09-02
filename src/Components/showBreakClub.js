import React from 'react';
import data from '../data/menuBreakfast.json';


// const renderMenuBreak = (arrayBreakfastClub) => {
//     document.querySelector('.showFoodBreakfast').innerHTML = arrayBreakfastClub.map(food =>
//         <p>ayuda</p>)
// }

const dataBreakfast = data;
console.log (dataBreakfast);

  
class ShowBreakClub extends React.Component{
    render(){
        
        return ( 
                <div className='showFoodBreakfast'>
                    <div className="containerFood">
                        {/* { this.props.dataBreakfast.map(menus =>
                        <p> 
                           title={menus.title}
                       
                        </p>
                         )} */}
                        <div className='containerImgFood'>imagen
                        </div>
                    </div>
                 </div>
                );
    }
}


export default ShowBreakClub;