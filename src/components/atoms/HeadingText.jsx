import React from 'react';

const HeadingText = ({title='',className=''}) => {
  return (
    <p className={`text-start font-medium lg:text-2xl text-lg capitalize ${className}`}>{title}</p>
  );
};

export default HeadingText;