import React from 'react';
import {withRouter} from 'react-router-dom';
import merida from '../media/Merida.png';
import nemo from '../media/Nemo.png';
import remi from '../media/Remi.png';
import arlo from '../media/Arlo.png';
import russel from '../media/Russel.png';
import coco from '../media/Coco.png';


class Table extends React.Component {
    nextPath(path) {
        this.props.history.push(path);
      }
    render () {
        return ( 
            <div className='contentTables'>
                <div className="tableStyle" onClick={() => this.nextPath('/menu')}>
                <img src={nemo} className="imgTable" alt="nemo"/>
                    Mesa Nemo</div>
                <div className="tableStyle" onClick={() => this.nextPath('/menu')}>
                        <img src={merida} className="imgTable" alt="merida"/>
                    Mesa Merida</div>
                <div className="tableStyle" onClick={() => this.nextPath('/menu')}>
                <img src={remi} className="imgTable" alt="remi"/>
                    Mesa Remi</div>
                <div className="tableStyle" onClick={() => this.nextPath('/menu')}>
                <img src={russel} className="imgTable" alt="russel"/>
                    Mesa Russel</div>
                <div className="tableStyle" onClick={() => this.nextPath('/menu')}>
                <img src={arlo} className="imgTable" alt="arlo"/>
                    Mesa Arlo</div>
                <div className="tableStyle" onClick={() => this.nextPath('/menu')}>
                <img src={coco} className="imgTable" alt="coco"/>
                Mesa Coco</div>
            </div>     
        )}
}

export default withRouter(Table);