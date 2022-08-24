import React from 'react';
import { FOOTER_HEIGHT } from '../../config/constants';

const Footer = () => {
  return (
    <div className='bg-gray-500 flex justify-center items-center' style={{height:`${FOOTER_HEIGHT}px`}}>
      <p className='text-white '>&copy; 2022 | All right serverd by Square Ltd.</p>
    </div>
  );
};

export default Footer;