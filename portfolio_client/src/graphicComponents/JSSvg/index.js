import React from 'react';
import {FaJs} from 'react-icons/fa';
import PropTypes from 'prop-types';

import './styles.scss';

const JSSvg = ({graphicTheme, isHovered}) => {

	const buildSvgClassName = () => {
		return isHovered ?
			'c-jsGraphic_anchor s-is-hovered'
			: 'c-jsGraphic_anchor'
	}

	return(
		<div className={buildSvgClassName()}>
				<FaJs 
					fill={graphicTheme.baseColor} 
					strokeWidth={graphicTheme.strokeWidth}
					className='c-jsGraphic_graphic'
				/>
		</div>
	)
}

export default JSSvg;

JSSvg.propTypes = {
	graphicTheme: PropTypes.shape({
		themeName: PropTypes.string.isRequired,
		hoverColor: PropTypes.string.isRequired,
		strokeWidth: PropTypes.number.isRequired,
		baseColor: PropTypes.string.isRequired
	}),

	isHovered: PropTypes.bool.isRequired
};

		// <div className="c-jsGraphic_anchor">
		// 	<div className={isHovered ?"c-jsGraphic_background s-is-hovered" : "c-jsGraphic_background"}></div>