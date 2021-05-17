import React from 'react';

const AvatarIconSvg = (stroke?: any) => (
  <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="9" stroke={stroke} strokeWidth="2" />
    <path
      d="M4 17C4 17 5 14 10 14C15 14 16 17 16 17"
      stroke={stroke}
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M10 11C11.6569 11 13 9.65685 13 8C13 6.34315 11.6569 5 10 5C8.34315 5 7 6.34315 7 8C7 9.65685 8.34315 11 10 11Z"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default AvatarIconSvg;
