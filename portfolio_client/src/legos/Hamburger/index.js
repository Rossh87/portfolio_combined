import React from 'react';

import './styles.scss';

const Hamburger = ({navIsOpen, handleClick}) => {
	return(
		<div onClick = {handleClick} className="c-hamburger">
			<div 
				className={
					navIsOpen ? 
					"c-hamburger_icon s-is-open" : "c-hamburger_icon"
				}
			>
			</div>			
		</div>
	)
}

export default Hamburger