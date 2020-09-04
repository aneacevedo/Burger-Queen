import React from 'react';
import {withRouter} from 'react-router-dom';


class Table extends React.Component {
    nextPath(path) {
        this.props.history.push(path);
      }
    render () {
        return ( 
            <div className='contentTables'>
                <div className="tableStyle" onClick={() => this.nextPath('/menu')}>Mesa Nemo</div>
                <div className="tableStyle">Mesa Merida</div>
                <div className="tableStyle">Mesa Remi</div>
                <div className="tableStyle">Mesa Russel</div>
                <div className="tableStyle">Mesa Arlo</div>
                <div className="tableStyle">Mesa Coco</div>
            </div>     
        )}
}

export default withRouter(Table);