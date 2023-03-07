import React from 'react';
import css from './Feedback.module.css';
import { BsEmojiSmile, BsEmojiExpressionless, BsEmojiFrown } from "react-icons/bs";

const Feedback = ({onGood, onNeutral, onBad}) => (
  <>
    <h5 className="title">Please leave feedback</h5>
    <ul className={css.list}>
      <li className="feedback-list-item">
        <button className="feedback-btn" onClick={onGood}>Good <BsEmojiSmile className="icon" /></button>
      </li>
      <li className="feedback-list-item">
        <button className="feedback-btn" onClick={onNeutral}>Neutral <BsEmojiExpressionless className="icon" /></button>
      </li>
      <li className="feedback-list-item">
        <button className="feedback-btn" onClick={onBad}>Bad <BsEmojiFrown className="icon" /></button>
      </li>
    </ul>
  </>
);

export default Feedback;
