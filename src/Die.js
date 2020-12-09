import {Component} from 'react';
import './Die.css';

class Die extends Component {

    render() {
        const props = this.props;
        let dieClass = `Die fas fa-dice-${props.num}`;
        if(props.isRolling) {
            dieClass += ' Die-Rolling';
        }
        return <i className={dieClass}></i>
    }
}

export default Die;