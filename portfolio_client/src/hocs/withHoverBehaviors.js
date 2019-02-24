import React from 'react'

// Get helper function to limit fire rate.
// First arg is function to limit, second arg
// is delay between firing (in ms).
import limitFireRate from 'services/limitFireRate';

// All component animations will be governed by an 'isHovered' prop.  Normally this will trigger
// On mouseEnter/mouseLeave, but for mobile or mouse-less screens it should trigger given a scroll position.
// This HOC governs that behavior by appropriately passing 'isHovered'.

function withHoverBehaviors(Wrapped) {
	class Hover extends React.Component {
		constructor(props) {
			super(props);

			this.HOCRef = React.createRef();

			this.state = {
				hasScrollListener: false,
				isHovered: false
			}

			// Gate fire rate of listener callback to prevent excessive calculations
			// on scroll
			this._limitedAddScrollListener = limitFireRate(this.addScrollListener, 200);
			this._limitedRemoveScrollListener = limitFireRate(this.removeScrollListener, 200);
			this._limitedControlHoverForMobile = limitFireRate(this.controlHoverForMobile, 200);
		}

		componentDidMount() {
			// Add scroll-based hovering any time a touch event occurs
			window.addEventListener('touchstart', this._limitedAddScrollListener.callback);

			// Add scroll-based hovering any time viewport is smaller
			// than a given width.
			if(window.innerWidth < 500) {
				this._limitedAddScrollListener.callback()
			};

			// Remove scroll-based hovering if wheel fires, as this means a 
			// mouse is in use.
			window.addEventListener('wheel', this._limitedRemoveScrollListener.callback);

			// Add listener to implement above logic on viewport resize.
			window.addEventListener('resize', this.resizeCallback);
		}

		componentWillUnmount() {
			// Clean up listeners on unmount
			if(this.state.hasScrollListener) {
				window.removeEventListener('scroll', this._limitedControlHoverForMobile.callback);
			}

			window.removeEventListener('resize', this.resizeCallback);
			window.removeEventListener('touchstart', this._limitedAddScrollListener.callback);
			window.removeEventListener('wheel', this._limitedRemoveScrollListener.callback);


			// Clear timers used in rate-limited callbacks
			clearTimeout(this._limitedAddScrollListener.timer);
			clearTimeout(this._limitedRemoveScrollListener.timer);
			clearTimeout(this._limitedControlHoverForMobile.timer);
		}

		resizeCallback = () => {
			if(window.innerWidth < 500) {
				this.addScrollListener()
			};
		}

		addScrollListener = () => {
			const {hasScrollListener} = this.state;

			// Ensure that window resize does not lead to multiple listeners
			if(!hasScrollListener) {
				window.addEventListener('scroll', this._limitedControlHoverForMobile.callback);
				this.setState({hasScrollListener: true});
			}
		}

		removeScrollListener = () => {
			const {hasScrollListener} = this.state;

			if(hasScrollListener) {
				window.removeEventListener('scroll', this._limitedControlHoverForMobile.callback);
				this.setState({hasScrollListener: false});
			}
		}

		controlHoverForMobile = () => {
			const height = window.innerHeight;
			const width = window.innerWidth;
			const hasBroken = width > 495;

			// Shenanigans here to increase the height of the 'trigger'
			// area if the layout has gone horizontal for wider screens.
			const breakPoint = hasBroken ?
				height / 2
				:
				height / 3;

			let {top, bottom} = this.HOCRef.current.getBoundingClientRect();

			if(hasBroken) {
				top -= 50;
				bottom += 50;
			}
			

			if(breakPoint > top && breakPoint <= bottom) {
				this.setState({isHovered: true});
			}

			if(breakPoint > bottom || breakPoint < top){
				this.setState({isHovered: false});
			}
		}

		handleMouseEnter = () => {
			this.setState({isHovered: true});
		}

		handleMouseLeave = () => {
			this.setState({isHovered: false});
		}

		render() {
			return(
				<Wrapped
					{...this.props}
					HOCRef={this.HOCRef}
					isHovered={this.state.isHovered}
					handleMouseEnter={this.handleMouseEnter}
					handleMouseLeave={this.handleMouseLeave}
				/>
			)
		}
	}

	return Hover;
}

export default withHoverBehaviors;