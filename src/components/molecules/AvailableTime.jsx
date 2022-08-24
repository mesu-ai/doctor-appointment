import moment from 'moment';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { generateTimeSlot } from '../../utils/generateTimeSlot';

const AvailableTime = ({doctor,day,availibility}) => {
  // const { doctor } = useLocation()?.state;
  console.log(availibility);
  
	const availableTime = `${doctor?.availibility?.wed}`;
  console.log(doctor);
	const stime = moment(`${availableTime.split('-')[0]}`, 'h:mm A').format('HH:mm');
	const etime = moment(`${availableTime.split('-')[1]}`, 'h:mm A').format('HH:mm');
	console.log(stime);
	
	let value = {
		interval: '00:15',
		startTime: stime,
		endTime: etime,
	};

	const timeSlots = generateTimeSlot(value);
	console.log(timeSlots);
	return (
		<div>
			<p>Calender</p>
			{timeSlots.slice(1, timeSlots.length - 1).map((slot, index) => (
				<ul key={index}>
					<li>{slot}</li>
				</ul>
			))}
		</div>
	);
};

export default AvailableTime;