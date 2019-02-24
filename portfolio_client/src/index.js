import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

// Get shared styles. 
import 'commonStyles/_base.scss';
import 'commonStyles/_colors.scss';

// Get local components
import App from './containers/App';
import ErrorBoundary from 'legos/ErrorBoundary';

const root = document.querySelector('#root');

ReactDOM.render(
	<Router>
		<ErrorBoundary>	
			<App />
		</ErrorBoundary>
	</Router>,
	root
);