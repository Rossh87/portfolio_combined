import React from 'react';

// Convenient util for generating unique keys
import shortid from 'shortid';

import './styles.scss';

const HeroContent = (props) => {
	// increment/decrement are passed by wrapping AnimatedComponentSwap component
	const {
		incrementIndex, 
		decrementIndex,
		title,
		content,
		animatedSubheads
	} = props;

	const buildSubheads = () => {
		let subheadCount = 0;

		return animatedSubheads.map((el, i) => {
			subheadCount++;
			const className = `c-hero_subhead enter-right--${subheadCount}`;
			return (
				<span 
					className={className}
					key={shortid.generate()}
				>
					{el}
				</span>
			)
		});
	};

	const buildContentDiv = () => {
		return(
			<React.Fragment>
				<p className="c-hero_content">
					{content}
				</p>
				<div onClick={incrementIndex} className="c-hero_arrow"></div>
			</React.Fragment>	
		);
	};


	return(
		<React.Fragment>
			<h3 className="c-hero_title">{title}</h3>
			{animatedSubheads && buildSubheads()}
			{buildContentDiv()}
			
		</React.Fragment>
	)
}

export default HeroContent;