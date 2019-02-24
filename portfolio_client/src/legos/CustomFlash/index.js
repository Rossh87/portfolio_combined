import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const CustomFlash = ({duration, message}) => {

	const getClassNames = () => {
		return message ?
			'c-flash s-is-open'
			:
			'c-flash';
	}

	return(
		<div className={getClassNames()}>
			<div className="c-flash_message">
				{message}
			</div>
		</div>
	);
}

export default CustomFlash;

CustomFlash.propTypes = {
	duration: PropTypes.number.isRequired,
	message: PropTypes.string
};