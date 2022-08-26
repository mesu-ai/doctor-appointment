import React from 'react';
import { useNavigate } from 'react-router-dom';
import defaultImg from '../../assets/john.png';
import Card from '../atoms/Card';

const DoctorCard = ({ doctor = {} }) => {
	const navigate = useNavigate();
	const handleAppointment = (doctor) => (event) => {
		navigate('/appointment', { state: { doctor: doctor } });
	};

	return (
			<Card className='bg-whitesmoke shadow rounded-md mt-3 grid grid-cols-3 py-5 px-5'>
				<div className='col-span-2 flex items-center'>
					<img
						className='rounded-full bg-ghostwhite'
						src={defaultImg}
						height='50px'
						width='50px'
						alt='Doctor_Photo'
					/>
					<div className='text-start ml-3'>
						<p className='text-darkblue text-lg font-semibold'>{doctor?.name}</p>
						<p className='text-darkblue'>{doctor?.org}</p>
					</div>
				</div>
				<div className='my-auto'>
					<button
						onClick={handleAppointment(doctor)}
						className='bg-info text-white px-3 py-2 rounded-lg'
						type='button'
					>
						Fix Appointment
					</button>
				</div>
			</Card>
		
	);
};

export default DoctorCard;
