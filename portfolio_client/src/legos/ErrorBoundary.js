import React from 'react';

// Get fallback UI component
import PrettyError from 'legos/PrettyError';

class ErrorBoundary extends React.Component {
	state = {
		currentError: null
	}

	static getDerivedStateFromError(err) {
		return {currentError: err};
	}

	componentDidCatch(err, info) {
		console.log(err, info);
	}

	render() {
		return this.state.currentError ?
			<PrettyError currentError={this.state.currentError} />
			:
			<React.Fragment>
				{this.props.children}
			</React.Fragment>
	}
}

export default ErrorBoundary;