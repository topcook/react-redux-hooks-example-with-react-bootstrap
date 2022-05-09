import React from 'react';
import { useSelector } from 'react-redux';
import { CountAction } from '../action/CountAction';
import { Col, Row } from 'react-bootstrap';

const SimpleCounter = () => {
  //Get counter from counterReducer
  const { handleClick } = CountAction()
  const counter = useSelector(state => state.myCounter.counter);

  return (
    <section id="section-counter">
      <h3 className="center-align white-text blue">Simple Counter</h3>
      <h5 className="center-align">{counter}</h5>
      <div className="row counter-btns">
        <Col xs={4} sm={2} className="mb-2">
          <button className="btn-small blue w-100" onClick={() => handleClick('DOUBLE_COUNT')}>
            x2
          </button>
        </Col>
        <Col xs={4} sm={2} className="mb-2">
          <button className="btn-small blue w-100" onClick={() => handleClick('INCREMENT_COUNT_TEN')}>
            +10
          </button>
        </Col>
        <Col xs={4} sm={2} className="mb-2">
          <button className="btn-small blue w-100" onClick={() => handleClick('INCREMENT_COUNT')}>
            +1
          </button>
        </Col>
        <Col xs={4} sm={2} className="mb-2">
          <button className="btn-small blue w-100" onClick={() => handleClick('DECREMENT_COUNT')}>
            -1
          </button>
        </Col>
        <Col xs={4} sm={2} className="mb-2">
          <button className="btn-small blue w-100" onClick={() => handleClick('DECREMENT_COUNT_TEN')}>
            -10
          </button>
        </Col>
        <Col xs={4} sm={2} className="mb-2">
          <button className="btn-small blue w-100" onClick={() => handleClick('RESET_COUNT')}>
            Reset
          </button>
        </Col>
      </div>

    </section>
  );
}

export default SimpleCounter;