import React from 'react';

import './styles.scss';

// ID prop is passed as hook for internal navigation
const Divider = ({children, id}) => {
	return(
		<div id={id} className='c-divider'>
			<hr className='c-divider_hr'/>
			<div className='c-divider_text'><h2>{children}</h2></div>
		</div>
	)
}

export default Divider;