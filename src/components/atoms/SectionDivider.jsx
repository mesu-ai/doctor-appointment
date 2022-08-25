import React from 'react';

const SectionDivider = ({ children, className='sm:grid-cols-2' }) => {
	return <div className={`grid grid-cols-1  gap-4 ${className}`}>{children}</div>;
};

export default SectionDivider;
