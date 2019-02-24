import React from 'react';
import {FaReact} from 'react-icons/fa';
import PropTypes from 'prop-types';

import './styles.scss';

const ReactSvg = ({graphicTheme, isHovered}) => {

	const buildSvgClassName = () => {
		return isHovered ?
			'c-reactGraphic s-is-hovered'
			: 'c-reactGraphic'
	}

	return(
		<FaReact 
			className={buildSvgClassName()}
			stroke={graphicTheme.baseColor} 
			strokeWidth={graphicTheme.strokeWidth}
		/>
	)
}

export default ReactSvg;

ReactSvg.propTypes = {
	graphicTheme: PropTypes.shape({
		themeName: PropTypes.string.isRequired,
		hoverColor: PropTypes.string.isRequired,
		strokeWidth: PropTypes.number.isRequired,
		baseColor: PropTypes.string.isRequired
	}),

	isHovered: PropTypes.bool.isRequired
};