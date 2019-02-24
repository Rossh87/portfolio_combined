import React from 'react';

import ajaxHandler from 'services/ajaxHandler';

// Get local components
import ProjectListItem from 'components/ProjectListItem';
import ProjectLoader from 'containers/ProjectLoader';


import './styles.scss';

const ProjectsBuilder = ({data}) => {
	return (
		<React.Fragment>
			{data.map((project, i) => (
				<ProjectListItem {...project} key={project.id} isInverted={i % 2 === 0}/>
			))}
		</React.Fragment>
	)
}

const ProjectListGrid = props => {
	return(
		<ProjectLoader>
			<ProjectsBuilder />
		</ProjectLoader>
	)
}

export default ProjectListGrid;