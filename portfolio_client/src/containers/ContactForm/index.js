import React from 'react';
import CustomFlash from 'legos/CustomFlash';

// Get local components
import BaseForm from 'legos/BaseForm';

// Get Ajax handler and form validator
import ajaxHandler from 'services/ajaxHandler';
import formValidation from 'services/formValidation';

import './styles.scss';

class ContactForm extends React.Component {
	constructor(props) {
		super(props);

		this.state =  {
			flashMessage:''
		}

		this.handleSubmit = this.handleSubmit.bind(this);
	}
	

	async handleSubmit(formState) {
		try {
			await ajaxHandler('post', 'contact', formState);
			this.setState({flashMessage: 'MessageSent!'})
		}

		catch(err) {
			this.setState({flashMessage: 'Oops!  Something glitched, please check your info and try again.'});
		}
	}

	validateFormData = (formData) => {
		const formError = formValidation(formData);

		// Prevent any network request if there is a problem with 
		// form data
		if(formError) {
			this.setState({flashMessage: formError});
		}

		return formError;
	}

	render() {
		// Property 'fields' on <baseform> accepts an array of objects.
		// Each object describes the field that will be present in 
		// the returned form.  Each field object must have a name (string) and type
		// (string).
		// Acceptable types are 
		// currently 'text' and 'textarea';
		return(
			<section className="c-contact">
				<div className="c-contact_form">
					<CustomFlash duration={10000} message={this.state.flashMessage}/>
					<BaseForm
						validateFormData={this.validateFormData}
						handleFormSubmission={this.handleSubmit}
						fields={[
							{name:'name', type: 'input'}, 
							{name:'email', type: 'input'},
							{name:'message', type: 'textarea'}
						]}
					/>
				</div>

				<div className="c-contact_text">
					<p>
						Hiring?  I'm interested!  Hacking?  I'd love to help!  Learning?  Me too (forever)!
						Inspiration is nine-tenths collaboration.  If you have a project, a problem, or even just a 
						story on your mind, it would be my pleasure to listen.  Drop me a line in the form next door,
						or find me on any of the social media below.
					</p>
				</div>
			</section>
			
		);
	}
}

export default ContactForm;