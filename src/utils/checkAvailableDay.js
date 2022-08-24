const weekdays = {
	sun: 0,
	mon: 1,
	tue: 2,
	wed: 3,
	thu: 4,
	fri: 5,
	sat: 6,
};

export const checkAvailableDay = ({doctor}) => {
  console.log(doctor);
  const availableDays = [];

  for (const key in weekdays) {
    const dayNumber = weekdays[key];

    for (const available in doctor.availibility) {
      if (available === key) {
        availableDays.push(dayNumber);
        // console.log('match');
      } else if (available !== key) {
        // console.log('unmatch');
      }
    }
  }
  console.log(availableDays);
  return availableDays;
};