import PropTypes from 'prop-types';
import React from 'react';
import css from './FeedbackOptions.module.css';
import {ReactComponent as AddGoodIcon} from '../../icons/good.svg'
import {ReactComponent as AddNeutralIcon} from '../../icons/neutral.svg'
import {ReactComponent as AddBadIcon} from '../../icons/bad.svg'

const FeedbackOptions = ({ options, onClick }) => {

	const getIcon = (option) => {
		if (option === "good") return <AddGoodIcon width={20} height={20} fill="gray" />;
		if (option === "neutral") return <AddNeutralIcon width={20} height={20} fill="gray" />;
		if (option === "bad") return <AddBadIcon width={20} height={20} fill="gray" />;
  };

	return (
		<ul className={css.list}>
  
		  {options.map(( option ) => (
			  <li key={option} className={css.item} onClick={() => onClick(option)}>
				  <button className={css.btn}>{option} {getIcon(option)}</button>
			  </li>
		  ))}
		</ul>
  );
} 

FeedbackOptions.propTypes = {
	options: PropTypes.array,
	onClick: PropTypes.func,
 };

export default FeedbackOptions;