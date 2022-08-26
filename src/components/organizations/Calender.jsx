import moment from 'moment';
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './calender.css';

const weekdays = {
	sun: 0,
	mon: 1,
	tue: 2,
	wed: 3,
	thu: 4,
	fri: 5,
	sat: 6,
};

const Calender = ({doctor,startDate, setStartDate}) => {
 
  const checkAvailableDay = () => {
		const availableDays = [];

		for (const key in weekdays) {
			const dayNumber = weekdays[key];

			for (const available in doctor.availibility) {
				if (available === key) {
				
					availableDays.push(dayNumber);
					
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
  

  return (
    <div>
      <DatePicker
						className='w-full'
						wrapperClassName='w-full py-2 '
						// open
						todayButton="Today"
						filterDate={isWeekday}
						selected={startDate}
						onChange={(date) => {
							setStartDate(date);
              console.log(date);
						}}
						minDate={moment().toDate()}
						dateFormat='MMMM d, yyyy h:mm aa'
					/>
      
    </div>
  );
};

export default Calender;