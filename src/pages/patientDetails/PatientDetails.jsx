import React from 'react';
import Card from '../../components/atoms/Card';
import DoctorInfo from '../../components/molecules/DoctorInfo';
import SheduleInfo from '../../components/molecules/SheduleInfo';

const PatientDetails = () => {
	return (
		<div className='container mx-auto grid grid-cols-3'>
			<div className='col-span-2'>form</div>
      <div className='space-y-4'>
      <SheduleInfo/>
      <DoctorInfo/>

      </div>
		</div>
	);
};

export default PatientDetails;
