import React from 'react';
import Card from '../atoms/Card';
import HeadingText from '../atoms/HeadingText';

const DoctorInfo = () => {
	return (
		<div>
			<HeadingText title='Appointment to' />
			<Card className='py-7 px-5 mt-3'>
				<div className='flex items-center '>
					<img src='' alt='' />
					<div className='ml-3 text-start'>
						<p className='text-darkblue font-bold text-xl'>Dr . lfla</p>
						<p className='text-darkblack font-semibold'>organization</p>
					</div>
				</div>

				<p className='text-slategray font-medium text-start mt-4'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ipsum rerum quidem aliquam
					similique, sint dolor nihil iusto totam blanditiis, quae ratione error repellendus impedit
					molestias quas, molestiae at accusamus?
				</p>
			</Card>
		</div>
	);
};

export default DoctorInfo;
