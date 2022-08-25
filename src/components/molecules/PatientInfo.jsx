import React, { useState } from 'react';
import { Formik, Form} from 'formik';
import InputField from '../atoms/InputField';
import SectionDivider from '../atoms/SectionDivider';
import { validationSchema } from '../../validation/validationSchema';
import HeadingText from '../atoms/HeadingText';
import Confirm from '../organizations/Confirm';

const initialValues = { name: '', phone: '', reason: '' };

const PatientInfo = () => {
  const [open, setOpen] = useState(false);

	const handleSubmit = (values) => {
    setOpen(true);
    
		console.log(values);
	};
	return (
		<div>
			
      <HeadingText title='Patient Informations' className=' my-5 text-darkblue font-bold'/>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				<Form className='space-y-3'>
					<SectionDivider>
						<InputField label='Patient Name' type='text' name='name' placeholder='Mr. Abcd' />
						<InputField label='Phone Number' type='text' name='phone' placeholder='01100000000'/>
					</SectionDivider>

					<InputField label='Visit Reason' type='text' name='reason' placeholder='Eye Problem'/>
					<InputField label='Address' type='text' name='address'placeholder='3/A Dhaka'/>

					<div>
						<button
							className='mt-10 text-xl font-bold bg-action rounded-lg w-full py-3 text-white'
							type='submit'
						>
							Book An Appointment
						</button>
					</div>
				</Form>
			</Formik>
      <Confirm open={open} setOpen={setOpen}/>
      
		</div>
	);
};

export default PatientInfo;
