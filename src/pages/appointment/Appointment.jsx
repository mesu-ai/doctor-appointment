import React from 'react';
import { useLocation } from 'react-router-dom';

const Appointment = () => {
  const {doctor}=useLocation()?.state;
  console.log(doctor);
  return (
    <div>
      <p>Appointment page</p>
      
    </div>
  );
};

export default Appointment;