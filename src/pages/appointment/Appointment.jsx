import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

const weekdays = {
  sun: 0,
  mon: 1,
  tue: 2,
  wed: 3,
  thu: 4,
  fri: 5,
  sat: 6,
};
const wkday=[0,3];

const Appointment = () => {
  const [available, setAvailable] = useState([]);
  // const [startDate, setStartDate] = useState(new Date());
  const [startDate, setStartDate] = useState(null);
  const { doctor } = useLocation()?.state;

  // function disabledDate(current) {
  // 	// Can not select sundays and predfined days
  // 	return moment(current).day() === 0;
  // }
  console.log(doctor.availibility);

  const checkAvailableDay = () => {
    const availableDays = [];

    for (const key in weekdays) {
      const dayNumber = weekdays[key];

      for (const available in doctor.availibility) {
        if (available == key) {
          // setAvailable(...available,dayNumber);
          availableDays.push(dayNumber);
          // console.log('match');
        } else if (available != key) {
          // console.log('unmatch');
        }
      }
    }
    return availableDays;
  };

  // console.log(availableDays);

  // var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // console.log(dayName);

  // const d = new Date('Friday');
  // console.log(d.getDay(d));
  // const date = new Date();

  const isWeekday = (current) => {
    const result = checkAvailableDay();
    // const day = date.getDay(date);

    // if(result.length >0){
    // 	for (const iterator of result) {
    // 		console.log(iterator);
    // 		return day===iterator;

    // 	}
    // }
		const dd= wkday.map(date => date === moment(current).day()).join().split('||');
		console.log(dd);

		return moment(current).day() === result[0] || moment(current).day() === result[1] || moment(current).day() === result[2];
		
    // return wkday.find(date => date === current.getDay(current));
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
            onChange={(date) => {
              setStartDate(date);
            }}
						minDate={moment().toDate()}
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
