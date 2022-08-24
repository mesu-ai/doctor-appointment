import moment from 'moment';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { generateTimeSlot } from '../../utils/generateTimeSlot';

const AvailableTime = ({ slot }) => {
	// const { doctor } = useLocation()?.state;
	console.log(slot);

	const availableTime = `${slot.time}`;
	// console.log(doctor);
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
			<p className='text-2xl font-bold'>Select Available Slot</p>
			<div className='mt-5 shadow-lg rounded-xl bg-ghostwhite p-4'>
				<select className='w-full outline-none p-3 rounded-xl text-sm text-slategray font-medium'>
					<option defaultChecked>Select Available Slot</option>
					{timeSlots.slice(1, timeSlots.length - 1).map((slot, index) => (
						<option key={index} value={slot}>
							{slot}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};

export default AvailableTime;
