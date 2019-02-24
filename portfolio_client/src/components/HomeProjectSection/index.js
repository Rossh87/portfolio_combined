import React from 'react';
import ProjectCard from 'components/ProjectCard';

import './styles.scss';

const HomeProjectSection = props => {
	return(
		<section className="c-homeProject">
			<ProjectCard theme='react'/>
			<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit accusantium commodi provident, voluptas blanditiis magni hic? Atque ad iste totam.</div>
		</section>
	)
}

export default HomeProjectSection;