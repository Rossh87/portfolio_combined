import React from 'react';

// Get all graphic assets
import HTMLSvg from '../HTMLSvg';
import JSSvg from '../JSSvg';
import ReactSvg from '../ReactSvg';
import {FaQuestion} from 'react-icons/fa';

// Get styles for graphic container
import './styles.scss';

class GraphicSwitch extends React.Component {
	buildGraphic() {
		const {graphicTheme, isHovered} = this.props;
		const name = graphicTheme.themeName;

		const element = ((name) => {
			switch(name) {
				case('react'):
					return <ReactSvg graphicTheme={graphicTheme} isHovered={isHovered}/>;

				case('css'):
					return <HTMLSvg graphicTheme={graphicTheme} isHovered={isHovered}/>;

				case('js'):
					return <JSSvg graphicTheme={graphicTheme} isHovered={isHovered}/>;

				default: 
					return <FaQuestion />;
			}
		})(name);

		return element;
	}

	render() {
		return(
			// This is the graphic container. The underlying SVG is styled to obey the dimensions
			// of this container.  Make size changes here, not to the graphics themselves.
			<div className="c-svgGraphic">
				{this.buildGraphic()}
			</div>
		)
	}
}

export default GraphicSwitch;