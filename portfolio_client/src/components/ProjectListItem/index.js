import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const ProjectListItem = (props) => {
	const {
		imageAlt,
		logoImg,
		text,
		isInverted,
		repoAddress,
		demoURL,
		type
	} = props;

	const getProjectSectionClasses = () => {
		const baseName = isInverted ?
			'c-project'
			: 'c-project s-is-inverted'

		return `${baseName} s-has-${type}-theme`
	};

	const buildLinks = () => {
		return demoURL ?
			<div className="c-project_links s-has-demo">
				<a href={demoURL} className="c-project_links--demo">
					<span>Go to live demo</span>
					<i className="far fa-arrow-alt-circle-right"></i>
				</a>
				<a href={repoAddress} className="c-project_links--github">
					<span>View source code</span>
					<i className="fab fa-github"></i>
				</a>
			</div>
			:
			<div className="c-project_links">
				<a href={repoAddress} className="c-project_links--github">
					<span>View source code</span>
					<i className="fab fa-github"></i>
				</a>
			</div>
	}

	return(
		<div className={getProjectSectionClasses()}>
			<div className="c-project_content">
				<article>
					{text}
				</article>
				{buildLinks()}
			</div>
			{
				logoImg &&
				<a href={repoAddress}>
					<img className='c-project_img' src={logoImg[0].thumbnails.large.url} alt={imageAlt}/>
				</a>
			}
		</div>
	)
}

export default ProjectListItem;

ProjectListItem.propTypes = {
	imageAlt: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	isInverted: PropTypes.bool.isRequired,
	repoAddress: PropTypes.string.isRequired,
	demoURL: PropTypes.string,
	logoImg: PropTypes.array
}