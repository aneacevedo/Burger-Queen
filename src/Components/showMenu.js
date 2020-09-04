import React,{Component} from 'react';
import PropTypes from 'prop-types';

class showMenu extends Component {
    styleCompleted(){
        return {
            fontSize:'2vw',
            color:'blue',
            textDecoration:'none',
            border: this.props.task.done ?'2px solid red':'1px solid grey',
            padding: '10px 15px',
            width: '50vw',
            marginLeft: '1vw'
        }
    }
    render() {
        const {showMenu}= this.props;


        return <p style= {this.styleCompleted()}>
            {task.title} -
            {task.description} -
            {task.done} -
            {task.id}
        </p>
    }

}
showMenu.propTypes = {
    showMenu : PropTypes.object.isRequired
}


 export default showMenu