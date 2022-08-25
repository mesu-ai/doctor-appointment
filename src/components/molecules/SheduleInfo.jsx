import React from 'react';
import Card from '../atoms/Card';
import HeadingText from '../atoms/HeadingText';

const SheduleInfo = () => {
	return (
		<div>
			<HeadingText title='Shedule For' />
			<Card className='rounded-xl text-center mt-3'>
				<p className='rounded-t-xl py-2 font-medium lg:text-2xl text-lg mb-5 bg-cyan-100 text-red-600'>
					Day name
				</p>
				<div className='h-32'>
					<p className='text-darkblue text-3xl flex justify-center items-center font-bold'>
						day ,month, year
					</p>
				</div>
			</Card>
		</div>
	);
};

export default SheduleInfo;
