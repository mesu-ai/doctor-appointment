import moment from 'moment';
import React from 'react';
import { useLocation } from 'react-router-dom';

const Calender = () => {
  const { doctor } = useLocation()?.state;

  const dd= `${doctor.availibility?.sun}`;
  console.log(dd.split('-'));
  const time= moment(`${dd.split('-')[0]}`, "h:mm:ss A").format("HH:mm:ss");
  console.log(time);
//   function getTwentyFourHourTime(AMPMString) { 
//     var d = new Date("1/1/2013 " + AMPMString); 
//     return d.getHours() + ':' + d.getMinutes(); 
// }
//  const time= getTwentyFourHourTime(`10:00 PM`);
//  console.log(time);

  let value = {
    interval: '00:15:00',
    startTime: time,
    endTime: '20:00:00'
  };
  
  function showTimeIntervals(value) {
    let result = value.interval; 
    let start = "";
    let timeNotation = '';
    let time = '';
    for(let i in result) {
      let hr = moment(result, 'HH:mm').format('HH');
      let min = moment(result, 'HH:mm').format('mm');
      hr = (hr !== 0) ? parseInt(hr, 10) : '';
      min = (min !== 0) ? parseInt(min, 10) : '';
      if(hr !== 0) {
        time = hr;
        timeNotation = 'hour';
        start = moment(value.startTime, 'hh:mm a').subtract(hr, 'hour');
      } else {
        time = min;
        timeNotation = 'minutes';
        start = moment(value.startTime, 'hh:mm a').subtract(min, 'minutes');
      }
    }
    var end = moment(value.endTime, 'hh:mm a');
    if(end.isBefore(start))
      end = end.add(1, 'd');
    var finalResult = [];
    var current = moment(start);
    while (current <= end) {
     let currentInterval=current.format('hh:mm a') + ' - '; //This will add the start of interval
      current.add(time, timeNotation);
      currentInterval+=current.format('hh:mm a'); //This will add end of interval
      finalResult.push(currentInterval); //Add the complete interval to your result
    }
    return finalResult;
  }
  
  console.log(showTimeIntervals(value))
  return (
    <div>
      <p>Calender</p>
      
    </div>
  );
};

export default Calender;