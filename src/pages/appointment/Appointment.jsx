import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import '../../styles/styles.css';
import Calender from '../../components/organizations/Calender';
import AvailableTime from '../../components/molecules/AvailableTime';

const newSlot={day:'',time:''};


const Appointment = () => {
	const [selectDay, setSelectDay] = useState('');
	const [timeSlot,setTimeSlot]=useState(newSlot);
	
	const [startDate, setStartDate] = useState(new Date());
	const { doctor } = useLocation()?.state;

	// console.log(startDate,doctor?.availibility);


  const d=moment(startDate).format('LLLL');
	const day= moment(startDate).format('llll').split(',')[0].toLocaleLowerCase();

	// console.log(selectDay,timeSlot);

	useEffect(()=>{
		for (const key in doctor?.availibility) {
			if(key===day){
				setSelectDay(key);
				newSlot.day=key;
				newSlot.time= doctor.availibility[key];

			}
			
		}

	},[day,startDate])

	console.log(newSlot);
	
	return (
		<div className='h-screen container mx-auto xl:px-10'>
			<p>Appointment page</p>
			<div className='grid grid-cols-3'>
				<div>
				
					<Calender doctor={doctor} startDate={startDate} setStartDate={setStartDate}/>
				</div>
				<div className='col-span-2'>
          <p>{d}</p>
					{selectDay && 
					<AvailableTime slot={newSlot}/>
					
					}
				
				</div>
			</div>
		</div>
	);
};

export default Appointment;
