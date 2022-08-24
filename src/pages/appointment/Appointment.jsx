import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import '../../styles/styles.css';

const weekdays = {
	sun: 0,
	mon: 1,
	tue: 2,
	wed: 3,
	thu: 4,
	fri: 5,
	sat: 6,
};

const Appointment = () => {
	// const [available, setAvailable] = useState([]);
	// const [startDate, setStartDate] = useState(new Date());
	const [startDate, setStartDate] = useState(new Date());
	const { doctor } = useLocation()?.state;

	console.log(startDate,doctor?.availibility);

	const checkAvailableDay = () => {
		const availableDays = [];

		for (const key in weekdays) {
			const dayNumber = weekdays[key];

			for (const available in doctor.availibility) {
				if (available === key) {
					// setAvailable(...available,dayNumber);
					availableDays.push(dayNumber);
					// console.log('match');
				} else if (available !== key) {
					// console.log('unmatch');
				}
			}
		}
		return availableDays;
	};

	const isWeekday = (current) => {
		const result = checkAvailableDay();

		return (
			moment(current).day() === result[0] ||
			moment(current).day() === result[1] ||
			moment(current).day() === result[2] ||
			moment(current).day() === result[3] ||
			moment(current).day() === result[4] ||
			moment(current).day() === result[5] ||
			moment(current).day() === result[6]
		);
	};

  const handleDateSelect=()=>{
    
  }

  const d=moment(startDate).format('LLLL');
  const ddd=startDate.getTime();
  console.log(ddd);

  // const convert = (selected) => {
  //   const day = selected.getDate();
  //   const month =
  //     selected.getMonth() >= 10
  //       ? selected.getMonth() + 1
  //       : `0${selected.getMonth() + 1}`;
  //   const year = selected.getFullYear();

  //   return `${year}/${month}/${day}`;
  // };

	// if(startDate){
	// 	document.getElementById('datePickerId').setAttribute(showTimeSelect)
	// }

	// console.log(doctor);
	return (
		<div className='h-screen container mx-auto xl:px-10'>
			<p>Appointment page</p>
			<div className='grid grid-cols-3'>
				<div>
					<DatePicker
						className='w-full'
						wrapperClassName='w-full py-2 '
						open
						// todayButton="Today"
						filterDate={isWeekday}
						selected={startDate}
            onSelect={handleDateSelect}
						onChange={(date) => {
							setStartDate(date);
              console.log(date);
						}}
						minDate={moment().toDate()}
						showTimeSelect
						// timeFormat='HH:mm'
						// timeIntervals={15}
						// timeCaption='time'
						dateFormat='MMMM d, yyyy h:mm aa'
					/>
				</div>
				<div className='col-span-2'>
          {/* {startDate && startDate.map(st=><p>{st.getTime()}</p>)
          
          } */}
          {d}


				
				</div>
			</div>
		</div>
	);
};

export default Appointment;
