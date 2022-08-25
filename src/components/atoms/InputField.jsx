import React from 'react';
import { Field, ErrorMessage } from 'formik';

const InputField = ({label='',type='',name='', placeholder=''}) => {
	return (
		<div className='text-start'>
			<label className='text-xl font-semibold' htmlFor={name}>
				{label}
			</label>
			<Field
				name={name}
				type={type}
        placeholder={placeholder}
				className='text-lg mt-2 py-3 px-3 rounded-lg outline-0 w-full  font-medium bg-ghostwhite
             placeholder:text-slategray'
			/>
			<ErrorMessage className='text-red-500' name={name} component='div' />
		</div>
	);
};

export default InputField;
