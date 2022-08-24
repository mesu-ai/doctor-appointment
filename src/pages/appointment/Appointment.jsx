import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import '../../styles/styles.css';
import Calender from '../../components/organizations/Calender';
import AvailableTime from '../../components/molecules/AvailableTime';

// const weekdays = {
// 	sun: 0,
// 	mon: 1,
// 	tue: 2,
// 	wed: 3,
// 	thu: 4,
// 	fri: 5,
// 	sat: 6,
// };

const Appointment = () => {
	const [selectDay, setSelectDay] = useState('');
	
	const [startDate, setStartDate] = useState(new Date());
	const { doctor } = useLocation()?.state;

	console.log(startDate,doctor?.availibility);


  const d=moment(startDate).format('LLLL');
	const day= moment(startDate).format('llll').split(',')[0].toLocaleLowerCase();
	
	console.log(selectDay);

	return (
		<div className='h-screen container mx-auto xl:px-10'>
			<p>Appointment page</p>
			<div className='grid grid-cols-3'>
				<div>
				
					<Calender doctor={doctor} startDate={startDate} setStartDate={setStartDate}/>
				</div>
				<div className='col-span-2'>
          <p>{d}</p>
					{d && 
					<AvailableTime day={day} doctor={doctor} availibility={doctor.availibility.wed}/>
					
					}
					


				
				</div>
			</div>
		</div>
	);
};

export default Appointment;
