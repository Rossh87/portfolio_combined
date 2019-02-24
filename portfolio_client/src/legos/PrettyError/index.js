import React from 'react';

import './styles.scss';

const PrettyError = ({error}) => {
	const {message} = error;
	return(
		<div className="c-error">
			<h1>Oops, request failed with following message:</h1>
			<p>{message.toString()}</p>
		</div>
	)
};

export default PrettyError;