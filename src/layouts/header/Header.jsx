// import { HEADER_HEIGHT } from "../../config/constants";
import icon from '../../assets/icon.png';
import phone from '../../assets/phone.png';

const Header = () => {
	return (
		<div className='w-full bg-ghostwhite  py-4'>
			<div className='container mx-auto px-4 sm:px-2 flex justify-between'>
				<div className='flex items-center '>
					<img src={icon} alt='' style={{ height: '60px' }} />
					<p className='text-start text-darkblue   text-3xl font-bold'>Appointment</p>
				</div>
				<div>
					<p className='text-lg font-semibold text-info'>Help Center</p>
					<div className='flex items-center'>
						<img src={phone} alt='call_icon' className='h-5' />
						<p className='mx-2 text-xl font-bold text-green-500'> 10616</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
