import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const HTMLSvg = ({graphicTheme, isHovered}) => {

// graphicTheme currently lives in state in ProjectCard component.

	const buildSvgClassName = () => {
		return isHovered ?
			'c-htmlGraphic s-is-hovered'
			: 'c-htmlGraphic'
	}

	return (
		<svg 
			className={buildSvgClassName()} 
			strokeLinecap="round" 
			strokeLinejoin="round" 
			viewBox="0 0 340 120" 
			strokeWidth={graphicTheme.strokeWidth} 
			xmlns="http://www.w3.org/2000/svg"
			stroke={graphicTheme.baseColor}
		>
				<path className="c-htmlGraphic_bracket--left" d=
				"M 100, 10
				 l -90, 50
				 l 90 50"
				/>

				<path strokeLinecap="butt" className="c-htmlGraphic_slash" d="M 220, 10 L 160, 110"
				/>

				<path className="c-htmlGraphic_bracket--right" d=
				"M 240, 10
				 l 90, 50
				 l -90 50"
				/>
		</svg>
	)
}

export default HTMLSvg;

HTMLSvg.propTypes = {
	graphicTheme: PropTypes.shape({
		themeName: PropTypes.string.isRequired,
		hoverColor: PropTypes.string.isRequired,
		strokeWidth: PropTypes.number.isRequired,
		baseColor: PropTypes.string.isRequired
	}),

	isHovered: PropTypes.bool.isRequired
};