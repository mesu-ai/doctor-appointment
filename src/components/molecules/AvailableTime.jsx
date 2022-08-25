import moment from 'moment';
import React from 'react';
import { generateTimeSlot } from '../../utils/generateTimeSlot';
import Card from '../atoms/Card';
import HeadingText from '../atoms/HeadingText';

const AvailableTime = ({ slot, date }) => {
	// const { doctor } = useLocation()?.state;
	console.log(slot);

	const availableTime = `${slot.time}`;
	console.log(availableTime);
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
			{/* <p className='text-2xl font-bold'>Select Available Slot</p> */}
			{/* <div className='mt-5 shadow-lg rounded-xl bg-ghostwhite p-4'>
        <select className='w-full outline-none p-3 rounded-xl text-sm text-slategray font-medium'>
          <option defaultChecked>Select Available Slot</option>
          {timeSlots.slice(1, timeSlots.length - 1).map((slot, index) => (
            <option
              key={index}
              value={slot}
            >
              {slot}
            </option>
          ))}
        </select>
      </div> */}
			<Card className='rounded-md pb-8'>
				<div className='px-10 py-5 flex justify-between shadow-md'>
					<div>
						<HeadingText title='Available Time Slot' className='text-darkblue font-bold' />
						<p className='text-start text-lg font-semibold'>{availableTime} </p>
					</div>

					<div>
						<p className='text-blue-700 text-lg text-bold border-b border-darkblack'>{date}</p>
					</div>
				</div>

				<div className='px-10 mt-2 max-h-80 overflow-auto'>
					<ul className='mx-4 my-5 grid md:grid-cols-3 2xl:grid-cols-4 grid-cols-2 gap-5 xl:gap-3'>
						{timeSlots.slice(1, timeSlots.length - 1).map((slot, index) => (
							<li
								key={index}
								value={slot}
								className='font-bold text-darkblack ring-2 ring-cyan-500 w-fit px-4 py-2 rounded-md'
							>
								{slot}
							</li>
						))}
					</ul>
				</div>
				<div className='flex justify-end mr-5 mt-5'>
					<button type='button' className='text-white bg-action px-4 py-3 text-xl rounded-md'>
						Continue
					</button>
				</div>
			</Card>
		</div>
	);
};

export default AvailableTime;
