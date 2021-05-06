import React from 'react';

const ArrowSvg = (stroke?: any) => (
  <svg width="22" height="8" viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21 7L11 1L1 7"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowSvg;
