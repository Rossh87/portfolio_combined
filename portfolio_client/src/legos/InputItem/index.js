import React from 'react';

import './styles.scss';

const InputItem = (props) => {

	const {
		name,
		id,
		value,
		handleChange,
		hasFocus, 
		handleFocus, 
		handleBlur,
		type
	} = props;

	const buildInput = () => {
		return type === 'textarea' ?
			<textarea
				rows='10'
				cols='40'
				onFocus={handleFocus}
				onBlur={handleBlur}
				className='c-text-input_area'
				id={name + id}
				onChange={handleChange}
				name={name}
				value={value}
			/>
			:
			<input 
				onFocus={handleFocus}
				onBlur={handleBlur}
				className='c-text-input_input'
				id={name + id}
				onChange={handleChange}
				name={name}
				value={value}
			/>
	}
	
	return(
		<div className='c-text-input'>
			<label 
				htmlFor={name + id}
				className={hasFocus || value ? 
					'c-text-input_label s-has-focus'
					: 'c-text-input_label'
				}
			>
				{name}
			</label>

			{buildInput()}
		</div>
	)
}

export default React.memo(InputItem);