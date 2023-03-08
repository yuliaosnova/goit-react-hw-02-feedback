import PropTypes from 'prop-types';
import React from 'react';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onClick }) => (
    <ul className={css.list}>

		{options.map(( option ) => (
			<li key={option} className={css.item} onClick={() => onClick(option)}>
				<button className={css.btn}>{option}</button>
			</li>
		))}
    </ul>
);

FeedbackOptions.propTypes = {
	options: PropTypes.array.isRequired,
	onClick: PropTypes.func.isRequired,
 };

export default FeedbackOptions;