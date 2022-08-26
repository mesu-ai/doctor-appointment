import moment from 'moment';
import React from 'react';
import Card from '../atoms/Card';
import HeadingText from '../atoms/HeadingText';

const SheduleInfo = ({ date, selectSlot = '' }) => {
	return (
		<div>
			<HeadingText title='Shedule For' />
			<Card className='rounded-xl text-center mt-3'>
				<p className='rounded-t-xl py-2 font-medium lg:text-2xl text-lg mb-5 bg-cyan-100 text-red-600'>
					{moment(date).format('dddd')}
				</p>
				<div className='h-32'>
					<p className='shadow-lg rounded-md uppercase font-bold text-darkblack ring-2 px-4 py-3 w-fit mx-auto'>
						{selectSlot}
					</p>
					<p className='mt-3 text-darkblue text-2xl flex justify-center items-center font-semibold'>
						{moment(date).format('LL')}
					</p>
				</div>
			</Card>
		</div>
	);
};

export default SheduleInfo;
