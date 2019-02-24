import React from 'react';

// Function to limit fire rate of scroll listener callbacks
import limitFireRate from 'services/limitFireRate';

import './styles.scss';

class AnimatedComponentSwap extends React.Component {
	constructor(props) {
		super(props);
		
		this._limitedScrollListener = limitFireRate(this.scrollListener, 500);

		this.scrollCount = 0;

		this.itemCount = this.props.children.length;

		this.state = {
			isShownIndex: 0
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		const {isShownIndex} = this.state;

		// Because we'll be calling setState on scroll (potentially many times),
		// We restrict re-rendering to changes that affect UI.
		return isShownIndex !== nextState.isShownIndex || this.props !== nextProps;
	}

	componentDidMount() {
		window.addEventListener('scroll', this._limitedScrollListener.callback)
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this._limitedScrollListener.callback);
		clearTimeout(this._limitedScrollListener.timer);
	}

	scrollListener = (e) => {
		console.log('trigger')
		window.scrollTo(0, 0);
		this.scrollCount++;
		this.manageIndexOnScroll();
	}

	manageIndexOnScroll() {
		const {scrollCount, itemCount} = this;

		if(scrollCount <= itemCount - 1){
			this.incrementIndex();
		}

		if(scrollCount > itemCount){
			window.removeEventListener('scroll', this._manageScrollListener);
			this.props.dismissHero();
			window.scrollTo(0, 50);
		}
	}


	incrementIndex = () => {
		const len = this.props.children.length;
		const newIndex = (this.state.isShownIndex + 1) % (len)
		const newState = newIndex < 0 ?
			len - 1 : newIndex

		this.setState({isShownIndex: newState});
	}

	decrementIndex = () => {
		const len = this.props.children.length;
		const newIndex = (this.state.isShownIndex - 1) % (len)
		const newState = newIndex < 0 ?
			len - 1 : newIndex;

		this.setState({isShownIndex: newState});
	}

	renderChildren() {
		const {isShownIndex} = this.state;
		const SelectedComponent = this.props.children[isShownIndex];

		return(
			<div className={this.props.receivedClassName}>
				{React.cloneElement(SelectedComponent, {
						incrementIndex: this.incrementIndex,
						decrementIndex: this.decrementIndex
					})
				}
			</div>
		)
	}

	render() {

		return(
			<React.Fragment>
				{this.renderChildren()}
			</React.Fragment>
		)
	}
}

export default AnimatedComponentSwap;
