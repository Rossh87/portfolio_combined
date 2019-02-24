import React from 'react';
import {Link} from 'react-router-dom';

import './styles.scss';

const LinkItem = ({clickHandler, styleClass, isLinkComponent, path, children}) => {

	const determineLinkType = () => {
		return isLinkComponent?
			<Link className="sub-link_item" onClick={clickHandler} to={path}>
				{children}
			</Link>

			: 

			<a className="sub-link_item" href={path} onClick={clickHandler}>
				{children}
			</a>
	};

	return(
		<li className={styleClass}>
			{determineLinkType()}	
		</li>
	)
}

export default React.memo(LinkItem);