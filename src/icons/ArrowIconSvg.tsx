import React from 'react';

const ArrowIconSvg = (stroke?: any) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15 1L19 5L15 9"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1 11V9C1 7.93913 1.42143 6.92172 2.17157 6.17157C2.92172 5.42143 3.93913 5 5 5H19"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1 11V14.9365C1 16.0142 1.42143 17.0478 2.17157 17.8098C2.92172 18.5719 3.93913 19 5 19H19"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowIconSvg;
