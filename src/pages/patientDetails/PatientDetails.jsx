import React from 'react';
import Card from '../../components/atoms/Card';

const PatientDetails = () => {
  return (
    <div className='grid grid-cols-2'>
      <div>form</div>
      <div>
        <p className='font-medium lg:text-2xl text-lg mb-5'>Shedule For</p>
        <Card className='py-7 px-5 text-center'>
          <p className='font-medium lg:text-2xl text-lg mb-5 bg-cyan-100'>
            Day name
          </p>
          <div className='h-32'>
            <p className='flex justify-center items-center font-bold'>day ,month, year</p>
          </div>
        </Card>
      </div>
      <div>
        <p className='font-medium lg:text-2xl text-lg mb-5'>Appointment to</p>
        <Card className='py-7 px-5'>
          <div className='flex items-center space-x-3'>
            <img src="" alt="" />
            <div>
              <p className='text-darkblue font-bold text-lg'>name</p>
              <p className='text-darkblack font-semibold'>organization</p>
            </div>
          </div>
          
            <p className='flex justify-center items-center font-bold'>day ,month, year</p>
          
        </Card>
      </div>
    </div>
  );
};

export default PatientDetails;
