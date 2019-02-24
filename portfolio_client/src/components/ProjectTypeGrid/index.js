import React from 'react';
import ProjectCard from 'components/ProjectCard';

import './styles.scss';

const ProjectTypeGrid = props => {
	return(
		<div className="c-ProjectTypeGrid">
			<ProjectCard theme='react' title="React">
				Redux, Jest, Enzyme.
			</ProjectCard>

			<ProjectCard theme='js' title="Javascript" isInverted={true}>
				Node, Express, 
			</ProjectCard>

			<ProjectCard theme='css' title="HTML/CSS">
				Responsive, adaptable layouts with grid, flexbox, and BEM.
			</ProjectCard>
		</div>
	)
}

export default ProjectTypeGrid;