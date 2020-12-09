import {Component} from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
    constructor() {
        super();
        this.roll = this.roll.bind(this);
        this.Rolling = this.Rolling.bind(this);
        this.notRolling = this.notRolling.bind(this);
        this.state = {
            dieOne: 'one',
            dieTwo: 'one',
            isRolling: false
        }
    }

    static defaultProps = {
        numbers: ['one', 'two', 'three', 'four', 'five', 'six']
    }

    Rolling() {
        this.setState({
            isRolling: true
        })
    }
    notRolling() {
        this.setState({
            isRolling: false
        })
    } 

    roll() {
        var numbers = this.props.numbers;
        var dieOne = numbers[Math.floor(Math.random() * numbers.length)];
        var dieTwo = numbers[Math.floor(Math.random() * numbers.length)];
        this.setState({dieOne, dieTwo});

        this.Rolling();
        setTimeout(this.notRolling, 1000)
    }



    render() {
        const isRolling = this.state.isRolling;
        return (
            
            <div className="RollDice">
                <div>
                    <Die num={this.state.dieOne} isRolling={isRolling} />
                    <Die num={this.state.dieTwo} isRolling={isRolling}/>
                </div>
                
                <button onClick={this.roll} disabled={isRolling}>
                {isRolling? 'Rolling...' : 'Roll Dice!'}
                </button>
            </div>
        )
    }
}

export default RollDice;