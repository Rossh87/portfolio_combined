import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

// Component to determine which graphic gets rendered inside
// ProjectCard based on the theme passed in props.
import GraphicSwitch from 'graphicComponents/GraphicSwitch';

// HOC adds behaviors that track mouse hover @ large screen sizes,
// & also track scroll position @ small sizes or if no mouse is present.
import withHoverBehaviors from 'hocs/withHoverBehaviors';

import Button from 'legos/Button';

import './styles.scss';

class ProjectCard extends React.Component {
	state = {
		// themes are locally defined for now.
		// Opportunity to modularize this to accept external 'theme'
		// objects in the future.
		themes: {
			react: {
				themeName: 'react',
				hoverColor: '#61dafb',
				strokeWidth: 12,
				baseColor: '#848C8E'
			},

			css: {
				themeName: 'css',
				hoverColor: '#DCF763',
				strokeWidth: 18,
				baseColor: '#848C8E'
			},

			js: {
				themeName: 'js',
				hoverColor: 'red',
				strokeWidth: 4,
				baseColor: '#848C8E'
			}
		}
	};

	getClassNames() {
		const {theme, isHovered, isInverted} = this.props;

		const baseName = isInverted ?
			'c-skillCard'
			:
			'c-skillCard s-is-inverted';

		return isHovered ?
			`${baseName} s-has-${theme}-theme`
			:
			`${baseName}`;
	}

	render() {
		// All graphicThemes are currently defined in local state (above).
		// HOCRef and mouse handlers are passed by wrapping HOC (below);
		const {
			title,
			children,
			theme,
			isHovered,
			HOCRef,
			handleMouseEnter,
			handleMouseLeave
		} = this.props;

		const graphicTheme = this.state.themes[theme];

		return(
			<div 
				ref={HOCRef}
				className={this.getClassNames()}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				
					<div className="c-skillCard_graphic">
						<GraphicSwitch 
							graphicTheme={graphicTheme}
							isHovered={isHovered}
						/>
					</div>

					<div className="c-skillCard_text">
						<h1 className="c-skillCard_title">{title}</h1>
						<p className="c-skillCard_content">{children}</p>
						<Link to={`/projects/${theme}`}>
							<Button 
								receivedClassName='c-skillCard_button'
							>
								Go To Projects
							</Button>
						</Link>
					</div>
				
			</div>
		)
	}
}

export default withHoverBehaviors(ProjectCard);


ProjectCard.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([
   		PropTypes.arrayOf(PropTypes.node),
    	PropTypes.node
	]).isRequired,
	theme: PropTypes.string.isRequired,
	isHovered: PropTypes.bool.isRequired,
	HOCRef: PropTypes.oneOfType([
		PropTypes.shape({current: PropTypes.instanceOf(Element)}),
		PropTypes.func
	]),
	handleMouseEnter: PropTypes.func.isRequired,
	handleMouseLeave: PropTypes.func.isRequired
}