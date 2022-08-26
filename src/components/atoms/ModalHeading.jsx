import cancle from '../../assets/cancle.png';
const ModalHeading = ({ title = '', setOpen = Boolean }) => {
	return (
		<div className="flex justify-between px-7">
			<p className="font-bold text-2xl text-darkblack">{title}</p>
			<button type="button" onClick={() => setOpen(false)}>
				<img src={cancle} alt="" className='h-7' />
			</button>
		</div>
	);
};

export default ModalHeading;
