import React from 'react';
import { FOOTER_HEIGHT } from '../../config/constants';

const Footer = () => {
  return (
    <div className='bg-gray-500' style={{height:`${FOOTER_HEIGHT}px`}}>
      <p>&copy; 2022 | All right serverd by Square Ltd.</p>
    </div>
  );
};

export default Footer;