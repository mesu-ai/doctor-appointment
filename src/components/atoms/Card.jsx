import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div className={`rounded-[16px] border-[1px] border-[#E6E8EC] hover:shadow-lg bg-white ${className}`}>
			{children}
		</div>
  );
};

export default Card;