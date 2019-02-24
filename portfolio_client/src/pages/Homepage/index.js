import React from 'react';

// Get local components

import ContactForm from 'containers/ContactForm';
import Divider from 'legos/Divider';
import ProjectTypeGrid from 'components/ProjectTypeGrid';
import HomeAboutSection from 'components/HomeAboutSection';

const Homepage = props => {
	return(
		<React.Fragment>
			<HomeAboutSection />
			<Divider id='skills'>Skills</Divider>
			<ProjectTypeGrid />
			<Divider id='contact'>Contact</Divider>
			<ContactForm />
		</React.Fragment>
	)
}

export default Homepage;