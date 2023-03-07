import React from 'react';
import css from './Statistic.module.css';

const Statistic = ( {state, total, persentage} ) => {
  const { good, neutral, bad } = state;

  return (
    <>
      <h5 className="title">Statistic</h5>
      <ul className={css.list}>
        <li className="item">
          <span className="label">Good:</span>
          <span className="amount">{good}</span>
        </li>
        <li className="item">
          <span className="label">Neutral:</span>
          <span className="amount">{neutral}</span>
        </li>
        <li className="item">
          <span className="label">Bad:</span>
          <span className="amount">{bad}</span>
        </li>
		  <li className="item">
          <span className="label">Total:</span>
          <span className="amount">{total}</span>
        </li>
		  <li className="item">
          <span className="label">Positive feedback:</span>
          <span className="amount">{persentage || 0}%</span>
        </li>
      </ul>
    </>
  );
};

export default Statistic;
