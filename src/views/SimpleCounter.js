import React from 'react';
import { useSelector } from 'react-redux';
import { CountAction } from '../action/CountAction';

const SimpleCounter = () => {
  //Get counter from counterReducer
  const { handleClick } = CountAction()
  const counter = useSelector(state => state.myCounter.counter);

    return (         
        <section id="section-counter">
        <h3 className="center-align white-text blue">Simple Counter</h3>
        <h5 className="center-align">{counter}</h5>
        <div className="row counter-btns">
        <button className="btn-small blue" onClick={() => handleClick('DOUBLE_COUNT')}>
        x2
        </button>
        <button className="btn-small blue" onClick={() => handleClick('INCREMENT_COUNT_TEN')}>
        +10
        </button>
        <button className="btn-small blue" onClick={() => handleClick('INCREMENT_COUNT')}>
        +1
        </button>
        <button className="btn-small blue" onClick={() => handleClick('DECREMENT_COUNT')}>
        -1
        </button>
        <button className="btn-small blue" onClick={() => handleClick('DECREMENT_COUNT_TEN')}>
        -10
        </button>
        <button className="btn-small blue" onClick={() => handleClick('RESET_COUNT')}>
        Reset
        </button>
        </div>
     
        </section>
     );
}
 
export default SimpleCounter;