import React from 'react';

// Local component
import Routes from '../Routes';
import Navbar from '../Navbar';
import Hero from 'components/Hero';

// Function to limit fire rate of scroll listener callbacks
import limitFireRate from 'services/limitFireRate';

import './styles.scss';

// This component is responsible for determining whether or not the hero
// modal should be displayed, based on the viewport scroll position.
// Logic governing the modal *while displayed* is located in 
// graphicComponents/AnimatedComponentSwap.

class HeroManager extends React.Component {
	constructor(props) {
		super(props);

		this.timerID = null;

		this.canRemount = false;

		this._limitedManageHero = limitFireRate(this.manageHero, 300);
		this._limitedRemountOnWheel = limitFireRate(this.remountOnWheel, 500);

		this.state = {
			heroIsOpen: true,
			heroIsMounted: true
		}
	}

	dismissHero = () => {
		this.setState({heroIsOpen: false});

		this.timerID = setTimeout(() => {
			this.setState({
				heroIsMounted: false,
				heroIsOpen: false
			});
		}, 500);
	}

	mountHero() {
		this.setState({
			heroIsMounted: true,
		});

		this.timerID = setTimeout(() => {
			this.setState({heroIsOpen: true});
		}, 200);
	}

	remountOnWheel = (e) => {
		const {heroIsMounted} = this.state;
		const isUpscroll = e.deltaY < 0;

		if(window.scrollY === 0 && !heroIsMounted && isUpscroll) {
			this.mountHero();
		}
	}

	componentDidMount() {
		window.addEventListener('wheel', this._limitedRemountOnWheel.callback)
	}

	componentWillUnmount() {
		window.removeEventListener('wheel', this._limitedRemountOnWheel.callback);
		clearTimeout(this._limitedRemountOnWheel.timer);
		clearTimeout(this.timerID);
	}

	render() {
		return this.state.heroIsMounted ?
			<Hero dismissHero={this.dismissHero} isOpen={this.state.heroIsOpen} />
			:
			null;
	}
}

export default HeroManager;