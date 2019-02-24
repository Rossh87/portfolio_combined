import React from 'react';

// This data container will not be rendered directly by a 'Route'
// component, so we use HOC to add router awareness
import {withRouter} from 'react-router-dom';

// Get util to make keys for elements in iterable
import shortid from 'shortid'

// Get local components
import PrettyError from 'legos/PrettyError';
import LoadingGraphic from 'graphicComponents/LoadingGraphic';
import ProjectListGrid from 'components/ProjectListGrid';


// Get services
import ajaxHandler from 'services/ajaxHandler';

class ProjectLoader extends React.Component {
	state = {
		isPending: false,
		error: null,
		data: []
	}


	async componentDidMount() {
		// Get info from React Router to build correct URL.
		const projectType = this.props.match.params.projectType;

		this.setState({isPending: true});

		// Ajax handler hardcoded to hit API route, only need final path
		// extension for now
		try {
			const projectsArray = await ajaxHandler('get', `projects/${projectType}`);
			this.setState({
				data: [...projectsArray],
				isPending: false
			});	
		}

		// <ErrorBoundary> won't catch async errors, so we handle manually.
		catch(error) {
			this.setState({
				isPending: false,
				error
			});
		}
	}

	renderChildrenWithData() {
		const {children} = this.props;
		const {data} = this.state;
		const child = React.Children.only(children);

		const val = React.cloneElement(child, {
			key: shortid.generate(),
			data,
			...this.props
		});

		return val;
	}

	conditionalRender() {
		const {isPending, data, error} = this.state;

		if(isPending && !error) {
			return(
				<LoadingGraphic />
			)
		}

		else if(error) {
			return(
				<PrettyError error = {error} />
			)
		}

		else if(!error && data.length) {
			return this.renderChildrenWithData()
		}

		return null;
	}

	render() {
		return(
			<React.Fragment>
				{this.conditionalRender()}
			</React.Fragment>
		)
	}
}

export default withRouter(ProjectLoader);