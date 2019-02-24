import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

import AnimatedComponentSwap from 'graphicComponents/AnimatedComponentSwap';
import HeroContent from 'components/HeroContent';

const modalRoot = document.getElementById('modal-root');

const Hero = ({isOpen, dismissHero}) => {
	const getHeroClasses = () => isOpen? 
		'c-hero s-is-open'
		:
		'c-hero'

	const heroDiv = (
		<React.Fragment>
			<div className={getHeroClasses()}>
				<div className="c-hero--left">
					<h1 className="c-hero_banner">
						Welcome!
					</h1>
					<span className="c-hero_intro">I'm Ross.</span>
				</div>
				<AnimatedComponentSwap 
					receivedClassName='c-hero--right'
					dismissHero={dismissHero}
				>

					<HeroContent
						title='I build Websites.'
						animatedSubheads={[
							'(Apps).',
							'(Software).',
							'(Ideas).'
						]}
					/>
					<HeroContent
						title='A bit about me...'
						content="I'm a full-stack web developer who's passionate about code that rises to real-world challenges.  Most of what I make has javascript under the hood; inside are some projects I'm excited about right now."
					/>

					
				</AnimatedComponentSwap>
			</div>
		</React.Fragment>
	);

	return (
		ReactDOM.createPortal(
			heroDiv,
			modalRoot
		)
	)
};

export default Hero;