import moment from 'moment';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import { checkAvailableDay } from '../../utils/checkAvailableDay';

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
  // const [startDate, setStartDate] = useState(new Date());
  // console.log(doctor);

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
  

  return (
    <div>
      <DatePicker
						className='w-full'
						wrapperClassName='w-full py-2 '
						open
						// todayButton="Today"
						filterDate={isWeekday}
						selected={startDate}
						onChange={(date) => {
							setStartDate(date);
              console.log(date);
						}}
						minDate={moment().toDate()}
						// showTimeSelect
						// timeFormat='HH:mm'
						// timeIntervals={15}
						// timeCaption='time'
						dateFormat='MMMM d, yyyy h:mm aa'
					/>
      
    </div>
  );
};

export default Calender;