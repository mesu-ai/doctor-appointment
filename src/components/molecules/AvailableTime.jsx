import moment from 'moment';
import React, {useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateTimeSlot } from '../../utils/generateTimeSlot';
import Card from '../atoms/Card';
import HeadingText from '../atoms/HeadingText';

const AvailableTime = ({ slot, date, doctor }) => {
	const [selectSlot, setSelectSlot] = useState('');
	const navigate = useNavigate();

	const availableTime = `${slot?.time}`;

	// get start and end time of slot
	const stime = moment(`${availableTime.split('-')[0]}`, 'h:mm A').format('HH:mm');
	const etime = moment(`${availableTime.split('-')[1]}`, 'h:mm A').format('HH:mm');

	let value = { interval: '00:15', startTime: stime, endTime: etime };

	// generate avalable slot
	const timeSlots = generateTimeSlot(value);

	// continue button handeler
	const handleContinue = () => {
		if(!selectSlot){
			alert('Select Time Slot');
			document.getElementById('continueBtnId').setAttribute('disabled');
			
		}
		navigate('/patient-details', { state: { doctor: doctor, date: date, selectSlot: selectSlot } });
	};

	
	return (
		<div>
			<Card className='rounded-md pb-8'>
				<div className='px-10 py-5 flex justify-between shadow-md'>
					<div>
						<HeadingText title='Available Time Slot' className='text-darkblue font-bold' />
						<p className='text-start text-lg font-semibold'>{availableTime} </p>
					</div>

					<div>
						<p className='text-red-700 text-lg font-semibold border-b-2 border-darkblack'>
						{moment(date).format('dddd')}, {moment(date).format('LL')}
							
						</p>
					</div>
				</div>

				<div className='px-10 mt-2 max-h-80 overflow-auto'>
					<ul className='mx-4 my-5 grid md:grid-cols-3 xl:grid-cols-4 grid-cols-2 gap-5 xl:gap-3'>
						{timeSlots.slice(1, timeSlots.length - 1).map((slot, index) => (
							<button
								key={index}
								onClick={() => setSelectSlot(slot)}
								// value={slot}
								className='focus:bg-info hover:bg-info hover:text-white focus:text-white font-bold text-darkblack ring-2 ring-cyan-500 w-fit px-4 py-2 rounded-md'
							>
								{slot}
							</button>
						))}
					</ul>
				</div>
				<div className='flex justify-between mr-5 mt-5 px-10'>
					<p className='text-lg font-semibold'>Select A Time Slot For Coninue Next <span className='text-red-700 text-2xl font-extrabold'>*</span></p>
					<button
					 id='continueBtnId'
						onClick={handleContinue}
						type='button'
						className='text-white bg-action px-4 py-3 text-xl rounded-md'
					>
						Continue
					</button>
				</div>
			</Card>
		</div>
	);
};

export default AvailableTime;
