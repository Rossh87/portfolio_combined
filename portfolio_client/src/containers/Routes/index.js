import React from 'react';
import {Route, Switch} from 'react-router-dom';

// local components
import Homepage from 'pages/Homepage';
import ProjectListGrid from 'components/ProjectListGrid';
import Navbar from 'containers/Navbar';
import Footer from 'components/Footer';

import './styles.scss';

class Routes extends React.Component {
	render() {
		return(
			<React.Fragment>
				<Navbar />
				
				<div className="wrapper">
					<Switch>

						<Route exact path='/' component={Homepage} />

						<Route path='/projects/:projectType' component={ProjectListGrid} />

					</Switch>
				</div>

				<Footer />
			</React.Fragment>

		)
	}
}

export default Routes;