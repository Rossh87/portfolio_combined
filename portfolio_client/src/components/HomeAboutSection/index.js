import React from 'react';

// Get HOC to handle hover behavior on touch screens
import withHoverBehaviors from 'hocs/withHoverBehaviors';

import './styles.scss';

const HomeAboutSection = ({isHovered, HOCRef, handleMouseEnter, handleMouseLeave}) => {
	const buildClassNames = () => {
		return isHovered ?
			'c-about s-is-hovered'
			:
			'c-about'
	}

	return(
		// ID added for navigation.  Ref is passed by HOC to manage hover
		// animations when mouse not in use.
		<section 
			id="about"
			className={buildClassNames()}
			ref={HOCRef}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div
				className="c-about_text"
			>
				<h1>Welcome! I'm Ross.</h1>
				<p>
				I'm a self-taught web developer who's passionate about software that rises to real-world challenges.  I strive to write modular, testable code that's easy to read and easy to change.  Inside are some projects that excite me.
				</p>
			</div>
			<svg className="c-about_splash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
				<defs>
					<radialGradient id="gradient1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
						<stop className="c-about_splash--stop1" offset="0%" />
						<stop className="c-about_splash--stop2" offset="70%"/>
						<stop className="c-about_splash--stop3" offset="100%"/>
				    </radialGradient>
				</defs>

				<circle cx="100" cy="100" r="100" fill="url(#gradient1)" />
			</svg>
		</section>
	)
}

export default withHoverBehaviors(HomeAboutSection);