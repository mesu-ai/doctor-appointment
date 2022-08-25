import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import '../../styles/styles.css';
import Calender from '../../components/organizations/Calender';
import AvailableTime from '../../components/molecules/AvailableTime';

const newSlot = { day: '', time: '' };

const Appointment = () => {
	const [selectDay, setSelectDay] = useState('');
	// const [timeSlot,setTimeSlot]=useState(newSlot);

	const [startDate, setStartDate] = useState(new Date());
	const { doctor } = useLocation()?.state;

	// console.log(startDate,doctor?.availibility);

	const date = moment(startDate).format('LLLL');
	const day = moment(startDate).format('llll').split(',')[0].toLocaleLowerCase();

	// console.log(selectDay,timeSlot);

	useEffect(() => {
		for (const key in doctor?.availibility) {
			if (key === day) {
				setSelectDay(key);
				newSlot.day = key;
				newSlot.time = doctor.availibility[key];
			}
		}
	}, [day, doctor.availibility, startDate]);

	console.log(newSlot);

	return (
		<div className='min-h-screen container mx-auto xl:px-10'>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-7'>
				<div className=''>
					<Calender doctor={doctor} startDate={startDate} setStartDate={setStartDate} />
				</div>
				<div className='mt-40 md:mt-10 md:col-span-2'>
					{selectDay && <AvailableTime slot={newSlot} date={date} />}
				</div>
			</div>
		</div>
	);
};

export default Appointment;
