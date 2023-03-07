import PropTypes from 'prop-types';
import React from 'react';
import css from './NotificationMessage.module.css';

const NotificationMessage = ({ message }) => (
	<p className={css.message}>
	  {message}
	</p>
 );
 

 NotificationMessage.propTypes = {
	message: PropTypes.string.isRequired,
 };

 export default NotificationMessage;