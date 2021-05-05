import * as React from 'react';

function SvgArrowLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={26}
      height={26}
      viewBox="0 0 19 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M9.18 1.163a1.094 1.094 0 010 1.549L3.39 8.5l5.79 5.788a1.095 1.095 0 11-1.548 1.549L1.069 9.274a1.094 1.094 0 010-1.548l6.563-6.563a1.094 1.094 0 011.549 0z"
        fill="#A8CCFF"
      />
      <path
        d="M1.844 8.5a1.094 1.094 0 011.093-1.094h14.22a1.094 1.094 0 110 2.188H2.936A1.094 1.094 0 011.845 8.5z"
        fill="#A8CCFF"
      />
    </svg>
  );
}

export default SvgArrowLeft;
