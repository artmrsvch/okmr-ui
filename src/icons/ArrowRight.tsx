import * as React from 'react';

function SvgArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={19} height={17} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.82 1.163a1.094 1.094 0 000 1.549L15.61 8.5l-5.79 5.788a1.095 1.095 0 101.548 1.549l6.563-6.563a1.092 1.092 0 000-1.548l-6.563-6.563a1.094 1.094 0 00-1.549 0z"
        fill="#A8CCFF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.156 8.5a1.094 1.094 0 00-1.093-1.094H1.842a1.094 1.094 0 100 2.188h14.22A1.094 1.094 0 0017.155 8.5z"
        fill="#A8CCFF"
      />
    </svg>
  );
}

export default SvgArrowRight;
