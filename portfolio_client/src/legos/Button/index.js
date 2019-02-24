import React from 'react';

import './styles.scss';

const Button = ({btnType, receivedClassName, children}) => {
	return(
		<button 
			className={`c-button ${receivedClassName}`}
			type={btnType}
		>
			{children}
		</button>
	)
}

export default Button;