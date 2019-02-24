function validateEmailFormat(string) {
	const checker = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;

	return checker.test(string);
}

function validateFieldsFilled(obj) {
	for(let key in obj) {
		if(!obj[key]) {
			return false;
		}
	}
}

export default function validateFormObj(formData) {
	let error = null;

	const messageMap = {
		emptyField: 'Please complete all fields before submitting.',
		invalidEmail: 'Oops, that email doesn\'t appear to be valid.  Please try again.'
	}

	if(!validateFieldsFilled(formData)) {
		error = messageMap.emptyField;
	}

	if(!validateEmailFormat(formData.email)) {
		error = messageMap.invalidEmail;
	}

	return error;
}