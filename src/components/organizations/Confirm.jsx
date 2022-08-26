import React from 'react';
import Modal from '../molecules/Modal';
import success from '../../assets/sucess.png'

const Confirm = ({open , setOpen}) => {
	return (
		<Modal open={open} setOpen={setOpen} title='Doctor Appointment'>
			<div className='mx-auto flex items-center justify-center '>
				<img src={success} alt="" className='h-20' />
			</div>

			<div className='mt-2 px-7 py-3'>
				<p className='text-lg  font-medium text-darkblue'>Booking Successfully</p>
				<p className='text-sm text-gray-500'>It may take some time to receive a response.</p>
			</div>
			<div className='items-center px-10 py-3'>
				<button 
				onClick={()=>setOpen(false)}
					type='button'
					className='px-5 py-3 text-white bg-action text-base font-medium rounded-xl  '
				>
					Ok
				</button>
			</div>
		</Modal>
	);
};

export default Confirm;
