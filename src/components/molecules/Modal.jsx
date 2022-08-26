import ModalHeading from '../atoms/ModalHeading';

const Modal = ({ open, setOpen, title = '', children }) => {
	return (
		<div>
			{open && (
				<div className='flex justify-center items-center fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-screen w-full'>
					<div className='relative  mx-auto py-5 border w-1/2 shadow-lg  bg-white'>
						{/* modal head */}
						<ModalHeading title={title} setOpen={setOpen} />
						<hr className='mt-4 border-t border-mercury' />

						{/* modal body */}
						<div className='mt-10 text-center'>{children}</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Modal;
