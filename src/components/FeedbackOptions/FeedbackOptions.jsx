import PropTypes from 'prop-types';
import React from 'react';
import css from './FeedbackOptions.module.css';
import { BsEmojiSmile, BsEmojiExpressionless, BsEmojiFrown } from "react-icons/bs";

const Feedback = ({onGood, onNeutral, onBad}) => (
  <>
    <ul className={css.list}>
      <li className={css.item}>
        <button className={css.btn} onClick={onGood}>Good <BsEmojiSmile className={css.icon} /></button>
      </li>
      <li className="feedback-list-item">
        <button className={css.btn} onClick={onNeutral}>Neutral <BsEmojiExpressionless className={css.icon} /></button>
      </li>
      <li className="feedback-list-item">
        <button className={css.btn} onClick={onBad}>Bad <BsEmojiFrown className={css.icon} /></button>
      </li>
    </ul>
  </>
);

Feedback.propTypes = {
	onGood: PropTypes.func.isRequired,
	onNeutral: PropTypes.func.isRequired,
	onBad: PropTypes.func.isRequired,
 };

export default Feedback;