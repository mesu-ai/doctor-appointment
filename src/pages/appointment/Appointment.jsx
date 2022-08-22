import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

const Appointment = () => {
	// const [startDate, setStartDate] = useState(new Date());
	const [startDate, setStartDate] = useState(null);
	const { doctor } = useLocation()?.state;

	// function disabledDate(current) {
	// 	// Can not select sundays and predfined days
	// 	return moment(current).day() === 0;
	// }
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var dx = new Date('Sunday');
var dayName = days[dx.getDay()];
console.log(dayName);
  

 const d=new Date('Friday');
 console.log(d.getDay(d))
	const date = new Date();
	const isWeekday = (date) => {
		const day = date.getDay(date);
    // console.log(day);
		return day !== 1 && day !== 2 && day !== 4 && day !== 5 && day !== 6;
	};

	// console.log(doctor);
	return (
		<div className='h-screen'>
			<p>Appointment page</p>
			<div className='grid grid-cols-2'>
				<div>
					<p>mesu</p>
				</div>
				<div className='  '>
					{/* <DatePicker
						selected={startDate}
						onChange={(date) => setStartDate(date)}
						filterDate={isWeekday}
						placeholderText='Select a weekday'
					/> */}
					<DatePicker
						open
						// todayButton="Today"
						filterDate={isWeekday}
						selected={startDate}
						onChange={(date) => {setStartDate(date);
                }}
						// showTimeSelect
						timeFormat='HH:mm'
						timeIntervals={15}
						timeCaption='time'
						dateFormat='MMMM d, yyyy h:mm aa'
					/>
				</div>
			</div>
		</div>
	);
};

export default Appointment;
