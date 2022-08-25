import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../../components/atoms/Card';
import DoctorInfo from '../../components/molecules/DoctorInfo';
import PatientInfo from '../../components/molecules/PatientInfo';
import SheduleInfo from '../../components/molecules/SheduleInfo';

const PatientDetails = () => {
	const { doctor, date, selectSlot } = useLocation()?.state;
	
	return (
		<div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-7 my-10'>
			<Card className='px-10 pb-10 md:col-span-2'>
				<PatientInfo />
			</Card>
			<div className='space-y-4'>
				<SheduleInfo date={date} selectSlot={selectSlot} />
				<DoctorInfo doctor={doctor} />
			</div>
		</div>
	);
};

export default PatientDetails;
